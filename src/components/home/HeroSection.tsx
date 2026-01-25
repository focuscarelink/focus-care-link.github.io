import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-new.jpg";

const trustBadges = [
  { icon: Shield, label: "CQC Registered" },
  { icon: Heart, label: "Since 2000" },
  { icon: Users, label: "London-Wide Care" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Caring support at home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-up">
            {trustBadges.map((badge, index) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full text-background text-sm font-medium"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <badge.icon className="w-4 h-4" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>

          {/* Headline - Updated tagline */}
          <h1 className="font-display text-display-xl text-background mb-2 animate-fade-up delay-100 hero-text-shadow">
            Putting People First
          </h1>
          <p className="text-body-xl text-background/80 mb-6 animate-fade-up delay-100">
            People over profit, always.
          </p>

          {/* Subheadline */}
          <p className="text-body-xl text-background/90 mb-8 animate-fade-up delay-200 leading-relaxed">
            We provide quality domiciliary care support within service users' homes, 
            appropriately tailored to enhance quality of life and enable participation 
            in communities.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <Button asChild size="lg" className="cta-gradient border-0 text-accent-foreground font-semibold text-lg h-14 px-8">
              <Link to="/contact">
                Request A Care Service
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-background/10 border-background/30 text-background hover:bg-background/20 hover:text-background font-semibold text-lg h-14 px-8">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>

          {/* Phone numbers */}
          <div className="mt-10 pt-8 border-t border-background/20 animate-fade-up delay-400">
            <p className="text-background/70 mb-4 text-sm font-medium uppercase tracking-wide">
              Speak to us today
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="tel:02074197419"
                className="text-background text-xl font-semibold hover:text-primary-foreground transition-colors"
              >
                Care Enquiries: 020 7419 7419
              </a>
              <a
                href="tel:02081895988"
                className="text-background text-xl font-semibold hover:text-primary-foreground transition-colors"
              >
                Careers: 0208 189 5988
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
