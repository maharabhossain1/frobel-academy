"use client";

import { motion } from "motion/react";
import { BookOpen, Users, Trophy, Building2 } from "lucide-react";
import { useState } from "react";

const featureItems = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "Comprehensive curriculum designed for holistic development",
  },
  {
    icon: Users,
    title: "Co-Curricular Activities",
    description: "Sports, arts, music, and leadership programs",
  },
  {
    icon: Trophy,
    title: "Awards & Recognition",
    description: "National and international accreditations",
  },
  {
    icon: Building2,
    title: "World-Class Facilities",
    description: "Modern infrastructure with cutting-edge technology",
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold  mb-4">Why Choose Us</h2>
          <p className="text-gray-400 text-lg">
            Excellence across all dimensions of education
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="relative border-y border-gray-800 xl:border-none xl:px-6 xl:py-7">
          {/* Top and Bottom Border Lines for Desktop */}
          <div className="absolute left-0 top-0 hidden xl:block h-px w-full bg-gray-200" />
          <div className="absolute left-0 bottom-0 hidden xl:block h-px w-full bg-gray-200" />

          {/* Animated Indicator Line */}
          <motion.div
            className="absolute top-0 hidden xl:block h-px bg-red-600 transition-all"
            style={{
              left: `${activeTab * 25}%`,
              width: "25%",
            }}
            initial={false}
            animate={{
              left: `${activeTab * 25}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />

          {/* Corner Dots */}
          <div className="absolute -top-1.5 -left-px hidden xl:block w-3 h-3 rounded bg-red-100 z-10" />
          <div className="absolute -top-1.5 -right-px hidden xl:block w-3 h-3 rounded bg-red-100 z-10" />
          <div className="absolute -bottom-1.5 -left-px hidden xl:block w-3 h-3 rounded bg-red-100 z-10" />
          <div className="absolute -bottom-1.5 -right-px hidden xl:block w-3 h-3 rounded bg-red-100 z-10" />

          {/* Mobile Active Indicator */}
          <div
            className="absolute -top-px left-4 h-px w-9 bg-red-600 xl:hidden transition-all duration-300"
            style={{
              transform: `translateX(${activeTab * 100}px)`,
            }}
          />

          {/* Tab Buttons */}
          <div className="flex overflow-x-auto xl:grid xl:grid-cols-4 gap-0">
            {featureItems.map((feature, idx) => {
              const Icon = feature.icon;
              const isActive = activeTab === idx;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className="group relative flex-1 min-w-[200px] xl:min-w-0 flex items-center gap-3.5 text-left p-4 xl:flex-col xl:gap-0 xl:text-center xl:py-0 xl:px-4"
                >
                  {/* Divider Lines (Desktop) */}
                  {idx > 0 && (
                    <div className="absolute left-0 top-0 hidden xl:block h-full w-px bg-gray-100" />
                  )}

                  {/* Icon Container */}
                  <div
                    className={`relative flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-red-800 shadow-lg"
                        : "bg-gray-100 group-hover:bg-red-600/20"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors duration-200 ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 group-hover:text-red-500"
                      }`}
                    />
                  </div>

                  <div className="min-w-0 xl:mt-4">
                    <div
                      className={`text-sm font-medium transition-colors duration-200 truncate `}
                    >
                      {feature.title}
                    </div>
                    <div className="mt-1 text-xs text-gray-500 xl:block hidden">
                      {feature.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Panel (Mobile - shows description) */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 xl:hidden"
        >
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <p className="text-gray-400 text-sm">
              {featureItems[activeTab].description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
