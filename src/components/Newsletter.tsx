
import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Store in localStorage (mock backend)
    const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
    if (!subscribers.includes(email)) {
      subscribers.push(email);
      localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
      
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest updates and insights.",
      });
      setEmail('');
    } else {
      toast({
        title: "Already subscribed",
        description: "This email is already on our newsletter list.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Stay in the loop
        </h2>
        <p className="text-xl text-blue-100 mb-12">
          Get the latest updates, tips, and insights delivered straight to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
