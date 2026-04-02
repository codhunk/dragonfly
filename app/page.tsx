import HomeHero from "@/components/sections/HomeHero";
import HomeCollections from "@/components/sections/HomeCollections";
import HomeFavorites from "@/components/sections/HomeFavorites";
import HomeFeatures from "@/components/sections/HomeFeatures";
import HomeWeekendFeast from "@/components/sections/HomeWeekendFeast";
import HomeTestimonials from "@/components/sections/HomeTestimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface selection:bg-primary/20 selection:text-primary">
      <HomeHero />
      <HomeCollections />
      <HomeFavorites />
      <HomeFeatures />
      <HomeWeekendFeast />
      <HomeTestimonials />
      
      {/* FAB for Quick Order on Mobile */}
      <button className="fixed bottom-8 right-8 bg-primary text-on-primary w-16 h-16 rounded-full shadow-2xl flex items-center justify-center lg:hidden z-40 active:scale-95 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
      </button>
    </main>
  );
}
