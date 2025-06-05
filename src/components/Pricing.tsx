
import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5 team members',
      '10GB storage',
      'Basic analytics',
      'Email support',
      'Basic integrations'
    ],
    popular: false
  },
  {
    name: 'Pro',
    price: 99,
    description: 'Best for growing businesses',
    features: [
      'Up to 25 team members',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'All integrations',
      'Custom workflows',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 299,
    description: 'For large organizations',
    features: [
      'Unlimited team members',
      '1TB storage',
      'Enterprise analytics',
      '24/7 phone support',
      'All integrations',
      'Custom workflows',
      'Full API access',
      'SSO integration',
      'Custom branding'
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple, transparent pricing
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl ${
                plan.popular 
                  ? 'bg-white border-2 border-blue-500 shadow-2xl scale-105' 
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-center justify-center">
                  <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
