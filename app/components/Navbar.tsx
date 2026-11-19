"use client";

import Link from "next/link";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Define your nav items cleanly with their labels and correct lowercase routes
  const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Projects", href: "/projects" },
  ];

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      animate={{
        y: hidden ? -100 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="border-b border-zinc-300 duration-200 sticky top-0 right-0 left-0 z-50 bg-white opacity-95"
    >
      <div className="flex justify-between items-center py-4 md:py-5 px-3 container mx-auto">
        <div className="font-black italic text-3xl md:text-4xl tracking-tighter font-mono antialiased">
          <Link href="/">Genius</Link>
        </div>
        <ul className="flex gap-2 sm:gap-4 md:gap-5 items-center font-semibold text-sm md:text-base tracking-tight">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    "duration-100 transition-colors",
                    isActive
                      ? "text-black underline font-bold"
                      : "text-zinc-700 hover:underline hover:text-zinc-900",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}

          <li>
            <Link
              href="/contact"
              className={clsx(
                "p-1.5 md:p-2 rounded-lg transition-all",
                pathname === "/contact"
                  ? "bg-zinc-900 text-zinc-50 shadow-lg"
                  : "bg-zinc-900 text-zinc-50 hover:shadow-2xl",
              )}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </motion.header>
  );
}
