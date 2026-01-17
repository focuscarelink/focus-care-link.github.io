import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { 
  Shield, 
  FileText, 
  AlertCircle, 
  Lock, 
  Users,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Eye
} from "lucide-react";

const sections = [
  {
    id: "cqc-registration",
    icon: Shield,
    title: "CQC Registration",
    content: `Focus Care Link is registered with the Care Quality Commission (CQC), the independent regulator of health and social care in England. We are committed to providing safe, effective, compassionate, and high-quality care.

Our CQC registration means we are regularly inspected to ensure we meet fundamental standards of quality and safety. We are transparent about our performance and committed to continuous improvement.

You can view our full inspection report on the CQC website.`,
  },
  {
    id: "statement-of-purpose",
    icon: FileText,
    title: "Statement of Purpose",
    content: `Focus Care Link provides domiciliary care services to adults and older people in their own homes across London. Our purpose is to help service users enjoy the highest possible levels of comfort and health while maintaining their independence and dignity.

We offer a range of services including personal care, dementia care, learning disability support, mental health support, live-in care, and respite care. Our care is tailored to individual needs and delivered by trained, compassionate staff.

Our aims include:
• Treating all service users with dignity and respect
• Promoting independence and choice
• Providing culturally sensitive care
• Working in partnership with families and healthcare professionals
• Maintaining the highest standards of care quality`,
  },
  {
    id: "complaints",
    icon: AlertCircle,
    title: "Complaints Procedure",
    content: `We are committed to providing excellent care, but we recognize that sometimes things may not meet expectations. We welcome feedback and take all complaints seriously.

How to make a complaint:
1. Speak directly with your care worker or care coordinator
2. Contact our office by phone: 020 7419 7419
3. Email: complaints@focuscarelink.co.uk
4. Write to us at our Camden office

What happens next:
• We will acknowledge your complaint within 3 working days
• We will investigate thoroughly and fairly
• We aim to resolve complaints within 28 days
• You will receive a written response with our findings

If you are not satisfied with our response, you have the right to contact the Care Quality Commission or the Local Government and Social Care Ombudsman.`,
  },
  {
    id: "safeguarding",
    icon: Users,
    title: "Safeguarding Policy",
    content: `Focus Care Link is committed to safeguarding and promoting the welfare of all adults at risk. We believe that every adult has the right to live free from abuse, neglect, and harm.

Our safeguarding commitments:
• All staff undergo enhanced DBS checks
• Comprehensive safeguarding training for all team members
• Clear procedures for reporting and responding to concerns
• Regular supervision and monitoring of care delivery
• Partnership working with local safeguarding boards

If you have any safeguarding concerns, please contact us immediately or report directly to your local authority safeguarding team.

We operate a culture of vigilance and transparency. All concerns are taken seriously and investigated promptly.`,
  },
  {
    id: "privacy",
    icon: Lock,
    title: "Privacy & Data Protection",
    content: `Focus Care Link is committed to protecting your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.

What data we collect:
• Personal details (name, address, contact information)
• Health and care information (to provide appropriate care)
• Next of kin and emergency contact details
• Employment information (for staff applications)

How we use your data:
• To provide safe and effective care
• To communicate with you about your care
• To share information with healthcare professionals involved in your care
• To meet legal and regulatory requirements

Your rights:
• Access your personal data
• Request correction of inaccurate data
• Request deletion of your data (where applicable)
• Object to processing of your data

We never sell your data to third parties. For our full privacy policy, please contact our office.`,
  },
  {
    id: "accessibility",
    icon: Eye,
    title: "Accessibility Statement",
    content: `Focus Care Link is committed to making our website and services accessible to everyone. We aim to meet WCAG 2.1 Level AA accessibility standards.

Website accessibility features:
• Clear, simple navigation
• High contrast text and backgrounds
• Scalable text sizes
• Keyboard-accessible navigation
• Screen reader compatibility
• Alternative text for images

If you experience any difficulty accessing our website or services, please contact us and we will do our best to assist you.

We regularly review and improve our accessibility practices.`,
  },
];

const Compliance = () => {
  return (
    <Layout>
      {/* Hero section */}
      <section className="py-20 hero-gradient">
        <div className="container">
          <div className="max-w-3xl">
            <Breadcrumb currentPage="Quality & Compliance" />
            <span className="inline-block px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full text-background text-sm font-medium mb-6">
              Quality & Compliance
            </span>
            <h1 className="font-display text-display-lg text-background mb-6">
              Our Commitment to Quality
            </h1>
            <p className="text-body-xl text-background/90 leading-relaxed">
              Transparency, accountability, and high standards are at the heart of everything we do. 
              Here you'll find key information about our regulatory compliance and policies.
            </p>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <section.icon className="w-4 h-4" />
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="space-y-16">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-32"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground pt-2">
                    {section.title}
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  {section.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="border-b border-border mt-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-warm">
        <div className="container text-center">
          <h2 className="font-display text-display-md text-foreground mb-6">
            Questions About Our Standards?
          </h2>
          <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're happy to discuss any aspect of our quality and compliance approach.
          </p>
          <Button asChild size="lg" className="font-semibold">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Compliance;
