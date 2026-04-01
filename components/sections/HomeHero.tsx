"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[921px] flex items-center overflow-hidden bg-surface-container-low pt-24 pb-12 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8 py-8 md:py-12 text-center lg:text-left"
        >
          <span className="label-md inline-block text-primary font-bold bg-primary-container/20 px-4 py-1 rounded-full font-body text-base">
            Est. 2024
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-bold text-on-surface">
            Delicious Bites, <span className="text-primary">Freshly Made</span> Every Day.
          </h1>
          <p className="text-base text-on-surface-variant max-w-lg mx-auto lg:mx-0 font-body">
            Experience the perfect blend of taste and quality with our wide range of beverages and snacks. Crafted with passion for the modern epicurean.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <Link
              href="/services"
              className="bg-primary text-on-primary px-8 md:px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all font-headline"
            >
              Explore Menu
            </Link>
            <Link
              href="/contact"
              className="bg-surface-container-highest text-on-surface-variant px-8 md:px-10 py-4 rounded-full text-lg font-bold hover:bg-surface-dim transition-colors font-headline"
            >
              Order Now
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[400px] md:h-[600px] lg:h-[619px] flex items-center justify-center"
        >
          <div className="absolute -top-10 md:-top-15 md:-right-20 w-44 h-44 md:w-80 md:h-80 bg-secondary-container rounded-full blur-3xl opacity-30"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-full h-full relative transition-transform duration-700">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM3I8KdzYx6PuZi8GkTxPlvBTk6p4d0s9cl-Y9kyG4XeMg7PXwLsPppuNkpHQwcQi0AoPS2yxkV4K0-Bf4K_sdjs97AsJVXePBRUmEABTGH-pNXMcWe9iNrmmxL38gy4p68ucbPpVVufhb7gaGM3FYSIDZsItdOAuA28VC5VI69V7SlsdGzJKhnXNO_1gM0rTckSbzWZp7PZVhRpBTANJ3eW2o0--5lSoUqLHySFOu0uQENDhtlr6oBrEP-SLS8uHtuZWquG2eTQ"
                alt="Gourmet Burger"
                fill
                className="object-cover rounded-[1rem] shadow-2xl"
                priority
              />
            </div>

            {/* Floating Card - Hide on small mobile or reposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-bottom-8 md:-left-8 lg:bottom-12 lg:left-0 bg-surface-container-lowest p-4 md:p-6 rounded-[1.5rem] shadow-2xl border border-outline-variant/10 w-[240px] md:w-auto md:max-w-xs backdrop-blur-md bg-white/90 z-20"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                <span className="text-primary scale-90 md:scale-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coffee">
                    <title>Coffee Icon</title>
                    <path d="M10 2v2" /><path d="M14 2v2" /><path d="M18 8a2 2 0 1 1-4 0h-4a2 2 0 1 1-4 0 8 8 0 0 0 16 0" /><path d="M22 8a2 2 0 1 1-4 0" /><path d="M7 14h10" /><path d="M2 8h20" />
                  </svg>
                </span>
                <span className="font-bold text-on-surface font-headline text-base">Fresh Brewed</span>
              </div>
              <div className="relative w-full h-20 md:h-32 mb-2 md:mb-3 overflow-hidden rounded-[1rem]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoEMu-8tci2ripn0X1Cyo0BfCDcWvFCUFSjPxiHmEaoVlI5gB9npIV2xXxGQQcwiWNRKlKS9eCBz6EUBrj5wjHZTB9LwxYuJzJLIOIz_kKo_1U6e30kmH6FZpQFW8kGuZY9ulUhbgH4FVvpx18VLEY0uSUmgN7mnUF7QoK-K43kbDSztbbFuOGlzclMMdsxbU44KLCWk9X0Ml8eZNJvJILObPa1Gw-NrECmfa9LC0kSNkZ5vITtdQU5tK8VdY-RVQs4Pg70-PJzQ"
                  alt="Steaming Coffee"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-base text-on-surface-variant font-body">Our signature Arabica blend, roasted daily for the perfect morning start.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bleed */}
      <div className="absolute right-0 bottom-0 w-1/3 h-2/3 bg-primary/5 editorial-bleed -z-0"></div>
    </section>
  );
}
