import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Users, 
  Home, 
  Clock, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Pill,
  Utensils,
  Car,
  MessageCircle
} from "lucide-react";

const services = [
  {
    id: "personal-care",
    icon: Heart,
    title: "Personal Care",
    description: "Dignified support with daily living activities, maintaining independence and comfort in the familiar surroundings of home.",
    features: [
      "Bathing and personal hygiene assistance",
      "Dressing and grooming support",
      "Continence care",
      "Mobility assistance",
      "Pressure area care",
      "Oral hygiene support",
    ],
  },
  {
    id: "dementia",
    icon: Brain,
    title: "Dementia Care",
    description: "Specialized, person-centred care for those living with dementia, delivered with patience, understanding, and compassion.",
    features: [
      "Memory-stimulating activities",
      "Safe environment management",
      "Routine and structure support",
      "Family liaison and updates",
      "Behavioral support strategies",
      "Dignified end-of-life care",
    ],
  },
  {
    id: "learning-disabilities",
    icon: Users,
    title: "Learning Disabilities",
    description: "Tailored support programmes for individuals with moderate to profound learning disabilities, promoting independence and inclusion.",
    features: [
      "Person-centred planning",
      "Skills development activities",
      "Community participation support",
      "Behavioural support",
      "Health monitoring",
      "Family involvement",
    ],
  },
  {
    id: "mental-health",
    icon: Sparkles,
    title: "Mental Health Support",
    description: "Compassionate support for those experiencing mild to moderate mental health conditions, supporting recovery and wellbeing.",
    features: [
      "Emotional support and companionship",
      "Routine establishment",
      "Medication prompting",
      "Crisis support planning",
      "Social inclusion activities",
      "Recovery-focused care",
    ],
  },
  {
    id: "live-in",
    icon: Home,
    title: "Live-in Care",
    description: "24/7 around-the-clock support enabling you to remain in the comfort and familiarity of your own home.",
    features: [
      "Continuous companionship",
      "Night-time support",
      "Meal preparation",
      "Household management",
      "Emergency response",
      "Family respite",
    ],
  },
  {
    id: "respite",
    icon: Clock,
    title: "Respite Care",
    description: "Flexible short-term care providing essential breaks for family caregivers while ensuring continuity of care.",
    features: [
      "Planned breaks for carers",
      "Emergency cover",
      "Holiday care",
      "Post-hospital support",
      "Seamless transition",
      "Full care continuity",
    ],
  },
];

const additionalServices = [
  { icon: Pill, name: "Medication Management" },
  { icon: Utensils, name: "Meal Preparation" },
  { icon: Car, name: "Escort & Appointments" },
  { icon: MessageCircle, name: "Companionship" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero section */}
      <section className="py-20 hero-gradient">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full text-background text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="font-display text-display-lg text-background mb-6">
              Tailored Care for Every Need
            </h1>
            <p className="text-body-xl text-background/90 leading-relaxed">
              From a few hours a week to 24/7 live-in support, we deliver personalized 
              care packages designed around your unique requirements and preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-display text-display-md text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-body-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <Button asChild size="lg" className="font-semibold">
                      <Link to="/contact">
                        Enquire About This Service
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>

                  {/* Features */}
                  <div className={`bg-secondary rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="font-semibold text-foreground mb-6">What's included:</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <div className="border-b border-border mt-16" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section className="py-16 section-warm">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-md text-foreground mb-4">
              Additional Support Services
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Complementary services that enhance your care package
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {additionalServices.map((service) => (
              <div key={service.name} className="trust-card text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-foreground">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="font-display text-display-md text-primary-foreground mb-6">
            Ready to Discuss Your Care Needs?
          </h2>
          <p className="text-body-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our team is here to help create a personalized care package that works for you.
          </p>
          <Button asChild size="lg" className="cta-gradient border-0 text-accent-foreground font-semibold text-lg h-14 px-8">
            <Link to="/contact">
              Request Free Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
