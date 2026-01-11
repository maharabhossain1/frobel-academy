"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const aboutLinks = [
  {
    title: "Our History",
    href: "/about/history",
    description: "Learn about our journey and milestones",
  },
  {
    title: "Why Frobel Academy",
    href: "/about/why-frobel",
    description: "Discover what makes us unique",
  },
  {
    title: "Mission & Vision",
    href: "/about/mission",
    description: "Our guiding principles and goals",
  },
  {
    title: "Leadership Team",
    href: "/about/leadership",
    description: "Meet our experienced educators",
  },
  {
    title: "Awards & Recognition",
    href: "/about/awards",
    description: "Our achievements and accreditations",
  },
];

const academicLinks = [
  {
    title: "Primary Program",
    href: "/academics/primary",
    description: "Foundation years education (Grade 1-5)",
  },
  {
    title: "Secondary Program",
    href: "/academics/secondary",
    description: "Middle school curriculum (Grade 6-10)",
  },
  {
    title: "IGCSE Curriculum",
    href: "/academics/igcse",
    description: "International qualifications pathway",
  },
  {
    title: "Co-Curricular Activities",
    href: "/academics/co-curricular",
    description: "Sports, arts, and leadership programs",
  },
  {
    title: "Academic Calendar",
    href: "/academics/calendar",
    description: "Important dates and schedules",
  },
];

const admissionLinks = [
  {
    title: "Admission Process",
    href: "/admission/process",
    description: "Step-by-step enrollment guide",
  },
  {
    title: "Apply Online",
    href: "/admission/apply",
    description: "Submit your application today",
  },
  {
    title: "Fees Information",
    href: "/admission/fees",
    description: "Tuition and payment details",
  },
  {
    title: "Scholarships",
    href: "/admission/scholarships",
    description: "Financial aid opportunities",
  },
  {
    title: "Admission FAQ",
    href: "/admission/faq",
    description: "Common questions answered",
  },
];

const portalLinks = [
  {
    title: "Parent Portal",
    href: "/portal/parent",
    description: "Track your child's progress",
  },
  {
    title: "Student Portal",
    href: "/portal/student",
    description: "Access learning resources",
  },
  {
    title: "Teacher Portal",
    href: "/portal/teacher",
    description: "Classroom management tools",
  },
  {
    title: "Make Payment",
    href: "/payment",
    description: "Online fee payment gateway",
  },
];

const mobileNavItems = [
  { title: "Home", href: "/" },
  {
    title: "About Us",
    children: aboutLinks,
  },
  {
    title: "Academics",
    children: academicLinks,
  },
  {
    title: "Admission",
    children: admissionLinks,
  },
  { title: "Events", href: "/events" },
  {
    title: "Portal",
    children: portalLinks,
  },
  { title: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = React.useState<
    string | null
  >(null);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <div className="mx-auto max-w-6xl ">
        <div
          className="flex items-center justify-between rounded-2xl border border-gray-300 bg-white px-4 py-3 shadow-lg shadow-gray-200/50 lg:px-6"
          style={{
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.02)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative size-9">
              <Image
                src="/images/logo.png"
                alt="Frobel Academy"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-red-600">
              Frobel Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About Us Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                    {aboutLinks.map(link => (
                      <ListItem
                        key={link.title}
                        title={link.title}
                        href={link.href}
                      >
                        {link.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Academics Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Academics
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                    {academicLinks.map(link => (
                      <ListItem
                        key={link.title}
                        title={link.title}
                        href={link.href}
                      >
                        {link.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Admission Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Admission
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                    {admissionLinks.map(link => (
                      <ListItem
                        key={link.title}
                        title={link.title}
                        href={link.href}
                      >
                        {link.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Events */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/events">Events</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Portal Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Portal
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[350px] gap-2 p-4">
                    {portalLinks.map(link => (
                      <ListItem
                        key={link.title}
                        title={link.title}
                        href={link.href}
                      >
                        {link.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side - CTA & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden rounded-full bg-red-600 px-6 font-medium text-white hover:bg-red-800 sm:inline-flex"
            >
              <Link href="/admission/apply">Apply Now</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex size-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg lg:hidden"
            >
              <nav className="divide-y divide-gray-100">
                {mobileNavItems.map(item => (
                  <div key={item.title}>
                    {item.children ? (
                      // Dropdown Item
                      <div>
                        <button
                          onClick={() =>
                            setOpenMobileDropdown(
                              openMobileDropdown === item.title
                                ? null
                                : item.title
                            )
                          }
                          className="flex w-full items-center justify-between px-4 py-3 text-left"
                        >
                          <span className="font-medium text-gray-900">
                            {item.title}
                          </span>
                          <ChevronDown
                            className={cn(
                              "size-4 text-gray-500 transition-transform",
                              openMobileDropdown === item.title && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {openMobileDropdown === item.title && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-gray-50"
                            >
                              {item.children.map(child => (
                                <Link
                                  key={child.title}
                                  href={child.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block px-6 py-2.5 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-red-600"
                                >
                                  {child.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      // Simple Link
                      <Link
                        href={item.href!}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-50"
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Apply Button */}
                <div className="p-4">
                  <Button
                    asChild
                    className="w-full rounded-full bg-red-600 font-medium text-white hover:bg-red-800"
                  >
                    <Link href="/admission/apply">Apply Now</Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

// List Item Component for Dropdown
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href || "#"}
          className={cn(
            "block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-600 focus:bg-red-50",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-gray-900 group-hover:text-red-600">
            {title}
          </div>
          <p className="mt-1 line-clamp-2 text-xs leading-snug text-gray-500">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
