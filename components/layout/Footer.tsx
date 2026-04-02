"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#efe8ce] w-full pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="space-y-4">
          <div className="text-xl font-bold text-[#72544e] font-headline">The Modern Gastronome</div>
          <p className="text-[#72544e] text-base font-body">Elevating the everyday fast-food experience into a sensory culinary journey.</p>
          <div className="flex gap-4 pt-2 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe cursor-pointer hover:opacity-100 opacity-80 transition-opacity"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail cursor-pointer hover:opacity-100 opacity-80 transition-opacity"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin cursor-pointer hover:opacity-100 opacity-80 transition-opacity"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-[#ab2d00] text-base font-body">Quick Links</h4>
          <ul className="space-y-2">
            <Link href="/about" className="block text-[#72544e] text-base font-body hover:translate-x-1 transition-transform cursor-pointer">Our Story</Link>
            <Link href="/careers" className="block text-[#72544e] text-base font-body hover:translate-x-1 transition-transform cursor-pointer">Careers</Link>
            <Link href="/franchise" className="block text-[#72544e] text-base font-body hover:translate-x-1 transition-transform cursor-pointer">Franchise</Link>
            <Link href="/blog" className="block text-[#72544e] text-base font-body hover:translate-x-1 transition-transform cursor-pointer">Blog</Link>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-[#ab2d00] text-base font-body">Legal</h4>
          <ul className="space-y-2">
            <Link href="/privacy-policy" className="block text-[#72544e] text-base font-body hover:translate-x-1 transition-transform cursor-pointer">Privacy Policy</Link>
            <Link href="/terms-of-service" className="block text-[#72544e] text-base font-body hover:translate-x-1 transition-transform cursor-pointer">Terms of Service</Link>
            <Link href="/nutrition" className="block text-[#72544e] text-base font-body hover:translate-x-1 transition-transform cursor-pointer">Nutrition Info</Link>
            <Link href="/locations" className="block text-[#72544e] text-base font-body hover:translate-x-1 transition-transform cursor-pointer">Locations</Link>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-[#ab2d00] text-base font-body">Newsletter</h4>
          <p className="text-[#72544e] text-base font-body">Join the club for exclusive offers and secret menu drops.</p>
          <div className="flex">
            <input 
                className="bg-surface-container-highest border-none rounded-l-full px-4 w-full focus:ring-1 focus:ring-primary text-base font-body" 
                placeholder="Email" 
                type="email"
            />
            <button className="bg-primary text-on-primary px-4 py-2 rounded-r-full group transition-colors hover:bg-primary-dim">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send text-sm"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-16 mt-16 pt-8 border-t border-[#72544e]/10 text-center">
        <p className="text-[#72544e] text-base font-body">© 2024 The Modern Gastronome. Crafted for Connoisseurs.</p>
      </div>
    </footer>
  );
}
