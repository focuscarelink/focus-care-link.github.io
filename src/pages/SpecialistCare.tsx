import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowLeft, Heart } from "lucide-react";
import specialistHero from "@/assets/specialist-care-hero.jpg";

interface ConditionData {
  title: string;
  subtitle: string;
  description: string;
  details: string;
  quote?: string;
}

const conditions: Record<string, ConditionData> = {
  "acquired-brain-injury": {
    title: "Acquired Brain Injury Care",
    subtitle: "Supporting recovery and daily living after brain injury",
    description:
      "Acquired Brain Injury is the result of damage to your brain that may occur at any time during your life. An Acquired Brain Injury can cause different problems which can affect family and social relationships.",
    details:
      "At Focus Care Link we have a specialist team of care workers and registered nurses who understand the emotional, social and physical challenges that a person affected by brain injury — and their relatives — face in managing their daily lives. Our team have had extensive training in providing remarkable and specialist care and support to those affected by brain injury, and to relatives as they adjust to changes brain injuries bring.",
    quote:
      "Brain injury survivors may require more time to think or speak, and it does not mean we have lost our intelligence. It means our brains are recovering — please respect us.",
  },
  "multiple-sclerosis": {
    title: "Multiple Sclerosis Care",
    subtitle: "Specialist support for those living with MS",
    description:
      "Multiple Sclerosis is a disease that affects the central nervous system. The immune system attacks the myelin, the protective layer around the nerve fibres, causing inflammation and lesions. This makes it difficult for the brain to send signals to the rest of the body.",
    details:
      "Since 2004, we have been determined to provide the best quality care services to clients of different ages and social backgrounds living with multiple sclerosis. We offer various services with specialisation in these conditions. Our team of hardworking, determined and trained care workers will understand your needs and provide you with the most suitable care plan.",
    quote:
      "Among the most frustrating complications of multiple sclerosis are disorders that interfere with the ability to speak clearly, including dysarthria, a motor disorder that makes it hard to control the muscles used for speaking.",
  },
  "alzheimers-disease": {
    title: "Alzheimer's Disease Care",
    subtitle: "Compassionate care for memory and cognitive conditions",
    description:
      "Alzheimer's Disease is a type of brain disorder that causes problems with memory, thinking and behaviour. This is a gradually progressive condition that causes a decline in memory, thinking and reasoning skills.",
    details:
      "At Focus Care Link we have a specialist team of care workers and registered nurses who understand the emotional, social and physical challenges that a person affected with Alzheimer's Disease undergoes, and the challenges their relatives face in managing their daily lives. Our team have had extensive training in providing remarkable and specialist care and support.",
    quote:
      "Alzheimer's is associated with genetic, lifestyle and environmental factors that affect the brain cells. Current treatment approaches focus on maintaining mental function, managing behavioural symptoms, and slowing or delaying disease progression.",
  },
  "muscular-dystrophy": {
    title: "Muscular Dystrophy Care",
    subtitle: "Determined support for progressive muscle conditions",
    description:
      "Muscular dystrophy (MD) is a progressive inherited condition which leads to muscle weakness and disability. It results from a change in the genes which control the stability and functioning of muscles. Progressive muscle weakness is one of the main symptoms.",
    details:
      "At Focus Care Link we have a specialist team of care workers and registered nurses who understand the emotional, social and physical challenges that a person affected with Muscular Dystrophy undergoes. We have a specialised care team which includes nurses trained in neurological disease and rehabilitation.",
    quote:
      "Muscular dystrophy is a group of diseases that cause progressive weakness and loss of muscle mass. Abnormal genes interfere with the production of proteins needed to form healthy muscle.",
  },
  "bariatric-care": {
    title: "Bariatric Care",
    subtitle: "Specialist support before and after bariatric surgery",
    description:
      "With a significant proportion of the population being overweight or obese, healthcare professionals must be ready to provide care for patients of size. From recovery support to daily assistance, our team is equipped to help.",
    details:
      "At Focus Care Link we have a specialist team of care workers and registered nurses who can help people having bariatric surgery. Our team have had extensive training in providing remarkable and specialist care and support throughout the surgical journey.",
    quote:
      "Bariatric surgery is done to help you lose excess weight and reduce your risk of potentially life-threatening weight-related health problems, including heart disease, high blood pressure, sleep apnoea, and type 2 diabetes.",
  },
  "neurological-support": {
    title: "Neurological Support",
    subtitle: "Expert care for neurological disorders at every age",
    description:
      "Neurological physiotherapy treatment refers to the treatment for patients suffering from neurological disorders. These disorders primarily affect the brain, spinal cord, and nerves, resulting in loss of movement, sensation, uncoordinated movement, weak muscles, spasm, tremor, and pain.",
    details:
      "Our specialists will provide you with a detailed and best care plan so that you can live life to the fullest. Neuro physiotherapy exercises improve muscle weakness, poor balance and coordination, uncontrolled muscle spasm and tremors, loss of functions, and thereby improve the patient's quality of life.",
    quote:
      "Suffering from a neurological disorder can affect people at any age, but with Focus Care Link's extra support and love you can enjoy life to its fullest.",
  },
  "cancer-care": {
    title: "Compassionate Cancer Care",
    subtitle: "Caring support for those affected by cancer",
    description:
      "Cancer is a group of diseases involving abnormal cell growth with the potential to invade or spread to other parts of the body. Over 100 types of cancers affect humans, and each person's experience is unique.",
    details:
      "At Focus Care Link we have a specialist team of care workers and registered nurses who understand the emotional, social and physical challenges that a person affected with cancer — and their relatives — face in managing their daily lives. Our team have had extensive training in providing remarkable and specialist care and support.",
    quote:
      "You can be a victim of cancer, or a survivor of cancer. It's a mindset. Cancer cannot cripple love, it cannot shatter hope, it cannot conquer the spirit.",
  },
  "parkinsons-care": {
    title: "Parkinson's Care",
    subtitle: "Tailored support for movement disorders",
    description:
      "Parkinson's disease is a chronic and progressive movement disorder that initially causes tremor in one hand, stiffness or slowing of movement. While it cannot be cured, our care team will work with you to help manage the condition.",
    details:
      "Our care team has expertise in treating Parkinson's disease and other movement disorders with the latest therapies, including support with medications and daily activities. We have specially tailored plans according to the needs of our clients.",
    quote:
      "I often say now I don't have any choice whether or not I have Parkinson's, but surrounding that non-choice is a million other choices that I can make. — Michael J. Fox",
  },
  "cerebral-palsy": {
    title: "Cerebral Palsy Care",
    subtitle: "Enabling independence and a full life",
    description:
      "Cerebral palsy (CP) is a group of movement disorders that appear in early childhood. Signs and symptoms vary among people and over time, but include poor coordination, stiff muscles, weak muscles, and tremors. There may be problems with sensation, vision, hearing, and speaking.",
    details:
      "Living with any type of cerebral palsy still means that you or your loved one can live life to the full. We have specialised care workers that will help you and your loved ones to live life to the fullest with personalised care plans tailored to individual needs.",
    quote:
      "Signs and symptoms generally appear during infancy or preschool years and vary greatly between individuals. Disability can be on one side of the body or affect the whole body.",
  },
  "spinal-cord-injury": {
    title: "Spinal Cord Injury Care",
    subtitle: "Supporting recovery and adaptation after spinal injuries",
    description:
      "A spinal cord injury — damage to any part of the spinal cord or nerves at the end of the spinal canal — often causes permanent changes in strength, sensation and other body functions below the site of the injury.",
    details:
      "At Focus Care Link we have a specialist team of care workers and registered nurses who understand the emotional, social and physical challenges that a person affected with spinal cord injury undergoes. Our team have had extensive training in providing remarkable and specialist care and support.",
    quote:
      "The effects of spinal cord injury depend on the site and severity. Common symptoms include problems walking, weakness, loss of bladder or bowel control, and feelings of spreading numbness or tingling.",
  },
  "downs-syndrome": {
    title: "Down's Syndrome Care",
    subtitle: "Supporting development, independence and wellbeing",
    description:
      "Down's Syndrome is a genetic disorder associated with physical growth delays, characteristic facial features and mild to moderate developmental and intellectual disability. It is caused by the presence of a full or partial extra copy of chromosome 21.",
    details:
      "At Focus Care Link we have a specialist team of care workers and registered nurses who understand the emotional, social and physical challenges that a person affected with Down's Syndrome undergoes. Our team have had extensive training in providing remarkable and specialist care and support.",
    quote:
      "A variety of therapies can be used in early intervention programmes and throughout a person's life to promote the greatest possible development, independence, and productivity.",
  },
  "stroke-care": {
    title: "Stroke Care",
    subtitle: "Expert rehabilitation and daily living support",
    description:
      "A stroke occurs when the supply of blood to the brain is reduced or blocked completely, which prevents brain tissue from getting oxygen and nutrients. Treatment is based on the type of stroke.",
    details:
      "At Focus Care Link we have a specialist team of care workers and registered nurses who understand the emotional, social and physical challenges that a person affected by stroke undergoes. Our team have had extensive training in providing remarkable and specialist care and support to those recovering from stroke.",
    quote:
      "As different parts of the brain control different parts of the body, symptoms will depend on the part of brain affected and the extent of damage. Main symptoms include paralysis, confusion, and trouble seeing.",
  },
  "huntingtons-disease": {
    title: "Huntington's Disease Care",
    subtitle: "Compassionate, person-centred support",
    description:
      "We believe that through a compassionate and person-centred approach we can help individuals living with Huntington's disease to rebuild their lives and strengthen social relationships.",
    details:
      "Being diagnosed with Huntington's disease could come with huge distress. As a degenerative and incurable condition, it can present mental, physical, social and psychological challenges for those who have been diagnosed and their relatives. Our team have had extensive training in providing remarkable and specialist care and support.",
    quote:
      "Huntington's disease causes movement, cognitive, and psychiatric disorders. Movement disorders include chorea (involuntary jerking movements), tremors, and rigidity of muscles.",
  },
  "support-for-the-blind": {
    title: "Support for the Blind",
    subtitle: "Specialist care for visual impairments of all types",
    description:
      "We aim to provide the best support for people who are partially or completely blind. According to statistics, there are about two million people suffering from sight loss — mostly senior citizens aged above 50.",
    details:
      "At Focus Care Link, we have a specialist team of staff with many years' experience to provide the right level of support and assistance for blind people and those with partial and severe sight impairments of all ages. We understand that visual impairment presents a challenge for independent daily living, but this does not mean you should leave the comfort of your home. We believe that with extra support and assistance, people who are blind and visually impaired can live confidently and happily.",
  },
  "knee-hip-replacement": {
    title: "Knee & Hip Replacement Aftercare",
    subtitle: "Specialist recovery support after joint surgery",
    description:
      "Knee and hip replacement surgery may require some time to completely heal. During recovery you may be inactive and experiencing pain, and need dedicated care support.",
    details:
      "At Focus Care Link we have a specialist team of care workers and registered nurses who understand your difficulties during recovery. Our team have had extensive training in providing remarkable and specialist care and support to those recovering from joint replacement surgery.",
    quote:
      "Hip replacement and knee replacement surgeries are surgical procedures in which a doctor removes a painful joint damaged by arthritis and replaces it with an artificial joint.",
  },
  "support-for-the-deaf": {
    title: "Support for the Deaf",
    subtitle: "Inclusive care and communication support",
    description:
      "Deaf assistance includes deaf culture and awareness, communication techniques, assistive listening devices and other rehabilitation technology, interpreter services, referrals and assistance to obtain services from specialised agencies.",
    details:
      "At Focus Care Link we have a specialist team of care workers and registered nurses who understand the emotional, social and physical challenges. Our team have had extensive training in providing remarkable and specialist care and support to these individuals. Contact us and we will be happy to help.",
    quote: "Kindness is the language the deaf can hear and the blind can see.",
  },
  "locked-in-syndrome": {
    title: "Locked-in Syndrome Care",
    subtitle: "Innovative support to maintain quality of life",
    description:
      "Suffering from locked-in syndrome means you may be confined and unable to express your feelings. But with Focus Care Link's innovative support at home you can maintain quality of life.",
    details:
      "At Focus Care Link we have a specialist team of care workers and registered nurses who understand the emotional, social and physical challenges that a person affected with locked-in syndrome suffers. We present specially tailored care plans designed for your specific needs.",
    quote:
      "Sometimes locked-in syndrome may signify an underlying health condition such as traumatic brain injury or subarachnoid haemorrhage.",
  },
  "ventilator-care": {
    title: "Ventilator Care",
    subtitle: "Expert respiratory support at home",
    description:
      "With teamwork and knowledge of care goals and interventions based on best practices, caring for a patient on mechanical ventilation achieves better outcomes and response to therapy.",
    details:
      "Our team of healthcare assistants and registered nurses work with and receive further training from clinicians who are respiratory care experts to provide sensitive support at every step. Our clinical team will collaborate with your existing personal and professional network to ensure we are enabling you to achieve better outcomes. Our nursing-led team adopt unique approaches, training the competencies required for your needs.",
  },
  "clinical-support": {
    title: "Clinical Support",
    subtitle: "Professional clinical care and patient support",
    description:
      "Clinical support workers help deliver patient care. They work with a team or individual to take on tasks such as welcoming patients, explaining treatment and updating patient records.",
    details:
      "You will still be able to progress in clinical support. You will be encouraged to take qualifications and increase your knowledge. Clinical decision support improves patient outcomes and leads to higher-quality health care.",
    quote: "Clinical decision support improves patient outcomes and leads to higher-quality health care.",
  },
  "clinical-case-management": {
    title: "Clinical Case Management",
    subtitle: "Comprehensive care strategy and coordination",
    description:
      "Clinical case management is a modality of practice that addresses the overall function and maintenance of biological and psychological factors. It involves special training and skills for coordinating complex care needs.",
    details:
      "We're dedicated to determining and implementing a robust continuing care strategy plan that maximises clients' independence and improves their quality of life. We undertake joint reviews and monitoring of these plans and the quality of services provided on a regular basis, agreeing improvements and undertaking actions to ensure that clients receive the best of care and health outcomes.",
  },
};

const SpecialistCare = () => {
  const { condition } = useParams<{ condition: string }>();
  const data = condition ? conditions[condition] : null;

  if (!data) {
    return (
      <Layout>
        <section className="py-20 text-center">
          <div className="container">
            <h1 className="font-display text-display-md text-foreground mb-4">
              Specialist Care Service Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The specialist care page you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/specialist-care">View All Specialist Services</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <img src={specialistHero} alt={data.title} className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Breadcrumb currentPage={data.title} />
            <Link
              to="/specialist-care"
              className="inline-flex items-center gap-2 text-background/70 hover:text-background mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Specialist Services
            </Link>
            <h1 className="font-display text-display-lg text-background mb-4">
              {data.title}
            </h1>
            <p className="text-background/80 text-body-lg">{data.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Understanding the Condition
                </h2>
                <p className="text-muted-foreground text-body-lg leading-relaxed">
                  {data.description}
                </p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  How We Can Help
                </h2>
                <p className="text-muted-foreground text-body-lg leading-relaxed">
                  {data.details}
                </p>
              </div>
            </div>

            {data.quote && (
              <blockquote className="mt-12 p-8 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                <p className="text-foreground italic text-body-lg leading-relaxed">
                  "{data.quote}"
                </p>
              </blockquote>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-warm">
        <div className="container text-center">
          <h2 className="font-display text-display-sm text-foreground mb-4">
            Get in Touch With Our Specialist Team
          </h2>
          <p className="text-muted-foreground text-body-lg mb-8 max-w-2xl mx-auto">
            We will be happy to discuss your care needs and create a personalised care plan for you or your loved one.
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
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Request a Call Back</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SpecialistCare;
