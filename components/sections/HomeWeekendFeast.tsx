"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomeWeekendFeast() {
  return (
    <section className="py-6 md:py-16 px-4 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-secondary overflow-hidden rounded-[1rem] p-8 md:p-20 text-on-secondary flex flex-col md:flex-row items-center gap-12 shadow-2xl border border-white/10"
      >
        <div className="z-10 flex-1 space-y-6 text-center md:text-left">
          <span className="bg-white/20 px-4 py-1 rounded-full text-base font-bold font-body inline-block">
            Limited Time Combo
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-headline">
            Weekend <br className="hidden md:block" /> Feast for Two
          </h2>
          <p className="text-base opacity-90 max-w-md mx-auto md:mx-0 font-body">
            Ultimate satisfaction for pairs: 2 Signature Burgers + 2 Sides + 2 Brews. Indulge in the weekend special for just <span className="font-black text-2xl ml-1">₹29.99</span>
          </p>
          <Link
            href="/services"
            className="inline-block bg-white text-secondary px-8 md:px-10 py-3 md:py-4 rounded-full font-black text-base md:text-lg hover:scale-105 transition-all shadow-xl active:scale-95 duration-200 font-headline"
          >
            Claim Offer
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-2xl md:scale-110 border-4 border-white/10">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKJu7TQv-kPbpT0cRvlv0embSO-DtMQQhGe916EQlW_puIIIagxTfa0XxmH_QIUpah4xFC__lHPYudbzUkWccKtszJKALLLg6OSHLfL25Twovw54rytH2IIe37uU5fuOQbHSjjOsCzbM9gKwu7i50mblottLNm08PPA6MXTV8KyKJe9-giPcqnhBVc3_oyudaERFmLnv6zineG6VaRlXr64t2w2mkziE5cnQJxTY8S1zEcIgvENcdVCrobvY8qhtlEFxmm_OyiIA"
              alt="Feast Platter"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Abstract BG patterns */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-[2rem]"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[2rem]"></div>
      </motion.div>
    </section>
  );
}
