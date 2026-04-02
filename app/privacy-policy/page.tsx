import InfoPageLayout from "@/components/layout/InfoPageLayout";

export default function PrivacyPolicy() {
  return (
    <InfoPageLayout
      title="Privacy Policy"
      subtitle="Ensuring your sensory culinary journey remains yours alone."
      heroImage="https://images.unsplash.com/photo-1550966842-30cae01004a6?auto=format&fit=crop&q=80&w=1920"
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-headline text-primary mb-6">Introduction</h2>
          <p className="text-base italic leading-none tracking-normal text-tertiary mb-8">
            DragonFly (we, our, us) is committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at info@moderngastronome.com.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-headline text-primary mb-6">Data Collection</h2>
          <p className="text-base italic leading-none tracking-normal text-tertiary mb-6">
            We collect personal information that you voluntarily provide to us when registering at the website, expressing an interest in obtaining information about us or our products and services, when participating in activities on the website or otherwise contacting us.
          </p>
          <ul className="space-y-4 list-disc pl-6 text-tertiary">
            <li className="italic">Contact labels: Full name, email address, phone number.</li>
            <li className="italic">Culinary labels: Preferences, allergies, dietary restrictions.</li>
            <li className="italic">Payment labels: Billing address, card numbers (processed by secure third-party).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-headline text-primary mb-6">How We Use Your Data</h2>
          <p className="text-base italic leading-none tracking-normal text-tertiary mb-6">
            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="rounded-md bg-primary/5 p-6 border border-primary/10">
              <h3 className="text-xl font-bold text-primary mb-2">Internal Analytics</h3>
              <p className="text-sm italic leading-none tracking-normal text-tertiary">Improving our secret menu drops and seasonal offerings.</p>
            </div>
            <div className="rounded-md bg-primary/5 p-6 border border-primary/10">
              <h3 className="text-xl font-bold text-primary mb-2">Member Rewards</h3>
              <p className="text-sm italic leading-none tracking-normal text-tertiary">Personalizing your Gastronome VIP club experience.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-headline text-primary mb-6">Information Sharing</h2>
          <p className="text-base italic leading-none tracking-normal text-tertiary mb-8">
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </p>
        </section>
      </div>
    </InfoPageLayout>
  );
}
