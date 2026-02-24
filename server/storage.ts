import {
  type Course,
  type InsertCourse,
  type Location,
  type InsertLocation,
  type Review,
  type InsertReview,
  type Inquiry,
  type InsertInquiry,
  type User,
  type InsertUser,
  type Notification,
  type InsertNotification,
  type InsertPushSubscription,
  courses,
  locations,
  reviews,
  inquiries,
  users,
  notifications,
  userNotifications,
  pushSubscriptions,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";

export interface IStorage {
  getCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  getLocations(): Promise<Location[]>;
  getReviews(): Promise<Review[]>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  createUser(user: InsertUser): Promise<User>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserByGoogleId(googleId: string): Promise<User | undefined>;
  getUserById(id: number): Promise<User | undefined>;
  getAllUsers(): Promise<User[]>;
  createCourse(course: InsertCourse): Promise<Course>;
  createLocation(location: InsertLocation): Promise<Location>;
  createReview(review: InsertReview): Promise<Review>;
  createNotification(notification: InsertNotification): Promise<Notification>;
  getNotifications(): Promise<Notification[]>;
  getUserNotifications(userId: number): Promise<any[]>;
  markNotificationRead(userId: number, notificationId: number): Promise<void>;
  markAllNotificationsRead(userId: number): Promise<void>;
  getUnreadNotificationCount(userId: number): Promise<number>;
  savePushSubscription(sub: InsertPushSubscription): Promise<void>;
  removePushSubscription(userId: number, endpoint: string): Promise<void>;
  getAllPushSubscriptions(): Promise<any[]>;
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

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async getUserByGoogleId(googleId: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.googleId, googleId));
    return user;
  }

  async getUserById(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return await db.select().from(users);
  }

  async createNotification(insertNotification: InsertNotification): Promise<Notification> {
    const [notification] = await db
      .insert(notifications)
      .values(insertNotification)
      .returning();

    const allUsers = await this.getAllUsers();
    for (const user of allUsers) {
      await db.insert(userNotifications).values({
        userId: user.id,
        notificationId: notification.id,
        read: false,
      });
    }

    return notification;
  }

  async getNotifications(): Promise<Notification[]> {
    return await db.select().from(notifications).orderBy(desc(notifications.createdAt));
  }

  async getUserNotifications(userId: number): Promise<any[]> {
    const results = await db
      .select({
        id: notifications.id,
        title: notifications.title,
        message: notifications.message,
        createdAt: notifications.createdAt,
        read: userNotifications.read,
        readAt: userNotifications.readAt,
      })
      .from(userNotifications)
      .innerJoin(notifications, eq(userNotifications.notificationId, notifications.id))
      .where(eq(userNotifications.userId, userId))
      .orderBy(desc(notifications.createdAt));
    return results;
  }

  async markNotificationRead(userId: number, notificationId: number): Promise<void> {
    await db
      .update(userNotifications)
      .set({ read: true, readAt: new Date() })
      .where(
        and(
          eq(userNotifications.userId, userId),
          eq(userNotifications.notificationId, notificationId)
        )
      );
  }

  async markAllNotificationsRead(userId: number): Promise<void> {
    await db
      .update(userNotifications)
      .set({ read: true, readAt: new Date() })
      .where(eq(userNotifications.userId, userId));
  }

  async getUnreadNotificationCount(userId: number): Promise<number> {
    const results = await db
      .select()
      .from(userNotifications)
      .where(
        and(
          eq(userNotifications.userId, userId),
          eq(userNotifications.read, false)
        )
      );
    return results.length;
  }

  async savePushSubscription(sub: InsertPushSubscription): Promise<void> {
    const existing = await db
      .select()
      .from(pushSubscriptions)
      .where(
        and(
          eq(pushSubscriptions.userId, sub.userId),
          eq(pushSubscriptions.endpoint, sub.endpoint)
        )
      );
    if (existing.length === 0) {
      await db.insert(pushSubscriptions).values(sub);
    }
  }

  async removePushSubscription(userId: number, endpoint: string): Promise<void> {
    await db
      .delete(pushSubscriptions)
      .where(
        and(
          eq(pushSubscriptions.userId, userId),
          eq(pushSubscriptions.endpoint, endpoint)
        )
      );
  }

  async getAllPushSubscriptions(): Promise<any[]> {
    return await db.select().from(pushSubscriptions);
  }
}

export const storage = new DatabaseStorage();
