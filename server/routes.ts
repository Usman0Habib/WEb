import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
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
    await storage.createCourse({
      title: "NEET Comprehensive (2 Year)",
      description: "Complete preparation for NEET UG for Class 11 students.",
      category: "NEET",
      duration: "2 Years",
      fee: 150000,
      features: ["Daily Classes", "Weekly Tests", "Doubt Sessions", "Study Material"],
    });
    await storage.createCourse({
      title: "IIT JEE Mains + Advanced",
      description: "Rigorous training for JEE aspirants aiming for top IITs.",
      category: "IIT JEE",
      duration: "2 Years",
      fee: 180000,
      features: ["Expert Faculty", "All India Test Series", "One-to-One Mentoring"],
    });
    await storage.createCourse({
      title: "Foundation Course (Class 10)",
      description: "Build strong fundamentals for future competitive exams.",
      category: "Foundation",
      duration: "1 Year",
      fee: 60000,
      features: ["School Syllabus Covered", "Olympiad Prep", "Regular PTMs"],
    });
    await storage.createCourse({
      title: "CUET Crash Course",
      description: "Fast-track preparation for Common University Entrance Test.",
      category: "CUET",
      duration: "3 Months",
      fee: 25000,
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
