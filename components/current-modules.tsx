"use client";

import { motion } from "motion/react";
import {
  Newspaper,
  Heart,
  GraduationCap,
  Users,
  Briefcase,
  Calendar,
  BookOpen,
  Mail,
  HelpCircle,
} from "lucide-react";

const currentModules = [
  {
    title: "News & Events",
    description: "Latest announcements and school happenings.",
    icon: Newspaper,
  },
  {
    title: "Corporate Social Responsibility",
    description: "Community engagement initiatives.",
    icon: Heart,
  },
  {
    title: "Online Admission",
    description: "Easy application and inquiry process.",
    icon: GraduationCap,
  },
  {
    title: "Parent & Student Portals",
    description: "Access grades and resources online.",
    icon: Users,
  },
  {
    title: "Career Opportunities",
    description: "Join our team of educators.",
    icon: Briefcase,
  },
  {
    title: "Academic Calendar",
    description: "Important dates and schedules.",
    icon: Calendar,
  },
  {
    title: "Teacher Resources",
    description: "Training and professional development.",
    icon: BookOpen,
  },
  {
    title: "Newsletter",
    description: "Subscribe for regular updates.",
    icon: Mail,
  },
  {
    title: "FAQ & Support",
    description: "Find answers to common questions.",
    icon: HelpCircle,
  },
];

export default function CurrentModules() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Main Container */}
        <div
          className="relative z-10 overflow-hidden rounded-2xl px-6 pb-8 pt-10 md:px-10 md:py-14 xl:rounded-[28px] xl:px-12 xl:py-16"
          style={{
            background: "linear-gradient(180deg, #1C1C1C 0%, #141414 100%)",
            boxShadow:
              "0 16px 8px rgba(31, 31, 31, .01), 0 12px 6px rgba(31, 31, 31, .04), 0 4px 4px rgba(31, 31, 31, .07), 0 1.5px 3px rgba(31, 31, 31, .08), 0 0 0 1px #0F0F0F, inset 0 1px 2px rgba(255, 255, 255, .12)",
          }}
        >
          {/* Decorative Corner Dots */}
          <div className="pointer-events-none absolute left-4 top-4 size-2 rounded-full bg-red-600/60" />
          <div className="pointer-events-none absolute right-4 top-4 size-2 rounded-full bg-red-600/60" />
          <div className="pointer-events-none absolute bottom-4 left-4 size-2 rounded-full bg-red-600/60" />
          <div className="pointer-events-none absolute bottom-4 right-4 size-2 rounded-full bg-red-600/60" />

          {/* Header Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 flex flex-col items-center gap-3 text-center md:mb-12"
          >
            {/* Badge */}
            <div
              className="mb-2 flex h-7 items-center gap-1.5 rounded-full bg-white/[.04] px-3 text-xs font-medium text-gray-400"
              style={{
                boxShadow: "0 0 0 1px rgba(255, 255, 255, .08)",
              }}
            >
              <span className="size-1.5 rounded-full bg-red-600" />
              Current Features
            </div>

            <h2 className="text-[28px] font-semibold leading-tight -tracking-[0.02em] text-white md:text-4xl xl:text-[44px]">
              What&apos;s Available Now
            </h2>
            <p className="max-w-md text-sm text-gray-500 md:text-base">
              Explore our existing modules and services designed to enhance your
              educational experience.
            </p>
          </motion.div>

          {/* Animated Line */}
          <div className="relative mb-10 h-px w-full md:mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-red-600 to-red-600/0"
            />
          </div>

          {/* Grid Items - 3x3 */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {currentModules.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative flex flex-col items-center rounded-xl border border-white/[.06] bg-white/[.02] p-6 text-center transition-colors hover:border-red-600/20 hover:bg-white/[.04]"
              >
                {/* Icon */}
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-600/20 to-red-600/10 text-red-600 ring-1 ring-red-600/20 transition-all group-hover:from-red-600/30 group-hover:to-red-600/20 group-hover:ring-red-600/30">
                  <item.icon className="size-5" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-base font-medium text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Animated Line */}
          <div className="relative mt-10 h-px w-full md:mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            <motion.div
              initial={{ scaleX: 0, originX: 1 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-red-600 to-red-600/0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
