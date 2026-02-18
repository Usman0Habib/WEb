import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { setupAuth } from "./auth";
import passport from "passport";
import bcrypt from "bcrypt";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  await setupAuth(app);

  app.post("/api/auth/register", async (req, res) => {
    try {
      const { email, password, firstName, lastName } = req.body;
      if (!email || !password || !firstName || !lastName) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const existing = await storage.getUserByEmail(email);
      if (existing) {
        return res.status(400).json({ message: "An account with this email already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await storage.createUser({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        googleId: null,
        profilePicture: null,
      });
      req.login(
        {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          profilePicture: user.profilePicture,
          googleId: user.googleId,
        },
        (err) => {
          if (err) {
            return res.status(500).json({ message: "Login failed after registration" });
          }
          return res.status(201).json({
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            profilePicture: user.profilePicture,
          });
        }
      );
    } catch (err) {
      console.error("Registration error:", err);
      return res.status(500).json({ message: "Registration failed" });
    }
  });

  app.post("/api/auth/login", (req, res, next) => {
    passport.authenticate("local", (err: any, user: any, info: any) => {
      if (err) {
        return res.status(500).json({ message: "Login failed" });
      }
      if (!user) {
        return res.status(401).json({ message: info?.message || "Incorrect email or password" });
      }
      req.login(user, (err) => {
        if (err) {
          return res.status(500).json({ message: "Login failed" });
        }
        return res.json({
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          profilePicture: user.profilePicture,
        });
      });
    })(req, res, next);
  });

  app.post("/api/auth/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      res.json({ message: "Logged out successfully" });
    });
  });

  app.get("/api/auth/user", (req, res) => {
    if (req.isAuthenticated()) {
      return res.json(req.user);
    }
    return res.status(401).json({ message: "Not authenticated" });
  });

  app.get("/api/auth/google", (req, res, next) => {
    if (!process.env.GOOGLE_CLIENT_ID) {
      return res.status(503).json({ message: "Google auth not configured" });
    }
    passport.authenticate("google", { scope: ["profile", "email"] })(req, res, next);
  });

  app.get("/api/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/auth?error=google_failed" }),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/api/auth/google/status", (_req, res) => {
    res.json({ enabled: !!(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) });
  });

  app.get(api.courses.list.path, async (req, res) => {
    const courses = await storage.getCourses();
    res.json(courses);
  });

  app.get(api.courses.get.path, async (req, res) => {
    const course = await storage.getCourse(Number(req.params.id));
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  });

  app.get(api.locations.list.path, async (req, res) => {
    const locations = await storage.getLocations();
    res.json(locations);
  });

  app.get(api.reviews.list.path, async (req, res) => {
    const reviews = await storage.getReviews();
    res.json(reviews);
  });

  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      }
      throw err;
    }
  });

  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingCourses = await storage.getCourses();
  if (existingCourses.length === 0) {
    const schoolFees = [
      { title: "NURSERY", oldFee: 300, newFee: 300 },
      { title: "LKG", oldFee: 300, newFee: 300 },
      { title: "UKG", oldFee: 300, newFee: 300 },
      { title: "1st to 3rd", oldFee: 300, newFee: 300 },
      { title: "4th", oldFee: 400, newFee: 400 },
      { title: "5th", oldFee: 500, newFee: 500 },
      { title: "6th (MATHS & SCIENCE + S.ST + ENGLISH)", oldFee: 600, newFee: 700 },
      { title: "7th (MATHS & SCIENCE + S.ST + ENGLISH)", oldFee: 700, newFee: 800 },
      { title: "8th (MATHS & SCIENCE + S.ST + ENGLISH)", oldFee: 800, newFee: 900 },
      { title: "9th (MATHS & SCIENCE + S.ST + ENGLISH)", oldFee: 900, newFee: 1000 },
      { title: "10th (MATHS & SCIENCE + S.ST + ENGLISH)", oldFee: 1000, newFee: 1100 },
      { title: "9th (ONLY MATHS; SCIENCE; S.ST; ENGLISH)", oldFee: 300, newFee: 300 },
      { title: "10th (ONLY MATHS; SCIENCE; S.ST; ENGLISH)", oldFee: 300, newFee: 300 },
    ];

    for (const fee of schoolFees) {
      await storage.createCourse({
        title: `Class ${fee.title}`,
        description: `Academic session for Class ${fee.title}`,
        category: "School",
        duration: "1 Year",
        fee: fee.newFee,
        feeStructure: {
          admissionFee: 0,
          tuitionFee: fee.newFee,
          studyMaterial: 0,
          testSeries: 0,
          total: fee.newFee
        },
        features: ["Regular Classes", "Comprehensive Support"],
      });
    }

    await storage.createCourse({
      title: "NEET Comprehensive (2 Year)",
      description: "Complete preparation for NEET UG for Class 11 students.",
      category: "NEET",
      duration: "2 Years",
      fee: 150000,
      feeStructure: {
        admissionFee: 20000,
        tuitionFee: 100000,
        studyMaterial: 15000,
        testSeries: 15000,
        total: 150000
      },
      features: ["Daily Classes", "Weekly Tests", "Doubt Sessions", "Study Material"],
    });
    await storage.createCourse({
      title: "IIT JEE Mains + Advanced",
      description: "Rigorous training for JEE aspirants aiming for top IITs.",
      category: "IIT JEE",
      duration: "2 Years",
      fee: 180000,
      feeStructure: {
        admissionFee: 25000,
        tuitionFee: 120000,
        studyMaterial: 15000,
        testSeries: 20000,
        total: 180000
      },
      features: ["Expert Faculty", "All India Test Series", "One-to-One Mentoring"],
    });
    await storage.createCourse({
      title: "Foundation Course (Class 10)",
      description: "Build strong fundamentals for future competitive exams.",
      category: "Foundation",
      duration: "1 Year",
      fee: 60000,
      feeStructure: {
        admissionFee: 10000,
        tuitionFee: 40000,
        studyMaterial: 5000,
        testSeries: 5000,
        total: 60000
      },
      features: ["School Syllabus Covered", "Olympiad Prep", "Regular PTMs"],
    });
    await storage.createCourse({
      title: "CUET Crash Course",
      description: "Fast-track preparation for Common University Entrance Test.",
      category: "CUET",
      duration: "3 Months",
      fee: 25000,
      feeStructure: {
        admissionFee: 5000,
        tuitionFee: 15000,
        studyMaterial: 2500,
        testSeries: 2500,
        total: 25000
      },
      features: ["Mock Tests", "Domain Subject Focus", "General Test Prep"],
    });
  }

  const existingLocations = await storage.getLocations();
  if (existingLocations.length === 0) {
    await storage.createLocation({
      name: "Connaught Place Centre",
      address: "2nd Floor, Outer Circle, Connaught Place, New Delhi",
      latitude: "28.6315",
      longitude: "77.2167",
    });
    await storage.createLocation({
      name: "South Extension Centre",
      address: "E-15, South Extension Part 2, New Delhi",
      latitude: "28.5680",
      longitude: "77.2190",
    });
    await storage.createLocation({
      name: "Janakpuri Centre",
      address: "District Centre, Janakpuri, New Delhi",
      latitude: "28.6219",
      longitude: "77.0878",
    });
    await storage.createLocation({
      name: "Laxmi Nagar Centre",
      address: "Vikas Marg, Laxmi Nagar, New Delhi",
      latitude: "28.6304",
      longitude: "77.2773",
    });
    await storage.createLocation({
      name: "Dwarka Centre",
      address: "Sector 12, Dwarka, New Delhi",
      latitude: "28.5921",
      longitude: "77.0460",
    });
  }

  const existingReviews = await storage.getReviews();
  if (existingReviews.length === 0) {
    await storage.createReview({
      name: "Rahul Sharma",
      rating: 5,
      comment: "Career Goal Academy helped me crack NEET with a great rank! The faculty is amazing.",
      role: "Medical Student, AIIMS",
    });
    await storage.createReview({
      name: "Priya Singh",
      rating: 5,
      comment: "The study material for JEE is top-notch. Highly recommended for serious aspirants.",
      role: "Engineering Student, IIT Delhi",
    });
    await storage.createReview({
      name: "Amit Verma",
      rating: 4,
      comment: "Great environment for learning. The doubt sessions were very helpful.",
      role: "Student",
    });
  }
}
