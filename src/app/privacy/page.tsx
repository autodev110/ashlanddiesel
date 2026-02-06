export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-16 md:py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-diesel-yellow text-xs font-bold uppercase tracking-widest mb-4">Legal</p>
        <h1 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Effective date: February 7, 2026</p>

        <div className="space-y-10 text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">1. Who We Are</h2>
            <p>
              Ashland Diesel Engines, Inc. is a diesel engine sales, service, and machining company located at 32 Lehigh Street, Ashland, PA 17921. We have been serving Pennsylvania, New York, and New Jersey since 1951.
            </p>
            <p className="mt-2">
              This website is operated by DnD Solutions &amp; Optimization LLC on behalf of Ashland Diesel Engines, Inc.
            </p>
            {/* PLACEHOLDER: Dan can update contact info */}
            <p className="mt-2">Contact: <span className="text-white">placeholder@ashlanddiesel.com</span></p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">2. What Personal Data We Collect</h2>
            <p>We collect minimal data, only what is necessary to respond to your inquiries:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Contact name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name (optional)</li>
              <li>Project details you provide in the quote request form</li>
            </ul>
            <p className="mt-3">
              We do not use cookies for tracking or advertising. We do not use analytics services. We do not collect payment information through this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">3. How We Use Your Data</h2>
            <p>We use your data solely to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Respond to your quote requests and inquiries</li>
              <li>Contact you regarding the services you requested</li>
              <li>Provide customer support</li>
            </ul>
            <p className="mt-3">
              We do not use your data for marketing or advertising purposes. We never sell or share your personal data with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">4. Legal Basis for Processing</h2>
            <p>Under GDPR, we process your personal data based on:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li><span className="text-white">Consent</span> &mdash; when you voluntarily submit the quote request form</li>
              <li><span className="text-white">Legitimate interest</span> &mdash; to respond to your inquiry and provide our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">5. Third-Party Services</h2>
            <p>We rely on a limited number of trusted third-party services:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li><span className="text-white">Google reCAPTCHA</span> &mdash; to protect against bots and abuse</li>
              <li><span className="text-white">Vercel</span> &mdash; our hosting provider</li>
            </ul>
            <p className="mt-3">These services may process limited data in accordance with their own privacy policies.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">6. Data Retention</h2>
            <p>
              We retain your submitted information only as long as necessary to fulfill your request and for reasonable business record-keeping. If you would like your data deleted, contact us and we will remove it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">7. Cookies and Tracking</h2>
            <p>
              This website uses only strictly necessary cookies for basic site functionality. We do not use tracking cookies, advertising cookies, or analytics cookies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Access your personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict data processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
            {/* PLACEHOLDER: Dan can update contact info */}
            <p className="mt-3">To exercise your rights, contact us at: <span className="text-white">placeholder@ashlanddiesel.com</span></p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">9. Security Measures</h2>
            <p>We implement appropriate measures to protect your data, including:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Secure hosting via Vercel</li>
              <li>HTTPS encryption</li>
              <li>Data encryption in transit</li>
            </ul>
            <p className="mt-3">Despite our efforts, no method of transmission or storage is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">10. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy as needed. When we do, we will post the updated version on this page. Please review this page periodically for updates.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">Contact Us</h2>
            <p>
              This website is operated by DnD Solutions &amp; Optimization LLC on behalf of Ashland Diesel Engines, Inc.
            </p>
            <p className="mt-2">
              For questions about this Privacy Policy, contact us at:
            </p>
            {/* PLACEHOLDER: Dan will replace with real contact info */}
            <p className="mt-1 text-white">placeholder@ashlanddiesel.com</p>
            <p className="text-white">(570) 875-2300</p>
            <p className="text-white">32 Lehigh Street, Ashland, PA 17921</p>
          </section>
        </div>
      </div>
    </div>
  );
}
