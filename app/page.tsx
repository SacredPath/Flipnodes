import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Globe, Truck, Plane, Ship, Package, Users, Clock, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Ship smarter, <br />
                <span className="text-blue-600">not harder</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                FlipRoutes is the modern logistics platform that helps businesses of all sizes 
                move freight globally by air, ocean, rail, and truck. Get real-time visibility, 
                predictive analytics, and seamless delivery management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/track" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Track Shipment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/pricing" 
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/hero-section.png"
                alt="FlipRoutes logistics platform"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Trusted by leading companies worldwide
            </h2>
            <p className="text-gray-600">
              Join thousands of businesses that trust FlipRoutes for their logistics needs
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-400">10K+</div>
              <div className="text-sm text-gray-500">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-400">150+</div>
              <div className="text-sm text-gray-500">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-400">99.9%</div>
              <div className="text-sm text-gray-500">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-400">24/7</div>
              <div className="text-sm text-gray-500">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete logistics solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From air freight to ocean shipping, we provide end-to-end logistics services 
              with real-time tracking and predictive analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Air Freight */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Plane className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Air Freight</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Fast, reliable air freight services with real-time tracking and customs clearance.
              </p>
              <Image
                src="/air-freight.png"
                alt="Air freight services"
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Express shipping options
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Customs documentation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Real-time tracking
                </li>
              </ul>
            </div>

            {/* Ocean Freight */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Ship className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Ocean Freight</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Cost-effective ocean shipping with comprehensive container tracking and management.
              </p>
              <Image
                src="/Ocean-freight.jpg"
                alt="Ocean freight services"
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  FCL and LCL options
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Port-to-port service
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Container tracking
                </li>
              </ul>
            </div>

            {/* Trucking */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Truck className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Trucking</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Reliable ground transportation with route optimization and driver tracking.
              </p>
              <Image
                src="/trucking.png"
                alt="Trucking services"
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Local and long-haul
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Route optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Driver tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why choose FlipRoutes?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with decades of logistics expertise 
              to deliver unmatched service and visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">
                Access to 150+ countries with local expertise and customs knowledge
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-gray-600">
                Track your shipments with precision using our advanced tracking system
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">
                AI-powered insights to optimize routes and predict delivery times
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security with 99.9% uptime guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to transform your logistics?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have already streamlined their supply chain 
            with FlipRoutes. Get started today with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/login" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/pricing" 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FlipRoutes</h3>
              <p className="text-gray-400 mb-4">
                Modern logistics platform for the digital age. Ship smarter, not harder.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Air Freight</Link></li>
                <li><Link href="#" className="hover:text-white">Ocean Freight</Link></li>
                <li><Link href="#" className="hover:text-white">Trucking</Link></li>
                <li><Link href="#" className="hover:text-white">Fulfillment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">About</Link></li>
                <li><Link href="#" className="hover:text-white">Careers</Link></li>
                <li><Link href="#" className="hover:text-white">Press</Link></li>
                <li><Link href="#" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white">API Documentation</Link></li>
                <li><Link href="#" className="hover:text-white">Status</Link></li>
                <li><Link href="#" className="hover:text-white">Contact Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FlipRoutes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 