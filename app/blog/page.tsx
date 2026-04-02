import InfoPageLayout from "@/components/layout/InfoPageLayout";
import { ArrowRight, Clock, UserIcon } from "lucide-react";
import Image from "next/image";

export default function Blog() {
  const posts = [
    { 
        title: "The Alchemy of Sous Vide", 
        excerpt: "Exploring the intersection of science and sensory delight in modern cooking.", 
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600",
        date: "March 20, 2024",
        author: "Chef Julien"
    },
    { 
        title: "Ethical Sourcing and Flavor", 
        excerpt: "Why the origin of your ingredients matters more than the recipe itself.", 
        image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=600",
        date: "March 15, 2024",
        author: "Elena Vance"
    },
    { 
        title: "The Future of Fast Gastronomy", 
        excerpt: "How technology is enabling Michelin-quality dining at speed.", 
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=600",
        date: "March 10, 2024",
        author: "Dr. Aris"
    }
  ];

  return (
    <InfoPageLayout 
      title="Culinary Blog" 
      subtitle="Notes from the kitchen and beyond."
      heroImage="https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=1920"
    >
      <div className="space-y-16">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, idx) => (
                <div key={idx} className="group cursor-pointer">
                    <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                        <Image 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            width={600}
                            height={400}
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-primary p-2 px-4 rounded-md text-sm font-bold shadow-sm">
                            New Post
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-4 text-sm text-tertiary italic">
                            <span className="flex items-center gap-1"><Clock size={16}/> {post.date}</span>
                            <span className="flex items-center gap-1"><UserIcon size={16}/> {post.author}</span>
                        </div>
                        <h2 className="text-2xl font-headline text-on-surface group-hover:text-primary transition-colors">{post.title}</h2>
                        <p className="text-base italic leading-none tracking-normal text-tertiary line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all uppercase tracking-widest text-sm pt-4 border-t border-primary/10">
                            Read Full Memoir <ArrowRight size={18}/>
                        </div>
                    </div>
                </div>
            ))}
        </section>

        <section className="bg-primary text-on-primary rounded-xl p-12 text-center space-y-8">
            <h2 className="text-4xl font-headline">Join the Inner Circle</h2>
            <p className="max-w-xl mx-auto italic opacity-90">
                Receive monthly dispatches on the changing world of gastronomy, exclusive recipes, and early access to our private sensory events.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-on-primary text-primary px-6 py-4 rounded-md w-full focus:ring-2 focus:ring-on-primary-container border-none"
                />
                <button className="bg-white text-primary px-8 py-4 rounded-md font-bold hover:bg-opacity-90 transition-all shadow-xl">
                    Subscribe
                </button>
            </div>
        </section>
      </div>
    </InfoPageLayout>
  );
}
