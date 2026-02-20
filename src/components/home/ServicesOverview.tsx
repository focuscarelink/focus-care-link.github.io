import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import personalCareImg from "@/assets/services-personal-care.jpg";
import dementiaCareImg from "@/assets/services-dementia-care.jpg";
import learningDisabilityImg from "@/assets/services-learning-disability.jpg";

const services = [
  {
    image: personalCareImg,
    title: "Personal Care",
    description: "Dignified support with daily living activities including bathing, dressing, and medication management.",
    href: "/services#personal-care",
  },
  {
    image: dementiaCareImg,
    title: "Dementia Care",
    description: "Specialised support for those living with dementia, delivered with patience and understanding.",
    href: "/services#dementia",
  },
  {
    image: learningDisabilityImg,
    title: "Learning Disabilities",
    description: "Tailored care programmes for individuals with moderate to profound learning disabilities.",
    href: "/services#learning-disabilities",
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
            From a few hours a week to full-time 24/7 support, we deliver personalised care 
            packages designed around your individual needs and preferences.
          </p>
        </div>

        {/* Services grid with images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
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
              </div>
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
