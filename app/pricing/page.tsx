'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Check, 
  X,
  Star,
  Package,
  Truck,
  Globe,
  Shield,
  Zap,
  DollarSign,
  Users,
  ArrowRight
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and individuals',
      price: billingCycle === 'monthly' ? 29 : 290,
      originalPrice: billingCycle === 'monthly' ? 39 : 390,
      features: [
        'Up to 50 shipments per month',
        'Basic tracking and notifications',
        'Email support',
        'Standard delivery times',
        'Basic analytics',
        'Mobile app access'
      ],
      notIncluded: [
        'Priority support',
        'Custom branding',
        'Advanced analytics',
        'API access'
      ],
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: billingCycle === 'monthly' ? 99 : 990,
      originalPrice: billingCycle === 'monthly' ? 129 : 1290,
      features: [
        'Up to 500 shipments per month',
        'Advanced tracking and real-time updates',
        'Priority support',
        'Custom delivery options',
        'Advanced analytics and reporting',
        'API access',
        'Custom branding',
        'Dedicated account manager'
      ],
      notIncluded: [
        'Unlimited shipments',
        'White-label solution'
      ],
      popular: true,
      color: 'border-blue-500'
    },
    {
      name: 'Enterprise',
      description: 'For large-scale operations',
      price: 'Custom',
      originalPrice: null,
      features: [
        'Unlimited shipments',
        'White-label solution',
        'Custom integrations',
        'Dedicated support team',
        'Advanced security features',
        'Custom analytics dashboard',
        'SLA guarantees',
        'On-premise deployment options'
      ],
      notIncluded: [],
      popular: false,
      color: 'border-gray-200'
    }
  ]

  const features = [
    {
      title: 'Real-time Tracking',
      description: 'Track your shipments with GPS precision',
      icon: Package
    },
    {
      title: 'Global Coverage',
      description: 'Ship to over 200 countries worldwide',
      icon: Globe
    },
    {
      title: 'Secure & Reliable',
      description: 'Bank-level security for your data',
      icon: Shield
    },
    {
      title: 'Lightning Fast',
      description: 'Instant updates and notifications',
      icon: Zap
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 mb-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
              Choose the perfect plan for your business. All plans include our core tracking features with no hidden fees or surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#plans"><Button size="lg">See Plans</Button></Link>
              <Link href="/login"><Button size="lg" variant="outline">Start Free Trial</Button></Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 items-center text-gray-500 text-sm">
              <div className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-1" /> 14-day free trial</div>
              <div className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-1" /> Cancel anytime</div>
              <div className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-1" /> No credit card required</div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/hero-section.png" alt="Pricing" className="w-96 h-auto rounded-2xl shadow-xl object-cover" />
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-white p-1 rounded-lg border border-gray-200">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              billingCycle === 'monthly'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              billingCycle === 'yearly'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Yearly
            <span className="ml-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <section id="plans" className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 px-4">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`relative p-8 ${plan.popular ? 'ring-2 ring-blue-500' : ''} ${plan.color}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-6">
                {typeof plan.price === 'number' ? (
                  <div>
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    {plan.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        ${plan.originalPrice}/{billingCycle === 'monthly' ? 'month' : 'year'}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                )}
              </div>
              <Link href="/login">
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  variant={plan.popular ? 'primary' : 'outline'}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
              {plan.notIncluded.length > 0 && (
                <>
                  <h4 className="font-semibold text-gray-900 mb-4 mt-6">Not included:</h4>
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <X className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </>
              )}
            </div>
          </Card>
        ))}
      </section>

      {/* Features Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Everything you need to ship with confidence
        </h2>
        <p className="text-gray-600 mb-12">
          Our platform provides all the tools you need to manage your shipments effectively
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">
              Can I change my plan at any time?
            </h3>
            <p className="text-gray-600">
              Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">
              Do you offer volume discounts?
            </h3>
            <p className="text-gray-600">
              Yes, we offer custom pricing for high-volume customers. Contact our sales team to discuss your specific needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">
              What payment methods do you accept?
            </h3>
            <p className="text-gray-600">
              We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">
              Is there a free trial available?
            </h3>
            <p className="text-gray-600">
              Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mt-16 mb-24">
        <div className="bg-blue-600 rounded-2xl p-12 text-white max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already using FlipRoutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" variant="secondary">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 