"use client";

import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-red-900/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              Frobel Academy
            </h3>
            <p className="text-gray-400">Shaping minds, building futures.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {["About Us", "Academics", "Admissions", "Events"].map(link => (
                <li
                  key={link}
                  className="hover:text-red-500 cursor-pointer transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              {["Parent Portal", "Student Portal", "Gallery", "News"].map(
                link => (
                  <li
                    key={link}
                    className="hover:text-red-500 cursor-pointer transition-colors"
                  >
                    {link}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="flex items-center gap-3 text-gray-400 hover:text-red-500 cursor-pointer transition-colors">
              <Phone className="w-5 h-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 hover:text-red-500 cursor-pointer transition-colors">
              <Mail className="w-5 h-5" />
              <span>info@frobelacademy.edu</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 hover:text-red-500 cursor-pointer transition-colors">
              <MapPin className="w-5 h-5" />
              <span>123 Education Lane</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-red-900/30 pt-8 text-center text-gray-400 origin-left"
        >
          <p>&copy; 2026 Frobel Academy. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
