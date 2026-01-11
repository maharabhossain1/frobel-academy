"use client";

import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { Button } from "@/components/ui/button";
import { VideoTourDrawer } from "./VideoTourDrawer";

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "2000+", label: "Students" },
  { value: "100%", label: "Success Rate" },
];

export function HeroContent() {
  return (
    <div className="relative">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-red-600" />
          </span>
          Admission Open 2026
        </span>
      </motion.div>

      {/* Main Heading with Text Flip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-6"
        style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
      >
        <LayoutTextFlip
          text="Experience "
          words={[
            "Smart Learning",
            "Elite Education",
            "Future Leaders",
            "Frobel Academy",
          ]}
        />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-10 max-w-lg text-lg leading-relaxed text-white/90"
        style={{ textShadow: "0 1px 10px rgba(0,0,0,0.3)" }}
      >
        Excellence in Education, Innovation in Learning. Discover world-class
        academics and transformative experiences.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-12 flex flex-wrap items-center gap-4"
      >
        <Button
          size="lg"
          className="group h-12 rounded-full bg-red-600 px-8 font-semibold text-white shadow-xl transition-all hover:bg-red-700 hover:shadow-2xl hover:shadow-red-600/40"
        >
          Get Admission
          <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </Button>

        <VideoTourDrawer>
          <Button
            size="lg"
            variant="outline"
            className="group h-12 rounded-full border-white/30 bg-white/10 px-6 font-medium text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20 hover:text-white"
          >
            <span className="mr-2 flex size-8 items-center justify-center rounded-full bg-white/20 transition-colors group-hover:bg-red-600">
              <Play className="size-3 fill-white text-white" />
            </span>
            Watch Tour
          </Button>
        </VideoTourDrawer>
      </motion.div>

      {/* Animated Divider Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative mb-8 h-px w-full max-w-md"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent" />
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-red-500 to-red-500/0"
        />
        <div className="absolute -top-1 left-0 size-2 rounded-full bg-red-500" />
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-wrap gap-8 md:gap-12"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
          >
            <p className="text-3xl font-bold text-white md:text-4xl">
              {stat.value}
            </p>
            <p className="text-xs font-medium uppercase tracking-wider text-white/70">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
