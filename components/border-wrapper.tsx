"use client";

import type React from "react";

interface BorderWrapperProps {
  children: React.ReactNode;
}

export default function BorderWrapper({ children }: BorderWrapperProps) {
  return (
    <div className="select-none pointer-events-none fixed z-[3] flex-none order-[1001] top-0 left-0 right-0 overflow-hidden">
      {/* Top Border */}
      <div
        className="bg-white z-[1] flex-none h-4 absolute top-0 left-0 right-0 overflow-hidden"
        data-framer-name="Top"
      />

      {/* Bottom Border */}
      <div
        className="bg-white z-[1] flex-none h-4 absolute bottom-0 left-0 right-0 overflow-hidden"
        data-framer-name="Bottom"
      />

      {/* Left Border */}
      <div
        className="bg-white z-[1] flex-none w-4 absolute top-0 bottom-0 left-0 overflow-hidden"
        data-framer-name="Left"
      />

      {/* Right Border */}
      <div
        className="bg-white z-[1] flex-none w-4 absolute top-0 bottom-0 right-0 overflow-hidden"
        data-framer-name="Right"
      />

      {/* Top Left Corner */}
      <div
        className="absolute top-0 left-0 w-[52px] h-[52px] -rotate-[270deg]"
        data-framer-name="Top Left Corner"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px]">
          <div
            className="flex-none w-[52px] h-[52px]"
            aria-hidden="true"
            style={{ imageRendering: "pixelated", flexShrink: 0 }}
          >
            <div className="w-full h-full aspect-[inherit]">
              <svg className="w-full h-full">
                <use href="#svg11000214793"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Top Right Corner */}
      <div
        className="absolute top-0 right-0 w-[52px] h-[52px] -rotate-180"
        data-framer-name="Top Right Corner"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px]">
          <div
            className="flex-none w-[52px] h-[52px]"
            aria-hidden="true"
            style={{ imageRendering: "pixelated", flexShrink: 0 }}
          >
            <div className="w-full h-full aspect-[inherit]">
              <svg className="w-full h-full">
                <use href="#svg11000214793"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Left Corner */}
      <div
        className="absolute bottom-0 left-0 w-[52px] h-[52px]"
        data-framer-name="Bottom Left Corner"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px]">
          <div
            className="flex-none w-[52px] h-[52px]"
            aria-hidden="true"
            style={{ imageRendering: "pixelated", flexShrink: 0 }}
          >
            <div className="w-full h-full aspect-[inherit]">
              <svg className="w-full h-full">
                <use href="#svg11000214793"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Corner */}
      <div
        className="absolute bottom-0 right-0 w-[52px] h-[52px] -rotate-90"
        data-framer-name="Bottom Right Corner"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px]">
          <div
            className="flex-none w-[52px] h-[52px]"
            aria-hidden="true"
            style={{ imageRendering: "pixelated", flexShrink: 0 }}
          >
            <div className="w-full h-full aspect-[inherit]">
              <svg className="w-full h-full">
                <use href="#svg11000214793"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
