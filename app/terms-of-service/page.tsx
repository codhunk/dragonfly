import InfoPageLayout from "@/components/layout/InfoPageLayout";

export default function TermsOfService() {
  return (
    <InfoPageLayout 
      title="Terms of Service" 
      subtitle="The professional standard of our culinary agreement."
      heroImage="https://images.unsplash.com/photo-1414235077428-33b07447fbef?auto=format&fit=crop&q=80&w=1920"
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-headline text-primary mb-6">1. Agreement to Terms</h2>
          <p className="text-base italic leading-none tracking-normal text-tertiary mb-8">
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and The Modern Gastronome (we, our, us), concerning your access to and use of our sensory culinary services. 
          </p>
        </section>

        <section className="bg-primary/5 rounded-xl p-8 border border-primary/10">
          <h2 className="text-3xl font-headline text-primary mb-6">2. Professional Standards</h2>
          <p className="text-base italic leading-none tracking-normal text-tertiary mb-6">
            By accessing our services, you agree to maintain a professional standard of conduct. We reserve the right to refuse service to any individual whose behavior undermines the sensory experience and safety of our patrons and staff.
          </p>
          <h3 className="text-xl font-bold text-primary mb-4">Core Expectations:</h3>
          <ul className="space-y-4 list-disc pl-6 text-tertiary">
            <li className="italic">Mutual respect between patrons and culinary specialists.</li>
            <li className="italic">Adherence to reservation times and communication standards.</li>
            <li className="italic">Proper representation of dietary requirements for safety.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-headline text-primary mb-6">3. Intellectual Property</h2>
          <p className="text-base italic leading-none tracking-normal text-tertiary mb-6">
            Unless otherwise indicated, the Site and our culinary services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or controlled by us.
          </p>
          <p className="text-base italic leading-none tracking-normal text-tertiary">
            Any unauthorized use of our secret menu drops, technical cooking manuals, or visual branding is strictly prohibited and subject to professional legal standards.
          </p>
        </section>

        <section className="bg-white/40 backdrop-blur-md rounded-md p-10 border border-outline-variant">
            <h2 className="text-3xl font-headline text-primary mb-6">4. Limitation of Liability</h2>
            <p className="text-base italic leading-none tracking-normal text-tertiary">
                The Modern Gastronome shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of, or inability to access or use, the services or any content and sensory materials provided.
            </p>
        </section>
        
        <section className="text-center pt-8">
            <p className="text-sm italic opacity-60">Last Updated: March 20, 2024</p>
        </section>
      </div>
    </InfoPageLayout>
  );
}
