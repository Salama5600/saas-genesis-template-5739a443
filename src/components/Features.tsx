
import React from 'react';
import { CheckCircle, Zap, Shield, BarChart3, Users, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built for speed with optimized performance that scales with your business growth.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with SOC 2 compliance and end-to-end encryption.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Real-time insights and customizable dashboards to make data-driven decisions.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamless collaboration tools that keep your team aligned and productive.'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy worldwide with our global infrastructure and 99.9% uptime guarantee.'
  },
  {
    icon: CheckCircle,
    title: 'Easy Integration',
    description: 'Connect with 100+ tools and services through our robust API ecosystem.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              scale your business
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Our comprehensive platform provides all the tools you need to build, 
            deploy, and scale your applications with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-blue-200 group"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
