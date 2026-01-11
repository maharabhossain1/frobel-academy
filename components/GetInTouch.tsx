"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Mail, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "Bangabandhu Avenue, Oxygen-Quaish Adjacent Road,",
      "Near Ananya R/A, Wazidia, Bayazid, Chattogram-4211.",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+8801313-400961", "09678372372"],
    links: ["tel:+8801313400961", "tel:09678372372"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "admissions@frobelacademy.com",
      "info@frobelacademy.com",
      "training@frobelacademy.com",
    ],
    links: [
      "mailto:admissions@frobelacademy.com",
      "mailto:info@frobelacademy.com",
      "mailto:training@frobelacademy.com",
    ],
  },
];

export default function GetInTouch() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Main Container */}
        <div
          className="relative z-10 overflow-hidden rounded-2xl px-6 pb-8 pt-10 md:px-10 md:py-14 xl:rounded-[28px] xl:px-12 xl:py-16"
          style={{
            background: "linear-gradient(180deg, #1C1C1C 0%, #141414 100%)",
            boxShadow:
              "0 16px 8px rgba(31, 31, 31, .01), 0 12px 6px rgba(31, 31, 31, .04), 0 4px 4px rgba(31, 31, 31, .07), 0 1.5px 3px rgba(31, 31, 31, .08), 0 0 0 1px #0F0F0F, inset 0 1px 2px rgba(255, 255, 255, .12)",
          }}
        >
          {/* Decorative Corner Dots */}
          <div className="pointer-events-none absolute left-4 top-4 size-2 rounded-full bg-red-600/60" />
          <div className="pointer-events-none absolute right-4 top-4 size-2 rounded-full bg-red-600/60" />
          <div className="pointer-events-none absolute bottom-4 left-4 size-2 rounded-full bg-red-600/60" />
          <div className="pointer-events-none absolute bottom-4 right-4 size-2 rounded-full bg-red-600/60" />

          {/* Ambient Glow Effects */}
          <div className="pointer-events-none absolute -left-20 top-1/2 size-60 -translate-y-1/2 rounded-full bg-red-600/10 blur-[100px]" />
          <div className="pointer-events-none absolute -right-20 top-1/4 size-40 rounded-full bg-red-600/5 blur-[80px]" />

          {/* Header Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 flex flex-col items-center gap-3 text-center md:mb-12"
          >
            {/* Badge */}
            <div
              className="mb-2 flex h-7 items-center gap-1.5 rounded-full bg-white/[.04] px-3 text-xs font-medium text-gray-400"
              style={{
                boxShadow: "0 0 0 1px rgba(255, 255, 255, .08)",
              }}
            >
              <span className="size-1.5 rounded-full bg-red-600" />
              Contact Us
            </div>

            <h2 className="text-[28px] font-semibold leading-tight -tracking-[0.02em] text-white md:text-4xl xl:text-[44px]">
              Get In Touch
            </h2>
            <p className="max-w-md text-sm text-gray-500 md:text-base">
              Have questions? We&apos;d love to hear from you. Reach out through
              any of the channels below.
            </p>
          </motion.div>

          {/* Animated Line */}
          <div className="relative mb-10 h-px w-full md:mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-red-600 to-red-600/0"
            />
          </div>

          {/* Contact Cards Grid */}
          <div className="grid gap-5 md:grid-cols-3">
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative flex flex-col rounded-xl border border-white/[.06] bg-white/[.02] p-6 transition-colors hover:border-red-600/20 hover:bg-white/[.04]"
                >
                  {/* Card Corner Accents */}
                  <div className="absolute right-3 top-3 size-1 rounded-full bg-gray-600 transition-colors group-hover:bg-red-500" />
                  <div className="absolute bottom-3 left-3 size-1 rounded-full bg-gray-600 transition-colors group-hover:bg-red-500" />

                  {/* Icon */}
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-600/20 to-red-600/10 text-red-500 ring-1 ring-red-600/20 transition-all group-hover:from-red-600/30 group-hover:to-red-600/20 group-hover:text-red-400 group-hover:ring-red-600/30">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-red-500">
                    {item.title}
                  </h3>

                  {/* Divider Line */}
                  <div className="relative my-4 h-px w-full">
                    <div className="absolute inset-0 bg-white/[.06]" />
                    <motion.div
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="absolute inset-y-0 left-0 w-1/3 bg-red-600"
                    />
                    <div className="absolute -top-0.5 left-0 size-1 rounded-full bg-red-600" />
                  </div>

                  {/* Details */}
                  <div className="space-y-1.5">
                    {item.details.map((detail, detailIdx) => (
                      <p key={detailIdx}>
                        {item.links ? (
                          <a
                            href={item.links[detailIdx]}
                            className="text-sm text-gray-400 transition-colors hover:text-red-400"
                          >
                            {detail}
                          </a>
                        ) : (
                          <span className="text-sm leading-relaxed text-gray-400">
                            {detail}
                          </span>
                        )}
                      </p>
                    ))}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
                    <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 md:mt-12"
          >
            <div className="flex flex-col items-center justify-between gap-6 rounded-xl border border-white/[.06] bg-white/[.02] p-6 md:flex-row md:p-8">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-red-600/20 to-red-600/10 text-red-500 ring-1 ring-red-600/20">
                  <Send className="size-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Have a question?</h4>
                  <p className="text-sm text-gray-500">
                    We&apos;d love to hear from you.
                  </p>
                </div>
              </div>

              <Button className="group relative overflow-hidden rounded-full border-0 bg-red-600 px-6 py-2.5 font-medium text-white transition-all hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/25">
                <span className="relative z-10 flex items-center">
                  Send Message
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </motion.div>

          {/* Bottom Animated Line */}
          <div className="relative mt-10 h-px w-full md:mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            <motion.div
              initial={{ scaleX: 0, originX: 1 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-red-600 to-red-600/0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
