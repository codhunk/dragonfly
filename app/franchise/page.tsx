import InfoPageLayout from "@/components/layout/InfoPageLayout";
import { CheckCircle, PieChart, TrendingUp, ShieldCheck } from "lucide-react";

export default function Franchise() {
  const points = [
    { icon: <ShieldCheck size={28} />, title: "Proven Excellence", text: "Benefit from a model defined by culinary precision and high-performance metrics." },
    { icon: <TrendingUp size={28} />, title: "Market Growth", text: "The demand for high-end, fast-access gastronomy is expanding globally." },
    { icon: <PieChart size={28} />, title: "Operational Support", text: "From kitchen design to supply chain, we provide everything needed for mastery." }
  ];

  return (
    <InfoPageLayout
      title="Franchise"
      subtitle="Expanding excellence through partnership."
      heroImage="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=1920"
    >
      <div className="space-y-16">
        <section className="text-center max-w-5xl mx-auto space-y-6">
          <h2 className="text-4xl font-headline text-primary mb-6">Invest in the Future of Dining</h2>
          <p className="text-base italic leading-none tracking-normal text-tertiary">
            Becoming a Gastronome partner is not just about owning a business; it's about leading a culinary revolution in your community.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {points.map((p, idx) => (
            <div key={idx} className="bg-white/50 backdrop-blur-md rounded-md p-8 border border-primary/20 shadow-sm hover:scale-105 transition-transform duration-500">
              <div className="text-primary mb-6">
                {p.icon}
              </div>
              <h3 className="text-2xl font-headline text-on-surface mb-4">{p.title}</h3>
              <p className="text-base italic leading-none tracking-normal text-tertiary">{p.text}</p>
            </div>
          ))}
        </section>

        <div className="rounded-md bg-primary/10 overflow-hidden group">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-16 space-y-8">
              <h2 className="text-3xl font-headline text-primary">Your Success Matrix</h2>
              <ul className="space-y-4">
                {[
                  "Strategic Site Selection",
                  "Holistic Training Programs",
                  "Continuous Menu Innovation",
                  "Aggressive Brand Marketing"
                ].map((li, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-tertiary italic">
                    <CheckCircle size={20} className="text-primary" />
                    {li}
                  </li>
                ))}
              </ul>
              <button className="bg-primary text-on-primary px-8 py-4 rounded-md active:scale-95 transition-transform shadow-lg shadow-primary/20">
                Request Investment Packet
              </button>
            </div>
            <div className="relative h-96 md:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
                alt="Modern restaurant interior"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />
            </div>
          </div>
        </div>
      </div>
    </InfoPageLayout>
  );
}
