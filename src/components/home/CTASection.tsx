import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaCareImg from "@/assets/cta-care.jpg";
import ctaCareersImg from "@/assets/cta-careers.jpg";

export function CTASection() {
  return (
    <section className="py-20 hero-gradient">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-lg text-background mb-2">
            Putting People First
          </h2>
          <p className="text-body-lg text-background/70">
            People over profit, always.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Care Enquiry CTA */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-elevated">
            <div className="aspect-video overflow-hidden">
              <img 
                src={ctaCareImg} 
                alt="Happy senior receiving care at home"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-10">
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
                  Personalised care packages
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
          </div>

          {/* Careers CTA */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-elevated">
            <div className="aspect-video overflow-hidden">
              <img 
                src={ctaCareersImg} 
                alt="Care professional ready to help"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-10">
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
      </div>
    </section>
  );
}
