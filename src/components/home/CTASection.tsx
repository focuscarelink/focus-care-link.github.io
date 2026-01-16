import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Briefcase } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 hero-gradient">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Care Enquiry CTA */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-elevated">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Looking for Care Support?
            </h3>
            <p className="text-muted-foreground mb-6 text-body-lg leading-relaxed">
              Whether for yourself or a loved one, we're here to discuss your care needs 
              and create a tailored support package.
            </p>
            <ul className="space-y-2 mb-8 text-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Free, no-obligation care assessment
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Personalized care packages
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Flexible scheduling options
              </li>
            </ul>
            <Button asChild size="lg" className="w-full sm:w-auto font-semibold">
              <Link to="/contact">
                Request A Care Service
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Careers CTA */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-elevated">
            <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
              <Briefcase className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Join Our Caring Team
            </h3>
            <p className="text-muted-foreground mb-6 text-body-lg leading-relaxed">
              Make a real difference in people's lives. We're always looking for 
              compassionate individuals to join our team of care professionals.
            </p>
            <ul className="space-y-2 mb-8 text-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Competitive pay & benefits
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Comprehensive training provided
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Flexible working hours
              </li>
            </ul>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto font-semibold border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link to="/careers">
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
