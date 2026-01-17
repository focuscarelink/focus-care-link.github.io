import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import focusCareLogo from "@/assets/focus-care-logo.png";
import hcaLogo from "@/assets/hca-logo.png";
import isoLogo from "@/assets/iso-9001-badge.jpg";

const complianceLinks = [
  { name: "CQC Registration", href: "/compliance" },
  { name: "Statement of Purpose", href: "/compliance#statement-of-purpose" },
  { name: "Complaints Procedure", href: "/compliance#complaints" },
  { name: "Safeguarding Policy", href: "/compliance#safeguarding" },
  { name: "Legal & Policies", href: "/legal" },
  { name: "Privacy Notice", href: "/privacy" },
];

const serviceLinks = [
  { name: "Personal Care", href: "/services#personal-care" },
  { name: "Dementia Care", href: "/services#dementia" },
  { name: "Learning Disabilities", href: "/services#learning-disabilities" },
  { name: "Mental Health Support", href: "/services#mental-health" },
  { name: "Live-in Care", href: "/services#live-in" },
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
      {/* Main footer content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={focusCareLogo} 
                alt="Focus Care Link" 
                className="h-16 w-auto bg-white rounded-lg p-2"
              />
            </Link>
            <p className="text-background/70 mb-6 text-body-lg leading-relaxed">
              Providing compassionate domiciliary care across London since 2004. 
              Guided by Ubuntu — "I am because we are."
            </p>
            <div className="flex items-center gap-4 mb-4">
              <a
                href="https://www.cqc.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
              >
                <span className="font-semibold">CQC Registered</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            {/* Accreditation logos */}
            <div className="flex items-center gap-3 mt-4">
              <img src={hcaLogo} alt="Homecare Association Member" className="h-12 w-auto bg-white rounded p-1" />
              <img src={isoLogo} alt="ISO 9001 Certified" className="h-12 w-auto rounded" />
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance column */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quality & Compliance</h3>
            <ul className="space-y-3">
              {complianceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-6">
              {locations.map((location) => (
                <div key={location.name} className="space-y-2">
                  <h4 className="font-semibold text-background">{location.name}</h4>
                  <div className="flex items-start gap-2 text-background/70">
                    <MapPin className="w-4 h-4 mt-1 shrink-0" />
                    <span>{location.address}</span>
                  </div>
                  <a
                    href={`tel:${location.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{location.phone}</span>
                  </a>
                </div>
              ))}
              <a
                href="mailto:admin@focuscarelink.co.uk"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>admin@focuscarelink.co.uk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>© {currentYear} Focus Care Link. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/legal" className="hover:text-background transition-colors font-medium">
                Legal & Policies
              </Link>
              <Link to="/privacy" className="hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link to="/compliance#cookies" className="hover:text-background transition-colors">
                Cookie Policy
              </Link>
              <Link to="/compliance#accessibility" className="hover:text-background transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
