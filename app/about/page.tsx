"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-between container mx-auto px-6 md:px-12 py-12 lg:py-0 min-h-[calc(100vh-81px)] gap-12">
      {/* Text Content */}
      <div className="flex flex-col gap-4 lg:w-[55%]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`font-bold text-4xl sm:text-5xl tracking-tight text-zinc-900`}
        >
          Nyein Maung
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-xl font-semibold text-zinc-600"
        >
          Full Stack Developer
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-zinc-600 leading-relaxed text-base sm:text-lg"
        >
          Hi again! I&apos;m Nyein Maung, a self-taught full-stack developer
          based in Pyin Oo Lwin, Myanmar. I am deeply passionate about building
          modern, scalable, and user-centric web applications. My core expertise
          spans React, Next.js, and TypeScript, and I love turning complex ideas
          into clean, functional solutions. Continuously expanding my technical
          stack, I&apos;m dedicated to sharpening my skills in full-stack
          development and creating meaningful digital experiences.
        </motion.p>
      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        whileHover={{
          scale: [null, 1, 1.2],
          transition: {
            duration: 0.5,
            times: [0, 0.6, 1],
            ease: ["easeInOut", "easeOut"],
          },
        }}
        className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-100 lg:h-100 shrink-0"
      >
        <Image
          src="/profile.png"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover rounded-2xl shadow-lg"
          alt="Nyein Maung - Full Stack Developer"
        />
      </motion.div>
    </main>
  );
}
