import {
  type Course,
  type InsertCourse,
  type Location,
  type InsertLocation,
  type Review,
  type InsertReview,
  type Inquiry,
  type InsertInquiry,
  courses,
  locations,
  reviews,
  inquiries,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  getLocations(): Promise<Location[]>;
  getReviews(): Promise<Review[]>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  // Seeding methods
  createCourse(course: InsertCourse): Promise<Course>;
  createLocation(location: InsertLocation): Promise<Location>;
  createReview(review: InsertReview): Promise<Review>;
}

export class DatabaseStorage implements IStorage {
  async getCourses(): Promise<Course[]> {
    return await db.select().from(courses);
  }

  async getCourse(id: number): Promise<Course | undefined> {
    const [course] = await db.select().from(courses).where(eq(courses.id, id));
    return course;
  }

  async getLocations(): Promise<Location[]> {
    return await db.select().from(locations);
  }

  async getReviews(): Promise<Review[]> {
    return await db.select().from(reviews);
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db
      .insert(inquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const [course] = await db
      .insert(courses)
      .values(insertCourse)
      .returning();
    return course;
  }

  async createLocation(insertLocation: InsertLocation): Promise<Location> {
    const [location] = await db
      .insert(locations)
      .values(insertLocation)
      .returning();
    return location;
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const [review] = await db
      .insert(reviews)
      .values(insertReview)
      .returning();
    return review;
  }
}

export const storage = new DatabaseStorage();
