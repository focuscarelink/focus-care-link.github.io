import { Layout } from "@/components/layout/Layout";
import { Link, Navigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { coreServices, getCoreServiceBySlug } from "@/data/serviceData";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getCoreServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = coreServices.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <Layout>
      <section className="relative overflow-hidden py-20 hero-gradient">
        <div className="absolute inset-0 z-0">
          <img src={service.heroImage} alt={service.title} className="h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Breadcrumb currentPage={service.shortTitle} />
            <span className="mb-6 inline-block rounded-full bg-background/10 px-4 py-2 text-sm font-medium text-background backdrop-blur-sm">
              Service Detail
            </span>
            <h1 className="mb-6 font-display text-display-lg text-background">{service.title}</h1>
            <p className="text-body-xl leading-relaxed text-background/90">{service.longDescription}</p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <span className="mb-4 block text-sm font-semibold uppercase tracking-wide text-primary">How we help</span>
              <h2 className="mb-4 font-display text-display-md text-foreground">Support shaped around the person</h2>
              <p className="mb-6 text-body-lg leading-relaxed text-muted-foreground">{service.intro}</p>
              <p className="mb-10 leading-relaxed text-muted-foreground">{service.longDescription}</p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {service.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-2xl bg-secondary p-5 shadow-card">
                    <p className="font-medium text-foreground">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-card shadow-elevated">
              <img src={service.image} alt={service.title} className="h-72 w-full object-cover" />
              <div className="p-8">
                <h3 className="mb-5 font-display text-2xl text-foreground">What’s included</h3>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-warm py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-wide text-primary">Related services</span>
            <h2 className="mb-4 font-display text-display-md text-foreground">Explore other care options</h2>
            <p className="text-body-lg text-muted-foreground">Many families combine services or move between them as needs change.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {relatedServices.map((item) => (
              <Link key={item.slug} to={`/services/${item.slug}`} className="overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                <img src={item.image} alt={item.title} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <h3 className="mb-3 font-display text-xl text-foreground">{item.shortTitle}</h3>
                  <p className="mb-4 text-muted-foreground">{item.description}</p>
                  <span className="inline-flex items-center font-medium text-primary">
                    View service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20">
        <div className="container text-center">
          <h2 className="mb-6 font-display text-display-md text-primary-foreground">Talk to our team about {service.shortTitle.toLowerCase()}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-xl text-primary-foreground/85">
            We can help you understand the options available and build a personalised care plan around your situation.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="cta-gradient border-0 px-8 font-semibold text-accent-foreground shadow-soft">
              <Link to="/contact">
                Request A Care Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-background/30 bg-background/10 font-semibold text-background hover:bg-background/20 hover:text-background">
              <Link to="/services">Back to all services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
