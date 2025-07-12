# FlipRoutes - Smart Shipment Tracking Platform

FlipRoutes is a modern, intelligent logistics platform that provides real-time shipment tracking, predictive analytics, and seamless delivery management for businesses of all sizes.

## 🚀 Features

- **Real-time Tracking**: Live updates on shipment location and status
- **Smart Routing**: AI-powered route optimization for faster deliveries
- **Predictive ETA**: Accurate delivery time predictions using machine learning
- **Admin Dashboard**: Comprehensive management tools for logistics operations
- **Public Tracking**: Customer-friendly tracking interface
- **Mobile Responsive**: Works seamlessly across all devices
- **API Integration**: RESTful APIs for custom integrations

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **Icons**: Lucide React
- **Forms**: React Hook Form, Zod validation
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
fliproutes/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── dashboard/         # Customer dashboard
│   ├── admin/             # Admin panel
│   ├── track/             # Public tracking
│   ├── pricing/           # Pricing page
│   └── login/             # Authentication
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── shipment/         # Shipment-specific components
│   └── admin/            # Admin components
├── lib/                  # Utilities and configurations
├── styles/               # Global styles
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fliproutes.git
   cd fliproutes
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase**
   - Create a new Supabase project
   - Run the database migrations (see Database Setup below)
   - Configure authentication settings

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

### Supabase Tables

Create the following tables in your Supabase project:

#### Users Table
```sql
CREATE TABLE users (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  company TEXT,
  role TEXT DEFAULT 'customer' CHECK (role IN ('customer', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Shipments Table
```sql
CREATE TABLE shipments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tracking_number TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_transit', 'delivered', 'failed')),
  origin TEXT NOT NULL,
  destination TEXT NOT NULL,
  customer_id UUID REFERENCES users(id),
  carrier TEXT,
  weight DECIMAL,
  dimensions JSONB,
  estimated_delivery TIMESTAMP WITH TIME ZONE,
  actual_delivery TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Tracking Events Table
```sql
CREATE TABLE tracking_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  shipment_id UUID REFERENCES shipments(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL CHECK (event_type IN ('pickup', 'in_transit', 'out_for_delivery', 'delivered', 'failed')),
  location TEXT NOT NULL,
  description TEXT,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Row Level Security (RLS)

Enable RLS and create policies for data security:

```sql
-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE shipments ENABLE ROW LEVEL SECURITY;
ALTER TABLE tracking_events ENABLE ROW LEVEL SECURITY;

-- Users can only see their own data
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);

-- Customers can only see their shipments
CREATE POLICY "Customers can view own shipments" ON shipments
  FOR SELECT USING (auth.uid() = customer_id);

-- Admins can see all shipments
CREATE POLICY "Admins can view all shipments" ON shipments
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.id = auth.uid() 
      AND users.role = 'admin'
    )
  );
```

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🏗️ Building for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 📦 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.fliproutes.com](https://docs.fliproutes.com)
- **Issues**: [GitHub Issues](https://github.com/yourusername/fliproutes/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/fliproutes/discussions)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Supabase](https://supabase.com/) for the backend infrastructure
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons

---

Made with ❤️ by the FlipRoutes team
