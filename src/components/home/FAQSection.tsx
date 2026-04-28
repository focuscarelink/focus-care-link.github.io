import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data/serviceData";

export function FAQSection() {
  return (
    <section className="section-warm py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="mb-4 block text-sm font-semibold uppercase tracking-wide text-primary">
              Helpful answers
            </span>
            <h2 className="mb-4 font-display text-display-md text-foreground">
              Questions families often ask
            </h2>
            <p className="mb-8 text-body-lg text-muted-foreground">
              Clear information helps people feel confident about the next step. Here are some of the questions we hear most often.
            </p>
            <Button asChild size="lg" className="font-semibold shadow-soft">
              <Link to="/contact">
                Request A Care Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="rounded-2xl bg-card p-6 shadow-elevated">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question} className="border-border/70">
                  <AccordionTrigger className="text-left text-base text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
