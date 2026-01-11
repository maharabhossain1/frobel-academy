"use client";

export function HeroOverlay() {
  return (
    <>
      {/* Main Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/50" />

      {/* Gradient Overlays for depth */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Left side gradient for text readability */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)",
        }}
      />

      {/* Subtle red accent glow */}
      <div
        className="absolute -left-20 top-1/3 z-[2] h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(239,68,68,0.4) 0%, transparent 70%)",
        }}
      />

      {/* Top vignette */}
      <div
        className="absolute inset-x-0 top-0 z-[3] h-40"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%)",
        }}
      />
    </>
  );
}
