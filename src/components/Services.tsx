import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Car, Battery, Wrench, Home, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: "Solar Installation",
    description: "Professional solar panel installation and system design for maximum energy efficiency and cost savings.",
    features: ["Custom system design", "High-efficiency panels", "Grid-tie systems", "Battery backup options"]
  },
  {
    icon: Car,
    title: "EV Charger Installation",
    description: "Complete EV charging solutions for your home or business, from Level 1 to Level 3 charging stations.",
    features: ["Level 2 home chargers", "Commercial stations", "Smart charging", "Load balancing"]
  },
  {
    icon: Battery,
    title: "Battery Systems",
    description: "Energy storage solutions to maximize your solar investment and provide backup power during outages.",
    features: ["Tesla Powerwall", "Lithium batteries", "Backup systems", "Grid independence"]
  },
  {
    icon: Wrench,
    title: "System Repair",
    description: "Expert diagnosis and repair of existing solar, electrical, and energy systems to restore optimal performance.",
    features: ["System diagnostics", "Component replacement", "Performance optimization", "Maintenance plans"]
  },
  {
    icon: Home,
    title: "Home Inspections",
    description: "Comprehensive electrical inspections for real estate transactions and safety assessments.",
    features: ["Real estate inspections", "Safety assessments", "Code compliance", "Detailed reports"]
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "All work performed by licensed C10 electricians with full insurance coverage for your peace of mind.",
    features: ["C10 contractor license", "Fully insured", "Bonded work", "Warranty included"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive electrical and renewable energy solutions backed by professional licensing and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden group-hover:border-blue-500/30 relative">
                {/* Electric Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-400/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-400/5 group-hover:to-blue-500/5 transition-all duration-500" />
                {/* Electric Corner Sparks */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-red-400 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-ping delay-200 transition-opacity duration-300" />
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-black flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-blue-500/50 transition-all duration-300 shadow-lg shadow-red-500/30 relative overflow-hidden">
                    {/* Electric Current Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-300/30 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;