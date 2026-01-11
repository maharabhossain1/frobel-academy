"use client";

import { motion } from "motion/react";
import { useId } from "react";

interface DashedCurveProps {
  className?: string;
  delay?: number;
  duration?: number;
}

/**
 * Animated decorative dashed curve SVG
 * Dashes appear one by one using mask reveal technique
 */
const DashedCurve: React.FC<DashedCurveProps> = ({
  className = "",
  delay = 0,
  duration = 1,
}) => {
  const maskId = useId();

  const curvePath =
    "M1 1C6.24431 1.21626 11.5365 2.05428 16.6516 3.13955C28.7596 5.70848 41.2898 9.45859 51.3287 17.0631C61.1747 24.5214 66.3737 34.4703 69.1034 46.2597C70.3557 51.6681 70.3959 56.1136 70.6176 61.434";

  const arrowPath =
    "M63 57.185C65.135 58.2982 67.2076 59.4555 69.2541 60.7235C70.1813 61.2979 70.997 62.1916 71.624 60.9045C72.5057 59.0948 73.0026 57.3294 74.5536 56";

  return (
    <svg
      width="75"
      height="62"
      viewBox="0 0 75 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`hidden translate-y-9 sm:block ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Mask that reveals the dashed path progressively */}
        <mask id={`mask-curve-${maskId}`}>
          <motion.path
            d={curvePath}
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: duration,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        </mask>
      </defs>

      {/* Main curved dashed path - revealed by mask */}
      <path
        d={curvePath}
        stroke="#e03e3e"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeDasharray="4 4"
        fill="none"
        mask={`url(#mask-curve-${maskId})`}
      />

      {/* Arrow head - hidden initially, fades in after curve completes */}
      <motion.path
        d={arrowPath}
        stroke="#e03e3e"
        strokeWidth="0.5"
        strokeLinecap="round"
        fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.3,
          delay: delay + duration - 0.2,
          ease: "easeOut",
        }}
      />
    </svg>
  );
};

export default DashedCurve;
