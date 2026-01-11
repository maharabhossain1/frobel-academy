"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const footerLinks = {
  about: {
    title: "About Us",
    links: [
      { label: "Our History", href: "/about/history" },
      { label: "Mission & Vision", href: "/about/mission" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Why Frobel", href: "/about/why-frobel" },
    ],
  },
  academics: {
    title: "Academics",
    links: [
      { label: "Primary Program", href: "/academics/primary" },
      { label: "Secondary Program", href: "/academics/secondary" },
      { label: "IGCSE Curriculum", href: "/academics/igcse" },
      { label: "Co-Curricular", href: "/academics/co-curricular" },
      { label: "Academic Calendar", href: "/academics/calendar" },
    ],
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "Admission", href: "/admission" },
      { label: "Career", href: "/career" },
      { label: "News & Events", href: "/news" },
      { label: "Gallery", href: "/gallery" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  portals: {
    title: "Portals",
    links: [
      { label: "Parent Portal", href: "/portal/parent" },
      { label: "Student Portal", href: "/portal/student" },
      { label: "Teacher Portal", href: "/portal/teacher" },
      { label: "Make Payment", href: "/payment" },
    ],
  },
  contact: {
    title: "Contact",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Location Map", href: "/contact#map" },
      { label: "Support", href: "/support" },
    ],
  },
};

const socialLinks = [
  {
    icon: Facebook,
    href: "https://facebook.com/frobelacademy",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/frobelacademy",
    label: "Instagram",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/frobelacademy",
    label: "YouTube",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/frobelacademy",
    label: "LinkedIn",
  },
];

// Dot component for reusability
const Dot = ({ className }: { className?: string }) => (
  <div className={`absolute z-30 size-2 rounded-sm bg-gray-200 ${className}`} />
);

// Vertical Divider with dots
const VerticalDivider = () => (
  <div className="flex w-6 shrink-0 justify-center">
    <div className="relative w-px bg-gray-200">
      <Dot className="-top-1 left-1/2 -translate-x-1/2" />
      <Dot className="-bottom-1 left-1/2 -translate-x-1/2" />
    </div>
  </div>
);

// Horizontal Divider with dots
const HorizontalDivider = () => (
  <div className="flex h-6 w-full shrink-0 items-center">
    <div className="relative h-px w-full bg-gray-200">
      <Dot className="-left-1 top-1/2 -translate-y-1/2" />
      <Dot className="-right-1 top-1/2 -translate-y-1/2" />
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer className="relative bg-[#FAFAFA] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top Section - Logo, Tagline, Social */}
        <div className="flex flex-col items-start gap-5 py-10 md:items-center xl:gap-6 xl:py-16">
          {/* Logo */}
          <Link href="/" className="relative">
            <Image
              src="/images/logo.png"
              alt="Frobel Academy"
              width={52}
              height={58}
              className="object-contain"
            />
          </Link>

          {/* Tagline */}
          <div className="text-[28px] font-semibold leading-[36px] -tracking-[0.02em] text-gray-900 md:text-center">
            Excellence in Education
            <br />
            <span className="text-gray-500">Innovation in Learning.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-9 items-center justify-center rounded-lg bg-white text-gray-400 shadow-sm ring-1 ring-gray-100 transition duration-200 hover:bg-red-50 hover:text-red-600 hover:ring-red-100"
              >
                <social.icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Footer - Accordion Style */}
        <div className="divide-y divide-gray-200 border-y border-gray-200 xl:hidden">
          {Object.values(footerLinks).map((section, idx) => (
            <details key={idx} className="group py-5">
              <summary className="flex w-full cursor-pointer list-none items-center justify-between text-left">
                <span className="text-sm font-medium text-gray-900">
                  {section.title}
                </span>
                <div className="flex size-5 items-center justify-center rounded-full bg-gray-100">
                  <svg
                    className="size-4 text-gray-500 transition duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </summary>
              <ul className="mt-4 flex flex-col gap-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-red-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        {/* Mobile Copyright */}
        <div className="py-5 text-sm text-gray-500 xl:hidden">
          © 2026 Frobel Academy. All rights reserved.
        </div>

        {/* Desktop Footer */}
        <div className="hidden flex-col gap-4 xl:flex">
          {/* Top Horizontal Divider */}
          <HorizontalDivider />

          {/* Links Grid */}
          <div className="flex gap-0 px-6">
            {Object.values(footerLinks).map((section, idx) => (
              <div key={idx} className="contents">
                {/* Link Column */}
                <div className="flex flex-1 flex-col gap-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href={link.href}
                          className="block text-sm text-gray-600 transition-colors hover:text-red-600"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Vertical Divider (not after last column) */}
                {idx < Object.values(footerLinks).length - 1 && (
                  <VerticalDivider />
                )}
              </div>
            ))}
          </div>

          {/* Bottom Horizontal Divider */}
          <HorizontalDivider />

          {/* Copyright */}
          <div className="flex justify-center pb-4">
            <p className="text-center text-sm text-gray-500">
              © 2026 Frobel Academy. All rights reserved.
            </p>
          </div>
        </div>

        {/* Large Decorative Text */}
        <div className="relative hidden w-full overflow-hidden xl:block">
          <div className="pointer-events-none select-none py-8">
            <svg
              viewBox="0 0 800 120"
              className="w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="fill-gray-100 text-[120px] font-bold tracking-tight"
                style={{ fontFamily: "inherit" }}
              >
                FROBEL
              </text>
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="fill-none stroke-gray-200 text-[120px] font-bold tracking-tight"
                style={{ fontFamily: "inherit", strokeWidth: 1 }}
              >
                FROBEL
              </text>
            </svg>
          </div>
          {/* Gradient Overlay */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
            style={{
              background:
                "linear-gradient(180deg, rgba(250, 250, 250, 0) 0%, rgba(250, 250, 250, 0.8) 72%)",
            }}
          />
        </div>
      </div>
    </footer>
  );
}
