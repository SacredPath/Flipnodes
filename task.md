# 🚀 FlipRoutes – Flipnode.com Logistics Platform

## 🧭 Objective:
Build a high-performance, modern logistics web app under the FlipRoutes brand, leveraging Supabase and Next.js for real-time package tracking, shipment management, and admin control.

---

## 🧱 Architecture Tasks

### 🛠️ 1. Setup & Base Integration
- [ ] Create Next.js 14 project (`app/` directory)
- [ ] Configure TailwindCSS, ShadCN UI, Framer Motion, Lucide Icons
- [ ] Setup Supabase backend, tables, roles, and auth
- [ ] Configure Stripe keys, edge functions, and environment vars

---

### 📦 2. FlipRoutes Data Model (Supabase)
- [ ] `users` (customers, drivers, admins)
- [ ] `shipments` (sender, receiver, status, tracking ID)
- [ ] `tracking_events` (event, location, timestamp)
- [ ] `drivers` (profile, availability)
- [ ] `support_tickets`, `notifications`, `payments`

---

### 🔐 3. Security Model
- [ ] Supabase RLS enforcement
- [ ] Custom claims: `is_admin`, `is_driver`, `is_customer`
- [ ] Guarded routes with role-checking

---

### 🧑‍🎨 4. UX & Branding
- [ ] Use FlipRoutes color scheme + typography
- [ ] Lottie delivery animations with FlipRoutes logo
- [ ] Themeable UI with dark/light mode toggle
- [ ] Custom favicon + metadata for Flipnode.com

---

### 📈 5. Functional Modules

#### Public
- [ ] Hero landing with pricing widget
- [ ] Track shipment with real-time updates
- [ ] New shipment form wizard
- [ ] Auth screens: signup, magic link

#### Authenticated User
- [ ] Dashboard with shipment history
- [ ] Live status + animated tracking
- [ ] Saved addresses + receipts
- [ ] Notifications + preferences

#### Admin (FlipRoutes Ops)
- [ ] Admin dashboard with driver/route assignment
- [ ] Shipment manager + filter/sort
- [ ] Support inbox & customer tools
- [ ] Event logs & audit trail

---

### 🛰 6. Realtime + External Services
- [ ] Supabase Realtime
- [ ] Google Maps/Mapbox SDK
- [ ] Stripe/Paystack payments
- [ ] Lottie or SVG tracking animations
- [ ] SMS/email webhook handling (via Edge Functions)

---

### ✅ QA & Deployment
- [ ] CI/CD via GitHub + Vercel
- [ ] Testing: Vitest + Playwright
- [ ] Lighthouse + a11y audits
- [ ] Error boundaries, fallbacks, skeleton states
- [ ] Live @ `https://flipnode.com`
