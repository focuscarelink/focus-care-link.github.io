import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Shield, ArrowRight, Lock } from "lucide-react";

const Privacy = () => {
  return (
    <Layout>
      {/* Hero section */}
      <section className="py-16 hero-gradient">
        <div className="container">
          <div className="max-w-3xl">
            <Breadcrumb currentPage="Privacy Notice" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-background" />
              </div>
              <span className="text-background/80 font-medium">Legal</span>
            </div>
            <h1 className="font-display text-display-lg text-background mb-4">
              Privacy Notice
            </h1>
            <p className="text-background/80">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-2xl text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Focus Care Link ("we", "our", "us") is committed to protecting and respecting your privacy. This privacy notice explains how we collect, use, store, and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>

            <h2 className="font-display text-2xl text-foreground mb-4 mt-10">Who We Are</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Focus Care Link is a domiciliary care provider registered with the Care Quality Commission (CQC). We are the data controller for the personal data we process. Our contact details are available on our Contact page.
            </p>

            <h2 className="font-display text-2xl text-foreground mb-4 mt-10">What Data We Collect</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We may collect the following types of personal data:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li><strong>Identity data:</strong> Name, date of birth, national insurance number</li>
              <li><strong>Contact data:</strong> Address, email, phone numbers</li>
              <li><strong>Health data:</strong> Medical history, care needs, medication information (Special Category Data)</li>
              <li><strong>Financial data:</strong> Bank details for payment purposes</li>
              <li><strong>Employment data:</strong> CV, qualifications, references, DBS check results (for staff applications)</li>
              <li><strong>Next of kin data:</strong> Emergency contact details</li>
            </ul>

            <h2 className="font-display text-2xl text-foreground mb-4 mt-10">How We Use Your Data</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We use your personal data to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Provide safe and effective care services</li>
              <li>Communicate with you about your care or application</li>
              <li>Share information with healthcare professionals involved in your care</li>
              <li>Meet legal and regulatory requirements (CQC, safeguarding)</li>
              <li>Process payments and manage our business</li>
              <li>Improve our services</li>
            </ul>

            <h2 className="font-display text-2xl text-foreground mb-4 mt-10">Legal Basis for Processing</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We process your personal data based on: contractual necessity (to provide care services), legal obligations (CQC regulations, safeguarding), legitimate interests (business operations), and your explicit consent where required for Special Category Data (health information).
            </p>

            <h2 className="font-display text-2xl text-foreground mb-4 mt-10">Data Sharing</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We may share your data with: healthcare professionals involved in your care, local authority commissioners, the CQC, our IT service providers (under strict contractual terms), and legal authorities where required by law. We never sell your personal data.
            </p>

            <h2 className="font-display text-2xl text-foreground mb-4 mt-10">Data Retention</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We retain care records for 8 years after the end of care, or longer where required for legal purposes. Recruitment records for unsuccessful applicants are retained for 12 months. We securely destroy data when no longer needed.
            </p>

            <h2 className="font-display text-2xl text-foreground mb-4 mt-10">Your Rights</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Under UK GDPR, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request erasure of your data (where applicable)</li>
              <li>Restrict processing of your data</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="font-display text-2xl text-foreground mb-4 mt-10">Data Security</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We implement appropriate technical and organisational measures to protect your data, including encrypted systems, access controls, staff training, and secure disposal procedures.
            </p>

            <h2 className="font-display text-2xl text-foreground mb-4 mt-10">Cookies</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our website uses essential cookies to function properly. We may also use analytics cookies with your consent to improve our website. You can manage cookie preferences through your browser settings.
            </p>

            <h2 className="font-display text-2xl text-foreground mb-4 mt-10">Contact & Complaints</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              If you have questions about this notice or wish to exercise your rights, please contact us at 020 7419 7419 or info@focuscarelink.co.uk. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Button asChild>
              <Link to="/contact">
                Contact Us About Privacy
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
