"use client";

import { motion } from "motion/react";
import { ArrowRight, Calendar, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import DashedCurve from "./DashedCurve";

const newsItems = [
  {
    date: "5 May, 2024",
    title: "Frobel Interschool Basketball Tournament 2024",
    description:
      "Frobel Academy hosted its first ever Frobel Interschool Basketball Tournament 2024",
    image: "/images/test.avif",
    tags: ["Sports", "Events"],
  },
  {
    date: "19 Mar, 2023",
    title: "Brand Forum Award Winner - Third Consecutive Year",
    description:
      "We are proud to announce that for the third consecutive year, Frobel Academy has won a prestigious award from Brand Forum.",
    image: "/images/test.avif",
    tags: ["Awards", "Achievement"],
  },
  {
    date: "12 Jan, 2023",
    title: "Annual Science Fair Exhibition",
    description:
      "Students showcased innovative projects at our annual science fair, demonstrating creativity and scientific thinking.",
    image: "/images/test.avif",
    tags: ["Academic", "Events"],
  },
];

export default function NewsAndCSR() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-red-50 opacity-40 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-gray-100 opacity-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* News & Events - Left Side (3 cols) */}
          <div className="lg:col-span-3">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm font-medium text-red-700">
                <span className="size-1.5 rounded-full bg-red-600" />
                Latest Updates
              </span>
              <div className="flex items-start gap-6 pb-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                    News & Events
                  </h2>
                  <p className="text-gray-600 text-xs">
                    Stay updated with the latest happenings at Frobel Academy
                  </p>
                </div>
                <DashedCurve />
              </div>
            </motion.div>

            {/* News List */}
            <div className="space-y-0">
              {newsItems.map((item, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Top Divider with Dot */}
                  <div className="relative h-px w-full bg-gray-200">
                    <motion.div
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="absolute inset-y-0 left-0 w-16 bg-red-600"
                    />
                    <div className="absolute -top-1 left-0 size-2 rounded-full bg-red-600" />
                  </div>

                  {/* Content */}
                  <div className="flex gap-6 py-6">
                    {/* Text Content */}
                    <div className="flex-1">
                      {/* Date */}
                      <div className="mb-2 flex items-center gap-2 text-sm text-red-600">
                        <Calendar className="size-4" />
                        {item.date}
                      </div>

                      {/* Title */}
                      <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-red-600 md:text-xl">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mb-4 line-clamp-2 text-sm text-gray-600">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative hidden h-28 w-40 shrink-0 overflow-hidden rounded-xl bg-gray-200 sm:block md:h-32 md:w-48">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-red-600/0 transition-colors group-hover:bg-red-600/10" />
                    </div>
                  </div>
                </motion.article>
              ))}

              {/* Bottom Divider */}
              <div className="relative h-px w-full bg-gray-200">
                <div className="absolute -top-1 right-0 size-2 rounded-full bg-gray-300" />
              </div>
            </div>

            {/* View All Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Button className="group rounded-full bg-red-600 px-6 font-medium text-white hover:bg-red-800">
                View All News
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          {/* Corporate Social Responsibility - Right Side (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="sticky top-40 overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8">
              {/* Corner Dots */}
              <div className="absolute right-4 top-4 size-2 rounded-full bg-red-400" />
              <div className="absolute bottom-4 left-4 size-2 rounded-full bg-gray-300" />

              {/* Icon */}
              <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                <Heart className="size-7" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
                Corporate
              </h3>
              <h3 className="mb-6 text-2xl font-bold text-red-600 md:text-3xl">
                Social Responsibility
              </h3>

              {/* Divider */}
              <div className="relative mb-6 h-px w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-transparent" />
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-red-500 to-red-300" />
              </div>

              {/* Description */}
              <p className="mb-8 leading-relaxed text-gray-600">
                We are committed to become good role models for our learners.
                Since we expect our children to be involved in community
                projects and to have empathy for those who are less privileged
                than us, we aim to teach them how to benefit others through
                their actions.
              </p>

              {/* Stats */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white p-4 ring-1 ring-gray-100">
                  <p className="text-2xl font-bold text-gray-900">15+</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    Community Projects
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4 ring-1 ring-gray-100">
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    Lives Impacted
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant="outline"
                className="w-full rounded-full border-gray-300 font-medium hover:border-red-300 hover:bg-red-50 hover:text-red-700"
              >
                Learn More
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
