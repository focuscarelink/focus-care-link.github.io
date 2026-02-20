import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Link } from "react-router-dom";
import { 
  Brain, Heart, Eye, Ear, Activity, Stethoscope, 
  Accessibility, Bone, Wind, Users, Shield, Sparkles 
} from "lucide-react";
import specialistHero from "@/assets/specialist-care-hero.jpg";

const specialistServices = [
  { name: "Acquired Brain Injury", slug: "acquired-brain-injury", icon: Brain, description: "Supporting recovery after brain injury" },
  { name: "Multiple Sclerosis", slug: "multiple-sclerosis", icon: Activity, description: "Specialist MS care and support" },
  { name: "Alzheimer's Disease", slug: "alzheimers-disease", icon: Brain, description: "Memory and cognitive care" },
  { name: "Muscular Dystrophy", slug: "muscular-dystrophy", icon: Activity, description: "Progressive muscle condition support" },
  { name: "Bariatric Care", slug: "bariatric-care", icon: Heart, description: "Pre and post-surgery support" },
  { name: "Neurological Support", slug: "neurological-support", icon: Brain, description: "Expert neurological care" },
  { name: "Cancer Care", slug: "cancer-care", icon: Heart, description: "Compassionate cancer support" },
  { name: "Parkinson's Care", slug: "parkinsons-care", icon: Activity, description: "Movement disorder support" },
  { name: "Cerebral Palsy", slug: "cerebral-palsy", icon: Accessibility, description: "Enabling independence" },
  { name: "Spinal Cord Injury", slug: "spinal-cord-injury", icon: Bone, description: "Recovery and adaptation support" },
  { name: "Down's Syndrome", slug: "downs-syndrome", icon: Heart, description: "Development and wellbeing" },
  { name: "Stroke Care", slug: "stroke-care", icon: Brain, description: "Rehabilitation and daily support" },
  { name: "Huntington's Disease", slug: "huntingtons-disease", icon: Activity, description: "Person-centred support" },
  { name: "Support for the Blind", slug: "support-for-the-blind", icon: Eye, description: "Visual impairment care" },
  { name: "Knee & Hip Replacement", slug: "knee-hip-replacement", icon: Bone, description: "Post-surgery aftercare" },
  { name: "Support for the Deaf", slug: "support-for-the-deaf", icon: Ear, description: "Communication and daily support" },
  { name: "Locked-in Syndrome", slug: "locked-in-syndrome", icon: Shield, description: "Innovative home support" },
  { name: "Ventilator Care", slug: "ventilator-care", icon: Wind, description: "Respiratory care at home" },
  { name: "Clinical Support", slug: "clinical-support", icon: Stethoscope, description: "Professional clinical care" },
  { name: "Clinical Case Management", slug: "clinical-case-management", icon: Users, description: "Care strategy coordination" },
];

const SpecialistCareIndex = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <img src={specialistHero} alt="Specialist Care Services" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Breadcrumb currentPage="Specialist Care" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-background" />
              </div>
              <span className="text-background/80 font-medium">Condition-Led Care</span>
            </div>
            <h1 className="font-display text-display-lg text-background mb-4">
              Specialist Care Services
            </h1>
            <p className="text-background/80 text-body-lg">
              We provide specialist domiciliary care for a wide range of conditions. Our trained care workers 
              and registered nurses deliver personalised support tailored to each individual's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {specialistServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  to={`/specialist-care/${service.slug}`}
                  className="group p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-soft transition-all bg-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 section-warm">
        <div className="container text-center">
          <p className="text-muted-foreground mb-4">
            Don't see the condition you need support with? We may still be able to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Contact us to discuss your care needs
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SpecialistCareIndex;
