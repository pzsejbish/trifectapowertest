import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-red-900 to-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-black flex items-center justify-center shadow-lg shadow-red-500/30">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Trifecta Power</h3>
            </div>
            <p className="text-red-100 mb-4 leading-relaxed">
              Licensed C10 electrical contractor providing comprehensive renewable energy solutions across Southern California.
            </p>
            <div className="text-sm text-red-200">
              License #: C10 Certified
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-red-100">
              <li className="hover:text-white transition-colors cursor-pointer">Solar Installation</li>
              <li className="hover:text-white transition-colors cursor-pointer">EV Charger Installation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Battery Systems</li>
              <li className="hover:text-white transition-colors cursor-pointer">System Repair</li>
              <li className="hover:text-white transition-colors cursor-pointer">Home Inspections</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-red-100">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-300" />
                <a href="tel:8778980731" className="hover:text-white transition-colors">
                  (877) 898-0731
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-300" />
                <a href="mailto:trifectapower3@gmail.com" className="hover:text-white transition-colors">
                  trifectapower3@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-red-300" />
                <span>Riverside, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-red-100">
              <div>Monday - Friday</div>
              <div className="text-white font-medium">7:00 AM - 6:00 PM</div>
              <div className="mt-4">
                <div>Saturday</div>
                <div className="text-white font-medium">8:00 AM - 4:00 PM</div>
              </div>
              <div className="mt-4">
                <div>Sunday</div>
                <div className="text-white font-medium">Emergency Only</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-red-100 mb-4 md:mb-0">
            © 2025 Trifecta Power. All rights reserved.
          </div>
          <div className="text-red-100 text-sm">
            Licensed, Bonded & Insured • Serving Southern California
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;