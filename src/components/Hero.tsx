import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black via-red-900 to-black opacity-95"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-red/20 bg-grid-16 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {/* Electric Lightning Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-30 animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-24 bg-gradient-to-b from-transparent via-red-400 to-transparent opacity-40 animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-28 bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-35 animate-pulse delay-2000" />
      </div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src="https://raw.githubusercontent.com/PZSE/HTMLImageHosting/refs/heads/main/503208897_122102165744895662_5331915046716212939_n.jpg"
            alt="Trifecta Power Logo" 
            className="w-32 h-32 mx-auto mb-6 rounded-2xl shadow-2xl border border-white/20"
          />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent drop-shadow-2xl"
        >
          TRIFECTA POWER
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto leading-relaxed"
        >
          Licensed C10 Electrician • Solar Installation • EV Chargers • Battery Systems • Home Inspections
        </motion.p>

        {/* Contact Info Quick Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm md:text-base"
        >
          <div className="flex items-center gap-2 bg-red-900/30 backdrop-blur-md px-4 py-2 rounded-full border border-red-500/30 shadow-lg shadow-red-500/20">
            <Phone className="w-4 h-4 text-red-300" />
            <span>(877) 898-0731</span>
          </div>
          <div className="flex items-center gap-2 bg-red-900/30 backdrop-blur-md px-4 py-2 rounded-full border border-red-500/30 shadow-lg shadow-red-500/20">
            <Mail className="w-4 h-4 text-red-300" />
            <span>trifectapower3@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 bg-red-900/30 backdrop-blur-md px-4 py-2 rounded-full border border-red-500/30 shadow-lg shadow-red-500/20">
            <MapPin className="w-4 h-4 text-red-300" />
            <span>Riverside, CA</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border-0 shadow-2xl shadow-red-500/30 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-red-500/50"
          >
            Get Free Quote
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.open('tel:8778980731')}
            className="border-red-500/50 text-white hover:bg-red-900/20 backdrop-blur-md px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:border-red-400"
          >
            Call Now
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown className="w-6 h-6 text-white/70 hover:text-white transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;