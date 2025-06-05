
import React from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CEO, TechStart',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786',
    content: 'SaaSify completely transformed how we operate. The automation features saved us 20 hours per week, and the analytics helped us increase revenue by 150%.'
  },
  {
    name: 'Michael Chen',
    title: 'CTO, GrowthCorp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    content: 'The integration capabilities are outstanding. We connected all our tools in minutes, not days. The team collaboration features are game-changing.'
  },
  {
    name: 'Emily Rodriguez',
    title: 'Head of Operations, ScaleUp',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    content: 'Security was our main concern, but SaaSify exceeded all expectations. Enterprise-grade security with the simplicity we needed.'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loved by teams worldwide
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            See what our customers have to say about their experience with SaaSify.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200"
            >
              <div className="mb-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
