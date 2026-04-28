import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/serviceData";

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-wide text-primary">
            Family feedback
          </span>
          <h2 className="mb-4 font-display text-display-md text-foreground">
            Trusted care that feels personal
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Families look for warmth, reliability, and consistent communication. These words reflect the trust we work hard to earn.
          </p>
        </div>

        <div className="relative pr-0 md:pr-20">
          <Carousel opts={{ loop: true, align: "start" }} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.name} className="md:basis-1/2 xl:basis-1/3">
                  <div className="trust-card flex h-full flex-col justify-between min-h-[270px]">
                    <div>
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sunshine">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star key={index} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <Quote className="h-8 w-8 text-primary/20" />
                      </div>
                      <p className="text-body-lg leading-relaxed text-foreground">“{testimonial.quote}”</p>
                    </div>
                    <p className="mt-6 font-semibold text-primary">{testimonial.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-auto right-12 top-auto bottom-[-3.5rem] border-primary/20 bg-background text-primary hover:bg-secondary md:right-16" />
            <CarouselNext className="right-0 top-auto bottom-[-3.5rem] border-primary/20 bg-background text-primary hover:bg-secondary" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
