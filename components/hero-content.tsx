"use client";

import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import AnimatedButton from "./animated-button";
import { motion } from "motion/react";

export function HeroContent() {
  return (
    <div className="relative z-10 mt-10">
      <div className="mb-6">
        <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-start gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
          <LayoutTextFlip
            text="Experience "
            words={[
              "Frobel Academy",
              "Elite Education",
              "Future Leaders",
              "Smart Learning",
            ]}
          />
        </motion.div>
        <p className="text-xl text-gray-300 my-10 max-w-xl">
          Excellence in Education, Innovation in Learning. Discover world-class
          academics and transformative experiences.
        </p>
      </div>

      <div className="flex gap-4 justify-start flex-wrap mt-16">
        <AnimatedButton href="#" text="Get Admission" />
      </div>
    </div>
  );
}
