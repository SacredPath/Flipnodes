'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, ShieldCheck, Truck, Globe, BarChart3, Users, Zap, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                FlipRoutes
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/track" className="text-gray-700 hover:text-blue-600">Track</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
              <Link href="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
              <Link href="/login">
                <Button size="sm">Get Started</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/track" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Track</Link>
                <Link href="/pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Pricing</Link>
                <Link href="/login" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Login</Link>
                <Link href="/login" className="block px-3 py-2">
                  <Button size="sm" className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 pb-24 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The Smartest Way to <span className="text-blue-600">Track Shipments</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            FlipRoutes gives you real-time visibility, predictive ETAs, and seamless control over your global supply chain. Move freight smarter, faster, and with total confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/track">
              <Button size="lg" className="flex items-center">
                Track a Shipment <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="flex items-center">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 items-center text-gray-500 text-sm">
            <div className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-1" /> Real-time Tracking</div>
            <div className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-1" /> Predictive ETAs</div>
            <div className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-1" /> Global Coverage</div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/hero-section.png"
            alt="FlipRoutes Hero"
            width={520}
            height={400}
            className="rounded-2xl shadow-xl object-cover"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why FlipRoutes?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-white rounded-xl p-8 shadow-sm flex flex-col items-center text-center">
              <Truck className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">End-to-End Visibility</h3>
              <p className="text-gray-600">Track every shipment, every mode, everywhere—on one platform.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm flex flex-col items-center text-center">
              <BarChart3 className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">AI-powered insights and ETAs help you plan and avoid costly delays.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm flex flex-col items-center text-center">
              <Globe className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Global Network</h3>
              <p className="text-gray-600">Ocean, air, and trucking—connect to the world's top carriers and routes.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm flex flex-col items-center text-center">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Bank-level security, 99.99% uptime, and 24/7 support for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <Image src="/air-freight.png" alt="Air Freight" width={120} height={120} className="mb-4" />
            <h3 className="font-semibold text-lg mb-2">Air Freight</h3>
            <p className="text-gray-600">Fast, reliable air freight solutions for time-sensitive shipments worldwide.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/Ocean-freight.jpg" alt="Ocean Freight" width={120} height={120} className="mb-4 rounded-lg" />
            <h3 className="font-semibold text-lg mb-2">Ocean Freight</h3>
            <p className="text-gray-600">Cost-effective ocean freight with global coverage and real-time tracking.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/trucking.png" alt="Trucking" width={120} height={120} className="mb-4" />
            <h3 className="font-semibold text-lg mb-2">Trucking</h3>
            <p className="text-gray-600">Reliable ground transportation with comprehensive coverage across continents.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How FlipRoutes Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">1</div>
              <h3 className="font-semibold text-lg mb-2">Book & Ship</h3>
              <p className="text-gray-600">Create a shipment in seconds. Choose your mode, carrier, and route.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">2</div>
              <h3 className="font-semibold text-lg mb-2">Track in Real Time</h3>
              <p className="text-gray-600">See every milestone, get live map updates, and receive instant notifications.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">3</div>
              <h3 className="font-semibold text-lg mb-2">Analyze & Optimize</h3>
              <p className="text-gray-600">Review analytics, spot trends, and optimize your supply chain for efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Trusted by Leading Businesses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl p-8 shadow flex flex-col items-center text-center">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <p className="text-gray-700 mb-4">"FlipRoutes has transformed our logistics. We always know where our shipments are and can plan with confidence."</p>
              <span className="font-semibold text-gray-900">Logistics Manager, Acme Corp</span>
            </div>
            <div className="bg-white rounded-xl p-8 shadow flex flex-col items-center text-center">
              <Zap className="w-10 h-10 text-blue-600 mb-4" />
              <p className="text-gray-700 mb-4">"The predictive ETAs and real-time tracking are game changers. Our customers are happier than ever."</p>
              <span className="font-semibold text-gray-900">COO, FastFreight</span>
            </div>
            <div className="bg-white rounded-xl p-8 shadow flex flex-col items-center text-center">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
              <p className="text-gray-700 mb-4">"Security and reliability are critical for us. FlipRoutes delivers on both, every time."</p>
              <span className="font-semibold text-gray-900">Head of Ops, SecureShip</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to move smarter?</h2>
        <p className="text-lg text-gray-700 mb-8">Join thousands of businesses already using FlipRoutes for their logistics needs.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/login">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/track">
            <Button size="lg" variant="outline">Track a Shipment</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FlipRoutes</h3>
              <p className="text-gray-400">The smartest way to track shipments and manage your global supply chain.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/track" className="hover:text-white">Track Shipment</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/login" className="hover:text-white">Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">API Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FlipRoutes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 