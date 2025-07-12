'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, ShieldCheck, Truck, Globe, BarChart3, Users, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="bg-white">
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
              <p className="text-gray-600">Ocean, air, and trucking—connect to the world’s top carriers and routes.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm flex flex-col items-center text-center">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Bank-level security, 99.99% uptime, and 24/7 support for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How FlipRoutes Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <Image src="/air-freight.png" alt="Book" width={120} height={120} className="mb-4" />
            <h3 className="font-semibold text-lg mb-2">Book & Ship</h3>
            <p className="text-gray-600">Create a shipment in seconds. Choose your mode, carrier, and route.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/trucking.png" alt="Track" width={120} height={120} className="mb-4" />
            <h3 className="font-semibold text-lg mb-2">Track in Real Time</h3>
            <p className="text-gray-600">See every milestone, get live map updates, and receive instant notifications.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/fulfilment.png" alt="Analyze" width={120} height={120} className="mb-4" />
            <h3 className="font-semibold text-lg mb-2">Analyze & Optimize</h3>
            <p className="text-gray-600">Review analytics, spot trends, and optimize your supply chain for efficiency.</p>
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
              <p className="text-gray-700 mb-4">“FlipRoutes has transformed our logistics. We always know where our shipments are and can plan with confidence.”</p>
              <span className="font-semibold text-gray-900">Logistics Manager, Acme Corp</span>
            </div>
            <div className="bg-white rounded-xl p-8 shadow flex flex-col items-center text-center">
              <Zap className="w-10 h-10 text-blue-600 mb-4" />
              <p className="text-gray-700 mb-4">“The predictive ETAs and real-time tracking are game changers. Our customers are happier than ever.”</p>
              <span className="font-semibold text-gray-900">COO, FastFreight</span>
            </div>
            <div className="bg-white rounded-xl p-8 shadow flex flex-col items-center text-center">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
              <p className="text-gray-700 mb-4">“Security and reliability are critical for us. FlipRoutes delivers on both, every time.”</p>
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
    </div>
  )
} 