"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface GridItem {
  id: string;
  title: string;
  image: string;
  size: "small" | "medium" | "large" | "wide";
}

const gridItems: GridItem[] = [
  {
    id: "1",
    title: "Summary",
    image: "/images/summary.avif",
    size: "large", // 2x2
  },
  {
    id: "2",
    title: "Miracles",
    image: "/images/miracles.avif",
    size: "small", // 1x1
  },
  {
    id: "3",
    title: "Battles",
    image: "/images/battles.avif",
    size: "small", // 1x1
  },
  {
    id: "4",
    title: "Last Sermon",
    image: "/images/last-sermon.avif",
    size: "wide", // 2x1
  },
  {
    id: "5",
    title: "Wives",
    image: "/images/wives.avif",
    size: "large", // 2x2
  },
  {
    id: "6",
    title: "Notable Conversions",
    image: "/images/conversions.avif",
    size: "medium", // 1x2
  },
];

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
      {gridItems.map((item, index) => (
        <GridCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}

function GridCard({ item, index }: { item: GridItem; index: number }) {
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 row-span-2",
    large: "col-span-2 row-span-2",
    wide: "col-span-2 row-span-1",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-2xl ${
        sizeClasses[item.size]
      }`}
    >
      {/* Background Image */}
      <Image
        src="/images/test.avif"
        alt={item.title}
        width={400}
        height={400}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    </motion.div>
  );
}
