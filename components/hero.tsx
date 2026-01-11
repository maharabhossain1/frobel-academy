"use client";

import { motion } from "motion/react";
import { HeroContent } from "./hero-content";

export default function Hero() {
  const videoSrc = "https://assets.mixkit.co/videos/5886/5886-720.mp4";
  const posterUrl = "https://assets.mixkit.co/videos/5886/5886-thumb-720-0.jpg";

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterUrl}
          className="absolute inset-0 size-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Subtle left gradient for text readability */}
      {/* <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)",
        }}
      /> */}

      {/* Decorative Vertical Lines - AlignUI Style */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        {/* Left Line */}
        <div className="absolute left-12 top-28 flex flex-col items-center">
          {/* Top Dot */}
          <div className="size-2 rounded-full bg-red-500" />
          {/* Animated Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "calc(100vh - 14rem)" }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent"
          />
          {/* Bottom Dot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.3 }}
            className="size-2 rounded-full bg-white/30"
          />
        </div>

        {/* Right Line */}
        <div className="absolute right-12 top-28 flex flex-col items-center">
          {/* Top Dot */}
          <div className="size-2 rounded-full bg-white/30" />
          {/* Animated Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "calc(100vh - 14rem)" }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent"
          />
          {/* Bottom Dot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.5 }}
            className="size-2 rounded-full bg-red-500"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-32 md:px-20">
        <HeroContent />
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col items-center gap-3"
        >
          {/* Mouse shape */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-white/40 p-1"
          >
            {/* Scroll dot */}
            <motion.div
              animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="size-1.5 rounded-full bg-white"
            />
          </motion.div>

          {/* Text */}
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70"
          >
            Scroll
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
