<div align="center">

# Random API

**A free REST API serving realistic random user profiles and product data — no API key, no rate limiting, no nonsense.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Prisma](https://img.shields.io/badge/Prisma-7.8-2D3748?logo=prisma)](https://www.prisma.io)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![License](https://img.shields.io/badge/License-MIT-green)](#license)

[Live Demo](https://random-api-psi.vercel.app/) · [API Docs](https://random-api-psi.vercel.app/docs) · [Report Bug](https://github.com/muhammad-abdullah11/randomApi/issues) · [Request Feature](https://github.com/muhammad-abdullah11/randomApi/issues)

</div>

---

## Table of Contents

- [Why This Exists](#why-this-exists)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Database Setup](#database-setup)
  - [Running Locally](#running-locally)
- [API Reference](#api-reference)
  - [GET /api/users](#get-apiusers)
  - [GET /api/products](#get-apiproducts)
- [Database Schema](#database-schema)
  - [Models Overview](#models-overview)
  - [Entity Relationship](#entity-relationship)
  - [Seeded Data](#seeded-data)
- [Project Structure](#project-structure)
- [Client Architecture](#client-architecture)
  - [Pages](#pages)
  - [Components](#components)
  - [Layout System](#layout-system)
  - [Fonts](#fonts)
  - [Styling](#styling)
- [Server Architecture](#server-architecture)
  - [API Routes](#api-routes)
  - [Prisma Client](#prisma-client)
  - [Database Connection](#database-connection)
  - [Error Handling](#error-handling)
- [Deployment](#deployment)
- [Available Scripts](#available-scripts)
- [What This API Doesn't Do](#what-this-api-doesnt-do)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

---

## Why This Exists

Every time you're building a registration form, a dashboard, or an e-commerce prototype, you hit the same wall: you need placeholder data that looks real. Stock "John Doe" names and broken image links don't cut it.

Random API gives you complete, randomized profiles (name, email, username, location, avatar) and products (name, description, price, category, photo) pulled from a curated seed dataset hosted on PostgreSQL. Hit the endpoint, get something that looks like it came from a real database.

**Use cases:**
- UI/UX mockups and prototyping
- Frontend testing with realistic data
- E-commerce demo stores
- Form validation testing
- Dashboard and analytics previews
- Hackathon projects and MVPs
- Teaching and learning REST APIs

---

## Features

| Feature | Description |
|---------|-------------|
| **Random User Generation** | Each request assembles a unique user from first names (English + French, gendered), last names, global locations, and avatar URLs |
| **Random Product Data** | 40 seeded products across 5 categories with real descriptions, prices, and Unsplash photos |
| **Gender Filtering** | Filter users by `MALE` or `FEMALE` via query parameter |
| **Country Filtering** | Narrow users to any of 25+ seeded countries |
| **Product Limiting** | Control how many products are returned with the `limit` parameter |
| **Interactive Docs** | Built-in documentation page at `/docs` with live code examples |
| **Syntax-Highlighted Code** | Code examples with Prism syntax highlighting and copy-to-clipboard |
| **Mobile-First Design** | Fully responsive UI that works on all screen sizes |
| **No Authentication** | All endpoints are completely public |
| **Zero Config** | No API keys, no setup, just hit the endpoint |

---

## Tech Stack

### Core

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.2.10 | React framework with App Router, API routes, and server-side rendering |
| **React** | 19.2.4 | UI library |
| **TypeScript** | 5.x | Type-safe JavaScript |
| **Node.js** | — | Runtime environment |

### Database

| Technology | Version | Purpose |
|------------|---------|---------|
| **PostgreSQL** | — | Primary relational database |
| **Prisma** | 7.8.0 | ORM, schema management, migrations, and type-safe database queries |
| **Prisma Accelerate** | — | Connection pooling and edge-ready database caching |

### Styling & UI

| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | 4.x | Utility-first CSS framework |
| **PostCSS** | — | CSS processing with `@tailwindcss/postcss` plugin |
| **lucide-react** | 1.24.0 | Icon library (Zap, Globe, Database, Sparkles, Copy, Check, ArrowRight, ChevronDown, Code, AlertCircle, FileJson, Key) |
| **react-icons** | 5.7.0 | Additional icons (FaGithub for navigation) |
| **react-syntax-highlighter** | 16.1.1 | Code block syntax highlighting using Prism with `oneLight` theme |

### Fonts

| Font | Source |
|------|--------|
| **Geist Sans** | `next/font/google` — Primary UI font |
| **Geist Mono** | `next/font/google` — Code and monospace elements |

### Development

| Tool | Version | Purpose |
|------|---------|---------|
| **ESLint** | 9.x | Linting with `eslint-config-next` (core-web-vitals + typescript) |
| **tsx** | 4.23.0 | TypeScript execution for seed scripts |
| **Prisma CLI** | 7.8.0 | Schema migrations and database seeding |

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** or **bun** (package manager)
- **PostgreSQL** database (local or hosted via Prisma Accelerate, Neon, Supabase, etc.)

### Installation

```bash
# Clone the repository
git clone https://github.com/muhammad-abdullah11/randomApi.git

# Navigate to the project
cd random-api

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
# Database connection string (PostgreSQL)
# For local PostgreSQL:
DATABASE_URL="postgresql://user:password@localhost:5432/random_api?schema=public"

# For Prisma Accelerate (recommended for production):
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=your-api-key-here"
```

### Database Setup

```bash
# Run Prisma migrations to create all tables
npx prisma migrate dev

# Seed the database with sample data
# (60 first names, 30 last names, 30 locations, 30 avatars, 40 products, 30 users)
npx tsx prisma/seed.ts
```

### Running Locally

```bash
# Start the development server
npm run dev
```

The app will be available at `http://localhost:3000`.

| Route | Description |
|-------|-------------|
| `http://localhost:3000` | Landing page with live API previews |
| `http://localhost:3000/docs` | Interactive API documentation |
| `http://localhost:3000/api/users` | Random user endpoint |
| `http://localhost:3000/api/products` | Random products endpoint |

---

## API Reference

### Base URL

```
Production:  https://random-api-psi.vercel.app
Development: http://localhost:3000
```

---

### `GET /api/users`

Returns a single randomly generated user profile. Each request assembles a unique combination from the seeded name, location, and avatar pools.

#### Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `gender` | `string` | No | Random | Filter by gender. Must be `MALE` or `FEMALE` (case-insensitive input) |
| `country` | `string` | No | — | Filter by country name (e.g. `France`, `Japan`, `United States`) |

#### Example Requests

```bash
# Basic request — random user
curl https://random-api-psi.vercel.app/api/users

# Filter by gender
curl https://random-api-psi.vercel.app/api/users?gender=FEMALE

# Filter by country
curl https://random-api-psi.vercel.app/api/users?country=Germany

# Filter by both
curl https://random-api-psi.vercel.app/api/users?gender=MALE&country=Greece
```

#### Success Response (`200 OK`)

```json
{
  "message": "Users fetched successfully",
  "status": 200,
  "randomUser": {
    "name": "Camille Laurent",
    "email": "camille.laurent@example.com",
    "username": "camille.laurent482",
    "gender": "FEMALE",
    "location": {
      "city": "Berlin",
      "state": "Bavaria",
      "country": "Germany"
    },
    "avatar": "https://randomuser.me/api/portraits/women/7.jpg"
  }
}
```

#### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `message` | `string` | Success message |
| `status` | `number` | HTTP status code |
| `randomUser.name` | `string` | Full name (first + last) |
| `randomUser.email` | `string` | Email in `first.last@example.com` format |
| `randomUser.username` | `string` | Username in `first.last###` format |
| `randomUser.gender` | `string` | `MALE` or `FEMALE` |
| `randomUser.location.city` | `string` | City name |
| `randomUser.location.state` | `string` | State/province name |
| `randomUser.location.country` | `string` | Country name |
| `randomUser.avatar` | `string` | URL to a randomuser.me portrait |

#### Error Responses

| Status | Condition | Response Body |
|--------|-----------|---------------|
| `400 Bad Request` | `gender` is not `MALE` or `FEMALE` | `{ "error": "Invalid gender. Must be MALE or FEMALE." }` |
| `404 Not Found` | No locations match the given `country` | `{ "error": "No locations found for country \"xyz\"." }` |
| `500 Internal Server Error` | Unexpected server error | `{ "error": "Internal server error" }` |

---

### `GET /api/products`

Returns products from the database. Without a `limit` parameter, returns all 40 seeded products.

#### Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `limit` | `number` | No | All | Positive integer controlling how many products to return |

#### Example Requests

```bash
# All products
curl https://random-api-psi.vercel.app/api/products

# Limit to 5 products
curl https://random-api-psi.vercel.app/api/products?limit=5

# Single product
curl https://random-api-psi.vercel.app/api/products?limit=1
```

#### Success Response (`200 OK`)

```json
{
  "message": "Products fetched successfully",
  "status": 200,
  "count": 2,
  "products": [
    {
      "id": 1,
      "name": "Wireless Noise-Cancelling Headphones",
      "description": "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and hi-res audio support.",
      "price": 349.99,
      "category": "Electronics",
      "photo": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      "createdAt": "2026-07-11T19:54:33.000Z",
      "updatedAt": "2026-07-11T19:54:33.000Z"
    },
    {
      "id": 2,
      "name": "Mechanical Gaming Keyboard",
      "description": "RGB backlit mechanical keyboard with Cherry MX switches, programmable macros, and aluminum frame.",
      "price": 149.99,
      "category": "Electronics",
      "photo": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
      "createdAt": "2026-07-11T19:54:33.000Z",
      "updatedAt": "2026-07-11T19:54:33.000Z"
    }
  ]
}
```

#### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `message` | `string` | Success message |
| `status` | `number` | HTTP status code |
| `count` | `number` | Number of products returned |
| `products[].id` | `number` | Unique product identifier |
| `products[].name` | `string` | Product name |
| `products[].description` | `string` | Product description |
| `products[].price` | `number` | Price in USD (2 decimal places) |
| `products[].category` | `string` | Product category |
| `products[].photo` | `string` | URL to an Unsplash product photo |
| `products[].createdAt` | `string` | ISO 8601 creation timestamp |
| `products[].updatedAt` | `string` | ISO 8601 update timestamp |

#### Error Responses

| Status | Condition | Response Body |
|--------|-----------|---------------|
| `400 Bad Request` | `limit` is not a positive integer | `{ "error": "Invalid limit. Must be a positive integer." }` |
| `500 Internal Server Error` | Unexpected server error | `{ "error": "Internal server error", "details": "..." }` |

---

## Database Schema

### Models Overview

The Prisma schema defines **6 models** and **1 enum**:

```
┌─────────────────────────────────────────────────────────────┐
│                      Gender (Enum)                          │
│                     ┌──────────┐                            │
│                     │   MALE   │                            │
│                     │  FEMALE  │                            │
│                     └──────────┘                            │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────┐    ┌──────────────────────┐
│      FirstName       │    │       LastName        │
├──────────────────────┤    ├──────────────────────┤
│ id        Int (PK)   │    │ id        Int (PK)   │
│ name      String     │    │ name      String     │
│ gender    Gender     │    └──────────────────────┘
└──────────────────────┘
         60 records              30 records
      (30M + 30F)

┌──────────────────────┐    ┌──────────────────────┐
│      Location        │    │     AvatarPool        │
├──────────────────────┤    ├──────────────────────┤
│ id        Int (PK)   │    │ id        Int (PK)   │
│ city      String     │    │ gender    Gender     │
│ state     String     │    │ url       String     │
│ country   String     │    └──────────────────────┘
└──────────────────────┘
      30 records              30 records
                          (15M + 15F)

┌──────────────────────┐    ┌──────────────────────┐
│      Product         │    │        User           │
├──────────────────────┤    ├──────────────────────┤
│ id          Int (PK) │    │ id        Int (PK)   │
│ name        String   │    │ name      String     │
│ description String   │    │ email     String (UQ)│
│ price       Decimal  │    │ password  String     │
│ category    String   │    │ avator    String     │
│ photo       String   │    │ createdAt DateTime  │
│ createdAt   DateTime │    │ updatedAt DateTime  │
│ updatedAt   DateTime │    └──────────────────────┘
└──────────────────────┘
      40 records               30 records
```

### Seeded Data

| Model | Record Count | Details |
|-------|-------------|---------|
| `FirstName` | 60 | 30 male + 30 female names (English + French) |
| `LastName` | 30 | English + French last names |
| `Location` | 30 | City/state/country combos from 25+ countries |
| `AvatarPool` | 30 | 15 male + 15 female randomuser.me portrait URLs |
| `Product` | 40 | 8 per category across 5 categories with Unsplash photos |
| `User` | 30 | Pre-seeded user accounts (not exposed via API) |

### Product Categories

| Category | Count | Sample Products |
|----------|-------|-----------------|
| **Electronics** | 8 | Headphones, keyboards, monitors, speakers, watches, chargers, hubs, earbuds |
| **Clothing** | 8 | Shirts, pants, sweaters, jackets, jeans, t-shirts, blazers, shorts |
| **Home & Kitchen** | 8 | French presses, cookware, cutting boards, coffee drippers, vacuums, bedding, dutch ovens, candles |
| **Sports & Outdoors** | 8 | Yoga mats, water bottles, dumbbells, backpacks, resistance bands, hammocks, foam rollers, trail shoes |
| **Books & Stationery** | 8 | Journals, pens, sketchbooks, organizers, book sets, washi tape, planners, brush pens |

---

## Project Structure

```
random-api/
│
├── app/                            # Next.js App Router (server-first)
│   ├── api/                        # REST API endpoints
│   │   ├── products/
│   │   │   └── route.ts            # GET /api/products — returns all or limited products
│   │   └── users/
│   │       └── route.ts            # GET /api/users — returns a random user
│   │
│   ├── docs/                       # Interactive documentation page
│   │   ├── page.tsx                # /docs — Server component with metadata
│   │   └── DocsPage.tsx            # Client component — full interactive docs (1232 lines)
│   │
│   ├── generated/
│   │   └── prisma/                 # Auto-generated Prisma client (gitignored)
│   │
│   ├── globals.css                 # Tailwind CSS import
│   ├── layout.tsx                  # Root layout — wraps all pages with Header + Footer
│   ├── page.tsx                    # Landing page — renders HeroSection
│   └── favicon.ico                 # Browser tab icon
│
├── Components/                     # Reusable React components
│   ├── Header.tsx                  # Top navigation bar — logo, Home, Docs, GitHub
│   ├── Footer.tsx                  # Developer credit with avatar
│   └── HeroSection.tsx             # Landing page hero — live API previews, JSON toggles
│
├── lib/                            # Shared utilities
│   └── prisma.ts                   # Prisma client singleton (global caching pattern)
│
├── prisma/                         # Database management
│   ├── schema.prisma               # Database schema — 6 models, 1 enum
│   ├── seed.ts                     # Seed script — populates all tables
│   ├── config.ts                   # Prisma configuration (migrations + seed command)
│   └── migrations/                 # Migration history (4 migrations)
│
├── public/                         # Static assets
│   ├── api-svg.svg                 # Logo icon
│   ├── abdullah.jpg                # Author photo (used in Footer)
│   ├── vercel.svg                  # Vercel logo
│   └── *.svg                       # Additional SVG assets
│
├── .env                            # Environment variables (gitignored)
├── .gitignore                      # Git ignore rules
├── next.config.ts                  # Next.js configuration
├── postcss.config.mjs              # PostCSS config (Tailwind plugin)
├── tsconfig.json                   # TypeScript config (ES2017, bundler resolution)
├── eslint.config.mjs               # ESLint flat config
├── package.json                    # Dependencies and scripts
├── package-lock.json               # Lockfile
└── README.md                       # This file
```

---

## Client Architecture

### Pages

| Route | File | Type | Description |
|-------|------|------|-------------|
| `/` | `app/page.tsx` | Server Component | Landing page that renders the `HeroSection` client component |
| `/docs` | `app/docs/page.tsx` | Server Component | Documentation page with metadata, renders `DocsPage` client component |

### Components

#### `Header.tsx` — Navigation Bar
- **Type:** Server Component
- **Features:**
  - Logo with SVG icon (`api-svg.svg`)
  - Navigation links: Home (`/`), Docs (`/docs`)
  - GitHub repository link (`FaGithub` icon → `github.com/mabdullah356/randomApi`)
  - Hover effect: text color changes to `#f56565`
  - Responsive: works on all screen sizes
  - Fixed height: `h-16` with `bg-gray-50` background and bottom border

#### `HeroSection.tsx` — Landing Page Hero
- **Type:** Client Component (`"use client"`)
- **Size:** 447 lines
- **Features:**
  - **Two live API preview sections** — Users and Products
  - **Real-time fetch** — calls `/api/users` and `/api/products?limit=3` on mount
  - **Refresh buttons** — re-fetch data without page reload
  - **Collapsible JSON viewer** — toggle raw JSON response display
  - **Copy-to-clipboard** — one-click endpoint URL copying
  - **Loading states** — animated skeleton placeholders during fetch
  - **Error handling** — graceful fallback when API is unavailable
  - **Animated status indicators** — pulsing green dot with "Free · No Authentication · REST API"
  - **Feature badges** — Instant Response, Global Locations, Gender & Country Filters, Multiple Categories, Limit Parameter
  - **Responsive design** — stacks vertically on mobile, horizontal on desktop
  - **Dot grid background** — subtle radial gradient pattern

#### `DocsPage.tsx` — Interactive API Documentation
- **Type:** Client Component (`"use client"`)
- **Size:** 1,232 lines
- **Features:**
  - **Tabbed interface** — separate documentation for Users and Products endpoints
  - **Code examples** — Fetch, Axios, and React component implementations
  - **Syntax highlighting** — Prism-based with `oneLight` theme
  - **Copy-to-clipboard** — one-click code copying
  - **Response schema tables** — detailed field-by-field documentation
  - **Collapsible FAQ sections** — expandable Q&A
  - **Live API testing** — try endpoints directly from the docs
  - **Error documentation** — all error codes and responses listed

#### `Footer.tsx` — Developer Credit
- **Type:** Server Component
- **Features:**
  - Author avatar (grayscale → color on hover, 300ms transition)
  - Link to author's portfolio (`muhammad-abdullah-me.vercel.app`)
  - Dark background (`bg-gray-900`) with border top

### Layout System

The root layout (`app/layout.tsx`) provides:

```
┌──────────────────────────────────┐
│            Header                │  ← Always visible at top
├──────────────────────────────────┤
│                                  │
│           {children}             │  ← Page-specific content
│                                  │
├──────────────────────────────────┤
│            Footer                │  ← Always visible at bottom
└──────────────────────────────────┘
```

- **Flexbox layout:** `min-h-full flex flex-col` on `<body>`
- **Full-height:** `<html>` has `h-full` class
- **Antialiased text:** `antialiased` class on `<html>`

### Fonts

| Font | Variable | Usage |
|------|----------|-------|
| Geist Sans | `--font-geist-sans` | Primary UI text, headings, body |
| Geist Mono | `--font-geist-mono` | Code blocks, API endpoints, JSON display |

Both loaded via `next/font/google` with `latin` subset for optimal performance.

### Styling

- **Tailwind CSS 4** — utility-first styling via `@tailwindcss/postcss`
- **Global CSS** — minimal; only `@import "tailwindcss"` in `globals.css`
- **Custom theme** — currently commented out, using Tailwind defaults
- **Color palette:**
  - Primary: `slate-900` (dark), `slate-50` (light backgrounds)
  - Accent: `#f56565` (red hover states)
  - Success: `emerald-500` (status indicators, checkmarks)
  - Code: `oneLight` theme (syntax highlighting)

---

## Server Architecture

### API Routes

#### `GET /api/users` — Random User Generator

**File:** `app/api/users/route.ts` (76 lines)

**Logic flow:**
1. Parse query parameters (`gender`, `country`)
2. Validate `gender` — must be `MALE` or `FEMALE` (returns `400` if invalid)
3. If no `gender` provided, randomly pick one (50/50 split)
4. Build Prisma `where` clause for `Location` if `country` is provided
5. Fetch filtered data from 4 tables in parallel:
   - `FirstName` (filtered by gender)
   - `LastName` (all)
   - `Location` (filtered by country if specified)
   - `AvatarPool` (filtered by gender)
6. Validate locations exist (returns `404` if empty)
7. Pick random entry from each pool using `pickRandom()` utility
8. Compose user object with generated `email` and `username`
9. Return JSON response

**Key function:**
```typescript
function pickRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}
```

#### `GET /api/products` — Product Catalog

**File:** `app/api/products/route.ts` (39 lines)

**Logic flow:**
1. Parse `limit` query parameter
2. Validate `limit` — must be a positive integer (returns `400` if invalid)
3. Fetch products from database with optional `take` limit
4. Return JSON response with `count` and `products` array

### Prisma Client

**File:** `lib/prisma.ts`

```typescript
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as {
    prisma?: PrismaClient;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
    accelerateUrl: process.env.DATABASE_URL,
});
```

**Singleton pattern:** Uses Node.js `global` object to prevent multiple `PrismaClient` instances during Next.js hot module replacement in development. This is the recommended pattern from the Prisma docs.

### Database Connection

- **Provider:** PostgreSQL
- **Connection pooling:** Prisma Accelerate (edge-ready, cached queries)
- **Schema location:** `prisma/schema.prisma`
- **Migrations:** `prisma/migrations/` (4 migrations)
- **Seed command:** `npx tsx prisma/seed.ts`
- **Configuration:** `prisma.config.ts` (defines schema path, migrations, seed, and datasource URL)

### Error Handling

All API routes follow a consistent error handling pattern:

```typescript
try {
    // Business logic
    return NextResponse.json({ ... }, { status: 200 });
} catch (error) {
    console.error(error);
    return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
    );
}
```

**Validation errors** return `400` with descriptive messages before reaching the database layer.

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Configure environment variable: `DATABASE_URL`
4. Deploy — Vercel auto-detects Next.js

**Build configuration:**
- Framework: Next.js
- Build command: `next build`
- Output directory: `.next`

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm run start
```

The production server runs on port `3000` by default.

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start Next.js development server with hot reload |
| `build` | `npm run build` | Create optimized production build |
| `start` | `npm run start` | Start production server |
| `lint` | `npm run lint` | Run ESLint with Next.js + TypeScript rules |

### Database Commands

```bash
# Run migrations (development)
npx prisma migrate dev

# Deploy migrations (production)
npx prisma migrate deploy

# Seed the database
npx tsx prisma/seed.ts

# Open Prisma Studio (visual database browser)
npx prisma studio

# Generate Prisma client
npx prisma generate
```

---

## What This API Doesn't Do

To be clear about scope:

| Feature | Status | Why |
|---------|--------|-----|
| Authentication | Not implemented | Designed as a public, open API |
| Rate limiting | Not implemented | Use responsibly; add your own middleware if needed |
| User data persistence | Not implemented | Each request picks randomly; nothing is saved |
| CRUD operations | Not implemented | Read-only GET endpoints only |
| Pagination | Not implemented | Use the `limit` parameter for control |
| Webhooks/callbacks | Not implemented | Simple request/response API |
| POST/PUT/DELETE | Not implemented | Data is seeded, not user-generated |
| Caching headers | Not implemented | Responses are random by design |
| CORS configuration | Default | Works cross-origin by default on Vercel |

---

## Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/your-username/randomApi.git`
3. **Create** a feature branch: `git checkout -b feature/amazing-feature`
4. **Make** your changes
5. **Lint** your code: `npm run lint`
6. **Test** locally: `npm run dev`
7. **Commit** your changes: `git commit -m "feat: add amazing feature"`
8. **Push** to your fork: `git push origin feature/amazing-feature`
9. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style (ESLint + TypeScript)
- Keep components in `Components/` directory
- Keep API routes in `app/api/` directory
- Use Prisma for all database operations
- Add TypeScript types for all new interfaces
- Test API endpoints before and after changes

---

## Author

**Muhammad Abdullah** — Full Stack Developer

- Portfolio: [muhammad-abdullah-me.vercel.app](https://muhammad-abdullah-me.vercel.app/)
- GitHub: [@muhammad-abdullah11](https://github.com/muhammad-abdullah11)
- Project Repository: [github.com/muhammad-abdullah11/randomApi](https://github.com/muhammad-abdullah11/randomApi)

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with Next.js, Prisma, and PostgreSQL**

[Back to Top](#random-api)

</div>
