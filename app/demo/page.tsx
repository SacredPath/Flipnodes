'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight, Clock, DollarSign, MapPin, Users, Globe, Shield, Zap, BarChart3, FileText, Truck, Package, Star, ChevronRight, Phone, Mail, MessageSquare, Calendar, Video, Play, Users as TeamIcon } from 'lucide-react'
import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    companySize: '',
    useCase: '',
    preferredTime: '',
    additionalInfo: ''
  })

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ]

  const useCases = [
    'International Shipping',
    'Supply Chain Management',
    'Inventory Management',
    'Customs Clearance',
    'Analytics & Reporting',
    'API Integration',
    'Other'
  ]

  const timeSlots = [
    '9:00 AM - 10:00 AM PST',
    '10:00 AM - 11:00 AM PST',
    '11:00 AM - 12:00 PM PST',
    '1:00 PM - 2:00 PM PST',
    '2:00 PM - 3:00 PM PST',
    '3:00 PM - 4:00 PM PST',
    '4:00 PM - 5:00 PM PST'
  ]

  const demoFeatures = [
    {
      title: 'Real-Time Tracking',
      description: 'See how our platform provides live shipment tracking with GPS precision',
      icon: Eye
    },
    {
      title: 'Automated Quoting',
      description: 'Experience instant freight quotes across multiple carriers and services',
      icon: DollarSign
    },
    {
      title: 'Document Management',
      description: 'Learn about our automated document processing and customs clearance',
      icon: FileText
    },
    {
      title: 'Analytics Dashboard',
      description: 'Explore our comprehensive analytics and reporting capabilities',
      icon: BarChart3
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for requesting a demo! We\'ll contact you within 24 hours to schedule your personalized demo.')
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      companySize: '',
      useCase: '',
      preferredTime: '',
      additionalInfo: ''
    })
  }

  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full">
          <Image
            src="/hero-section.png"
            alt="Request Demo"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Video className="w-4 h-4 mr-2" />
              Personalized Demo
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Request a Demo
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              See FlipRoutes in action with a personalized demo tailored to your business needs. 
              Our experts will show you how our platform can transform your logistics operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#demo-form">
                <Button size="lg" className="flex items-center text-lg px-8 py-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Demo
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

      {/* Demo Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What You'll See</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our personalized demo covers the features most relevant to your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demoFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form */}
      <section id="demo-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Schedule Your Demo</h2>
              <p className="text-xl text-gray-700">
                Fill out the form below and we'll contact you to schedule your personalized demo
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Size *
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select company size</option>
                        {companySizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Use Case *
                      </label>
                      <select
                        name="useCase"
                        value={formData.useCase}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select use case</option>
                        {useCases.map((useCase) => (
                          <option key={useCase} value={useCase}>
                            {useCase}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Demo Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select preferred time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your specific needs or questions..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Demo
                  </Button>
                </form>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <div className="font-medium">Personalized Demo</div>
                        <div className="text-sm text-gray-600">Tailored to your specific use case and business needs</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <div className="font-medium">Live Q&A</div>
                        <div className="text-sm text-gray-600">Ask questions and get immediate answers from our experts</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <div className="font-medium">No Sales Pressure</div>
                        <div className="text-sm text-gray-600">Focus on education and understanding your needs</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <div className="font-medium">Follow-up Support</div>
                        <div className="text-sm text-gray-600">Continued assistance after the demo</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Demo Duration</h3>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-medium">30-45 minutes</div>
                        <div className="text-sm text-gray-600">Perfect length to cover key features without overwhelming</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Hear from businesses that have transformed their logistics with FlipRoutes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"The demo was incredibly informative. The team really understood our needs and showed us exactly how FlipRoutes could solve our challenges."</p>
              <div>
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-sm text-gray-600">Logistics Manager, TechCorp</div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"The personalized demo helped us understand how the platform could integrate with our existing systems. Very professional and thorough."</p>
              <div>
                <div className="font-semibold text-gray-900">Michael Chen</div>
                <div className="text-sm text-gray-600">Operations Director, Global Imports</div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"After the demo, we immediately saw the value. The team answered all our questions and provided clear next steps."</p>
              <div>
                <div className="font-semibold text-gray-900">Emily Rodriguez</div>
                <div className="text-sm text-gray-600">Supply Chain Manager, FastFreight</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to See FlipRoutes in Action?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule your personalized demo and discover how we can transform your logistics operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#demo-form">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
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