export default function TermsOfService() {
  return (
    <div className="min-h-screen py-16 md:py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-diesel-yellow text-xs font-bold uppercase tracking-widest mb-4">Legal</p>
        <h1 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight mb-2">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-12">Effective date: February 7, 2026</p>

        <div className="space-y-10 text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">1. Overview of the Service</h2>
            <p>
              Welcome to the Ashland Diesel Engines, Inc. website. This website provides information about our diesel engine sales, service, machining, and parts departments, and allows visitors to request quotes for our services.
            </p>
            <p className="mt-2">
              By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use the website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">2. Eligibility</h2>
            <p>
              You must be at least 18 years old to submit a quote request or use the contact features of this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">3. Quote Requests</h2>
            <p>
              When you submit a quote request through our website, you agree to provide accurate and truthful information. Submitting a quote request does not constitute a binding contract or guarantee of service.
            </p>
            <p className="mt-2">
              All quotes provided by Ashland Diesel Engines, Inc. are estimates and may be subject to change based on actual inspection, parts availability, and scope of work.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">4. User Responsibilities</h2>
            <p>By using this website, you agree to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Use the website only for lawful purposes</li>
              <li>Not misuse or attempt to interfere with the website</li>
              <li>Provide accurate information when submitting forms</li>
              <li>Not submit spam or fraudulent requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">5. Intellectual Property</h2>
            <p>
              All content, branding, images, and materials on this website are the property of Ashland Diesel Engines, Inc. or its licensors. You may not copy, distribute, or modify any part of this website without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">6. Prohibited Uses</h2>
            <p>You may not use this website to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Send spam or unsolicited messages through the quote form</li>
              <li>Submit false or misleading information</li>
              <li>Attempt to hack, disrupt, or compromise the website</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
            <p className="mt-3">Violations may result in being blocked from accessing the website.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">7. Disclaimer of Warranties</h2>
            <p>
              This website and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied. We do not guarantee that the website will be error-free, uninterrupted, or free of harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Ashland Diesel Engines, Inc. shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website. Our services, repairs, and parts are subject to separate agreements and warranties provided at the time of service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">9. Changes to These Terms</h2>
            <p>
              We may update these Terms of Service at any time. When we do, we will post the updated version on this page. Continued use of the website after changes constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the Commonwealth of Pennsylvania, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3">Contact</h2>
            <p>
              This website is operated by DnD Solutions &amp; Optimization LLC on behalf of Ashland Diesel Engines, Inc.
            </p>
            <p className="mt-2">For questions about these Terms, contact us at:</p>
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
