"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { BookOpen, Lightbulb, GraduationCap, ArrowRight } from "lucide-react";
import DashedCurve from "./DashedCurve";

const programs = [
  {
    icon: BookOpen,
    label: "Primary Program",
    title: "Primary Education",
    description:
      "Comprehensive primary education program that nurtures curiosity, critical thinking, and a genuine love of learning.",
    features: [
      "Interactive Learning",
      "Creative Activities",
      "Foundation Skills",
    ],
  },
  {
    icon: GraduationCap,
    label: "Secondary Program",
    title: "Secondary Education",
    description:
      "Advanced curriculum preparing students for higher education with focus on analytical thinking and subject mastery.",
    features: ["Advanced Subjects", "Exam Preparation", "Career Guidance"],
  },
  {
    icon: Lightbulb,
    label: "IGCSE Program",
    title: "IGCSE Curriculum",
    description:
      "Internationally recognized qualification providing excellent preparation for A Level and university studies.",
    features: ["Global Standards", "Flexible Pathways", "University Ready"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function AcademicCurriculumSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 md:px-8 md:py-24">
      {/* Subtle Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] -translate-y-1/2 translate-x-1/2 rounded-full bg-red-50 opacity-60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            {/* Badge */}
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-700">
              <span className="size-1.5 rounded-full bg-red-600" />
              Academic Excellence
            </span>
            <div className="flex items-start justify-center">
              <div>
                <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  Academic Curriculum
                </h2>
                <p className="max-w-sm text-xs text-gray-600">
                  Our carefully designed programs balance rigorous academics
                  with creative exploration and practical learning.
                </p>
              </div>
              <div>
                <DashedCurve />
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="group shrink-0 rounded-full border-gray-300 font-medium hover:border-red-300 hover:bg-red-50 hover:text-red-700"
          >
            View All Programs
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Divider Line */}
        <div className="relative mb-12 h-px w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-200 to-transparent" />
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            viewport={{ once: true }}
            className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-red-600 to-red-300"
          />
          {/* Dot */}
          <div className="absolute -top-1 left-0 size-2 rounded-full bg-red-600" />
        </div>

        {/* Program Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/50 p-6 transition-all hover:border-gray-200 hover:bg-white hover:shadow-lg hover:shadow-gray-100"
            >
              {/* Icon */}
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl border border-red-300 bg-red-50 text-red-300 transition-transform group-hover:scale-110">
                <program.icon className="size-5" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="mb-5">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-red-600">
                  {program.label}
                </span>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {program.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {program.description}
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {program.features.map((feature, fIdx) => (
                  <span
                    key={fIdx}
                    className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-white opacity-0 shadow-sm ring-1 ring-gray-100 transition-all group-hover:opacity-100">
                <ArrowRight className="size-4 text-gray-400" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-gray-100 bg-gray-50/50 px-8 py-6 md:justify-between">
          <div className="flex items-center gap-8">
            {[
              { value: "15+", label: "Subject Areas" },
              { value: "500+", label: "Students" },
              { value: "20+", label: "Years Experience" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Button className="rounded-full bg-red-600 font-medium text-white hover:bg-red-800">
            Explore Programs
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
