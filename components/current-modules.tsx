"use client";

import { motion } from "motion/react";

const currentItems = [
  "Academic Curriculum",
  "Co-Curricular Activities",
  "News & Events",
  "Corporate Social Responsibility",
  "Accreditations",
];

export default function CurrentModules() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-2">
            Current Modules
          </h2>
          <p className="text-gray-400">What we currently offer</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {currentItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(220, 38, 38, 0.2)",
              }}
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-lg p-6 border border-red-900/30 hover:border-red-600/50 cursor-pointer transition-all"
            >
              <motion.div className="flex items-center gap-3 mb-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-10 h-10 rounded-full bg-red-900/40 flex items-center justify-center text-red-500 font-bold"
                >
                  {idx + 1}
                </motion.div>
              </motion.div>
              <p className="font-semibold text-white">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
