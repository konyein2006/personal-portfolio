"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Page() {
  const PROJECTS = [
    {
      name: "Genius Ecommerce",
      description:
        "A responsive e-commerce storefront featuring dynamic product filtering, interactive shopping cart management, and a streamlined checkout flow—engineered for fast client-side state updates and clean UI responsiveness.",
      link: "https://konyein2006.github.io/genius-ecommerce/",
      image: "/genius-ecommerce.png",
      aspectRatio: "666 / 500", // Custom aspect ratio for the mask
    },
    {
      name: "Genius Filmhub",
      description:
        "A dynamic movie discovery and watchlist web application powered by the TMDB API, featuring real-time search, interactive carousels, smooth scroll animations, and persistent local watchlist management.",
      link: "https://konyein2006.github.io/genius-filmhub/",
      image: "/genius-filmhub.png",
      aspectRatio: "667 / 500",
    },
  ];

  return (
    <div className="container max-w-7xl flex flex-col items-center mx-auto px-4">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="py-20 px-2 flex flex-col items-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight font-light font-jakarta">
          Featured Projects
        </h1>
        <p className="md:w-[60%] lg:w-[52%] text-sm md:text-base lg:text-lg text-neutral-600 leading-relaxed text-center font-jakarta">
          A curated collection of full-stack web applications, real-time
          platforms, and browser-based AI tools I’ve built—turning complex
          technical ideas into clean, scalable, and user-centric digital
          experiences.
        </p>
      </motion.div>

      {/* Projects List */}
      <div className="w-full mt-12 space-y-28 px-4 md:px-20">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-16 border-b border-neutral-100 pb-24 last:border-none"
          >
            {/* Text Information */}
            <div className="space-y-6 flex-1 max-w-xl">
              <h2 className="font-medium text-3xl sm:text-4xl lg:text-5xl tracking-tight font-jakarta">
                {project.name}
              </h2>
              <p className="text-neutral-600 leading-relaxed text-base sm:text-lg font-jakarta">
                {project.description}
              </p>
              <Link
                href={project.link}
                className="inline-flex gap-3 items-center rounded-xl py-3 px-6 bg-zinc-900 text-zinc-50 hover:bg-zinc-800 transition-all duration-200 group w-fit font-medium text-sm font-jakarta"
                target="_blank"
              >
                Discover more{" "}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Scroll Reveal Image Container */}
            <div className="flex-1 w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
              <motion.div
                initial={{
                  clipPath: "inset(10% 10% 10% 10% round 16px)",
                  opacity: 0,
                }}
                whileInView={{
                  clipPath: "inset(0% 0% 0% 0% round 16px)",
                  opacity: 1,
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className="w-full max-w-155 overflow-hidden shadow-xl border border-neutral-200/60 bg-neutral-50 hover:scale-105 duration-500 transition-transform"
                style={{ aspectRatio: "16 / 10" }} // Clean standard widescreen ratio for web previews
              >
                <Image
                  src={project.image}
                  width={1200}
                  height={750}
                  className="object-cover w-full h-full"
                  alt={project.name}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
