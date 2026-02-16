import { z } from "zod";
import { insertCourseSchema, insertLocationSchema, insertReviewSchema, insertInquirySchema, courses, locations, reviews, inquiries } from "./schema";

export const api = {
  courses: {
    list: {
      method: "GET" as const,
      path: "/api/courses" as const,
      responses: {
        200: z.array(z.custom<typeof courses.$inferSelect>()),
      },
    },
    get: {
      method: "GET" as const,
      path: "/api/courses/:id" as const,
      responses: {
        200: z.custom<typeof courses.$inferSelect>(),
        404: z.object({ message: z.string() }),
      },
    },
  },
  locations: {
    list: {
      method: "GET" as const,
      path: "/api/locations" as const,
      responses: {
        200: z.array(z.custom<typeof locations.$inferSelect>()),
      },
    },
  },
  reviews: {
    list: {
      method: "GET" as const,
      path: "/api/reviews" as const,
      responses: {
        200: z.array(z.custom<typeof reviews.$inferSelect>()),
      },
    },
  },
  inquiries: {
    create: {
      method: "POST" as const,
      path: "/api/inquiries" as const,
      input: insertInquirySchema,
      responses: {
        201: z.custom<typeof inquiries.$inferSelect>(),
        400: z.object({ message: z.string() }),
      },
    },
  },
};
