import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Users, 
  Home, 
  Clock, 
  Sparkles,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Personal Care",
    description: "Dignified support with daily living activities including bathing, dressing, and medication management.",
    href: "/services#personal-care",
  },
  {
    icon: Brain,
    title: "Dementia Care",
    description: "Specialized support for those living with dementia, delivered with patience and understanding.",
    href: "/services#dementia",
  },
  {
    icon: Users,
    title: "Learning Disabilities",
    description: "Tailored care programmes for individuals with moderate to profound learning disabilities.",
    href: "/services#learning-disabilities",
  },
  {
    icon: Sparkles,
    title: "Mental Health Support",
    description: "Compassionate support for mild to moderate mental health conditions and recovery journeys.",
    href: "/services#mental-health",
  },
  {
    icon: Home,
    title: "Live-in Care",
    description: "24/7 around-the-clock support enabling you to remain in the comfort of your own home.",
    href: "/services#live-in",
  },
  {
    icon: Clock,
    title: "Respite Care",
    description: "Flexible short-term care providing essential breaks for family caregivers.",
    href: "/services#respite",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 section-warm">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            Tailored Care for Every Need
          </h2>
          <p className="text-body-lg text-muted-foreground">
            From a few hours a week to 24/7 support, we deliver personalized care 
            packages designed around your unique requirements and preferences.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="trust-card group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="font-semibold text-lg h-14 px-8">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
