import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { FileText, Download, Shield, Scale, Lock, Users, BookOpen, ExternalLink, Home, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import focusCareLogo from "@/assets/focus-care-logo.png";

const policies = [
  {
    title: "GDPR Privacy Notice",
    description: "Our commitment to protecting your personal data under the General Data Protection Regulation.",
    href: "/policies/privacy-notice.pdf",
    icon: Lock,
    category: "Privacy & Data Protection"
  },
  {
    title: "Data Protection & GDPR Compliance Policy",
    description: "Comprehensive policy on how we comply with GDPR and protect your data.",
    href: "/policies/gdpr-compliance-policy.pdf",
    icon: Shield,
    category: "Privacy & Data Protection"
  },
  {
    title: "Information Governance Policy",
    description: "Our approach to information governance under the General Data Protection Regulation.",
    href: "/policies/information-governance-policy.pdf",
    icon: BookOpen,
    category: "Privacy & Data Protection"
  },
  {
    title: "Confidentiality of Service Users Information Policy",
    description: "How we maintain strict confidentiality of all service user information.",
    href: "/policies/confidentiality-policy.pdf",
    icon: Lock,
    category: "Privacy & Data Protection"
  },
  {
    title: "Access to Records (England) Policy",
    description: "Your rights to access your care records and how to request them.",
    href: "/policies/access-to-records-policy.pdf",
    icon: FileText,
    category: "Records & Access"
  },
  {
    title: "Access to Deceased Service Users Care Records Policy",
    description: "Policy for applications to access care records of deceased service users.",
    href: "/policies/deceased-records-access-policy.pdf",
    icon: FileText,
    category: "Records & Access"
  },
  {
    title: "Records Kept in the Homes of People Receiving Care Policy",
    description: "Guidelines for care records maintained in service users' homes.",
    href: "/policies/home-records-policy.pdf",
    icon: FileText,
    category: "Records & Access"
  },
  {
    title: "Records and Record Keeping - Domiciliary Care Policy",
    description: "Comprehensive policy on record keeping for domiciliary care services.",
    href: "/policies/domiciliary-records-policy.pdf",
    icon: FileText,
    category: "Records & Access"
  },
  {
    title: "Quality Policy Notice",
    description: "Our commitment to delivering high-quality care services.",
    href: "/policies/quality-policy-notice.pdf",
    icon: Scale,
    category: "Quality & Equality"
  },
  {
    title: "Equality Policy and Procedure",
    description: "Our commitment to equality, diversity, and inclusion in all our services.",
    href: "/policies/equality-policy.pdf",
    icon: Users,
    category: "Quality & Equality"
  },
];

const groupedPolicies = policies.reduce((acc, policy) => {
  if (!acc[policy.category]) {
    acc[policy.category] = [];
  }
  acc[policy.category].push(policy);
  return acc;
}, {} as Record<string, typeof policies>);

export default function Legal() {
  return (
    <Layout>
      {/* Hero Section with Breadcrumb */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">Legal & Policies</span>
            </nav>
            
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img 
                src={focusCareLogo} 
                alt="Focus Care Link" 
                className="h-16 w-auto"
              />
            </div>
            
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              Transparency & Compliance
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Legal & Policies
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Focus Care Link, we are committed to transparency, accountability, and protecting your rights. 
              Access our comprehensive policies and legal documentation below.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <Shield className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Privacy Commitment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We are committed to protecting your privacy. When you submit personal information through our website 
                    or services, you consent to the collection and use of that data by us. Your information will never 
                    be used for marketing purposes without your explicit consent. Any changes to our privacy terms will 
                    be posted on this site.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 bg-accent/5">
                <CardHeader>
                  <Scale className="w-10 h-10 text-accent mb-2" />
                  <CardTitle>Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Focus Care Link strives to provide the highest quality care for all service users. Our quality 
                    policies ensure consistent, compassionate, and person-centred care delivery. We are committed 
                    to continuous improvement and welcome feedback from those we support.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Copyright Notice */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Copyright & Content
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  The information on this site is for general information purposes only. All content is the copyright 
                  of Focus Care Link Ltd.
                </p>
                <p>
                  You may print, download, and distribute extracts of this site for personal non-commercial use, 
                  and may save extracts to your local hard disk for the purpose of creating one personal back-up copy.
                </p>
                <p>
                  No reproduction of any part of the site may be sold or distributed for commercial gain, nor shall 
                  it be modified or incorporated in any other work, publication, or site. No other licence or right is granted.
                </p>
              </CardContent>
            </Card>

            {/* Data Security Notice */}
            <Card className="mb-12 border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  It is the user's responsibility to execute anti-contamination or virus software and ensure that any 
                  data, if contaminated or infected, will not damage the user's data or system. The entire risk as 
                  to the use of the site is with the user.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Policies Download Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Download Our Policies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access our full range of policies and procedures. All documents are available for download in PDF format.
            </p>
          </div>

          {Object.entries(groupedPolicies).map(([category, categoryPolicies]) => (
            <div key={category} className="mb-12 last:mb-0">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                {category === "Privacy & Data Protection" && <Shield className="w-5 h-5 text-primary" />}
                {category === "Records & Access" && <FileText className="w-5 h-5 text-primary" />}
                {category === "Quality & Equality" && <Scale className="w-5 h-5 text-primary" />}
                {category}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {categoryPolicies.map((policy) => {
                  const Icon = policy.icon;
                  return (
                    <Card key={policy.title} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground mb-1">{policy.title}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{policy.description}</p>
                            <Button variant="outline" size="sm" asChild>
                              <a href={policy.href} target="_blank" rel="noopener noreferrer">
                                <Download className="w-4 h-4 mr-2" />
                                Download PDF
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Linked Sites & Contact */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ExternalLink className="w-5 h-5" />
                    Linked Sites
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    This website may contain links to other websites. Focus Care Link is not responsible for the 
                    content, accuracy, or privacy practices of these external sites. We encourage you to review 
                    the privacy policies of any third-party sites you visit.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>Need More Information?</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    For legal enquiries or policy questions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-primary-foreground/90">
                    If you have any questions about our policies or require further legal information, 
                    please don't hesitate to contact us.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold">Email: admin@focuscarelink.co.uk</p>
                    <p className="font-semibold">Phone: 020 7419 7419</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
