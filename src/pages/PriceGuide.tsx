import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Link } from "react-router-dom";
import { Phone, Mail, PoundSterling, Clock, Home, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import priceGuideHero from "@/assets/price-guide-hero.jpg";

const PriceGuide = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <img src={priceGuideHero} alt="Price Guide" className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Breadcrumb currentPage="Price Guide" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center">
                <PoundSterling className="w-6 h-6 text-background" />
              </div>
              <span className="text-background/80 font-medium">Transparent Pricing</span>
            </div>
            <h1 className="font-display text-display-lg text-background mb-4">
              Care Price Guide
            </h1>
            <p className="text-background/80 text-body-lg">
              From the beginning, we'll give you a clear picture of how much care will cost, 
              which will be confirmed once we put a plan of care in place to suit your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Visiting Care */}
            <div className="p-8 rounded-2xl border-2 border-border bg-card hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                Visiting Care
              </h2>
              <div className="mb-6">
                <span className="text-display-sm font-bold text-primary">From £22.50</span>
                <span className="text-muted-foreground">/hour</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We provide care from as little as 30 minutes per week, all the way up to regular calls 
                throughout the day. Visiting care enables you to receive support that suits you.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Flexible scheduling from 30 mins/week",
                  "Adapts to your changing needs",
                  "Personalised care plan",
                  "Consistent, reliable carers",
                  "Regular calls throughout the day",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full cta-gradient border-0 text-accent-foreground font-semibold">
                <Link to="/contact">Get a Personalised Quote</Link>
              </Button>
            </div>

            {/* Live-in Care */}
            <div className="p-8 rounded-2xl border-2 border-primary bg-card relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                Most Comprehensive
              </div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                Live-in Care
              </h2>
              <div className="mb-6">
                <span className="text-display-sm font-bold text-primary">From £1,460</span>
                <span className="text-muted-foreground">/week</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Live-in care is a great alternative to a care home. It allows the client to stay in the 
                comfort and privacy of their own home while enjoying an unrivalled level of 1-to-1 support, 
                24 hours a day.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "24-hour 1-to-1 support",
                  "Personal care & housekeeping",
                  "Companionship included",
                  "Maintain your independence",
                  "Stay in your own home",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full cta-gradient border-0 text-accent-foreground font-semibold">
                <Link to="/contact">Get a Personalised Quote</Link>
              </Button>
            </div>
          </div>

          {/* Additional info */}
          <div className="max-w-3xl mx-auto mt-12 p-6 rounded-xl bg-primary/5 border border-primary/10">
            <p className="text-center text-muted-foreground">
              <strong className="text-foreground">Tailored to your needs:</strong> These are starting prices. 
              The final cost will be confirmed once we have assessed your individual requirements and put a 
              personalised care plan in place. Contact us for a no-obligation discussion about your care needs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-warm">
        <div className="container text-center">
          <h2 className="font-display text-display-sm text-foreground mb-4">
            Get Your Personalised Care Quote
          </h2>
          <p className="text-muted-foreground text-body-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our friendly team to discuss your requirements and receive a clear, transparent quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="cta-gradient border-0 text-accent-foreground font-semibold">
              <a href="tel:02074197419">
                <Phone className="w-5 h-5 mr-2" />
                Call 020 7419 7419
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:admin@focuscarelink.co.uk">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PriceGuide;
