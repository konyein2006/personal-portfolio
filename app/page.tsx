"use client"; // 1. Must be a client component

import Link from "next/link";
import { motion } from "motion/react"; // 2. Import from motion/react

export default function Home() {
  return (
    <main className="flex flex-col items-center flex-1 container mx-auto px-6 md:px-20">
      {/* Animated Headline */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wide flex flex-wrap justify-center gap-3 sm:gap-5 mt-40 sm:mt-32 md:mt-24 mb-10 sm:mb-6"
      >
        <span>Full</span>
        <span>Stack</span>
        <span>Developer</span>
      </motion.h1>

      {/* Animated Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium tracking-tight text-center text-gray-600 max-w-3xl"
      >
        Hi, I&apos;m{" "}
        <span className="text-black font-semibold">Nyein Maung</span>. A
        self-taught full-stack developer specializing in building modern,
        scalable web applications with React, Next.js, and TypeScript.
      </motion.p>

      {/* Animated Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-4 sm:gap-5 my-16 sm:my-10"
      >
        <Link
          href="/projects"
          className="bg-black text-white py-2.5 md:py-3 px-4 md:px-6 rounded-md font-semibold cursor-pointer hover:bg-gray-800 transition shadow-sm text-sm md:text-base text-center"
        >
          View Project
        </Link>

        <Link
          href="/contact"
          className="border border-gray-300 rounded-md font-semibold py-2.5 md:py-3 px-4 md:px-6 cursor-pointer hover:bg-gray-50 transition text-sm md:text-base text-center"
        >
          Contact Me
        </Link>
      </motion.div>
    </main>
  );
}
