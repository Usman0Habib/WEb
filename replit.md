# replit.md

## Overview

Career Goal Academy is a full-stack web application for an educational coaching institute in India. It serves as a marketing and information website where prospective students can browse courses (NEET, JEE, Foundation, CUET), view fee structures, find physical locations on a map, read student reviews, and submit inquiry forms. The application is built with a React frontend and Express backend, backed by a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) with pages for Home, About, Courses, Fees, Contact, and a 404 page
- **State Management / Data Fetching**: TanStack React Query for server state, with custom hooks in `client/src/hooks/use-coaching-data.ts` that wrap all API calls
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives, styled with Tailwind CSS and CSS variables for theming
- **Animations**: Framer Motion for page transitions and scroll animations
- **Carousel**: Embla Carousel (via shadcn carousel component) for testimonials/features
- **Maps**: Google Map React for displaying coaching center locations
- **Forms**: React Hook Form with Zod validation via `@hookform/resolvers`
- **Fonts**: Outfit (display) and Plus Jakarta Sans (body), loaded via Google Fonts and set as CSS custom properties (`--font-display`, `--font-body`)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Framework**: Express.js running on Node.js with TypeScript (compiled via tsx in dev, esbuild for production)
- **API Design**: RESTful JSON API under `/api/` prefix. Routes are defined centrally in `shared/routes.ts` with Zod schemas for validation. The server registers handlers in `server/routes.ts`
- **API Endpoints**:
  - `GET /api/courses` — list all courses
  - `GET /api/courses/:id` — get a single course
  - `GET /api/locations` — list all locations
  - `GET /api/reviews` — list all reviews
  - `POST /api/inquiries` — create a new inquiry (contact form submission)
- **Development**: Vite dev server runs as middleware on the Express server with HMR
- **Production**: Client is built to `dist/public`, server is bundled to `dist/index.cjs` via esbuild. Static files are served by Express with SPA fallback to `index.html`

### Data Layer
- **Database**: PostgreSQL, connected via `pg` Pool using `DATABASE_URL` environment variable
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` with four tables:
  - `courses` — id, title, description, category, duration, fee, feeStructure (JSONB), features (JSONB array)
  - `locations` — id, name, address, latitude, longitude
  - `reviews` — id, name, rating, comment, role
  - `inquiries` — id, name, email, phone, message
- **Validation**: Drizzle-Zod generates insert schemas from table definitions, shared between client and server
- **Migrations**: Managed via `drizzle-kit push` (push-based, no migration files needed for development)
- **Seeding**: The server seeds the database on startup (called in `server/routes.ts` via `seedDatabase()`)

### Shared Code
The `shared/` directory contains code used by both frontend and backend:
- `shared/schema.ts` — Drizzle table definitions and Zod insert schemas
- `shared/routes.ts` — API route definitions with paths, methods, input/output Zod schemas

### Build System
- **Dev**: `tsx server/index.ts` runs the server with Vite middleware for HMR
- **Build**: Custom build script (`script/build.ts`) that runs Vite build for client and esbuild for server. Server dependencies are selectively bundled vs externalized for faster cold starts
- **Type checking**: `tsc --noEmit` via the `check` script

## External Dependencies

### Required Services
- **PostgreSQL**: Required. Connection string must be provided via `DATABASE_URL` environment variable. Used for all data persistence (courses, locations, reviews, inquiries)

### Key NPM Packages
- **drizzle-orm** + **drizzle-kit**: ORM and migration tooling for PostgreSQL
- **express**: HTTP server framework
- **@tanstack/react-query**: Client-side data fetching and caching
- **framer-motion**: Animation library for React
- **google-map-react**: Google Maps integration for location display (requires Google Maps API key at runtime)
- **react-hook-form** + **@hookform/resolvers**: Form handling with Zod schema validation
- **wouter**: Lightweight client-side routing
- **zod**: Schema validation used across client and server
- **embla-carousel-react**: Carousel functionality
- **connect-pg-simple**: PostgreSQL session store (available but may not be actively used yet)

### Third-Party APIs
- **Google Maps**: Used on the Home page to display coaching center locations. Requires a Google Maps JavaScript API key
- **Google Fonts**: Outfit, Plus Jakarta Sans, DM Sans, Fira Code, Geist Mono loaded via CDN