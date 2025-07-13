'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, ShieldCheck, Truck, Globe, BarChart3, Users, Zap, Menu, X, Play, Star, MapPin, Clock, DollarSign, TrendingUp, Award, Headphones, FileText, Settings, Database, Lock, Eye, Bell, Smartphone, Monitor, Tablet, ChevronRight, ChevronDown, ExternalLink, Mail, Phone, MessageSquare } from 'lucide-react'
import { useState } from 'react'

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="FlipRoutes"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600 py-2"
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Solutions
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-lg border rounded-lg py-2">
                    <Link href="/air-freight" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Air Freight</Link>
                    <Link href="/ocean-freight" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Ocean Freight</Link>
                    <Link href="/trucking" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Trucking</Link>
                    <Link href="/warehousing" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Warehousing</Link>
                    <Link href="/customs" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Customs Clearance</Link>
                  </div>
                )}
              </div>
              
              <div className="relative group">
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600 py-2"
                  onMouseEnter={() => setActiveDropdown('platform')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Platform
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === 'platform' && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-lg border rounded-lg py-2">
                    <Link href="/tracking" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Shipment Tracking</Link>
                    <Link href="/analytics" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Analytics & Insights</Link>
                    <Link href="/api" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">API & Integrations</Link>
                    <Link href="/mobile" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Mobile App</Link>
                  </div>
                )}
              </div>
              
              <Link href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link href="/careers" className="text-gray-700 hover:text-blue-600">Careers</Link>
              <Link href="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
              <Link href="/login">
                <Button size="sm">Get Started</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
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
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className="border-b border-gray-200 pb-2 mb-2">
                  <div className="text-sm font-medium text-gray-500 px-3 py-2">Solutions</div>
                  <Link href="/air-freight" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Air Freight</Link>
                  <Link href="/ocean-freight" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Ocean Freight</Link>
                  <Link href="/trucking" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Trucking</Link>
                  <Link href="/warehousing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Warehousing</Link>
                  <Link href="/customs" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Customs Clearance</Link>
                </div>
                <div className="border-b border-gray-200 pb-2 mb-2">
                  <div className="text-sm font-medium text-gray-500 px-3 py-2">Platform</div>
                  <Link href="/tracking" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Shipment Tracking</Link>
                  <Link href="/analytics" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Analytics & Insights</Link>
                  <Link href="/api" className="block px-3 py-2 text-gray-700 hover:text-blue-600">API & Integrations</Link>
                  <Link href="/mobile" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Mobile App</Link>
                </div>
                <Link href="/pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Pricing</Link>
                <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
                <Link href="/careers" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Careers</Link>
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
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 right-0 w-full h-full">
          <Image
            src="/hero-section.png"
            alt="Global Logistics"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 pt-20 pb-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 10,000+ companies worldwide
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              The Platform for <span className="text-blue-600">Global Trade</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              FlipRoutes is the leading technology platform for global logistics. We connect and digitize the world's supply chains, making global trade easier, more efficient, and more accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/login">
                <Button size="lg" className="flex items-center text-lg px-8 py-4">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="flex items-center text-lg px-8 py-4">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                No setup fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Instant quotes
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Real-time tracking
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">$19B+</div>
              <div className="text-gray-600">Freight under management</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Companies worldwide</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Countries served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full opacity-10">
          <Image
            src="/Ocean-freight.jpg"
            alt="Ocean Freight"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Supply Chain Solutions</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From air freight to ocean freight, customs to warehousing, we provide end-to-end logistics solutions that keep your business moving forward.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <Image src="/air-freight.png" alt="Air Freight" fill className="object-cover" />
              </div>
              <div className="relative">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Air Freight</h3>
                <p className="text-gray-600 mb-6">Fast, reliable air freight solutions with real-time tracking and instant quotes from major carriers worldwide.</p>
                <Link href="/air-freight" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <Image src="/Ocean-freight.jpg" alt="Ocean Freight" fill className="object-cover" />
              </div>
              <div className="relative">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Ocean Freight</h3>
                <p className="text-gray-600 mb-6">Cost-effective ocean freight with comprehensive coverage, customs clearance, and end-to-end visibility.</p>
                <Link href="/ocean-freight" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <Image src="/trucking.png" alt="Trucking" fill className="object-cover" />
              </div>
              <div className="relative">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Trucking</h3>
                <p className="text-gray-600 mb-6">Reliable ground transportation with comprehensive coverage across North America, Europe, and Asia.</p>
                <Link href="/trucking" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <Image src="/fulfilment.png" alt="Warehousing" fill className="object-cover" />
              </div>
              <div className="relative">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Warehousing</h3>
                <p className="text-gray-600 mb-6">Strategic warehousing solutions with inventory management, order fulfillment, and distribution services.</p>
                <Link href="/warehousing" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <Image src="/hero-section.png" alt="Customs" fill className="object-cover" />
              </div>
              <div className="relative">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Customs Clearance</h3>
                <p className="text-gray-600 mb-6">Expert customs brokerage with automated documentation, duty calculation, and compliance management.</p>
                <Link href="/customs" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <Image src="/hero-section.png" alt="Supply Chain" fill className="object-cover" />
              </div>
              <div className="relative">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Supply Chain Management</h3>
                <p className="text-gray-600 mb-6">End-to-end supply chain visibility with predictive analytics, risk management, and optimization tools.</p>
                <Link href="/supply-chain" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The FlipRoutes Platform</h2>
              <p className="text-xl text-gray-700 mb-8">
                Our technology platform provides real-time visibility, predictive analytics, and seamless integration with your existing systems.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Real-Time Visibility</h3>
                    <p className="text-gray-600">Track every shipment in real-time with live updates, milestone tracking, and instant notifications.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Predictive Analytics</h3>
                    <p className="text-gray-600">AI-powered insights help you predict delays, optimize routes, and reduce costs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Lock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
                    <p className="text-gray-600">Bank-level security with SOC 2 compliance, data encryption, and role-based access controls.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Mobile & API Access</h3>
                    <p className="text-gray-600">Access your data anywhere with our mobile app and comprehensive API for seamless integrations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Shipment Tracking</h4>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm">Order Confirmed</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm">In Transit</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm">Customs Clearance</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-500">Out for Delivery</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold mb-4">Analytics Dashboard</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">98%</div>
                      <div className="text-xs text-gray-600">On-time delivery</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">$2.4M</div>
                      <div className="text-xs text-gray-600">Cost savings</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">24/7</div>
                      <div className="text-xs text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How FlipRoutes Works</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get started in minutes with our simple, three-step process that connects you to the global supply chain.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold mb-4">Get Instant Quotes</h3>
              <p className="text-gray-600 mb-6">Enter your shipment details and receive instant quotes from our network of carriers and logistics providers.</p>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-sm text-gray-500 mb-2">Sample Quote</div>
                <div className="text-2xl font-bold text-blue-600">$1,247</div>
                <div className="text-xs text-gray-600">Air Freight • 3-5 days</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold mb-4">Book & Ship</h3>
              <p className="text-gray-600 mb-6">Book your shipment with a single click. We handle all documentation, customs, and logistics coordination.</p>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-sm text-gray-500 mb-2">Booking Confirmed</div>
                <div className="text-sm font-medium text-green-600">✓ Documentation Complete</div>
                <div className="text-sm font-medium text-green-600">✓ Customs Filed</div>
                <div className="text-sm font-medium text-green-600">✓ Carrier Assigned</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold mb-4">Track & Manage</h3>
              <p className="text-gray-600 mb-6">Monitor your shipment in real-time, receive updates, and manage your entire supply chain from one platform.</p>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-sm text-gray-500 mb-2">Live Tracking</div>
                <div className="text-sm font-medium text-blue-600">📍 Shanghai, China</div>
                <div className="text-sm text-gray-600">ETA: Dec 15, 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Companies of all sizes rely on FlipRoutes to move their goods efficiently and cost-effectively around the world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "FlipRoutes has transformed our logistics operations. The real-time tracking and predictive analytics have reduced our delivery times by 30% and saved us millions in operational costs."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  SM
                </div>
                <div>
                  <div className="font-semibold">Sarah Martinez</div>
                  <div className="text-sm text-gray-600">VP of Operations, TechCorp</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "The platform's ease of use and comprehensive coverage have made global trade accessible to our small business. We can now compete with much larger companies."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  MJ
                </div>
                <div>
                  <div className="font-semibold">Michael Johnson</div>
                  <div className="text-sm text-gray-600">Founder, Global Imports</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "The customer support is exceptional. Any issues are resolved quickly, and the team is always available to help optimize our supply chain strategy."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  LC
                </div>
                <div>
                  <div className="font-semibold">Lisa Chen</div>
                  <div className="text-sm text-gray-600">Logistics Manager, Fashion Forward</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">Join 10,000+ Companies</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-gray-500 font-semibold">TechCorp</div>
              <div className="text-gray-500 font-semibold">Global Imports</div>
              <div className="text-gray-500 font-semibold">Fashion Forward</div>
              <div className="text-gray-500 font-semibold">Manufacturing Co</div>
              <div className="text-gray-500 font-semibold">Retail Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Supply Chain?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using FlipRoutes to streamline their global logistics operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Get Started Free
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                Schedule Demo
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-blue-100 text-sm">
            No setup fees • No long-term contracts • Cancel anytime
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="mb-4">
                <Image
                  src="/logo.svg"
                  alt="FlipRoutes"
                  width={120}
                  height={40}
                  className="h-8 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 mb-6">
                The platform for global trade. We connect and digitize the world's supply chains.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/air-freight" className="hover:text-white">Air Freight</Link></li>
                <li><Link href="/ocean-freight" className="hover:text-white">Ocean Freight</Link></li>
                <li><Link href="/trucking" className="hover:text-white">Trucking</Link></li>
                <li><Link href="/warehousing" className="hover:text-white">Warehousing</Link></li>
                <li><Link href="/customs" className="hover:text-white">Customs Clearance</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/tracking" className="hover:text-white">Shipment Tracking</Link></li>
                <li><Link href="/analytics" className="hover:text-white">Analytics & Insights</Link></li>
                <li><Link href="/api" className="hover:text-white">API & Integrations</Link></li>
                <li><Link href="/mobile" className="hover:text-white">Mobile App</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/press" className="hover:text-white">Press</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2024 FlipRoutes. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-white">Cookie Policy</Link>
                <Link href="/security" className="hover:text-white">Security</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 