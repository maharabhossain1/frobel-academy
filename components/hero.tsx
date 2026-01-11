"use client";

import { VideoBackground } from "./video-background";
import { HeroOverlay } from "./hero-overlay";
import { HeroContent } from "./hero-content";

export default function Hero() {
  const videoSrc =
    "https://stream.mux.com/8V02wxzTTupPznIOo42Py8keSrDDcl01NmbTo5pM00jD01M.m3u8?max_resolution=2160p&min_resolution=720p&redundant_streams=true";
  const posterUrl =
    "https://image.mux.com/8V02wxzTTupPznIOo42Py8keSrDDcl01NmbTo5pM00jD01M/thumbnail.jpg";

  return (
    <section className="relative min-h-screen overflow-hidden">
      <VideoBackground src={videoSrc} posterUrl={posterUrl} />
      <HeroOverlay />

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {/* Corner Accents */}
        <div className="absolute left-6 top-32 size-2 rounded-full bg-red-600/80 md:left-12" />
        <div className="absolute right-6 top-32 size-2 rounded-full bg-white/20 md:right-12" />
        <div className="absolute bottom-8 left-6 size-2 rounded-full bg-white/20 md:left-12" />
        <div className="absolute bottom-8 right-6 size-2 rounded-full bg-red-600/80 md:right-12" />

        {/* Vertical Lines */}
        <div
          className="absolute left-6 top-32 h-[calc(100%-10rem)] w-px opacity-20 md:left-12"
          style={{
            background: "linear-gradient(180deg, #fff 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-6 top-32 h-[calc(100%-10rem)] w-px opacity-20 md:right-12"
          style={{
            background: "linear-gradient(180deg, #fff 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-32 md:px-12">
        <HeroContent />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-widest text-white/60">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
