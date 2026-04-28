import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ArrowRight, CheckCircle2, MessageCircle, Pill, Quote, Star, Utensils, Car } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import servicesHeroImage from "@/assets/services-hero.jpg";
import { additionalServices, coreServices, faqs, testimonials } from "@/data/serviceData";

const iconMap = {
  "Medication Management": Pill,
  "Meal Preparation": Utensils,
  "Escort & Appointments": Car,
  Companionship: MessageCircle,
};

const Services = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden py-20 hero-gradient">
        <div className="absolute inset-0 z-0">
          <img
            src={servicesHeroImage}
            alt="Happy care professionals supporting people at home"
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Breadcrumb currentPage="Our Services" />
            <span className="mb-6 inline-block rounded-full bg-background/10 px-4 py-2 text-sm font-medium text-background backdrop-blur-sm">
              Our Services
            </span>
            <h1 className="mb-6 font-display text-display-lg text-background">
              Tailored Care for Every Need
            </h1>
            <p className="text-body-xl leading-relaxed text-background/90">
              From a few hours a week to 24/7 live-in support, we deliver personalised care packages designed around each person’s needs, routines, and preferences.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="mb-4 block text-sm font-semibold uppercase tracking-wide text-primary">
                Core Services
              </span>
              <h2 className="mb-4 font-display text-display-md text-foreground">
                Explore Our Main Care Services
              </h2>
              <p className="text-body-lg text-muted-foreground">
                Every service has its own dedicated page so families can explore the right support in more depth before getting in touch.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 rounded-2xl bg-secondary p-4 text-center shadow-card sm:grid-cols-3">
              {[
                { value: "6", label: "core services" },
                { value: "2", label: "London branches" },
                { value: "25+", label: "years of care" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            {coreServices.map((service, index) => (
              <div key={service.slug} id={service.id} className="scroll-mt-32">
                <div className="mb-10 overflow-hidden rounded-2xl shadow-elevated">
                  <img src={service.image} alt={service.title} className="h-64 w-full object-cover md:h-80" />
                </div>

                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 shadow-card transition-transform duration-300 hover:-translate-y-1">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="mb-4 font-display text-display-md text-foreground">{service.title}</h2>
                    <p className="mb-4 text-body-lg leading-relaxed text-muted-foreground">{service.description}</p>
                    <p className="mb-8 leading-relaxed text-muted-foreground">{service.intro}</p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Button asChild size="lg" className="font-semibold shadow-soft">
                        <Link to={`/services/${service.slug}`}>
                          View Service Page
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="border-primary/20 bg-background hover:bg-secondary">
                        <Link to="/contact">Request A Care Service</Link>
                      </Button>
                    </div>
                  </div>

                  <div className={`rounded-2xl bg-secondary p-8 shadow-card ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="mb-6 font-semibold text-foreground">What’s included:</h3>
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

                {index < coreServices.length - 1 && <div className="mt-16 border-b border-border" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-warm py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-display-md text-foreground">Additional Support Services</h2>
            <p className="text-body-lg text-muted-foreground">Complementary services that strengthen each care package</p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {additionalServices.filter((service) => service.image).map((service) => {
              const Icon = iconMap[service.name as keyof typeof iconMap];
              return (
                <div key={service.name} className="overflow-hidden rounded-2xl bg-card shadow-elevated transition-transform duration-300 hover:-translate-y-1">
                  <img src={service.image} alt={service.name} className="h-48 w-full object-cover" />
                  <div className="bg-card p-6">
                    <div className="mb-2 flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">{service.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
            {additionalServices.map((service) => {
              const Icon = iconMap[service.name as keyof typeof iconMap];
              return (
                <div key={service.name} className="trust-card text-center hover:-translate-y-1">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{service.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="mb-4 block text-sm font-semibold uppercase tracking-wide text-primary">What families say</span>
              <h2 className="mb-4 font-display text-display-md text-foreground">Trusted, warm, and responsive care</h2>
              <p className="mb-8 text-body-lg text-muted-foreground">
                Families need reassurance as well as practical support. These examples highlight the trust, reliability, and kindness people expect from us.
              </p>

              <div className="relative pr-0 md:pr-16">
                <Carousel opts={{ loop: true, align: "start" }} className="w-full">
                  <CarouselContent>
                    {testimonials.map((testimonial) => (
                      <CarouselItem key={testimonial.name}>
                        <div className="trust-card min-h-[260px]">
                          <div className="mb-6 flex items-center justify-between">
                            <div className="flex items-center gap-1 text-sunshine">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current" />
                              ))}
                            </div>
                            <Quote className="h-8 w-8 text-primary/20" />
                          </div>
                          <p className="mb-6 text-body-lg leading-relaxed text-foreground">“{testimonial.quote}”</p>
                          <p className="font-semibold text-primary">{testimonial.name}</p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-auto right-12 top-auto bottom-[-3.5rem] border-primary/20 bg-background text-primary hover:bg-secondary md:right-16" />
                  <CarouselNext className="right-0 top-auto bottom-[-3.5rem] border-primary/20 bg-background text-primary hover:bg-secondary" />
                </Carousel>
              </div>
            </div>

            <div>
              <span className="mb-4 block text-sm font-semibold uppercase tracking-wide text-primary">Frequently asked questions</span>
              <h2 className="mb-4 font-display text-display-md text-foreground">Helpful answers before you enquire</h2>
              <p className="mb-8 text-body-lg text-muted-foreground">
                A clear, responsive service builds trust. Here are some common questions families ask when arranging support.
              </p>
              <div className="rounded-2xl bg-secondary p-6 shadow-card">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq) => (
                    <AccordionItem key={faq.question} value={faq.question} className="border-border/70">
                      <AccordionTrigger className="text-left text-base text-foreground hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20">
        <div className="container text-center">
          <h2 className="mb-6 font-display text-display-md text-primary-foreground">Ready to discuss your care needs?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-body-xl text-primary-foreground/85">
            Our team is here to help create a personalised care package that works for you and your family.
          </p>
          <Button asChild size="lg" className="cta-gradient border-0 px-8 text-lg font-semibold text-accent-foreground h-14 shadow-soft">
            <Link to="/contact">
              Request A Care Service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
