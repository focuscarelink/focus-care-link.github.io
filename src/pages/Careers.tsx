import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { 
  Heart, 
  Clock, 
  GraduationCap, 
  Users, 
  MapPin,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Star
} from "lucide-react";
import diversityBadge from "@/assets/diversity-badge.jpg";
import careersHeroImage from "@/assets/careers-hero.jpg";
import careersTrainingImage from "@/assets/careers-training.jpg";
import careersTeamImage from "@/assets/careers-team.jpg";

const benefits = [
  {
    icon: GraduationCap,
    title: "Comprehensive Training",
    description: "Full induction and ongoing training to develop your skills and career.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work patterns that fit around your life and commitments.",
  },
  {
    icon: Users,
    title: "Supportive Team",
    description: "Join a caring team with experienced management support.",
  },
  {
    icon: Star,
    title: "Competitive Pay",
    description: "Fair compensation that recognizes your valuable contribution.",
  },
];

const qualities = [
  "Genuine compassion and care for others",
  "Reliability and trustworthiness",
  "Flexibility and adaptability",
  "Good communication skills",
  "Respect for dignity and privacy",
  "Self-motivation and initiative",
];

const vacancies = [
  {
    title: "Care Assistant",
    location: "Camden & Islington",
    type: "Full-time / Part-time",
    description: "Support service users with daily living activities while promoting independence and dignity.",
  },
  {
    title: "Support Worker",
    location: "Barking & Dagenham, Haringey, Hackney",
    type: "Full-time / Part-time",
    description: "Provide specialist support for individuals with learning disabilities and mental health needs.",
  },
  {
    title: "Live-in Carer",
    location: "London-wide",
    type: "Live-in",
    description: "Provide around-the-clock care and companionship in service users' homes.",
  },
  {
    title: "Field Care Supervisor",
    location: "Camden",
    type: "Full-time",
    description: "Oversee care delivery, support care workers, and ensure quality standards are maintained.",
  },
];

const Careers = () => {
  return (
    <Layout>
      {/* Hero section with image */}
      <section className="relative py-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={careersHeroImage}
            alt="Join our caring team"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Breadcrumb currentPage="Careers" />
            <span className="inline-block px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full text-background text-sm font-medium mb-6">
              Join Our Team
            </span>
            <h1 className="font-display text-display-lg text-background mb-6">
              Make a Real Difference Every Day
            </h1>
            <p className="text-body-xl text-background/90 leading-relaxed mb-8">
              Join Focus Care Link and become part of a team that truly values compassion, 
              dignity, and making a positive impact in people's lives.
            </p>
            <Button asChild size="lg" className="cta-gradient border-0 text-accent-foreground font-semibold text-lg h-14 px-8">
              <a href="#vacancies">
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits with image */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wide mb-4 block">
                Why Work With Us
              </span>
              <h2 className="font-display text-display-md text-foreground mb-6">
                A Career That Matters
              </h2>
              <p className="text-body-lg text-muted-foreground">
                We invest in our people because they are the heart of everything we do.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={careersTrainingImage} alt="Training and development" className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="trust-card text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we look for with team image */}
      <section className="py-20 section-warm">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={careersTeamImage} alt="Our friendly team" className="w-full h-auto object-cover" />
            </div>
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wide mb-4 block">
                Who We're Looking For
              </span>
              <h2 className="font-display text-display-md text-foreground mb-6">
                Caring People Like You
              </h2>
              <p className="text-body-lg text-muted-foreground mb-8 leading-relaxed">
                We welcome applications from people of all backgrounds. While experience 
                in care is valuable, what matters most is your character and values. 
                We provide comprehensive training for the right candidates.
              </p>
              {/* Diversity badge */}
              <img 
                src={diversityBadge} 
                alt="Diverse, Inclusive, Together - We welcome people of all backgrounds" 
                className="w-48 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <section id="vacancies" className="py-20 bg-background scroll-mt-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide mb-4 block">
              Current Vacancies
            </span>
            <h2 className="font-display text-display-md text-foreground mb-6">
              Open Positions
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Find your next role with Focus Care Link
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {vacancies.map((vacancy) => (
              <div key={vacancy.title} className="trust-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {vacancy.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {vacancy.location}
                      </span>
                      <span>•</span>
                      <span>{vacancy.type}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {vacancy.description}
                </p>
                <Button asChild className="w-full font-semibold">
                  <Link to="/contact?apply=true">
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Easy apply CTA */}
      <section className="py-20 bg-accent">
        <div className="container text-center">
          <h2 className="font-display text-display-md text-accent-foreground mb-6">
            Quick & Easy Application
          </h2>
          <p className="text-body-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Our streamlined application process takes just 2 minutes. 
            Submit your details and CV, and we'll be in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90 font-semibold">
              <Link to="/contact?apply=true">
                Start Your Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 font-semibold">
              <a href="tel:02081895988">
                Call Recruitment: 0208 189 5988
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
