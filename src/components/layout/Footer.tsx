import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import focusCareLogo from "@/assets/focus-care-logo.png";
import hcaLogo from "@/assets/hca-logo.png";
import isoLogo from "@/assets/iso-9001-camden.png";

const complianceLinks = [
  { name: "CQC Registration", href: "/compliance" },
  { name: "Statement of Purpose", href: "/compliance#statement-of-purpose" },
  { name: "Complaints Procedure", href: "/compliance#complaints" },
  { name: "Safeguarding Policy", href: "/compliance#safeguarding" },
  { name: "Legal & Policies", href: "/legal" },
  { name: "Privacy Notice", href: "/privacy" },
];

const serviceLinks = [
  { name: "Personal Care", href: "/services/personal-care" },
  { name: "Dementia Care", href: "/services/dementia-care" },
  { name: "Learning Disabilities", href: "/services/learning-disabilities" },
  { name: "Mental Health Support", href: "/services/mental-health-support" },
  { name: "Live-in Care", href: "/services/live-in-care" },
];

const locations = [
  {
    name: "Camden (Head Office)",
    address: "Kentish Town, London NW5 2AB",
    phone: "020 7419 7419",
  },
  {
    name: "East London Branch",
    address: "Leyton, London E10 7JQ",
    phone: "0208 189 5988",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="mb-6 flex items-center gap-3">
              <img src={focusCareLogo} alt="Focus Care Link" className="h-16 w-auto rounded-lg bg-white p-2" />
            </Link>
            <p className="mb-6 text-body-lg leading-relaxed text-background/70">
              Focus Care Link – providing compassionate domiciliary care across London since 2004. Guided by Ubuntu – “I am because we are.”
            </p>
            <div className="mb-4 flex items-center gap-4">
              <a
                href="https://www.cqc.org.uk/location/1-118941704"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-background/10 px-4 py-2 transition-colors hover:bg-background/20"
              >
                <span className="font-semibold">CQC Registered</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <img src={isoLogo} alt="ISO 9001 Quality Management System – Camden Branch" className="h-12 w-auto rounded bg-white p-1" />
              <img src={hcaLogo} alt="Homecare Association Member" className="h-12 w-auto rounded bg-white p-1" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/70 transition-colors hover:text-background">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Quality & Compliance</h3>
            <ul className="space-y-3">
              {complianceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/70 transition-colors hover:text-background">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Contact Us</h3>
            <div className="space-y-6">
              {locations.map((location) => (
                <div key={location.name} className="space-y-2">
                  <h4 className="font-semibold text-background">{location.name}</h4>
                  <div className="flex items-start gap-2 text-background/70">
                    <MapPin className="mt-1 h-4 w-4 shrink-0" />
                    <span>{location.address}</span>
                  </div>
                  <a
                    href={`tel:${location.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-background/70 transition-colors hover:text-background"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{location.phone}</span>
                  </a>
                </div>
              ))}
              <a href="mailto:admin@focuscarelink.co.uk" className="flex items-center gap-2 text-background/70 transition-colors hover:text-background">
                <Mail className="h-4 w-4" />
                <span>admin@focuscarelink.co.uk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-background/60 md:flex-row">
            <p>© {currentYear} Focus Care Link. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link to="/sitemap" className="transition-colors hover:text-background">Sitemap</Link>
              <Link to="/legal" className="font-medium transition-colors hover:text-background">Legal & Policies</Link>
              <Link to="/privacy" className="transition-colors hover:text-background">Privacy Policy</Link>
              <Link to="/compliance#cookies" className="transition-colors hover:text-background">Cookie Policy</Link>
              <Link to="/compliance#accessibility" className="transition-colors hover:text-background">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
