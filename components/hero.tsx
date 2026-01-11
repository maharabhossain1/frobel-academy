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
    <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <VideoBackground src={videoSrc} posterUrl={posterUrl} />
      <HeroOverlay />
      {/* <div className="absolute bottom-0 right-0 z-10 text-white">
        <BentoGrid />
      </div> */}
      <HeroContent />
    </section>
  );
}
