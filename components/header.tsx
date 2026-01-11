"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed right-0 left-0 top-4 z-50 ">
      <div className=" ">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between bg-white rounded-4xl border border-gray-200 shadow-md">
          <div className="text-2xl font-bold text-red-500">Frobel Academy</div>
          <nav className="hidden md:flex">
            {["Home", "Features", "Academics", "Events", "Portal"].map(item => (
              <div key={item} className="rounded-full hover:bg-neutral-100">
                <Link href="#" className="text-neutral-900 px-3 py-1.5">
                  {item}
                </Link>
              </div>
            ))}
          </nav>
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
}
