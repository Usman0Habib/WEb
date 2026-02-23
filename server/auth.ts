import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import bcrypt from "bcrypt";
import session from "express-session";
import { storage } from "./storage";
import type { Express } from "express";
import type { User } from "@shared/schema";
import connectPg from "connect-pg-simple";
import { pool } from "./db";

declare global {
  namespace Express {
    interface User {
      id: number;
      email: string;
      firstName: string;
      lastName: string;
      role: string;
      profilePicture: string | null;
      googleId: string | null;
    }
  }
}

export async function setupAuth(app: Express) {
  const PgStore = connectPg(session);

  if (!process.env.SESSION_SECRET) {
    const crypto = await import("crypto");
    process.env.SESSION_SECRET = crypto.randomBytes(32).toString("hex");
    console.warn("WARNING: SESSION_SECRET not set, using random secret. Sessions will not persist across restarts.");
  }

  app.use(
    session({
      store: new PgStore({
        pool: pool,
        createTableIfMissing: true,
      }),
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const user = await storage.getUserByEmail(email);
          if (!user || !user.password) {
            return done(null, false, { message: "Incorrect email or password" });
          }
          const isValid = await bcrypt.compare(password, user.password);
          if (!isValid) {
            return done(null, false, { message: "Incorrect email or password" });
          }
          return done(null, {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            profilePicture: user.profilePicture,
            googleId: user.googleId,
          });
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    const callbackURL = process.env.REPLIT_DEV_DOMAIN
      ? `https://${process.env.REPLIT_DEV_DOMAIN}/api/auth/google/callback`
      : process.env.REPL_SLUG
        ? `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co/api/auth/google/callback`
        : "http://localhost:5000/api/auth/google/callback";

    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL,
        },
        async (_accessToken, _refreshToken, profile, done) => {
          try {
            let user = await storage.getUserByGoogleId(profile.id);
            if (!user) {
              const email = profile.emails?.[0]?.value;
              if (!email) {
                return done(new Error("Google account does not have an email address"));
              }
              const existing = await storage.getUserByEmail(email);
              if (existing) {
                return done(null, {
                  id: existing.id,
                  email: existing.email,
                  firstName: existing.firstName,
                  lastName: existing.lastName,
                  role: existing.role,
                  profilePicture: existing.profilePicture,
                  googleId: existing.googleId,
                });
              }
              user = await storage.createUser({
                email,
                password: null,
                firstName: profile.name?.givenName || "User",
                lastName: profile.name?.familyName || "",
                googleId: profile.id,
                profilePicture: profile.photos?.[0]?.value || null,
              });
            }
            return done(null, {
              id: user.id,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
              role: user.role,
              profilePicture: user.profilePicture,
              googleId: user.googleId,
            });
          } catch (err) {
            return done(err as Error);
          }
        }
      )
    );
  }

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await storage.getUserById(id);
      if (!user) {
        return done(null, false);
      }
      done(null, {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        profilePicture: user.profilePicture,
        googleId: user.googleId,
      });
    } catch (err) {
      done(err);
    }
  });
}
