"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Quality Ingredients",
    description: "We source only organic, farm-fresh produce and artisanal meats to ensure every bite is exceptional.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-restaurant"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
  },
  {
    title: "Hygienic Prep",
    description: "Our open-kitchen concept follows world-class safety protocols. Pure cleanliness, pure taste.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clean"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
  {
    title: "Fast Delivery",
    description: "Your food stays piping hot. Our dedicated fleet ensures a swift delivery within 30 minutes.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bolt"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
  },
];

export default function HomeFeatures() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-10 bg-surface-container-low rounded-[1rem] space-y-6 group hover:shadow-ambient transition-all duration-300 border border-outline-variant/5"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-3xl font-black text-on-surface font-headline">
              {feature.title}
            </h3>
            <p className="text-on-surface-variant font-body text-base">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
