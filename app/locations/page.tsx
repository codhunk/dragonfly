import InfoPageLayout from "@/components/layout/InfoPageLayout";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import Image from "next/image";

export default function Locations() {
  const points = [
    { 
        city: "New York City", 
        address: "123 Gastronomy Lane, Chelsea, NY 10001", 
        phone: "+1 212 555 7890",
        hours: "11:00 AM - 11:00 PM Daily",
        image: "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=800"
    },
    { 
        city: "London", 
        address: "45 Culinarum St, Covent Garden, London EC1M 1AA", 
        phone: "+44 20 7946 0123",
        hours: "12:00 PM - 10:30 PM Daily",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800"
    },
    { 
        city: "Tokyo", 
        address: "7-8 Umami Shokudō, Shibuya-ku, Tokyo 150-0001", 
        phone: "+81 3 4567 8901",
        hours: "11:30 AM - 11:00 PM Daily",
        image: "https://images.unsplash.com/photo-1540959733332-e94e270b4d42?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <InfoPageLayout 
      title="Locations" 
      subtitle="Find your nearest Gastronome sanctuary."
      heroImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1920"
    >
      <div className="space-y-24">
        {points.map((loc, idx) => (
          <div key={idx} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center group ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
             <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <Image 
                    src={loc.image} 
                    alt={loc.city} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                    width={800}
                    height={600}
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <div className="space-y-8">
                <div className="inline-block bg-primary/5 p-4 rounded-xl mb-4 group-hover:bg-primary/10 transition-colors">
                    <MapPin className="text-primary w-10 h-10" />
                </div>
                <h2 className="text-4xl font-headline text-primary">{loc.city}</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <Navigation className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                        <p className="text-xl italic leading-none tracking-normal text-tertiary">{loc.address}</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                        <p className="text-xl italic leading-none tracking-normal text-tertiary">{loc.phone}</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <Clock className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                        <p className="text-xl italic leading-none tracking-normal text-tertiary">{loc.hours}</p>
                    </div>
                </div>
                <button className="bg-primary text-on-primary px-10 py-5 rounded-md mt-4 active:scale-95 transition-transform flex items-center justify-center gap-3 group shadow-xl shadow-primary/10">
                    Get Directions <Navigation size={20} className="group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />
                </button>
            </div>
          </div>
        ))}

        <section className="bg-primary/5 rounded-xl p-12 md:p-20 text-center space-y-8 border border-primary/20">
            <h2 className="text-3xl font-headline text-primary uppercase tracking-widest">Global Expansion</h2>
            <p className="text-xl italic leading-none tracking-normal text-tertiary max-w-2xl mx-auto">
                We are currently identifying sensory landmarks in Paris, Berlin, and Mumbai. Stay tuned as we continue to redefine fast-gastronomy worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-40">
                <span className="font-headline text-2xl">PARIS</span>
                <span className="font-headline text-2xl">BERLIN</span>
                <span className="font-headline text-2xl">MUMBAI</span>
                <span className="font-headline text-2xl">DUBAI</span>
            </div>
        </section>
      </div>
    </InfoPageLayout>
  );
}
