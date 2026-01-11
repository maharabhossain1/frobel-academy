"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Play,
  Pause,
  X,
  SkipForward,
  SkipBack,
  BookOpen,
  Trophy,
  Building2,
  Palette,
} from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import DashedCurve from "./DashedCurve";

const videoCategories = [
  {
    id: "academics",
    title: "Academics",
    icon: BookOpen,
    videos: [
      {
        id: 1,
        title: "Interactive Learning",
        src: "/videos/mixkit-teacher-points-with-his-finger-to-a-mathematical-chart-over-50114-hd-ready.mp4",
      },
    ],
  },
  {
    id: "sports",
    title: "Sports",
    icon: Trophy,
    videos: [
      {
        id: 2,
        title: "Football Training",
        src: "/videos/mixkit-young-boy-scoring-a-goal-from-a-free-kick-6652-hd-ready.mp4",
      },
      {
        id: 3,
        title: "Martial Arts",
        src: "/videos/mixkit-boy-practicing-karate-in-the-room-47135-hd-ready.mp4",
      },
    ],
  },
  {
    id: "facilities",
    title: "Facilities",
    icon: Building2,
    videos: [
      {
        id: 4,
        title: "Library Tour",
        src: "/videos/mixkit-walking-down-a-library-corridor-with-tables-and-bookcases-21589-hd-ready.mp4",
      },
    ],
  },
  {
    id: "arts",
    title: "Arts",
    icon: Palette,
    videos: [
      {
        id: 5,
        title: "Creative Arts",
        src: "/videos/mixkit-young-man-drawing-at-his-desk-14956-hd-ready.mp4",
      },
    ],
  },
];

const allVideos = videoCategories.flatMap(cat =>
  cat.videos.map(video => ({
    ...video,
    category: cat.title,
    categoryId: cat.id,
  }))
);

interface VideoTourDrawerProps {
  children: React.ReactNode;
}

export function VideoTourDrawer({ children }: VideoTourDrawerProps) {
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const currentVideo = allVideos[currentIndex];

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setProgress(
        (videoRef.current.currentTime / videoRef.current.duration) * 100
      );
    }
  };

  const handleVideoEnd = () => {
    if (currentIndex < allVideos.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const goToVideo = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Auto-play when video changes or drawer opens
  React.useEffect(() => {
    if (videoRef.current && open) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  }, [currentIndex, open]);

  // Reset on close
  React.useEffect(() => {
    if (!open) {
      setCurrentIndex(0);
      setProgress(0);
      setIsPlaying(true);
    }
  }, [open]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="mx-auto max-h-[85vh] max-w-7xl">
        {/* Header */}
        <DialogTitle className="sr-only">Campus Tour</DialogTitle>
        <div className="flex items-center justify-between border-b border-gray-100 px-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Campus Tour</h2>
            <p className="text-sm text-gray-500">
              {currentVideo.category} • {currentVideo.title}
            </p>
          </div>
          <DrawerClose asChild>
            <button className="flex size-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600">
              <X className="size-5" />
            </button>
          </DrawerClose>
        </div>

        <div className="flex flex-col gap-4 p-4 md:flex-row md:p-6">
          {/* Video Player */}
          <div className="relative aspect-video flex-1 overflow-hidden rounded-xl bg-black">
            <video
              ref={videoRef}
              src={currentVideo.src}
              className="size-full object-cover"
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleVideoEnd}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              muted
              playsInline
              autoPlay
            />

            {/* Play/Pause Overlay */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors hover:bg-black/20"
            >
              <div
                className={cn(
                  "flex size-16 items-center justify-center rounded-full bg-white/90 text-red-600 shadow-lg transition-transform hover:scale-105",
                  isPlaying && "opacity-0 hover:opacity-100"
                )}
              >
                {isPlaying ? (
                  <Pause className="size-6" />
                ) : (
                  <Play className="ml-1 size-6" />
                )}
              </div>
            </button>

            {/* Progress Bar */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-black/30">
              <motion.div
                className="h-full bg-red-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Video Counter */}
            <div className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
              {currentIndex + 1} / {allVideos.length}
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex w-full flex-col gap-3 md:w-96">
            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() =>
                  goToVideo(
                    currentIndex > 0 ? currentIndex - 1 : allVideos.length - 1
                  )
                }
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
              >
                <SkipBack className="size-4" />
                Prev
              </button>
              <button
                onClick={() =>
                  goToVideo(
                    currentIndex < allVideos.length - 1 ? currentIndex + 1 : 0
                  )
                }
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-600 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700"
              >
                Next
                <SkipForward className="size-4" />
              </button>
            </div>

            {/* Video List */}
            <div className="flex flex-col gap-1.5 rounded-xl bg-gray-50 p-2">
              {allVideos.map((video, idx) => {
                const Icon =
                  videoCategories.find(c => c.id === video.categoryId)?.icon ||
                  BookOpen;
                const isActive = currentIndex === idx;

                return (
                  <button
                    key={video.id}
                    onClick={() => goToVideo(idx)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                      isActive
                        ? "bg-white shadow-sm ring-1 ring-gray-200"
                        : "hover:bg-white/60"
                    )}
                  >
                    <div
                      className={cn(
                        "flex size-8 shrink-0 items-center justify-center rounded-lg",
                        isActive
                          ? "bg-red-100 text-red-600"
                          : "bg-gray-200 text-gray-500"
                      )}
                    >
                      <Icon className="size-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className={cn(
                          "truncate text-sm font-medium",
                          isActive ? "text-gray-900" : "text-gray-600"
                        )}
                      >
                        {video.title}
                      </p>
                      <p className="text-xs text-gray-400">{video.category}</p>
                    </div>
                    {isActive && isPlaying && (
                      <div className="flex gap-0.5">
                        {[0, 1, 2].map(i => (
                          <motion.div
                            key={i}
                            className="h-3 w-0.5 rounded-full bg-red-500"
                            animate={{ scaleY: [0.4, 1, 0.4] }}
                            transition={{
                              duration: 0.5,
                              repeat: Infinity,
                              delay: i * 0.15,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
