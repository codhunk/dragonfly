"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-surface selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <span className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full text-base font-bold mb-6 font-body">
              Culinary Excellence
            </span>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-black text-on-background mb-8">
              Artistry <br className="hidden md:block" /><span>on Every</span><br className="hidden md:block" /> Plate.
            </h1>
            <p className="text-base text-on-surface-variant max-w-md mx-auto md:mx-0 font-body">
              A curated collection of sensory delights, from artisanal espresso to hand-crafted savory bites.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[300px] md:h-[500px]"
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 md:w-64 md:h-64 bg-tertiary-container rounded-full blur-3xl opacity-40"></div>
            <div className="relative w-full h-full bleed-image overflow-hidden rounded-xl shadow-2xl z-10 border border-white/20">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOEB1rU1baLE6sPY8xmIN66US4zhHzp76zwT_XQAUgXKeIz_J7kmqKuBFaimhqD2ABcycixF0qiMA8b5BDhXzSsCtIR9yTFs-5b2YpBBtfDE8mSOP7XM6T7-vgPlXJTGxl8ykpu2DH6D3v2FrT_-6AQh0yq5gxyuZaekRxP8oDIq1vncZkO-O-y7oD2IQ9nzjSfk2oqCyG2PBrEcR2EecAyCeaGmeO-rsluoteNjjFgQdYd7bYiQgJ2X8i63Gtrl7XGqiOwTvmDA"
                alt="Latte and beans"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* Category Filter */}
      <section className="sticky top-16 md:top-20 z-40 py-6 bg-surface/90 backdrop-blur-md border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 mask-fade-right">
            {["All Menus", "Coffee", "Tea Selection", "Signature Burgers", "Himalayan Momos", "Snacks & More"].map((cat, i) => (
              <button
                key={cat}
                className={`whitespace-nowrap px-6 md:px-8 py-3 rounded-full font-black text-base transition-all ${i === 0
                  ? "bg-primary text-on-primary shadow-xl shadow-primary/20"
                  : "bg-surface-container hover:bg-surface-container-high text-on-surface font-bold"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-20 md:space-y-32">

        {/* Coffee Section */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
            <div>
              <h2 className="font-headline text-3xl md:text-5xl font-black text-on-background">Coffee Varieties</h2>
              <p className="text-on-surface-variant font-label text-base mt-2 font-bold">Ethically Sourced Beans</p>
            </div>
            <button className="text-primary font-black flex items-center gap-2 group font-headline text-base border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
              View Full Roast List
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <CoffeeCard
              name="Velvet Latte"
              price="₹6.50"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBMcEDuTVfi33spMkG_NE0_UH-OXKb67NqLaHnMaF8tllKPtcNbxNFxF3BbCXihzsgHgrgI4knpwsQkI9Pxq0mAYYqbDHQA-cXpJ9cPfDFF7E_MuYFdzvL9hJ-7stDVyuhpr51vS7mRyN_1JiQR2ieUbhrCP3iTr9FwVuEIvCkNntc2QXTjuAdhF7NojKiict9Cr5_FFXUZkNtdeDh92JyvJWOzqC9t720SzMliIWMaFBFhQ3VwK_hgY0DfMEEpmJDHeVwRXvVc_w"
              description="Double shot of our house espresso, silky micro-foam, and a hint of organic Madagascar vanilla."
              tag="Barista's Choice"
            />
            <CoffeeCard
              name="Midnight Espresso"
              price="₹4.00"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAFpC0iwSekB-uLY40r_HDOT2ulXKxD30uNSfdrgSs05QAr85N8JJ57_2B_AQ-hptzwCvpu5813o-8uOzXTroRYhsmi1qcKPLVwD6cr8za0blGRs1pVssDoSTMS-WdlZiKjjSXwdbu5Xqstoa8ACxl9Iy9EvnkxA2K97QBTm1dPRu29BtnsQcMDhh59LhKk-1wBmb8Q8ulQK1Ge0hW8as953DQ1BxvGI-stcMrQQjhbUogeLuTMBG3yJgExwL2aQcFqpvGyTMguQw"
              description="Bold, intense, and complex. A pure extraction of our darkest roasted Ethiopian beans."
            />
            <CoffeeCard
              name="Classic Cap"
              price="₹5.75"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCyP2rI45ZgjB7oLuDcAdd0Dlx_k-NT_kCi8l23TQK2zSla2qChLUWXltgg13mSYI_LxAzyLzpt1tYcTRt6E9tkHuOo3mNxY8fL2yBQNl8GROwya2_FxxkIUX7unLqRtkCDcMDBcpJvwTxeYnr1mqKMz7BaPToFi5eeAUYHQTGysRpjbOOIithVOeOBRKPjSJxENh4QDGnwR5gRed_9pIimtCjwBlE4j0bcXa6YTsCqRB4a56wSzuKCFqh9eIQ-c9YRoyCFsxxSFg"
              description="Equally balanced thirds of espresso, steamed milk, and dense foam. Dusted with Ceylon cinnamon."
            />
          </div>
        </section>

        {/* Burgers & Momos Bento */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Burgers Cluster */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-center md:text-left">
              <h2 className="font-headline text-3xl md:text-5xl font-black text-on-background">Signature Burgers</h2>
              <p className="text-on-surface-variant font-label text-base mt-2 font-bold">Grass-Fed & House-Ground</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Burger Large Card */}
              <div className="group relative h-[400px] md:h-[510px] rounded-xl overflow-hidden p-6 md:p-8 flex flex-col justify-end shadow-ambient">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2BG3EQJBywbyF8mka8VTGzsoreqUtEIFFIgjs8WPCXDhG8p77WMNRu9MsFZtp2axuckDSaR-OiSinx2yniBbpSKd6Ho_ZQYbU23P-rDiWuQVuxQTir-rL-eApvIkDC9zKwK_TnomMOddhFKo19iHSacUZWpN0PB7Ctq_wtJOXubEiC9jmPGjUGYfY5PsnovFcnmGGIpC3qFYfuu1849dp5axavAWBAhvLXXUXIkJwBm7-y0Npm1YHxej_NSot6FQPJPs4n1pFsw"
                  alt="Gastronome Classic"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-90"
                />
                <div className="relative z-10 bg-surface-container-lowest/90 backdrop-blur-md p-6 rounded-xl border border-outline-variant/10 shadow-xl">
                  <h3 className="font-headline text-xl md:text-2xl font-black text-on-surface">The Gastronome Classic</h3>
                  <p className="text-on-surface-variant text-base my-2 font-body">Aged cheddar, truffle aioli, and caramelized balsamic onions.</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl md:text-2xl font-black text-primary font-headline">₹18.00</span>
                    <button className="bg-primary text-on-primary p-3 rounded-full hover:scale-110 shadow-lg transition-all flex items-center justify-center active:scale-90">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* Burger Secondary Card */}
              <div className="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col border border-outline-variant/10">
                <div className="h-48 md:h-56 relative overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyxD4-mEMDQUEugalNQty4kdD0TZARnuxpgcsuPM8wVrnpDRe6xs2guSZcZ2iO7kUcv2PzV6Hks_1d8EaIODfFdrXKULsRTEW3dXBvcbuTH8Rz-EM-k6OCI8tRZLCI4Td9Cnmz7JkAglP8qC5dAoAmSidVex7YcaHqh0_yBEuIFCgOgSdq9A8J0SuxCcMyyaatJtWMCeZiQVHgD4-cROR13FtW7drMB996ayYBk9hx4bEV1CF6H66pTHBMjzrmjcFGLc4txuF-dA"
                    alt="Garden Artisan"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-headline text-xl md:text-2xl font-black">Garden Artisan</h3>
                  <p className="text-on-surface-variant text-base mt-2 mb-4 font-body">Plant-based perfection with smoked paprika and avocado.</p>
                  <span className="text-primary font-black font-headline text-xl">₹16.50</span>
                </div>
              </div>
            </div>
          </div>

          {/* Momos Cluster */}
          <div className="lg:col-span-5 space-y-8">
            <div className="text-center md:text-left">
              <h2 className="font-headline text-3xl md:text-5xl font-black text-on-background">Himalayan Momos</h2>
              <p className="text-on-surface-variant font-label text-base mt-2 font-bold">Steamed to Perfection</p>
            </div>
            <div className="bg-surface-container-high/50 backdrop-blur-sm rounded-xl p-4 md:p-6 space-y-4 border border-outline-variant/10">
              <MomoItem
                name="Alpine Chicken"
                description="Minced chicken with mountain herbs."
                price="₹12.00"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBAF5UWwQWvAuwB1FEAV5LrlM3ZfOTva0NDezhs3EA1L-kvsJtcfLf7hDW1trxeV9t7dq6auJr-hvrRauufqmIYcLM0UolJQGBC3EZyZQgmsSHIyw55cFIQDMxyTfNHeLzO7jD0kL2X2csgG5zq5TAglhxz5Gld-3pPQESHij_iJ_u35dwyJx3GELg3xez0unKbD4Ix_lC9hNvBJWmEjEfnLImTgPmbA6_Zg0CClHfPw0ugRM74rdR4c2hHeJOImEauvm1tbFFY8A"
              />
              <MomoItem
                name="Smoked Paneer"
                description="Tandoori-spiced cottage cheese."
                price="₹11.50"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDo42jGKrRQg8rQh-k6r2cTJqNzNFrnNpxavAT-8PZDHR-HhLznRbhGaX_IIVFQ2peowh3ytCdnm_pbz4O7XMqW_uTG3gzLfFAj18SSTyolwBXXHlVoUh_eg7hG8fw7iIeM14E43IfLiboLt9jw1FiQ8LTX3v58URtrvAkM2KEUInJPxGjaNdJ04Hs8ZxfZyJuLgg1oKDoiZW0M-Tpa2i9pQG5Dl0HKWQIYLjAmOboCe-Cun-1hH6zLsyuoWP8dIcD3COusOL5UuQ"
              />
              <MomoItem
                name="Crispy Vegetable"
                description="Deep-fried garden vegetable blend."
                price="₹10.00"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDV_vGX2Lk271muOXJxMPVrnJcyL0wF-cR3am2J1hIMjrn1gZV0VL6_Pn2OmDBlyaVZJ-VjY9mFZpq2-x3SkqnLCgwLa17YR1a-xj8Xn-qNx16ZPisWWapQVitnSIk9f7yvcGZ1KvYfAUCvvTh-QonYLZFLlOOtHcwQPxgIkc3XdS2LuuLzu2App2FBOX-XZFP8zAmrYuo3UeeTaIIrtUH-p4q6RQ_wRpPCM12iTRo4cxyTXGlWqGulyDwz5UxlDQbiLbBkIo_8Xg"
              />
            </div>
          </div>
        </section>

        {/* Tea Section */}
        <section>
          <div className="bg-tertiary text-on-tertiary rounded-xl p-8 md:p-16 lg:p-20 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-full md:w-1/3 h-[200px] md:h-full opacity-30 md:opacity-20 z-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZAC4Oe56fGB0hjiJOImmUVv4eCDvEMavdAYx1CY5FkSCR1TsGt95hMJTaTEneGODjUc_mRugWDs2DEot-rl7YsLmscGXlCzdjS1v6hhcSFFlpXkktomXhPFYEU75HsvTWR5WmOnkvhFFSZ8X_FAWT-Tj8AbKSEe-fB2flDqfpGwJFgb7BPGcNEtB7moKEBsTLC4_hkjyc0Md-ahZqzu3g0QhH_I-jeQGxTeKi8MDC4qbllI_vllksl5cr6gZgEPpsOcLAnaadLQ"
                alt="Loose leaf tea"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10 max-w-2xl text-center md:text-left">
              <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-black mb-6">Tea Varieties</h2>
              <p className="text-base md:text-lg opacity-90 mb-10 font-body">From the misty valleys of Darjeeling to the vibrant streets of Mumbai, our tea collection is a journey in every sip.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-6">
                  <h4 className="font-black border-b-2 border-on-tertiary/20 pb-2 font-headline text-base">The Classics</h4>
                  <ul className="space-y-4 font-body text-base">
                    <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg"><span>Masala Chai</span> <span className="font-black text-primary">₹4.50</span></li>
                    <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg"><span>Earl Grey Gold</span> <span className="font-black text-primary">₹5.00</span></li>
                    <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg"><span>Assam Strong</span> <span className="font-black text-primary">₹4.00</span></li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="font-black border-b-2 border-on-tertiary/20 pb-2 font-headline text-base">Wellness Brews</h4>
                  <ul className="space-y-4 font-body text-base">
                    <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg"><span>Zen Green</span> <span className="font-black text-primary">₹5.50</span></li>
                    <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg"><span>Lemon Ginger</span> <span className="font-black text-primary">₹5.00</span></li>
                    <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg"><span>Chamomile Bloom</span> <span className="font-black text-primary">₹5.50</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Snacks & Beverages Section */}
        <section>
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-5xl font-black text-on-background">Snacks & Beverages</h2>
            <div className="flex flex-wrap justify-center bg-surface-container-high p-1.5 rounded-full border border-outline-variant/10 shadow-inner">
              {["Snacks", "Iced Drinks", "Shakes"].map((tab, idx) => (
                <button key={tab} className={`px-6 md:px-8 py-2.5 rounded-full font-black font-headline text-base transition-all ${idx === 0 ? "bg-surface-container-lowest shadow-md text-primary" : "opacity-50 hover:opacity-100"}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            <SnackCard
              name="Truffle Fries"
              price="₹8.00"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCm8br6iFppzIYjuWb-0lSx__K5_CbzqSoa53D5-Vk4deFVGa5QJVazjEXpC-QxEZ4fBbuA7fmc_KK5bWPzIdSqacABsao1WYVFYQ4zTyk1DVFYMkbDsYzHpr9ah47KGp1Fwrzaju9Wi6fG3Bbb6iPe_c4nIdFaxKQIV3berzdaLEzNoD3Li2emFOvBxGw3MXY1iTWAw6LlxBfBEOWtTte2W-pywskreWM8oJZbbaUVPF9WMFGKe8UtlHIZb6DGqJ5JurGZEfwXug"
            />
            <SnackCard
              name="Artisan Toastie"
              price="₹12.00"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAdjpLRIDc4uIlgY2jUAkY_QLck1N-lJymqMFRkfCzSIJB0buWIZfaOt6vam7UTebRx_85bX_R-0MkAE1XpYaA_-iKL8RbkWJzeqX8Ij5BAIvolvJbcf5kRIomTZHQn_T-UcO1E6m-NpSMXC9GyQFJVtduu1h1EwItXMCvxqHhFVRwsX2bGrVTVISioZzbRhMgZ0fUncsHiweGgl1fPrgnMJIxuFB-7A6jq9Y9-nCLBGXx0Fi9xLn8Z-uQh34wljXWZw4s0VZ8JlQ"
            />
            <SnackCard
              name="Nitro Cold Brew"
              price="₹6.00"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAq3TcgSSezCTIA4EIhNLBe8M2ioqsIONViBzEu7STODugkEwPbbW7BRKkQ3oD22YleWlcCCq46R3-ZoFiWBpzvqGxQh__iLWZzAeucvFNKT7nt8uRzOvmYZr3n4Npvwi0ACLfwR0mGz0CmngEp0JkX7fuimVtwNvPq603w8d6QmxLg1O7dEEJ6rDHvtaYBXWkEVQP3eSaQqjZexwn6cBpsl8vKcWwg6p_UwTKuhOIPVoH-G0mL6eK9EHNFgZtoqP_X3v3aji8L0A"
            />
            <SnackCard
              name="Sunrise Cooler"
              price="₹7.50"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuD79hRpPBt6nC8QCi7lhlXTptppyiXEKIP-YEhhr7RUCrtIfO_H0LqnZBHB-p6XvDvrUrsC4Xd-WSuzXYU4WVbTzgRg7kTy-SSSXs2hsLQpt7hlyCDzNh-pgctExAhC2-CbK1pu3nYQP7BMTyjazAVYGB4Q0_M65l5hg9M-olWOFbL0lqPQ6rimJhv9nuYG8Pgm_rEDwxsCZ2jrpxq6rfUpeQta3rCpme0K3o0jIF76a4_4cbdW79Oo3iv_n63Djl5G5y2rgGHrmA"
            />
          </div>
        </section>
      </main>

      <Footer />
    </main>
  );
}

function CoffeeCard({ name, price, image, description, tag }: { name: string, price: string, image: string, description: string, tag?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-outline-variant/10 shadow-sm"
    >
      <div className="relative h-64 md:h-72 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {tag && (
          <div className="absolute top-4 right-4 bg-secondary-container/90 backdrop-blur-md px-3 py-1 rounded-full text-base font-black text-on-secondary-container font-body shadow-lg">
            {tag}
          </div>
        )}
      </div>
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-headline text-xl md:text-2xl font-black text-on-surface">{name}</h3>
          <span className="text-primary font-black font-headline text-xl">{price}</span>
        </div>
        <p className="text-on-surface-variant text-base mb-6 font-body">{description}</p>
        <button className="w-full py-3 md:py-4 bg-primary/10 hover:bg-primary hover:text-on-primary text-primary font-black rounded-full transition-all font-headline text-base shadow-sm">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

function MomoItem({ name, description, price, image }: { name: string, description: string, price: string, image: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row gap-4 items-center bg-surface-container-lowest p-4 rounded-xl group hover:translate-x-2 transition-transform shadow-sm border border-outline-variant/10 text-center sm:text-left"
    >
      <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden shrink-0 shadow-md">
        <Image src={image} alt={name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="flex-1">
        <h4 className="font-black text-lg md:text-xl font-headline text-on-surface">{name}</h4>
        <p className="text-base text-on-surface-variant font-body mt-1">{description}</p>
      </div>
      <div className="shrink-0 flex flex-col items-center sm:items-end">
        <p className="font-black text-secondary font-headline text-xl">{price}</p>
        <button className="text-base font-black text-primary underline mt-2 hover:text-primary-dim transition-colors">Quick Add</button>
      </div>
    </motion.div>
  );
}

function SnackCard({ name, price, image }: { name: string, price: string, image: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group cursor-pointer text-center md:text-left"
    >
      <div className="aspect-square bg-surface-container-lowest rounded-xl overflow-hidden mb-4 shadow-lg border border-outline-variant/10 relative">
        <Image src={image} alt={name} width={400} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
      </div>
      <h3 className="font-black font-headline text-on-surface text-lg md:text-xl">{name}</h3>
      <p className="text-primary font-black font-headline text-xl mt-1">{price}</p>
    </motion.div>
  );
}
