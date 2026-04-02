"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-on-surface selection:bg-primary/20 selection:text-primary">

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:h-[819px] flex items-center overflow-hidden bg-surface-container pt-32 pb-16 md:pt-20 md:pb-0">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8YzWTacGt7YGsAYoa7esZmRKRNvUux9ZRoWGQKGGBGN6d0Lt-PS4AULXu55FBa_G7pitGocuYe0Ln3hhHi-M0n-Ssj4yfBp-6jV0ct8p0b7v8kPa6N6FEKTNRIYVTFwLaDssg1yrHDcXTcgOP386MFgmiyLFf44Od35sCazMorLyNBBcSb7dY9MbtcYJUqltaNivdOgFM6elqxRdPZqx146gtjRtbWxS1gytxxkdDeznc3He6B1bvAU65R1mHiGBM0hzeRlnHFQ"
            alt="Chef preparing fresh ingredients"
            fill
            className="w-full h-full object-cover opacity-80 mix-blend-multiply"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 md:via-background/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16 w-full text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto md:mx-0"
          >
            <span className="label-md font-bold text-secondary mb-4 block font-body text-base">Since 2012</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-on-background mb-6 font-headline">
              Our Passion <br className="hidden md:block" />for <span className="text-primary">Flavor</span>
            </h1>
            <p className="text-base text-on-surface-variant mb-8 font-body">
              Treating food as art and every guest with the warmth of high hospitality. Discover the heart behind "DragonFly."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-8 md:py-16 bg-surface px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/4] rounded-[1rem] overflow-hidden shadow-2xl relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWSE4d1XZWGkxdoyTljJJYIWNJU1agYdL1LGMh1I4_USDQw3MIZgKDfUsE23SepOJtlKRIwWpHX4EXYlo4mXSpAxyzFTosK9ymPy7r8UlJzblt-wKGevvbdnb9nUu2QzZ8iLA-w7WtvC0Lk9itnKHQCyJhDanFzpzalB0u6iPwcuHHddYMtpfDm1jsUvRJSePEekHQFCYQRNXuEXSUXV0b57LSPjWzULTWHQP8hOAKPLIv4CPZtWkRhwply_QeqpvfOnACKwegjg"
                alt="Original Cafe"
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-48 h-48 md:w-64 md:h-64 rounded-[1rem] overflow-hidden border-8 border-surface hidden sm:block shadow-xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvItzqLecqjf2DLC1eGG7iOho2JUsTFsNyXJ0HJgRQWUT-NTXRTFapHXw2GnzutlzYm9Rpn0VaS1QPq7JguWzhcQIQOj08YN0azFp6sAS5YuNCKZgjL5BxB53O52zeKmogfcSt4TD54iMFjoCynxGpraltFGNxdrpaoicQ2jfGTN2Wlv7NVmgoGol1vWiTfBT37EinWIEnwdm0yuc6DhURrAQwBEf-HuvkYE0Gp_PUz8sRUTP0CDX-9BCzQypQzz7_dwCNqWgVcQ"
                alt="Coffee detail"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-black text-on-background font-headline">From a Humble Corner to a <span className="text-secondary">Neighborhood Favorite</span>.</h2>
            <div className="space-y-4 text-base text-on-surface-variant font-body">
              <p>It started with a single sourdough starter and a vision to redefine what "fast" food could mean. We believed that quality shouldn't be sacrificed for speed.</p>
              <p>Over the decade, we've grown from a 12-seat cafe into a culinary destination. Our journey has been guided by a simple philosophy: honor the ingredient, respect the guest, and never stop experimenting with the perfect sear.</p>
            </div>
            <div className="pt-6 flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">
              <div>
                <span className="block text-4xl md:text-5xl font-black text-primary font-headline">12+</span>
                <span className="text-base font-bold text-outline font-body">Years of Taste</span>
              </div>
              <div>
                <span className="block text-4xl md:text-5xl font-black text-primary font-headline">50k+</span>
                <span className="text-base font-bold text-outline font-body">Happy Guests</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision: Bento Grid */}
      <section className="py-8 md:py-16 bg-surface-container px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-surface-container-lowest p-8 md:p-12 rounded-[1rem] flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="text-primary text-4xl md:text-5xl mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><title>Award Icon</title><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /><circle cx="12" cy="8" r="6" /></svg>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 font-headline">Our Mission</h3>
                <p className="text-base text-on-surface-variant font-body">To elevate the daily dining experience through uncompromising quality, sensory delight, and the soulful craft of gourmet preparation accessible to all.</p>
              </div>
              <div className="mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-4">
                {["Freshness", "Craftsmanship", "Community"].map(tag => (
                  <span key={tag} className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-base font-bold font-body">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary text-on-primary p-8 md:p-12 rounded-[1rem] shadow-ambient"
            >
              <div className="text-on-primary text-4xl md:text-5xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><title>Eye Icon</title><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 font-headline">The Vision</h3>
              <p className="text-base opacity-90 font-body">Becoming the global gold standard for editorial-first dining, where every plate tells a story and every interaction feels like home.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-8 md:py-16 px-4 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-10 md:space-y-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-headline text-center md:text-left">Unwavering <br className="hidden md:block" /><span className="text-primary underline decoration-4 underline-offset-8">Quality Standards</span></h2>
            <div className="space-y-8 md:space-y-10">
              {[
                { title: "Artisan Sourcing", desc: "We partner exclusively with local farms that share our commitment to organic, pesticide-free practices and ethical harvesting.", icon: "eco" },
                { title: "Hospital-Grade Hygiene", desc: "Our kitchens operate under strict clinical protocols, ensuring that 'clean' is not just an aesthetic, but a fundamental promise.", icon: "sanitizer" },
                { title: "The 'Zero-Frozen' Rule", desc: "We possess no industrial freezers. If it isn't fresh from the market today, it doesn't make it to your table tonight.", icon: "schedule" }
              ].map((std, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center sm:items-start text-center sm:text-left">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                    {std.icon === 'eco' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11c0-4 4-8 5-8s5 4 5 8c0 4-4 8-5 8s-5-4-5-8Z" /><path d="M12 3v18" /></svg>}
                    {std.icon === 'sanitizer' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7" /><path d="M14 2v7" /><path d="M7 16a5 5 0 0 1 10 0v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" /></svg>}
                    {std.icon === 'schedule' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 font-headline">{std.title}</h4>
                    <p className="text-base text-on-surface-variant font-body">{std.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative w-full aspect-square max-w-[500px] mx-auto"
          >
            <div className="w-full h-full bg-surface-container-high rounded-full overflow-hidden p-6 md:p-8 border border-outline-variant/20 relative shadow-inner">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9-JFJnXRzwV6upyqpgYk9bdCkSF9X1IE9CbfZT9u5KdjsdSj7Mmb795t3UpZUnIXBNKqTj96QNImcbDNxLy6YWl_P2o0eqvi-AvlGWbv5stV1eoYBSMUxvm7deGnyY1W55fVk5Nf7UVwN1SurnWqijWkIRb10OenPfWRCLL4kmWrmAcbE27wzEVjoh1siwZkneg7eBNHJjqir4bYGhMlBCKJTAk8VKm-VkJHLM6Cfj-rK0Tikn4hW6ApQ277Yd7I-NZlTNoYBqA"
                alt="Fresh kitchen ingredients"
                fill
                className="w-full h-full object-cover rounded-full shadow-inner"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team / The Kitchen */}
      <section className="py-8 md:py-16 bg-surface-container-low px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left">
            <div>
              <span className="text-secondary font-bold text-base mb-2 block font-body">The Artists</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-headline">Behind the <span className="text-tertiary">Heat</span></h2>
            </div>
            <p className="max-w-md text-base text-on-surface-variant font-body">Our kitchen is a symphony of precision. Led by Executive Chef Julian Thorne, our team brings decades of Michelin-star experience to the bistro table.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] rounded-[1rem] overflow-hidden mb-6 relative shadow-lg">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkrW9c0MDkfYzI3NnHXt-JNJIGyNGjUUiSbH4Wq12l8rVI2l5_LocK8pkU2oFPAuBPUq54fdU1vCM85taP7n_Ckeq5jnNn14Yy0ynmssBUpIAiPz3033tDyVEdhag0C6XZMYF3Ybc2UCNNiT-Ao7s2Sl6EErXpiwx_XV99pZMwzC-omDVhYovKimAs6iV7R2xzK-cS5yYWfrW-SMpO928iyTIspxN_YgKlj9EDBdCsRMkD3zmc5rfzS7DBQ7hhGP47DChd5lv-zQ"
                  alt="Chef Julian Thorne"
                  fill
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="text-xl font-bold font-headline text-center md:text-left">Julian Thorne</h4>
              <p className="text-base text-outline font-bold font-body text-center md:text-left">Executive Chef</p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] rounded-[1rem] overflow-hidden mb-6 relative shadow-lg">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfmVg8JiW8DyFrlqM-r_T3ZKDSm-AzKlQ1UnBM0mQVWWbYJvnL23C_YPpQWFZz7_hr4piO__H9F8W042bjI-CZ7QC8GlIaIKstGMJRdqCC583tgllo7n_m7K8v8p8U4jRmln5IBkFpt-Mdigko_OWycegL5-eD1aja6dwtchVZvV3ExLcIBR0ICo1YCtmGHVrb3sLOwrBh2z1lPPra-efNEOi2wRxUF9voRi64D_G4FXqeJZAIP7v9Wihs8LzVmU-KO4qTEv-LQw"
                  alt="Sous Chef Elena"
                  fill
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="text-xl font-bold font-headline text-center md:text-left">Elena Rodriguez</h4>
              <p className="text-base text-outline font-bold font-body text-center md:text-left">Sous Chef</p>
            </motion.div>

            {/* Kitchen Shot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-1 sm:col-span-2 lg:col-span-2 relative rounded-[1rem] overflow-hidden shadow-2xl h-full min-h-[300px] md:min-h-[400px]"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRTW1DsoG2i9bhhSHbnF33WYePVMCKB1qMPyhHA4xscAcZ3VKvMrXmRRfx9DKn-8gLC5C6Cpyjbf7cd1eI7HtsYbP38zQQl-W0q-GP8SisItYH2cb24eMzv_oamCgceTov8N-Z2n2nP301yieBKGhmaQEfqNxDfFa1POreWE7PqY-6gtcp1Ru_bQju_EgXAguyQ4km0RxXvL-ZWAfFCvwawomxPT3LFhfqkyd8s5SOu56et_GcwNIkcsdRZuSrJ609npB7YAF_FQ"
                alt="Kitchen atmosphere"
                fill
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent p-6 md:p-8 flex flex-col justify-end">
                <h4 className="text-on-primary text-xl md:text-2xl font-bold font-headline">The Laboratory</h4>
                <p className="text-on-primary/80 text-base font-body font-bold">Where flavor chemistry becomes art.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-16 text-center bg-surface">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-headline">Taste the <span className="text-primary italic">Future</span> of Gastronomy</h2>
          <p className="text-base text-on-surface-variant font-body max-w-2xl mx-auto">Join us for a dining experience that respects your palate and your time. Our doors are always open to those who seek the extraordinary.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary text-on-primary px-8 md:px-10 py-4 md:py-5 rounded-full text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-ambient font-headline">Book a Table</button>
            <Link href="/services" className="bg-surface-container-highest text-on-surface px-8 md:px-10 py-4 md:py-5 rounded-full text-lg font-bold hover:bg-surface-container-high transition-colors font-headline">View Menu</Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
