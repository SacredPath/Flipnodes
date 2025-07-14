'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, Clock, DollarSign, MapPin, Smartphone, Globe, Shield, Zap, Users, BarChart3, FileText, Truck, Package, Star, ChevronRight, Phone, Mail, MessageSquare, Download, Bell, Eye, Navigation as NavigationIcon, Camera } from 'lucide-react'
import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function MobilePage() {
  const [selectedPlatform, setSelectedPlatform] = useState('ios')

  const features = [
    {
      title: 'Real-Time Tracking',
      description: 'Track shipments with GPS precision and live updates',
      icon: Eye
    },
    {
      title: 'Push Notifications',
      description: 'Instant alerts for milestones, delays, and updates',
      icon: Bell
    },
    {
      title: 'Offline Mode',
      description: 'Access data and track shipments without internet',
      icon: Shield
    },
    {
      title: 'Document Scanner',
      description: 'Scan shipping documents and invoices instantly',
      icon: Camera
    },
    {
      title: 'Route Optimization',
      description: 'Get optimized routes and real-time navigation',
      icon: NavigationIcon
    },
    {
      title: 'Analytics Dashboard',
      description: 'View performance metrics and insights on mobile',
      icon: BarChart3
    }
  ]

  const reviews = [
    {
      name: 'Sarah Johnson',
      company: 'Global Logistics Co.',
      rating: 5,
      comment: 'The mobile app is incredibly intuitive. Real-time tracking has transformed how we monitor our shipments.'
    },
    {
      name: 'Michael Chen',
      company: 'Tech Imports Ltd.',
      rating: 5,
      comment: 'Push notifications keep us updated instantly. The offline mode is a game-changer for our field team.'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Fast Freight Solutions',
      rating: 5,
      comment: 'Document scanning feature saves us hours. The app is essential for our daily operations.'
    }
  ]

  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 right-0 w-full h-full">
          <Image
            src="/document-scanner.svg"
            alt="Mobile App Document Scanner Illustration"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Smartphone className="w-4 h-4 mr-2" />
              Mobile-First Logistics
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Mobile App
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Take your logistics operations mobile with our powerful app. Track shipments, manage inventory, 
              and stay connected with real-time updates anywhere, anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#download">
                <Button size="lg" className="flex items-center text-lg px-8 py-4">
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="flex items-center text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* App Stats */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.8★</div>
              <div className="text-gray-600">App Store Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">App Features</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Powerful features designed for logistics professionals on the go
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                {feature.title === 'Document Scanner' && (
                  null
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Download the App</h2>
              <p className="text-xl text-gray-700">
                Available on iOS and Android devices
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Smartphone className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">iOS App</h3>
                  <p className="text-gray-600 mb-6">
                    Download from the App Store and get started in minutes
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">iOS 13.0 or later</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">iPhone & iPad compatible</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">Offline functionality</span>
                    </div>
                  </div>
                  <Button className="w-full" size="lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download for iOS
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm border">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Smartphone className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Android App</h3>
                  <p className="text-gray-600 mb-6">
                    Download from Google Play Store and start tracking
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">Android 8.0 or later</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">All Android devices</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">Offline functionality</span>
                    </div>
                  </div>
                  <Button className="w-full" size="lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download for Android
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Users Say</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See what logistics professionals are saying about our mobile app
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{review.comment}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-600">{review.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">App Screenshots</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See the app in action with these screenshots
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 rounded-2xl p-8 mb-4 h-96 flex items-center justify-center">
                <Image src="/tracking-dashboard.svg" alt="Tracking Dashboard Screenshot" width={220} height={400} className="rounded-lg shadow object-contain h-full" />
              </div>
              <h3 className="font-semibold">Tracking Dashboard</h3>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 rounded-2xl p-8 mb-4 h-96 flex items-center justify-center">
                <Image src="/analytics-view.svg" alt="Analytics View Screenshot" width={220} height={400} className="rounded-lg shadow object-contain h-full" />
              </div>
              <h3 className="font-semibold">Analytics View</h3>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 rounded-2xl p-8 mb-4 h-96 flex items-center justify-center">
                <Image src="/fulfilment.png" alt="Document Scanner Screenshot" width={220} height={400} className="rounded-lg shadow object-contain h-full" />
              </div>
              <h3 className="font-semibold">Document Scanner</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Go Mobile?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Download the app and take your logistics operations with you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#download">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 