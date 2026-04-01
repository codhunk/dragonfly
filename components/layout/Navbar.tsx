"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/", id: "01", desc: "The Beginning" },
  { name: "Services", href: "/services", id: "02", desc: "Gourmet Offerings" },
  { name: "About", href: "/about", id: "03", desc: "Our Culinary Story" },
  { name: "Contact", href: "/contact", id: "04", desc: "Join the Table" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-[#fdf6df]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-surface/50 backdrop-blur-sm py-6"
          }`}
      >
        <div className="flex justify-between items-center px-4 md:px-16 max-w-7xl mx-auto">
          {/* Logo Section */}
          <Link href="/" className="relative h-12 flex items-center group">
            <h1 className="text-2xl font-bold text-[#ab2d00]">DragonFly</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 font-bold text-base transition-all duration-300 ${isActive
                    ? "text-[#ab2d00] font-black"
                    : "text-[#72544e] font-bold hover:text-[#ab2d00]"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-[#ab2d00] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            {/* Search Box - Hidden on mobile unless active */}
            <div className={`relative flex items-center transition-all duration-500 rounded-full bg-surface-container-low border ${isSearchFocused ? "w-48 md:w-64 border-primary ring-2 ring-primary/10 shadow-inner scale-105" : "w-10 md:w-48 border-transparent"
              }`}>
              <span className="p-2.5 text-[#ab2d00] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
              </span>
              <input
                type="text"
                placeholder="Search menu..."
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`bg-transparent border-none focus:ring-0 text-base font-body text-on-surface w-full pr-4 transition-opacity duration-300 ${isSearchFocused ? "opacity-100" : "hidden md:block opacity-50"
                  }`}
              />
            </div>

            {/* CTA Button */}
            <Link
              href="/services"
              className="hidden sm:block bg-primary text-on-primary px-8 py-3 rounded-full font-headline font-black text-base shadow-xl shadow-primary/20 hover:bg-primary-dim hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Order Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-[#ab2d00] hover:bg-surface-container rounded-full transition-colors relative z-[110]"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 10 : 0, backgroundColor: "#ab2d00" }}
                  className="w-full h-0.5 rounded-full origin-center"
                />
                <motion.span
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1, backgroundColor: "#ab2d00" }}
                  className="w-full h-0.5 rounded-full"
                />
                <motion.span
                  animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -10 : 0, backgroundColor: "#ab2d00" }}
                  className="w-full h-0.5 rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Advanced Professional Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-background/60 backdrop-blur-2xl"
            />

            {/* Side Panel Reveal */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-[90%] sm:w-[70%] bg-[#fdf6df] shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.1)] p-10 flex flex-col justify-between border-l border-primary/10 overflow-hidden"
            >
              {/* Background Accent Text */}
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 pointer-events-none opacity-[0.03]">
                <span className="text-[15rem] font-black font-headline whitespace-nowrap">DRAGONFLY</span>
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-16">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <Link href="/">
                      <span className="text-secondary font-bold text-2xl">DragonFly</span>
                    </Link>
                  </div>
                </div>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + idx * 0.1, duration: 0.5, ease: "backOut" }}
                      key={link.name}
                      className="group relative"
                    >
                      <Link
                        href={link.href}
                        className="flex items-start gap-4 group-hover:gap-6 transition-all duration-500"
                      >
                        <span className="text-base font-black font-headline text-primary opacity-40 mt-2">{link.id}</span>
                        <div>
                          <span className={`block text-xl font-bold font-headline transition-colors ${pathname === link.href ? "text-[#ab2d00]" : "text-[#72544e] group-hover:text-[#ab2d00]"
                            }`}>
                            {link.name}
                          </span>
                          <motion.div
                            className={`block h-1 bg-primary/20 mt-1 origin-left transition-all duration-500 ${pathname === link.href ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}`}
                          />
                          <span className="text-base font-medium text-outline-variant mt-2 block opacity-60">
                            {link.desc}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="relative z-10 pt-10 border-t border-primary/10">
                <div className="space-y-8 mb-10">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <span className="text-base font-bold text-primary block opacity-60">Reservation</span>
                      <p className="text-on-surface font-black text-base">+1 555 012 3456</p>
                    </div>
                    <div className="space-y-2 text-right">
                      <span className="text-base font-bold text-primary block opacity-60">Address</span>
                      <p className="text-on-surface font-black text-base text-right line-clamp-1">842 Artisan Avenue</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-primary/5 p-4 rounded-2xl border border-primary/10">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-base">schedule</span>
                    </div>
                    <div>
                      <span className="block text-base font-bold text-primary">Now Serving</span>
                      <p className="text-base font-bold text-on-surface">Mon - Sun (10am - 11pm)</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <Link
                    href="/services"
                    className="group w-full bg-[#ab2d00] text-white py-5 rounded-2xl text-center font-black text-lg shadow-2xl shadow-[#ab2d00]/30 active:scale-95 transition-all overflow-hidden relative"
                  >
                    <span className="relative z-10 text-base">Pre-Order Now</span>
                    <motion.div
                      className="absolute inset-0 bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    />
                  </Link>

                  <div className="flex justify-center gap-8 pt-6 border-t border-primary/5">
                    {["camera", "play_circle", "share"].map((icon, i) => (
                      <a key={i} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm group" href="#">
                        <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">{icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
