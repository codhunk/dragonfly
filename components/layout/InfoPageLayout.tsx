"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface InfoPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  heroImage?: string;
}

export default function InfoPageLayout({ title, subtitle, children, heroImage }: InfoPageLayoutProps) {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden pt-20">
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt={title}
              className="w-full h-full object-cover opacity-40 backdrop-blur-sm"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface/20 to-surface"></div>
          </div>
        )}

        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-headline text-primary mb-4 p-6"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-xl italic leading-none tracking-normal text-tertiary"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto px-4 md:px-8 py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-md bg-white/40 backdrop-blur-xl border border-white/20 p-8 md:p-16 shadow-ambient"
        >
          {children}
        </motion.div>

        {/* Global Page CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary rounded-md p-12 text-center text-on-primary shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-headline mb-4">Hungry for Mastery?</h2>
          <p className="mb-8 opacity-90 italic">Explore our artisanal collection of sensory delights and elevate your everyday dining experience today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-primary px-8 py-4 rounded-md font-bold shadow-lg hover:scale-105 transition-transform">
              View Full Menu
            </button>
            <button className="bg-transparent border-2 border-white/40 text-white px-8 py-4 rounded-md font-bold hover:bg-white/10 transition-colors">
              Contact Support
            </button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
