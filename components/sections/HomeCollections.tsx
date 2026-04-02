"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomeCollections() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left w-full md:w-auto"
        >
          <h2 className="text-3xl md:text-5xl font-black text-on-surface font-headline">Curated Collections</h2>
          <p className="text-base text-on-surface-variant mt-2 font-body">Explore our most loved categories of gourmet delights.</p>
        </motion.div>
        <Link href="/services" className="text-primary font-bold border-b-2 border-primary hover:text-secondary hover:border-secondary transition-colors font-headline text-sm mb-2 mx-auto md:mx-0">
          View Full Menu
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:h-[600px]">
        {/* Burgers (Large) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="h-[300px] md:h-auto md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[1rem] bg-tertiary shadow-ambient"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxNsDGcCEZYI-mgRY4n6CSNseHw5rXo-GOzScnrDwyeVNl2Jztn5HUSQwAl98wPwwI_wipi9Cs13drrt6IssVOVLTy9xr2k5Jwqqn1cZ0IXqnsOjU8L7UoepBNECijRPdaGr7XiRhe2IvAeifkGSzDJwmZc6Hsl5cBaV_DBuLJKyCS6VnBWVdU_bYudyNfCkGJ5I17aI17-B87gmizY7UidwMKNfDKl8Ks3nqz_6va6_cZDqZaM_IzAulAynZ6URjFLsHGGkaRZw"
            alt="Burgers"
            fill
            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8 flex flex-col justify-end">
            <span className="text-primary-fixed font-bold text-sm font-body">Signature</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-1 font-headline">Gourmet Burgers</h3>
            <div className="flex flex-wrap gap-2 mt-4 font-body">
              <span className="bg-secondary-container/20 backdrop-blur-md text-on-secondary px-3 py-1 rounded-full text-base font-semibold">Wagyu Chicken</span>
              <span className="bg-secondary-container/20 backdrop-blur-md text-on-secondary px-3 py-1 rounded-full text-base font-semibold">Vegan Options</span>
            </div>
          </div>
        </motion.div>

        {/* Coffee */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="h-[200px] md:h-auto group relative overflow-hidden rounded-[1rem] bg-surface-container-highest shadow-ambient"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATkFOCEZoP_NKr0URPSyf1h1EmgZjlB5YQOZ1IW_Q8x-aquN5NFlCzLYQEOkF_YweriecyAG8Cu5kv7yeXysUl9Tok8cwpnPhn_jWL53FV0MzZ6vaIJpwgOJfxW9BXAi7ufxCgwZVEH9nVFAttR3F7Of5PrGCHz0spWRhPHyPYjgxq2yxs7BlYvfHtGjCQyemXmh1NGakLHCZp5SosR75FZWuPMfQn4Lrv_kyeb2XgewbfX15CamZ0yXTxuWwgmKZiESelmMqO5w"
            alt="Coffee"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 shadow-inner"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-on-surface/60 to-transparent">
            <h3 className="text-lg md:text-xl font-bold text-white font-headline">Barista Brews</h3>
          </div>
        </motion.div>

        {/* Tea */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="h-[200px] md:h-auto group relative overflow-hidden rounded-[1rem] bg-surface-container-highest shadow-ambient"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeCtGq6f0H7wWRzqLWwxyRJghAqHJxpqHg_57-20LFOm4OgrqGpGxGyt-gr813_7VYQrXZUa6_zEw8VjSlK_NshL-Dfl3IrZL0gnJQEJXbbNRI5WbQUGYL7v6ZUq7f4mJu-Ez3D2t2KRUSBhVvnbfouhEKwwQ_EJRyb4M32NzGHqHgtJy_HgWL-G2dYRYFG5I8vZiWSOxrktb-RCssEHAPEIzs-wYfF0fsm8lZELxkTHubwt3URcuniIi-kG5rNR8Yb4m3iq1KlA"
            alt="Tea"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 shadow-inner"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-on-surface/60 to-transparent">
            <h3 className="text-lg md:text-xl font-bold text-white font-headline">Artisan Tea</h3>
          </div>
        </motion.div>

        {/* Momos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="h-[200px] md:h-auto group relative overflow-hidden rounded-[1rem] bg-surface-container-highest shadow-ambient"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuASrj8TvLe4xxcJNUL_Ah_tZJ6M3IYTB0CoiOldf6ioBavdkVcx1TxrbkZZUe8FaOXKwqahE6_Mcu_I00lCVCOytxc3GeX-JOPVv1n8ShyceW37aAkIa8d-0E9oL4ttM4rbX1oKPQiiZQhvbGftq2lUQs_2zUpHBamw6FDTwErY69p1QICOMahjObSD5oTWiYXmOLvPg0EtpdWF_xFS9GqNG8o9F1ngAe-mFuC5KCGEXULL40XLK6dm_sgrRnYtkPIUTAISqbG1rw"
            alt="Momos"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 shadow-inner"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-on-surface/60 to-transparent">
            <h3 className="text-lg md:text-xl font-bold text-white font-headline">Craft Momos</h3>
          </div>
        </motion.div>

        {/* Snacks */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="h-[200px] md:h-auto group relative overflow-hidden rounded-[1rem] bg-surface-container-highest shadow-ambient"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-fB2YA5rb0NiDFMp-4rV431dDwQaekpwQ-Vrv_anlIyfODpOdq4C63hx_bj7nnpN4Os_OWZY7gAsBRB_Qyu9vAf5xR5E4BmM7JX0POHCLBaLSmYJIioKa4zIgZmeHmyFa8fRszrhMzQWvHArsIKr5j4iGo8LCQf_q7uW43orYlOwzfaCP-0vDZxwRLxeo4b90UhwVOEWVjQeJK4cFbon_1tp1M6786myr48Gvye6bqbC1kJzunxjkTgdscY45MAnV_lmCTMC4Tw"
            alt="Snacks"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 shadow-inner"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-on-surface/60 to-transparent">
            <h3 className="text-lg md:text-xl font-bold text-white font-headline">Daily Snacks</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
