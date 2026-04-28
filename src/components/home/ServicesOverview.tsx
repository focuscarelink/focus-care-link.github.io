import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { coreServices } from "@/data/serviceData";

const services = coreServices.slice(0, 3).map((service) => ({
  image: service.image,
  title: service.shortTitle,
  description: service.description,
  href: `/services/${service.slug}`,
}));

export function ServicesOverview() {
  return (
    <section className="section-warm py-20">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-wide text-primary">
            Our Services
          </span>
          <h2 className="mb-6 font-display text-display-md text-foreground">
            Tailored Care for Every Need
          </h2>
          <p className="text-body-lg text-muted-foreground">
            From a few hours a week to full-time 24/7 support, we deliver personalised care packages designed around individual needs and preferences.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 text-muted-foreground leading-relaxed">{service.description}</p>
                <span className="inline-flex items-center font-medium text-primary transition-all group-hover:gap-2">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="h-14 px-8 text-lg font-semibold shadow-soft">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
