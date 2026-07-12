# Random API

A free REST API that serves random user profiles and product data from a seeded PostgreSQL database. Built for devs who need realistic fake data for UI mockups, testing, and demos — no API key, no rate limiting, no nonsense.

## Why This Exists

Every time you're building a registration form, a dashboard, or an e-commerce prototype, you hit the same wall: you need placeholder data that looks real. Stock "John Doe" names and broken image links don't cut it. This API gives you complete, randomized profiles (name, email, username, location, avatar) and products (name, description, price, category, photo) pulled from a curated seed dataset. Hit the endpoint, get something that looks like it came from a real database.

## Features

- **Random user generation** — each request assembles a user from first names (English + French, gendered), last names, global locations, and avatar URLs
- **Random product data** — 40 seeded products across 5 categories with real descriptions, prices, and Unsplash photos
- **Filter by gender** — `MALE` or `FEMALE` for user queries
- **Filter by country** — narrow users to any of the 25+ seeded countries
- **Limit products** — control how many products come back
- **No auth required** — everything is public
- **Built-in docs page** — interactive documentation at `/docs` with live code examples

## Endpoints

### `GET /api/users`

Returns a single randomly generated user.

**Query Parameters**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `gender` | string | random | `MALE` or `FEMALE` (case-insensitive input, but must match exactly) |
| `country` | string | — | Country name to filter locations (e.g. `France`, `Japan`, `United States`) |

**Example Request**

```
GET /api/users?gender=FEMALE&country=Germany
```

**Success Response** (`200`)

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

**Error Responses**

| Status | Condition | Body |
|--------|-----------|------|
| `400` | `gender` is not `MALE` or `FEMALE` | `{ "error": "Invalid gender. Must be MALE or FEMALE." }` |
| `404` | No locations match the given `country` | `{ "error": "No locations found for country \"xyz\"." }` |
| `500` | Unexpected server error | `{ "error": "Internal server error" }` |

---

### `GET /api/products`

Returns products from the database. Without a `limit`, returns all of them.

**Query Parameters**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `limit` | number | all | Positive integer controlling how many products to return |

**Example Request**

```
GET /api/products?limit=2
```

**Success Response** (`200`)

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

**Error Responses**

| Status | Condition | Body |
|--------|-----------|------|
| `400` | `limit` is not a positive integer | `{ "error": "Invalid limit. Must be a positive integer." }` |
| `500` | Unexpected server error | `{ "error": "Internal server error", "details": "..." }` |

---

## Tech Stack

- **Framework**: Next.js 16.2.10 (App Router)
- **Language**: TypeScript 5
- **React**: 19.2.4
- **Database**: PostgreSQL via Prisma 7.8.0 with Prisma Accelerate
- **Styling**: Tailwind CSS 4
- **UI Icons**: lucide-react, react-icons
- **Syntax Highlighting**: react-syntax-highlighter (for docs page)
- **Linting**: ESLint 9 with `eslint-config-next` (core-web-vitals + typescript)
- **Runtime**: Node.js (deployed on Vercel)

## Local Setup

```bash
# Clone the repo
git clone https://github.com/mabdullah356/randomApi.git
cd random-api

# Install dependencies
npm install

# Set up your database
# The project uses Prisma with PostgreSQL via Prisma Accelerate.
# Create a .env file with your DATABASE_URL:
echo 'DATABASE_URL="your-postgresql-connection-string"' > .env

# Run migrations
npx prisma migrate dev

# Seed the database with sample data
npx tsx prisma/seed.ts

# Start the dev server
npm run dev
```

The app runs at `http://localhost:3000`. API endpoints are available immediately:
- `http://localhost:3000/api/users`
- `http://localhost:3000/api/products`

**Available Scripts**

| Script | Command | What it does |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start Next.js dev server |
| `build` | `npm run build` | Production build |
| `start` | `npm run start` | Start production server |
| `lint` | `npm run lint` | Run ESLint |

## Project Structure

```
random-api/
├── app/
│   ├── api/
│   │   ├── products/route.ts   # GET /api/products
│   │   └── users/route.ts      # GET /api/users
│   ├── docs/
│   │   ├── page.tsx             # /docs page (metadata)
│   │   └── DocsPage.tsx         # Full interactive API documentation
│   ├── generated/prisma/        # Generated Prisma client (gitignored)
│   ├── globals.css
│   ├── layout.tsx               # Root layout with Header/Footer
│   └── page.tsx                 # Landing page
├── Components/
│   ├── Header.tsx               # Site nav with GitHub link
│   ├── Footer.tsx               # Developer credit
│   └── HeroSection.tsx          # Landing page hero with live API previews
├── lib/
│   └── prisma.ts                # Prisma client singleton
├── prisma/
│   ├── schema.prisma            # Database schema (6 models)
│   ├── seed.ts                  # Seed script (30 users, 40 products, etc.)
│   └── migrations/              # Migration history
├── public/                      # Static assets
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── prisma.config.ts
└── tsconfig.json
```

## Database Schema

The Prisma schema defines 6 models:

| Model | Records | Purpose |
|-------|---------|---------|
| `FirstName` | 60 (30 male, 30 female) | Gendered first names (English + French) |
| `LastName` | 30 | Last names (English + French) |
| `Location` | 30 | City/state/country combos from 25+ countries |
| `AvatarPool` | 30 (15 male, 15 female) | randomuser.me portrait URLs |
| `Product` | 40 | Products across 5 categories |
| `User` | 30 | Pre-seeded users (not returned by the API) |

The `Gender` enum has two values: `MALE` and `FEMALE`.

## Seeded Product Categories

The 40 products span these categories:

- **Electronics** (8) — headphones, keyboards, monitors, speakers, watches, chargers, hubs, earbuds
- **Clothing** (8) — shirts, pants, sweaters, jackets, jeans, t-shirts, blazers, shorts
- **Home & Kitchen** (8) — french presses, cookware, cutting boards, coffee drippers, vacuums, bedding, dutch ovens, candles
- **Sports & Outdoors** (8) — yoga mats, water bottles, dumbbells, backpacks, resistance bands, hammocks, foam rollers, trail shoes
- **Books & Stationery** (8) — journals, pens, sketchbooks, organizers, book sets, washi tape, planners, brush pens

## What This API Doesn't Do

To be clear about scope:

- **No authentication** — all endpoints are fully public
- **No rate limiting** — use responsibly
- **No user data persistence** — each request picks randomly from the pool; nothing is saved
- **No CRUD operations** — read-only GET endpoints only
- **No pagination** — the products endpoint returns everything (or up to your limit)
- **No webhook/callbacks** — it's a simple request/response API

## GitHub

Source code: [github.com/mabdullah356/randomApi](https://github.com/mabdullah356/randomApi)

## Author

Developed by [Muhammad Abdullah](https://muhammad-abdullah-me.vercel.app/)
