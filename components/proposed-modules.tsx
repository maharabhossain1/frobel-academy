"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const proposedItems = [
  "Admission Button",
  "School Tour Video",
  "FA Facilities",
  "Newsletter",
  "Recent Notice",
  "Our Gallery",
  "Upcoming Events (With Registration & Payment)",
  "Frobel in Numbers",
  "Our Portal (Parents, Students, Teachers)",
];

export default function ProposedModules() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-2">
            Upcoming Enhancements
          </h2>
          <p className="text-gray-400">
            New features coming to elevate your experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {proposedItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-red-900/20 transition-colors group cursor-pointer border border-red-900/20 hover:border-red-600/40"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1 group-hover:text-red-400" />
              </motion.div>
              <p className="text-white font-medium group-hover:text-red-400 transition-colors">
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
