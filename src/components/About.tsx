import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Users, Clock, Star } from 'lucide-react';

const stats = [
  { icon: Award, label: "Licensed C10", value: "Certified" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Clock, label: "Years Experience", value: "15+" },
  { icon: Star, label: "Quality Work", value: "100%" }
];

const About = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-black via-red-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-red/10 bg-grid-16" />
      
      {/* Electric Energy Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-400/20 to-transparent animate-pulse delay-1000" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            <span className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
              About Trifecta Power
            </span>
            </h2>
            <div className="space-y-6 text-lg text-red-100 leading-relaxed">
              <p>
                As a licensed C10 electrical contractor, Trifecta Power brings expertise and professionalism 
                to every project. We specialize in renewable energy solutions that help California homeowners 
                and businesses reduce their carbon footprint while saving money.
              </p>
              <p>
                Our comprehensive services include solar panel installation, EV charging stations, battery 
                storage systems, and electrical repairs. We also provide thorough home inspections for 
                real estate agencies, ensuring safety and compliance with all local codes.
              </p>
              <p>
                Based in Riverside, CA, we serve the entire Southern California region with reliable, 
                efficient, and cost-effective electrical solutions. Every installation is backed by 
                our commitment to quality workmanship and customer satisfaction.
              </p>
            </div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button 
                size="lg" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border-0 shadow-2xl shadow-red-500/30 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-red-900/20 backdrop-blur-md border-red-500/30 p-6 text-center hover:bg-red-900/30 transition-all duration-300 shadow-lg shadow-red-500/10">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-black flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-red-200">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;