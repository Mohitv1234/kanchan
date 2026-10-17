# Kanchan Mehndi Artist — Dynamic Next.js Portfolio

A light, elegant, animated portfolio with a private admin dashboard for gallery designs, client reviews and contact enquiries.

## Features
- Next.js App Router + TypeScript
- Responsive light-theme design with subtle Framer Motion reveals
- Home, Gallery, About and Contact pages
- Gallery items stored in SQLite and manageable from admin (add, feature on homepage, delete)
- Client feedback management (add, publish/hide, delete)
- Contact form persists enquiries in the database; admin can read, mark as read/new, reply via email, and delete
- Signed, HTTP-only admin session cookie; credentials supplied through environment variables
- Prisma ORM and SQLite for simple local setup

## Requirements
- Node.js 20.9 or newer
- npm

## Setup
1. Install packages:
   ```bash
   npm install
   ```
2. Create your local environment file:
   ```bash
   cp .env.example .env
   ```
   On Windows PowerShell you can use `Copy-Item .env.example .env`.
3. Edit `.env` and change `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `SESSION_SECRET`. Use a unique password and a random session secret of at least 32 characters. Keep `.env` private.
4. Generate Prisma client and create the local database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
5. Start the site:
   ```bash
   npm run dev
   ```
6. Visit `http://localhost:3000`. Admin login is at `http://localhost:3000/admin/login`.

## Gallery images
The admin gallery form accepts an image URL. Upload images to a trusted image host or your own storage and paste the URL. The supplied inspiration image is available at `/images/kanchan-mehndi-reference.png`.

## Deployment notes
- SQLite is suitable for local development and a single persistent server. For serverless deployment such as Vercel, use a hosted database (for example PostgreSQL with Prisma) because the local filesystem is not persistent across serverless executions.
- Set all `.env` values in your hosting provider. Never commit `.env`.
- Use HTTPS in production. The session cookie is configured as secure in production.
- Add rate limiting / bot protection to public contact submissions before production use.
- This starter uses a single admin account configured through environment variables. If you need multiple staff accounts, password reset, upload storage, or email notifications, those can be added as a next iteration.

## Visual refresh
The portfolio has a refreshed editorial design system with a warm ivory background, deep forest-green accents, muted gold details, rounded image treatments, animated hero artwork, improved service and testimonial cards, and responsive layouts. The hand photo crop is stored locally at `public/images/mehndi-hand.jpg`.
