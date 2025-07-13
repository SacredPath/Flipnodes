'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, Clock, DollarSign, MapPin, Users, Globe, Shield, Zap, BarChart3, FileText, Truck, Package, Star, ChevronRight, Phone, Mail, MessageSquare, Award, Target, Heart, Lightbulb, Users as TeamIcon } from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function AboutPage() {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible in logistics technology',
      icon: Lightbulb
    },
    {
      title: 'Reliability',
      description: 'Our customers trust us to deliver their shipments safely and on time',
      icon: Shield
    },
    {
      title: 'Transparency',
      description: 'We believe in complete visibility and honest communication',
      icon: Eye
    },
    {
      title: 'Customer Focus',
      description: 'Every decision we make is driven by customer success',
      icon: Heart
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former logistics executive with 15+ years in global supply chain management',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Technology leader with expertise in AI, machine learning, and logistics automation',
      image: '/team/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      bio: 'Operations expert with deep knowledge of international shipping and customs',
      image: '/team/emily.jpg'
    },
    {
      name: 'David Kim',
      role: 'VP of Sales',
      bio: 'Sales leader with 10+ years building relationships with global logistics partners',
      image: '/team/david.jpg'
    }
  ]

  const stats = [
    { number: '50+', label: 'Countries Served' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '1M+', label: 'Shipments Delivered' },
    { number: '99.9%', label: 'Customer Satisfaction' }
  ]

  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full">
          <Image
            src="/hero-section.png"
            alt="About FlipRoutes"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Users className="w-4 h-4 mr-2" />
              Our Story
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About FlipRoutes
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              We're revolutionizing global logistics through technology, transparency, and trust. 
              Our mission is to make international shipping as simple as sending an email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#team">
                <Button size="lg" className="flex items-center text-lg px-8 py-4">
                  Meet Our Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="flex items-center text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-xl text-gray-700">
                How we're transforming global logistics
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">The Beginning</h3>
                <p className="text-gray-700 mb-6">
                  FlipRoutes was founded in 2020 by a team of logistics professionals who were frustrated 
                  with the complexity and lack of transparency in global shipping. We saw an opportunity 
                  to leverage technology to solve real problems in the industry.
                </p>
                <p className="text-gray-700 mb-6">
                  What started as a simple tracking platform has grown into a comprehensive logistics 
                  solution that serves thousands of businesses worldwide. Our platform now handles 
                  everything from freight booking to customs clearance to final delivery.
                </p>
                <p className="text-gray-700">
                  Today, we're proud to serve customers in over 50 countries, with a team of 
                  dedicated professionals committed to making global logistics simple, transparent, 
                  and reliable.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Our Mission</h4>
                      <p className="text-gray-600">To make global logistics accessible, transparent, and efficient for businesses of all sizes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Our Vision</h4>
                      <p className="text-gray-600">A world where international shipping is as simple and reliable as domestic delivery.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Heart className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Our Promise</h4>
                      <p className="text-gray-600">Complete transparency, reliable service, and unwavering commitment to customer success.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The passionate professionals behind FlipRoutes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TeamIcon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Awards & Recognition</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Industry recognition for our innovation and excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Logistics Innovation Award</h3>
              <p className="text-gray-600 mb-4">Recognized for our breakthrough technology in supply chain management</p>
              <div className="text-sm text-gray-500">2023 • Supply Chain Excellence</div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer Choice Award</h3>
              <p className="text-gray-600 mb-4">Highest customer satisfaction rating in the logistics technology sector</p>
              <div className="text-sm text-gray-500">2023 • Industry Recognition</div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fastest Growing Company</h3>
              <p className="text-gray-600 mb-4">Recognized as one of the fastest-growing logistics technology companies</p>
              <div className="text-sm text-gray-500">2023 • Growth Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your logistics operations? Let's work together to make global shipping simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Get Started
              </Button>
            </Link>
            <Link href="/careers">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                Join Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 