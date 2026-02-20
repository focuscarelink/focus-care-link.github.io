import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import focusCareLogo from "@/assets/focus-care-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Quality & Compliance", href: "/compliance" },
  { name: "Legal & Policies", href: "/legal" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:02074197419" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>Care Enquiries: 020 7419 7419</span>
            </a>
            <a href="tel:02081895988" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Heart className="w-4 h-4" />
              <span>Careers &amp; Recruitment: 0208 189 5988</span>
            </a>
          </div>
          <div className="flex items-center gap-2 mx-auto md:mx-0">
            <span className="font-medium">CQC Registered Provider</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={focusCareLogo} 
              alt="Focus Care Link - Passion for Care" 
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-accessible",
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="cta-gradient border-0 text-accent-foreground font-semibold shadow-soft">
              <Link to="/contact">Request A Care Service</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg hover:bg-secondary focus-accessible"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg font-medium transition-colors",
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="cta-gradient border-0 text-accent-foreground font-semibold mt-2">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Request A Care Service
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
