"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const favorites = [
  {
    name: "The Gastronome Double",
    description: "Two wagyu patties, triple cheddar, secret house sauce, and charred jalapeños.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgLbeWu3xNzas-9eJtUZWOEfIJFTV0StOk8VFxfY_3_uKtFZsg4-9K3yo3l1CHKvI2hsK23ZLJT8FzdHh3wvYaymCLAOm6-c21eK6BVcY0ekXGelGE8ofRxx9q40MkkeCcdCR7SyIPH7Sb0tjIp3Is4Q0xL31Eai2Dan8_obwsyj1V8SavpaeXNzGSQwhh1zwY4Jbein4by_Vq2kqMPP6aTo2skjbkDxrwkkU_cunB3uNJwmHzVWdiNPSj_Hs6YP5XX7447VPOMA",
    price: "₹14.50",
    tag: "Hot",
  },
  {
    name: "Cold Brew Nitro",
    description: "Slow-steeped for 24 hours, infused with nitrogen for a velvety, creamy finish.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqrTE7V5t2NWwsnGn9uFO50m4wY6j1OR0rN0km5gDFIMN9sFH6LNmEL5h93yzToepmTFHzm7blKxbKanSmKg3dTzMT3pRHJwjETtxcikCPKMxajWvDjAtl76VIq6lVENjcGiOHesGq7aqTll8ieDodwEngfjOIrXy9Ij4aD4aphVfUOVzSzQEKDFidNe9XURLs9qjs6QSnjmoLw2pV-399Qw04_uD5REoRV5-O2sG1RSBtyrQPJeYKmPWkCErsjgLsVNBs2Fvoww",
    price: "₹6.20",
    tag: null,
  },
  {
    name: "Spicy Jhol Momos",
    description: "Himalayan dumplings submerged in a rich, tangy sesame and red chili broth.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUkYJ568JBGMhotRSg9QhpKvtfRZPs44RCCd-GtrnpFS08f73B-oHvmEM9wubquUFix1CqHq-4XiQBy9d3QB9xNiNfqWewqvicvXNdpsrXRAR9Mb8SdYHdzyCKpkaXvYtYFBSfy21LkUjp-NRQMKRKvdp61hLQJm7TAznljD0_8iTAZbthrabbEPsLU3aUZffBIFxOqZ0icIdYec_DPv6z4DqBOGYAfZwQxoEoFIK6Ha-6kA96DnVO72Qn4YgwjEBWY_t77LRfDw",
    price: "₹11.80",
    tag: null,
  },
];

export default function HomeFavorites() {
  return (
    <section className="bg-surface-container py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black text-on-surface font-headline">Crowd Favorites</h2>
          <p className="text-base text-on-surface-variant max-w-lg mx-auto mt-4 font-body">The culinary masterpieces that defined our legacy. Prepared fresh with artisanal precision, ordered daily by connoisseurs.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {favorites.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface-container-lowest rounded-[1rem] overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/10"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.tag && (
                  <div className="absolute top-4 right-4 bg-secondary text-on-secondary px-3 py-1 rounded-full text-base font-bold font-body">
                    {item.tag}
                  </div>
                )}
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-on-surface font-headline">{item.name}</h3>
                <p className="text-on-surface-variant mt-2 text-base font-body">{item.description}</p>
                <div className="mt-8 flex justify-between items-center">
                  <span className="text-2xl font-black text-primary font-headline">{item.price}</span>
                  <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-primary-dim transition-all duration-300 transform active:scale-95 font-body text-base shadow-lg shadow-primary/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
