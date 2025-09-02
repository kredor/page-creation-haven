import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicyEN = () => {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/en" className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Privacy Policy
          </h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-lg mb-4">
                Land and Water Bureau (Mark och Vattenbyrån) is committed to protecting your privacy and personal data. This privacy policy explains how we collect, use, and protect your personal information in accordance with the General Data Protection Regulation (GDPR) and Swedish data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Data Controller</h2>
              <p className="text-lg mb-4">
                <strong>Data Controller:</strong> Mark och Vattenbyrån<br/>
                <strong>Email:</strong> kontakt@markovattenbyran.se
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Personal Data We Collect</h2>
              <p className="text-lg mb-4">We may collect the following types of personal data:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, postal address</li>
                <li><strong>Project Information:</strong> Property details, project requirements, technical data related to rewetting projects</li>
                <li><strong>Communication Data:</strong> Correspondence, meeting notes, project discussions</li>
                <li><strong>Website Usage Data:</strong> IP address, browser information, pages visited (through cookies and analytics)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Legal Basis for Processing</h2>
              <p className="text-lg mb-4">We process your personal data based on:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Consent:</strong> When you contact us or subscribe to our newsletter</li>
                <li><strong>Contract Performance:</strong> To deliver consulting services and rewetting projects</li>
                <li><strong>Legitimate Interest:</strong> To improve our services and maintain customer relationships</li>
                <li><strong>Legal Obligation:</strong> To comply with accounting and environmental reporting requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. How We Use Your Data</h2>
              <p className="text-lg mb-4">We use your personal data to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide consulting services and project management for rewetting projects</li>
                <li>Communicate with you about projects, services, and inquiries</li>
                <li>Fulfill contractual obligations and deliver agreed services</li>
                <li>Improve our services and develop new offerings</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Data Sharing and Transfers</h2>
              <p className="text-lg mb-4">We may share your personal data with:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Service Providers:</strong> Technical consultants, subcontractors, and professional advisors</li>
                <li><strong>Authorities:</strong> Environmental agencies, municipalities, and regulatory bodies when required</li>
                <li><strong>Partners:</strong> Collaboration partners in rewetting projects (with your consent)</li>
              </ul>
              <p className="text-lg mb-4">
                We do not sell, rent, or trade your personal data to third parties. All data sharing is done in accordance with GDPR requirements and with appropriate safeguards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
              <p className="text-lg mb-4">We retain your personal data:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Project Data:</strong> For the duration of the project plus 7 years for accounting purposes</li>
                <li><strong>Contact Information:</strong> Until you withdraw consent or request deletion</li>
                <li><strong>Marketing Data:</strong> Until you unsubscribe or withdraw consent</li>
                <li><strong>Website Analytics:</strong> Data is anonymized after 26 months</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Your Rights Under GDPR</h2>
              <p className="text-lg mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Access:</strong> Request information about how we process your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete personal data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
                <li><strong>Restriction:</strong> Limit how we process your personal data</li>
                <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Cookies and Website Analytics</h2>
              <p className="text-lg mb-4">
                Our website uses cookies to improve functionality and analyze usage. We use Google Analytics to understand how visitors interact with our site. You can manage cookie preferences in your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Data Security</h2>
              <p className="text-lg mb-4">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and regular security assessments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Contact and Complaints</h2>
              <p className="text-lg mb-4">
                If you have questions about this privacy policy or wish to exercise your rights, contact us at:
              </p>
              <p className="text-lg mb-4">
                <strong>Email:</strong> kontakt@markovattenbyran.se
              </p>
              <p className="text-lg mb-4">
                You also have the right to file a complaint with the Swedish Authority for Privacy Protection (IMY) if you believe we have not handled your personal data correctly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">12. Changes to This Policy</h2>
              <p className="text-lg mb-4">
                We may update this privacy policy from time to time. The current version is always available on our website. Significant changes will be communicated to you directly.
              </p>
              <p className="text-lg">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyEN;