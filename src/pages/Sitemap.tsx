import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/Breadcrumb";
import { 
  Home, 
  Heart, 
  Users, 
  Briefcase, 
  Shield, 
  FileText, 
  Phone, 
  Lock,
  Map,
  Brain,
  Sparkles,
  Clock,
  ExternalLink
} from "lucide-react";

const siteStructure = [
  {
    section: "Main Pages",
    links: [
      { name: "Home", href: "/", icon: Home, description: "Welcome to Focus Care Link" },
      { name: "Our Services", href: "/services", icon: Heart, description: "Explore our care services" },
      { name: "About Us", href: "/about", icon: Users, description: "Learn about our story and values" },
      { name: "Careers", href: "/careers", icon: Briefcase, description: "Join our caring team" },
      { name: "Quality & Compliance", href: "/compliance", icon: Shield, description: "Our commitment to quality" },
      { name: "Legal & Policies", href: "/legal", icon: FileText, description: "Policies and legal information" },
      { name: "Contact Us", href: "/contact", icon: Phone, description: "Get in touch with us" },
    ],
  },
  {
    section: "Our Services",
    links: [
      { name: "Personal Care", href: "/services#personal-care", icon: Heart, description: "Daily living assistance" },
      { name: "Dementia Care", href: "/services#dementia", icon: Brain, description: "Specialist dementia support" },
      { name: "Learning Disabilities", href: "/services#learning-disabilities", icon: Users, description: "Tailored disability support" },
      { name: "Mental Health Support", href: "/services#mental-health", icon: Sparkles, description: "Wellbeing and recovery" },
      { name: "Live-in Care", href: "/services#live-in", icon: Home, description: "24/7 home support" },
      { name: "Respite Care", href: "/services#respite", icon: Clock, description: "Short-term care breaks" },
    ],
  },
  {
    section: "Quality & Compliance",
    links: [
      { name: "CQC Registration", href: "/compliance#cqc-registration", icon: Shield, description: "Our regulatory status" },
      { name: "Statement of Purpose", href: "/compliance#statement-of-purpose", icon: FileText, description: "Our mission and aims" },
      { name: "Complaints Procedure", href: "/compliance#complaints", icon: Phone, description: "How to raise concerns" },
      { name: "Safeguarding Policy", href: "/compliance#safeguarding", icon: Users, description: "Protecting vulnerable adults" },
      { name: "Privacy & Data Protection", href: "/compliance#privacy", icon: Lock, description: "Your data rights" },
      { name: "Accessibility Statement", href: "/compliance#accessibility", icon: FileText, description: "Website accessibility" },
    ],
  },
  {
    section: "Legal & Privacy",
    links: [
      { name: "Privacy Notice", href: "/privacy", icon: Lock, description: "How we protect your data" },
      { name: "GDPR Compliance Policy", href: "/policies/gdpr-compliance-policy.pdf", icon: Shield, description: "Data protection compliance", external: true },
      { name: "Confidentiality Policy", href: "/policies/confidentiality-policy.pdf", icon: Lock, description: "Service user confidentiality", external: true },
      { name: "Access to Records Policy", href: "/policies/access-to-records-policy.pdf", icon: FileText, description: "Your right to access records", external: true },
      { name: "Equality Policy", href: "/policies/equality-policy.pdf", icon: Users, description: "Diversity and inclusion", external: true },
      { name: "Quality Policy Notice", href: "/policies/quality-policy-notice.pdf", icon: Shield, description: "Our quality commitment", external: true },
    ],
  },
  {
    section: "External Resources",
    links: [
      { name: "CQC Inspection Report", href: "https://www.cqc.org.uk/location/1-118941704", icon: ExternalLink, description: "View our CQC profile", external: true },
    ],
  },
];

const Sitemap = () => {
  return (
    <Layout>
      {/* Hero section */}
      <section className="py-16 hero-gradient">
        <div className="container">
          <div className="max-w-3xl">
            <Breadcrumb currentPage="Sitemap" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center">
                <Map className="w-6 h-6 text-background" />
              </div>
              <span className="text-background/80 font-medium">Navigation</span>
            </div>
            <h1 className="font-display text-display-lg text-background mb-4">
              Sitemap
            </h1>
            <p className="text-background/80 text-body-lg">
              Complete navigation guide to all pages and resources on our website.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap content */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {siteStructure.map((category) => (
              <div key={category.section} className="space-y-4">
                <h2 className="font-display text-xl font-semibold text-foreground border-b border-border pb-3">
                  {category.section}
                </h2>
                <ul className="space-y-3">
                  {category.links.map((link) => {
                    const Icon = link.icon;
                    const LinkComponent = link.external ? 'a' : Link;
                    const linkProps = link.external 
                      ? { href: link.href, target: "_blank", rel: "noopener noreferrer" }
                      : { to: link.href };

                    return (
                      <li key={link.name}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <span className="font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                                {link.name}
                                <ExternalLink className="w-3 h-3" />
                              </span>
                              <p className="text-sm text-muted-foreground">{link.description}</p>
                            </div>
                          </a>
                        ) : (
                          <Link
                            to={link.href}
                            className="group flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {link.name}
                              </span>
                              <p className="text-sm text-muted-foreground">{link.description}</p>
                            </div>
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick contact */}
      <section className="py-12 section-warm">
        <div className="container text-center">
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <Phone className="w-5 h-5" />
            Contact us for assistance
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;
