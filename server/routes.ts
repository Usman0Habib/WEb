import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { setupAuth } from "./auth";
import passport from "passport";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path";
import fs from "fs";

const upload = multer({
  storage: multer.diskStorage({
    destination: "client/public/uploads",
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    },
  }),
});

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
      res.redirect("/dashboard");
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

  // --- Notification Routes ---

  // GET /api/notifications - Get notifications for logged-in user
  app.get("/api/notifications", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const userNotifs = await storage.getUserNotifications((req.user as any).id);
    res.json(userNotifs);
  });

  // GET /api/notifications/unread-count - Get unread count
  app.get("/api/notifications/unread-count", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const count = await storage.getUnreadNotificationCount((req.user as any).id);
    res.json({ count });
  });

  // PATCH /api/notifications/:id/read - Mark one as read
  app.patch("/api/notifications/:id/read", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    await storage.markNotificationRead((req.user as any).id, Number(req.params.id));
    res.json({ success: true });
  });

  // PATCH /api/notifications/read-all - Mark all as read
  app.patch("/api/notifications/read-all", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    await storage.markAllNotificationsRead((req.user as any).id);
    res.json({ success: true });
  });

  // POST /api/notifications - Admin send notification
  app.post("/api/notifications", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const user = await storage.getUserById((req.user as any).id);
    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Admin access required" });
    }
    const { title, message } = req.body;
    const notifSchema = z.object({ title: z.string().min(1), message: z.string().min(1) });
    const parsed = notifSchema.safeParse({ title, message });
    if (!parsed.success) {
      return res.status(400).json({ message: parsed.error.errors[0].message });
    }
    const notification = await storage.createNotification({
      title: parsed.data.title,
      message: parsed.data.message,
      sentBy: user.id,
    });

    // Send push notifications to all subscribers
    try {
      const webpush = require("web-push");
      const vapidPublic = process.env.VAPID_PUBLIC_KEY;
      const vapidPrivate = process.env.VAPID_PRIVATE_KEY;
      if (vapidPublic && vapidPrivate) {
        webpush.setVapidDetails("mailto:admin@careergoalacademy.com", vapidPublic, vapidPrivate);
        const subs = await storage.getAllPushSubscriptions();
        const payload = JSON.stringify({ title, body: message });
        for (const sub of subs) {
          try {
            await webpush.sendNotification(
              { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
              payload
            );
          } catch (err: any) {
            if (err.statusCode === 410 || err.statusCode === 404) {
              await storage.removePushSubscription(sub.userId, sub.endpoint);
            }
          }
        }
      }
    } catch (err) {
      console.error("Push notification error:", err);
    }

    res.status(201).json(notification);
  });

  // GET /api/admin/notifications - Admin: get all sent notifications
  app.get("/api/admin/notifications", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const user = await storage.getUserById((req.user as any).id);
    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Admin access required" });
    }
    const notifs = await storage.getNotifications();
    res.json(notifs);
  });

  // GET /api/push/vapid-key - Get public VAPID key
  app.get("/api/push/vapid-key", (_req, res) => {
    res.json({ publicKey: process.env.VAPID_PUBLIC_KEY || "" });
  });

  // POST /api/push/subscribe - Save push subscription
  app.post("/api/push/subscribe", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const subSchema = z.object({
      endpoint: z.string().url(),
      keys: z.object({ p256dh: z.string().min(1), auth: z.string().min(1) }),
    });
    const parsed = subSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid subscription" });
    }
    const { endpoint, keys } = parsed.data;
    await storage.savePushSubscription({
      userId: (req.user as any).id,
      endpoint,
      p256dh: keys.p256dh,
      auth: keys.auth,
    });
    res.json({ success: true });
  });

  // POST /api/push/unsubscribe - Remove push subscription
  app.post("/api/push/unsubscribe", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const { endpoint } = req.body;
    if (endpoint) {
      await storage.removePushSubscription((req.user as any).id, endpoint);
    }
    res.json({ success: true });
  });

  // --- Content Routes ---
  app.get("/api/content", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const content = await storage.getAllContent();
    res.json(content);
  });

  app.post("/api/content", upload.single("file"), async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const user = await storage.getUserById((req.user as any).id);
    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Admin access required" });
    }
    
    const { title, description, fileType } = req.body;
    const fileUrl = req.file ? `/uploads/${req.file.filename}` : req.body.fileUrl;

    if (!fileUrl) {
      return res.status(400).json({ message: "File or URL is required" });
    }

    const content = await storage.createContent({
      title,
      description,
      fileUrl,
      fileType: fileType || (req.file ? path.extname(req.file.originalname).substring(1) : "link"),
      uploadedBy: user.id,
    });
    res.status(201).json(content);
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
