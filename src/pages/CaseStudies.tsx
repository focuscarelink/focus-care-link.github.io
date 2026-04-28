import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Link } from "react-router-dom";
import { Phone, Mail, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import caseStudiesHero from "@/assets/case-studies-hero.jpg";

const caseStudies = [
  {
    title: "Super Care",
    summary:
      "The care worker contacted the office to report that Mr C struggles at lunch time and cannot be bothered to have lunch. Concerned about this, the care worker contacted the co-ordinator who quickly made a referral — with the service user's permission — to social services to ask if a lunch call could be provided to ensure a nutritious diet.",
    outcome:
      "On receipt of confirmation from Social Services to increase the package, the same care worker continued to support Mr C with the lunch calls. Whenever a care worker informs our office that the service user's needs have changed, we follow up with a planned visit from our Manager or Supervisor plus a family member to re-assess needs.",
  },
  {
    title: "Care for the Blind",
    summary:
      "Mr W is registered blind, has reduced mobility, is speech impaired, uses a voice dictation machine to communicate, and is reliant on two care workers to support with daily living tasks. He lives with a supportive wife.",
    outcome:
      "During our annual assessments, Mrs W advised that her husband's health needs had increased and she needed respite. The Manager assisted with contacting Social Services, and a referral was made for respite. A sitting service was provided to enable Mrs W to take time out for three hours a week. This respite prevented any risk of carer breakdown.",
  },
  {
    title: "Determined Care",
    summary:
      "Ms Mc has a colostomy bag and needs assistance to manage the bag, plus all aspects of personal care. She finds it distressing to have different people attending to her due to scars on her body. She requested that a maximum of two to three care workers support her.",
    outcome:
      "Taking into account the service user's preference and choice, we ensured three dedicated care workers were allocated. Care workers were trained by a colostomy nurse to manage colostomy bags. On days Ms Mc does not feel like getting up, care workers carry out other home hygiene tasks, respecting her wishes.",
  },
  {
    title: "Complex Care",
    summary:
      "Mr SJ is a 43-year-old male who was employed as a builder but fell from scaffolding and sustained T7 spinal injuries, leaving him paralysed from the neck down. He has a tracheostomy, is doubly incontinent, and requires specialist equipment including a nippy ventilator, hoist, shower chair, specialist profiling bed, and PEG machine.",
    outcome:
      "Before discharge from the specialist nursing home, areas of training were highlighted and addressed. A team of care workers was assigned to train alongside the staff who had been supporting him. Care workers were trained in suction procedures, PEG machine operation, medication administration, and all specialist equipment — always maintaining his dignity, choices, and personalised care.",
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <img src={caseStudiesHero} alt="Case Studies" className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Breadcrumb currentPage="Case Studies" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-background" />
              </div>
              <span className="text-background/80 font-medium">Our Stories</span>
            </div>
            <h1 className="font-display text-display-lg text-background mb-4">
              Case Studies
            </h1>
            <p className="text-background/80 text-body-lg">
              Real stories that demonstrate our commitment to delivering exceptional, personalised care. 
              These case studies showcase how our team goes above and beyond for every client.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="p-8 rounded-2xl border border-border bg-card hover:shadow-soft transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </span>
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    {study.title}
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">The Situation</h3>
                    <p className="text-muted-foreground leading-relaxed">{study.summary}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Our Response</h3>
                    <p className="text-muted-foreground leading-relaxed">{study.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-warm">
        <div className="container text-center">
          <h2 className="font-display text-display-sm text-foreground mb-4">
            Experience Our Compassionate Care
          </h2>
          <p className="text-muted-foreground text-body-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our specialist team and we will be happy to help.
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

export default CaseStudies;
