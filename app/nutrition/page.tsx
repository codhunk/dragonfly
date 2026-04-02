import InfoPageLayout from "@/components/layout/InfoPageLayout";
import { Carrot, Apple, Fish, Wheat, CircleCheck } from "lucide-react";

export default function Nutrition() {
    const dietaryOptions = [
        { icon: <Carrot size={24} />, title: "Plant-Based Mastery", text: "100% vegan recipes created with seasonal, locally sourced vegetables." },
        { icon: <Apple size={24} />, title: "Low Glycemic Index", text: "Carefully balanced carb sources to maintain sustained energy levels." },
        { icon: <Fish size={24} />, title: "Omega-Rich Selection", text: "Sustainably caught fish high in essential fatty acids and minerals." },
        { icon: <Wheat size={24} />, title: "Gluten-Sensitive Preparation", text: "Dedicated prep areas for non-gluten requirements and safety." }
    ];

    return (
        <InfoPageLayout
            title="Nutrition"
            subtitle="Fueling your body with intention and flavor."
            heroImage="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1920"
        >
            <div className="space-y-16">
                <section className="text-center max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl font-headline text-primary">Transparent Gastronomy</h2>
                    <p className="text-base italic leading-none tracking-normal text-tertiary">
                        At DragonFly, we believe that nutrition should never be an afterthought. Every ingredient is selected for its flavor, its origin, and its nutritional value. We provide full transparency because your body deserves to know what fuels its sensory experiences.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {dietaryOptions.map((opt, idx) => (
                        <div key={idx} className="flex gap-6 p-8 rounded-md bg-primary/5 hover:bg-primary/10 transition-colors border border-primary/10">
                            <div className="bg-white p-4 rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center text-primary shadow-sm">
                                {opt.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-headline text-on-surface">{opt.title}</h3>
                                <p className="text-base italic leading-none tracking-normal text-tertiary">{opt.text}</p>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="bg-white/40 backdrop-blur-md rounded-md p-10 border border-outline-variant">
                    <h2 className="text-3xl font-headline text-primary mb-8 border-b border-primary/10 pb-4">Ingredient Sourcing Standards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <ul className="space-y-6">
                            {[
                                "Zero artificial preservatives in every dish.",
                                "Direct relationships with local organic farmers.",
                                "Antibiotic-free and hormone-free protein sources.",
                                "Cold-pressed oils for optimal nutrient retention."
                            ].map((li, idx) => (
                                <li key={idx} className="flex items-center gap-4 text-tertiary italic">
                                    <CircleCheck size={20} className="text-primary" />
                                    <span>{li}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="rounded-xl overflow-hidden shadow-2xl relative group">
                            <img
                                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800"
                                alt="Fresh organic produce"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                        </div>
                    </div>
                </section>

                <section className="text-sm italic opacity-60 text-center max-w-2xl mx-auto">
                    *Please note that our kitchens handle a variety of ingredients. While we follow strict cross-contamination protocols, we recommend those with severe allergies consult their physician before dining with us. Nutrition data is based on standard recipes.
                </section>
            </div>
        </InfoPageLayout>
    );
}
