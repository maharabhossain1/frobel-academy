"use client"

interface VideoBackgroundProps {
  src: string
  posterUrl: string
}

export function VideoBackground({ src, posterUrl }: VideoBackgroundProps) {
  return (
    <>
      <img
        src={posterUrl || "/placeholder.svg"}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterUrl}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="application/x-mpegURL" />
        Your browser does not support the video tag.
      </video>
    </>
  )
}
