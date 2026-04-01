"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    text: "The best nitro cold brew I've ever had. It's so smooth it doesn't even need sugar. The ambiance is just the cherry on top!",
    author: "Sarah J.",
    role: "Verified Foodie",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUS88QJoA13P828GZxiYqLyqhEXLq3ACU8rFDe4X9PcQa_p9uruTLLJ3JV2gY8s7bG7w4vN8BQxulHPfzh-A2XqP2Ul71or2WsvQcJxHfvuJCyHfpy908yp4PQW-dhXJD4Ok2qsfzzAs2_e2spVhuoYFM0apDmQg0wqSc-SFSIDeZN2vynpGcrtSYakWQ1nP2Ty-TOA8zyQfuG7TQ0WiZ6ptK7e3MTEcxw9wY9MqJR2QxaqdgV6TTGuC_zdtvzCKceRsx05N-AQA",
  },
  {
    text: "A burger that actually looks like the pictures. Juicy, seasoned perfectly, and that brioche bun is like a cloud. 10/10.",
    author: "Mark D.",
    role: "Local Guide",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAJHC2Vx9JcNfKjfkxZ87pTBZem-cCCk5rptOc478qeOqKAeHEggHVupkK93DwXHfM9SRkJHS79NX0KTddj36-Q8vSHF7sVTmIrCk54-o7WwqLtBnraTFtGYsyCKVq2E2vuu4UCu6vqLIM1wXfi5GXczuCg32SXVOu3qSKLKAqXbFlVlpU1CPP6Qfjr5cN-816sGYLXXI8ehFjedH1lnKB6Lpb5q7YVtviz1CvF1BfwknTzGK8nt4E1gfk7Zswk4Z_yNXsMfAcAw",
    translateY: true,
  },
  {
    text: "Their momos are legit. The spicy sauce has just the right kick. Delivery was super fast too. Definitely ordering again.",
    author: "Leo K.",
    role: "Home Chef",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGkNUOib66zrbKZgede5ZWIN68MRrDDQE0gvEaxFHmK8j-HTfLgoqYcXsDTPEd91CwW-ufknrFX5JIRox0t7iOK8JAXWiDS9B6Xs1pGadCFgIJeG-m4uBeasJ9cyPipFhP0qrpi2jsaVkYNUTfFVNJNy7n6ZfuZBj9J1N3doya6de6QGcVKjTv0DlV1iD6ZW17t7jPbfz9eSfNqLKI6sEQLQWZA2EWI3u8hSh2jo0P4R9ljtMweg5CS9SfB26gvDKHKwH27xvldA",
  },
];

export default function HomeTestimonials() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 md:px-16 overflow-hidden bg-surface">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-black text-on-surface text-center mb-10 underline decoration-primary decoration-4 underline-offset-8 font-headline"
      >
        What Our <span className="text-primary">Connoisseurs</span> Say
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: testimonial.translateY ? 16 : 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`bg-surface-container-highest p-8 rounded-[1rem] relative flex flex-col justify-between border border-outline-variant/10 ${testimonial.translateY ? "md:translate-y-4 shadow-xl" : "shadow-md"
              }`}
          >
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex gap-1 mb-6 text-secondary"
              >
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ))}
              </motion.div>
              <p className="text-on-surface font-medium text-base font-body">
                "{testimonial.text}"
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 bg-outline-variant rounded-full overflow-hidden relative shadow-inner border border-white/20">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-on-surface font-headline">{testimonial.author}</p>
                <p className="text-base text-on-surface-variant font-body">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
