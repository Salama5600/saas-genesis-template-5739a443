
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { AuthProvider } from '../context/AuthContext';

const Index = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default Index;
