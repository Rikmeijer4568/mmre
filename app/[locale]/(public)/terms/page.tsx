import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | MMRE',
  description: 'MMRE Terms and Conditions - The terms governing the use of our services.',
}

export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
        <p className="text-gray-500 mb-8">Last updated: January 2025</p>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-4">
            These Terms and Conditions (&quot;Terms&quot;) govern your use of the website and services
            provided by Meijer & Münninghoff Real Estate (&quot;MMRE&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
            By using our website or services, you agree to these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Services</h2>
          <p className="text-gray-600 mb-4">
            MMRE provides rental mediation services in the Amsterdam area, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Assisting tenants in finding rental properties</li>
            <li>Assisting landlords in finding qualified tenants</li>
            <li>Property valuation and marketing</li>
            <li>Tenant screening and verification</li>
            <li>Contract preparation and support</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. For Tenants</h2>
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.1 Our Service</h3>
          <p className="text-gray-600 mb-4">
            We help tenants find suitable rental properties based on their requirements.
            Our service for tenants is provided free of charge; we are compensated by landlords.
          </p>
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.2 Your Obligations</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Provide accurate and complete information about your requirements and financial situation</li>
            <li>Attend scheduled viewings or provide timely notice of cancellation</li>
            <li>Provide required documentation promptly when requested</li>
            <li>Act in good faith during negotiations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. For Landlords</h2>
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.1 Service Fees</h3>
          <p className="text-gray-600 mb-4">
            Our standard fee for finding a tenant is one month&apos;s rent, excluding VAT.
            Additional services such as property management are available at separate rates.
            Specific fees will be confirmed in writing before services commence.
          </p>
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.2 Your Obligations</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Provide accurate information about your property</li>
            <li>Ensure the property complies with all applicable safety and housing regulations</li>
            <li>Make the property available for viewings as agreed</li>
            <li>Pay agreed fees upon successful placement of a tenant</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Rental Estimates</h2>
          <p className="text-gray-600 mb-4">
            Rental estimates provided through our website calculator or consultations are
            indicative only and do not constitute a guarantee. Actual rental prices depend
            on market conditions, property condition, and other factors.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Intellectual Property</h2>
          <p className="text-gray-600 mb-4">
            All content on this website, including text, images, logos, and design, is the
            property of MMRE and is protected by copyright laws. You may not reproduce,
            distribute, or use any content without our prior written consent.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            MMRE acts as an intermediary between landlords and tenants. We are not a party
            to any rental agreement and are not liable for:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>The accuracy of information provided by landlords or tenants</li>
            <li>The condition of rental properties</li>
            <li>Disputes between landlords and tenants</li>
            <li>Non-payment of rent or breach of rental agreements</li>
          </ul>
          <p className="text-gray-600 mb-4">
            Our liability is limited to the fees paid for our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Governing Law</h2>
          <p className="text-gray-600 mb-4">
            These Terms are governed by the laws of the Netherlands. Any disputes will be
            submitted to the competent courts in Amsterdam.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to Terms</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to modify these Terms at any time. Changes will be effective
            upon posting to this website. Continued use of our services constitutes acceptance
            of the modified Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Contact</h2>
          <p className="text-gray-600 mb-4">
            For questions about these Terms, please contact us at:
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Email:</strong> info@mmre.nl<br />
            <strong>Address:</strong> Amsterdam, Netherlands
          </p>
        </div>
      </div>
    </div>
  )
}
