import InfoPageLayout from "@/components/layout/InfoPageLayout";
import { Briefcase, Heart, Award, Users } from "lucide-react";

export default function Careers() {
  const perks = [
    { icon: <Heart className="text-primary w-8 h-8" />, title: "Well-being First", description: "Comprehensive health coverage and mental wellness support for our entire crew." },
    { icon: <Award className="text-primary w-8 h-8" />, title: "Culinary Growth", description: "Learn from Michelin-starred consultants and advance your professional craft." },
    { icon: <Users className="text-primary w-8 h-8" />, title: "Inclusive Culture", description: "A workplace built on respect, diversity, and shared passion for excellence." }
  ];

  return (
    <InfoPageLayout
      title="Careers"
      subtitle="Join a team that values innovation over routine."
      heroImage="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1920"
    >
      <div className="space-y-16">
        <section className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-4xl font-headline text-primary mb-6">Work with Mastery</h2>
          <p className="text-base italic leading-none tracking-normal text-tertiary">
            At DragonFly, we don't just hire employees; we recruit culinary visionaries and hospitality experts. We believe that a great workplace is built on the foundation of shared excellence and the pursuit of perfection.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {perks.map((perk, idx) => (
            <div key={idx} className="bg-primary/5 rounded-md p-8 border border-primary/10 hover:shadow-lg transition-shadow">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                {perk.icon}
              </div>
              <h3 className="text-2xl font-headline text-on-surface mb-4">{perk.title}</h3>
              <p className="text-base italic leading-none tracking-normal text-tertiary">{perk.description}</p>
            </div>
          ))}
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-headline text-primary">Open Opportunities</h2>
          <div className="space-y-4">
            {[
              { role: "Executive Sous Chef", type: "Full-time", loc: "New York" },
              { role: "Sensory Floor Lead", type: "Full-time", loc: "London" },
              { role: "Gastronomy Specialist", type: "Part-time", loc: "Tokyo" }
            ].map((job, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between bg-surface p-6 rounded-md border border-outline-variant hover:border-primary transition-colors cursor-pointer group">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{job.role}</h3>
                  <div className="flex gap-4 text-sm text-tertiary italic">
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.loc}</span>
                  </div>
                </div>
                <button className="bg-primary text-on-primary px-6 py-3 rounded-md mt-4 md:mt-0 active:scale-95 transition-transform self-start">
                  Apply for Mastery
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </InfoPageLayout>
  );
}
