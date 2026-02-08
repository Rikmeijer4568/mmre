import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | MMRE',
  description: 'MMRE Privacy Policy - How we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: January 2025</p>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-4">
            Meijer & Münninghoff Real Estate (&quot;MMRE&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
          <p className="text-gray-600 mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide.</li>
            <li><strong>Property Information:</strong> Details about properties you wish to rent or rent out.</li>
            <li><strong>Communication Data:</strong> Messages you send us via forms, email, or WhatsApp.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited and actions taken.</li>
            <li><strong>Device Data:</strong> IP address, browser type, and device information.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Provide our rental services and respond to your inquiries</li>
            <li>Match tenants with suitable properties and landlords with qualified tenants</li>
            <li>Send you relevant property listings and updates</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
            <li>Send marketing communications (with your consent)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Legal Basis for Processing (GDPR)</h2>
          <p className="text-gray-600 mb-4">Under the General Data Protection Regulation (GDPR), we process your data based on:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li><strong>Contract:</strong> Processing necessary for our rental services</li>
            <li><strong>Consent:</strong> For marketing communications and optional data collection</li>
            <li><strong>Legitimate Interest:</strong> For improving our services and website functionality</li>
            <li><strong>Legal Obligation:</strong> When required by law</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Sharing</h2>
          <p className="text-gray-600 mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Landlords or tenants (as applicable) to facilitate rental agreements</li>
            <li>Service providers who assist with our operations</li>
            <li>Legal authorities when required by law</li>
          </ul>
          <p className="text-gray-600 mb-4">
            We do not sell your personal information to third parties.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Data Retention</h2>
          <p className="text-gray-600 mb-4">
            We retain your personal information for as long as necessary to provide our services
            and comply with legal obligations. Typically, this is:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Active client data: Duration of our business relationship plus 7 years</li>
            <li>Inquiry data: 2 years from last contact</li>
            <li>Newsletter subscribers: Until unsubscribed</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Your Rights</h2>
          <p className="text-gray-600 mb-4">Under GDPR, you have the right to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Restrict or object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="text-gray-600 mb-4">
            To exercise these rights, contact us at privacy@mmre.nl.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Cookies</h2>
          <p className="text-gray-600 mb-4">
            Our website uses cookies to improve your experience. These include:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li><strong>Essential cookies:</strong> Required for website functionality</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
            <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements (with consent)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Security</h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            For questions about this Privacy Policy or to exercise your rights:
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Email:</strong> privacy@mmre.nl<br />
            <strong>Address:</strong> Amsterdam, Netherlands
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Changes to This Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any
            significant changes by posting the new policy on this page and updating the
            &quot;Last updated&quot; date.
          </p>
        </div>
      </div>
    </div>
  )
}
