import Link from 'next/link';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for individuals and small teams getting started',
      features: [
        'Up to 5 team members',
        'Basic task management',
        '3 projects',
        'Basic reporting',
        'Email support',
        '1GB storage',
      ],
      buttonText: 'Get Started',
      buttonStyle: 'border-2 border-gray-300 text-gray-700 hover:border-gray-400',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$12',
      description: 'Advanced features for growing teams and businesses',
      features: [
        'Up to 25 team members',
        'Advanced task management',
        'Unlimited projects',
        'Advanced reporting & analytics',
        'Priority support',
        '100GB storage',
        'Custom fields',
        'Time tracking',
        'Gantt charts',
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited team members',
        'Enterprise task management',
        'Unlimited projects',
        'Custom reporting & analytics',
        '24/7 dedicated support',
        'Unlimited storage',
        'Advanced security features',
        'API access',
        'Custom integrations',
        'Single sign-on (SSO)',
        'Admin controls',
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
      popular: false,
    },
  ];

  return (
  <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan for your team's needs. All plans include our core features with varying limits and advanced functionality.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 relative ${
                plan.popular ? 'border-2 border-blue-500 transform scale-105' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-600">/month</span>}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors text-center block ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Can I change my plan anytime?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Is there a free trial for paid plans?</h3>
              <p className="text-gray-600">Yes, we offer a 14-day free trial for both Pro and Enterprise plans. No credit card required.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}