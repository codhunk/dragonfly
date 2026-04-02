"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] md:min-h-[614px] flex items-center overflow-hidden py-16 md:py-0">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB4Ut4EvNth1Ac68Zl3vMkm13vARGZUjDEpVXNx9yisOULKys_tkQegTO847eZ6WO-god_ezwGxGaDur1e3gYLXt-mJ85vZ_YRtZMpNcVWdQ__RqhW72knmlwPpOEDyF2lI-8n3SALkGpzZJsAyAZmOnWE_hkxOwwbU92lyWxkOAIEHUlV5LYBuE294bN6teINQAg3PJUdR8l7bgk6dj90VBIzyA2qIIj_jnOfWr8B_3qYraxmgWreUIoHbkuQFJY2UFklOENPlw"
              alt="Modern high-end restaurant interior"
              fill
              className="object-cover opacity-20 scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16 w-full text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto md:mx-0"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-base font-bold mb-6 font-body">
                Inquiries & Feedback
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-headline text-on-surface mb-8">
                Get in <span className="text-primary">Touch.</span>
              </h1>
              <p className="text-base text-tertiary max-w-xl mx-auto md:mx-0 font-body">
                Whether you're planning a private event or just want to say hello, we'd love to hear from you. Our culinary doors are always open.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-12 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-surface-container-lowest/50 p-6 md:p-10 rounded-[1rem] shadow-sm border border-outline-variant/10"
            >
              <h2 className="text-2xl md:text-3xl font-headline font-black mb-6 md:mb-8 text-center md:text-left">Send a Message</h2>
              <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="relative group">
                    <label className="block text-base font-bold text-outline mb-2 ml-1 font-body">Full Name</label>
                    <input
                      type="text"
                      placeholder="Gastronome Doe"
                      className="w-full bg-gray-50 border-none rounded-[1rem] p-4 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface placeholder:text-outline-variant font-body text-base"
                    />
                  </div>
                  <div className="relative group">
                    <label className="block text-base font-bold text-outline mb-2 ml-1 font-body">Email Address</label>
                    <input
                      type="email"
                      placeholder="hello@gastronome.com"
                      className="w-full bg-gray-50 border-none rounded-[1rem] p-4 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface placeholder:text-outline-variant font-body text-base"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <label className="block text-base font-bold text-outline mb-2 ml-1 font-body">Mobile Number</label>
                  <input

                    placeholder="+91 9356845123"
                    className="w-full bg-gray-50 border-none rounded-[1rem] p-4 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface resize-none placeholder:text-outline-variant font-body text-base"
                  ></input>
                </div>
                <div className="relative group">
                  <label className="block text-base font-bold text-outline mb-2 ml-1 font-body">Your Message</label>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your culinary cravings..."
                    className="w-full bg-gray-50 border-none rounded-[1rem] p-4 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface resize-none placeholder:text-outline-variant font-body text-base"
                  ></textarea>
                </div>
                <button className="w-full md:w-auto px-12 py-4 bg-primary text-on-primary rounded-full font-black text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20 active:scale-95 font-headline">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Details & Info Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col gap-10 md:gap-12"
            >
              {/* Info Cards */}
              <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: "call", title: "Call Us", content: "+1 (555) 012-3456", sub: "Mon-Sun, 10am - 11pm" },
                  { icon: "mail", title: "Email Us", content: "concierge@gastronome.com", sub: "Expect a reply within 24h" },
                  { icon: "location_on", title: "Visit Us", content: "842 Artisan Avenue", sub: "New York, NY 10012" }
                ].map((item, i) => (
                  <div key={i} className="bg-surface-container p-6 md:p-8 rounded-[1rem] flex gap-5 md:gap-6 items-start border border-outline-variant/10 shadow-sm transition-transform hover:translate-x-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined text-xl md:text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-tertiary mb-1 font-bold text-sm">{item.title}</h4>
                      <p className="text-base md:text-lg font-headline font-bold text-on-surface">{item.content}</p>
                      <p className="text-sm text-on-surface-variant mt-1 font-bold">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Presence */}
              <div className="bg-primary-container p-8 rounded-[1rem] shadow-ambient text-center lg:text-left">
                <h4 className="font-headline font-black text-on-primary-container text-xl mb-6">Join Our Social Table</h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {["camera", "social_leaderboard", "play_circle", "share"].map((icon, i) => (
                    <a key={i} className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform shadow-md" href="#">
                      <span className="material-symbols-outlined fill-1">{icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Location Section */}
        <section className="relative w-full h-[400px] md:h-[500px] bg-surface-container-low overflow-hidden mt-12">
          <div className="absolute inset-0 transition-all duration-700">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzu6o9lJae8VteBB4LHST2fRyUtfvdRJZVUcUzMeGQTnXh0NTX4AkNyzJBCkCBQ4_EeK7fKmFloQ9zEV5mRrONMdx12AVwCQZn0iij8MM0DxzZTNTHUxhcwj6e9xVaP2-vwwMqbQ6j5Rg3R9T538JS_Y_gH1ZuWvfdOdXDM8rQfYeLw1EiCLKmyMUZ1pWo2CnYL6dC7ujwED8JOuuNKYQo7zW7DY-RFornXMX41TtWkEL3r2PMt2rDgJQxmH982t0qNhBuMnEwEw"
              alt="New York Map"
              fill
              className="object-cover"
            />
          </div>
          {/* Map Overlay Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute bottom-8 left-4 md:bottom-12 md:left-24 z-20 w-[calc(100%-2rem)] md:w-auto"
          >
            <div className="glass-card p-6 md:p-8 rounded-[1rem] max-w-sm border border-white/20 shadow-2xl backdrop-blur-md bg-white/80">
              <h5 className="font-headline font-black text-xl mb-2">Our Main Bistro</h5>
              <p className="text-base text-on-surface-variant mb-4 font-body">Located in the heart of the city's culinary hub, just steps away from Central Park South.</p>
              <a className="inline-flex items-center gap-2 text-primary font-bold text-base hover:gap-4 transition-all font-body" href="#">
                Get Directions
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </motion.div>
          {/* Gradient edge for transition */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(253,246,223,1)]"></div>
        </section>
      </div>
    </main>
  );
}
