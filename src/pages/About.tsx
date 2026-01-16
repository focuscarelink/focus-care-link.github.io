import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users, 
  Leaf, 
  Globe,
  ArrowRight,
  Quote
} from "lucide-react";
import hcaLogo from "@/assets/hca-logo.png";
import isoLogo from "@/assets/iso-9001-badge.jpg";
import diversityBadge from "@/assets/diversity-badge.jpg";

const values = [
  {
    icon: Heart,
    title: "Ubuntu Philosophy",
    description: "Our care is guided by the African philosophy of Ubuntu — 'I am because we are'. This means we see every individual as part of a greater human family, deserving of compassion and dignity.",
  },
  {
    icon: Users,
    title: "Cultural Sensitivity",
    description: "Our diverse, multilingual team respects and accommodates cultural and religious needs. We provide language support for clients where English is a second language.",
  },
  {
    icon: Leaf,
    title: "Independence & Dignity",
    description: "We believe everyone deserves to live independently in their own home. Our care enables this while ensuring safety, comfort, and quality of life.",
  },
  {
    icon: Globe,
    title: "Community Focus",
    description: "We help service users participate in their communities, reducing isolation and maintaining social connections that are vital to wellbeing.",
  },
];

const milestones = [
  { year: "2004", event: "Focus Care Link established in London" },
  { year: "2010", event: "Expanded services to East London" },
  { year: "2015", event: "Introduced specialist learning disability support" },
  { year: "2020", event: "Adapted services during the pandemic" },
  { year: "2024", event: "20 years of compassionate care" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero section */}
      <section className="py-20 hero-gradient">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full text-background text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-display text-display-lg text-background mb-6">
              People Over Profit, Always
            </h1>
            <p className="text-body-xl text-background/90 leading-relaxed">
              Established in 2004, Focus Care Link was born from a desire to help 
              the vulnerable by providing care that treats every individual with 
              dignity and respect.
            </p>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary rounded-2xl p-10 md:p-14 relative">
              <Quote className="w-12 h-12 text-primary/20 absolute top-8 left-8" />
              <blockquote className="text-display-md font-display text-foreground text-center relative z-10 mb-6">
                "To help service users enjoy the highest possible levels of comfort 
                and health, treating them with dignity and respect while maintaining 
                their independence."
              </blockquote>
              <p className="text-center text-muted-foreground font-medium">
                Our Mission Statement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 section-warm">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide mb-4 block">
              Our Values
            </span>
            <h2 className="font-display text-display-md text-foreground mb-6">
              What We Stand For
            </h2>
            {/* Diversity badge */}
            <div className="flex justify-center mb-8">
              <img 
                src={diversityBadge} 
                alt="Diverse, Inclusive, Together" 
                className="w-40 h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="trust-card">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wide mb-4 block">
                Our Experience
              </span>
              <h2 className="font-display text-display-md text-foreground mb-6">
                Over 20 Years of Compassionate Care
              </h2>
              <p className="text-body-lg text-muted-foreground mb-6 leading-relaxed">
                Focus Care Link is a leading specialist in Domiciliary Care in and around 
                London. We work with young people, adults, and the elderly to offer tailored 
                care packages that suit individual needs.
              </p>
              <p className="text-body-lg text-muted-foreground mb-8 leading-relaxed">
                Our management team brings over 40 years of combined experience in the care 
                sector. We are members of the Home Care Association and adhere to the 
                General Social Care Council's Code of Conduct.
              </p>
              
              {/* Accreditation logos */}
              <div className="flex items-center gap-6 mb-8">
                <img src={hcaLogo} alt="Homecare Association Member" className="h-20 w-auto" />
                <img src={isoLogo} alt="ISO 9001 Quality Management Certified" className="h-20 w-auto" />
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-primary mb-2">40+</div>
                  <div className="text-sm text-muted-foreground">Years Combined Management</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-primary mb-2">2</div>
                  <div className="text-sm text-muted-foreground">London Branches</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-8">
                Our Journey
              </h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-4">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-primary mt-2" />
                      {index < milestones.length - 1 && (
                        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" />
                      )}
                    </div>
                    <div className="pb-6">
                      <div className="font-bold text-primary mb-1">{milestone.year}</div>
                      <div className="text-foreground">{milestone.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="container text-center">
          <h2 className="font-display text-display-md text-background mb-6">
            Join Our Story
          </h2>
          <p className="text-body-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Whether you need care support or want to join our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="cta-gradient border-0 text-accent-foreground font-semibold">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/10 border-background/30 text-background hover:bg-background/20 hover:text-background font-semibold">
              <Link to="/careers">View Careers</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
