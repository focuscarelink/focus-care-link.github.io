import { Shield, Award, Heart, Users, Clock, Leaf } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Ubuntu Philosophy",
    description: "Guided by 'I am because we are' — our care prioritizes compassion, humanity, and connection above all.",
  },
  {
    icon: Shield,
    title: "CQC Registered",
    description: "Fully registered and regulated by the Care Quality Commission, ensuring the highest standards of care.",
  },
  {
    icon: Users,
    title: "Cultural Sensitivity",
    description: "Our multilingual team respects cultural and religious needs, with language support where English is a second language.",
  },
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Established in 2004, our management team brings over 40 years of combined care experience.",
  },
  {
    icon: Clock,
    title: "Flexible Care Packages",
    description: "From a few hours weekly to 24/7 live-in care — tailored solutions that adapt to changing needs.",
  },
  {
    icon: Leaf,
    title: "Independence & Dignity",
    description: "We help service users maintain their independence while living safely and comfortably at home.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            People Over Profit, Always
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Focus Care Link was born from a desire to help the vulnerable by providing 
            care that treats every individual with dignity and respect.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="flex gap-4"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
