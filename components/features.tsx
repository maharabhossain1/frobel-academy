"use client";

import { motion } from "motion/react";
import { BookOpen, Users, Trophy, Building2 } from "lucide-react";
import DashedCurve from "./DashedCurve";

const features = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "Comprehensive curriculum designed for holistic development and future-ready education.",
    stat: "15+",
    statLabel: "Programs",
    size: "large",
  },
  {
    icon: Users,
    title: "Co-Curricular Activities",
    description: "Sports, arts, music, and leadership programs.",
    stat: "30+",
    statLabel: "Activities",
    size: "small",
  },
  {
    icon: Trophy,
    title: "Awards & Recognition",
    description: "National and international accreditations.",
    stat: "50+",
    statLabel: "Awards",
    size: "small",
  },
  {
    icon: Building2,
    title: "World-Class Facilities",
    description:
      "Modern infrastructure with cutting-edge technology for optimal learning.",
    stat: "100%",
    statLabel: "Smart Campus",
    size: "small",
  },
];

export default function WhyFrobel() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm font-medium text-red-700">
              <span className="size-1.5 rounded-full bg-red-600" />
              Why Frobel Academy
            </span>
            <div className="flex justify-center gap-6 items-start">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                Excellence Across
                <br />
                <span className="text-red-600">All Dimensions</span>
              </h2>
              <div>
                <DashedCurve />
              </div>
            </div>
          </div>
          <p className="max-w-sm text-gray-600 md:text-right">
            Discover what makes us the premier choice for your child&apos;s
            education journey.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isLarge = feature.size === "large";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 ${
                  isLarge
                    ? "lg:col-span-2 lg:row-span-2"
                    : idx === 3
                    ? "lg:col-span-2 lg:row-span-1"
                    : "lg:col-span-1 lg:row-span-1"
                }`}
              >
                {/* Background Number */}
                <div className="pointer-events-none absolute -right-2 -bottom-4 select-none text-[120px] font-bold leading-none text-gray-100 transition-colors duration-300 group-hover:text-red-50 lg:text-[180px]">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Corner Accent */}
                <div className="absolute right-4 top-4 size-2 rounded-full bg-gray-200 transition-colors duration-300 group-hover:bg-red-600" />

                {/* Content */}
                <div
                  className={`relative z-10 flex h-full flex-col ${
                    isLarge ? "justify-between" : ""
                  }`}
                >
                  {/* Top Section */}
                  <div>
                    {/* Icon */}
                    <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-all duration-300   ">
                      <Icon className="size-6" strokeWidth={1.5} />
                    </div>

                    {/* Title & Description */}
                    <h3
                      className={`mb-2 font-bold text-gray-900 ${
                        isLarge ? "text-2xl" : "text-lg"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-gray-600 ${
                        isLarge ? "text-base" : "text-sm"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Section - Stats & Link */}
                  <div
                    className={`flex items-end justify-between ${
                      isLarge ? "mt-8" : "mt-4"
                    }`}
                  >
                    {/* Stat */}
                    <div>
                      <p
                        className={`font-bold text-gray-900 ${
                          isLarge ? "text-4xl" : "text-2xl"
                        }`}
                      >
                        {feature.stat}
                      </p>
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                        {feature.statLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
