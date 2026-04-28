import { Heart, Brain, Users, Home, Clock, Sparkles, type LucideIcon, Pill, Utensils, Car, MessageCircle } from "lucide-react";

import personalCareImage from "@/assets/services-personal-care.jpg";
import dementiaCareImage from "@/assets/service-dementia-detail.jpg";
import learningDisabilityImage from "@/assets/service-learning-detail.jpg";
import mentalHealthImage from "@/assets/service-mental-health.jpg";
import liveInImage from "@/assets/service-live-in.jpg";
import respiteImage from "@/assets/service-respite.jpg";
import medicationImage from "@/assets/service-medication.jpg";
import companionshipImage from "@/assets/service-companionship.jpg";

export type ServiceRecord = {
  slug: string;
  id: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  description: string;
  longDescription: string;
  image: string;
  heroImage: string;
  intro: string;
  features: string[];
  outcomes: string[];
};

export const coreServices: ServiceRecord[] = [
  {
    slug: "personal-care",
    id: "personal-care",
    title: "Personal Care",
    shortTitle: "Personal Care",
    icon: Heart,
    description: "Dignified support with daily living activities, maintaining independence and comfort in the familiar surroundings of home.",
    longDescription: "Our personal care service is built around dignity, privacy, and consistency. We support people with the everyday routines that help them feel comfortable, safe, and confident at home, while always respecting personal preferences and established routines.",
    image: personalCareImage,
    heroImage: personalCareImage,
    intro: "Whether support is needed once a day or several times throughout the week, our carers provide kind, discreet assistance that fits naturally into daily life.",
    features: [
      "Bathing and personal hygiene assistance",
      "Dressing and grooming support",
      "Continence care",
      "Mobility assistance",
      "Pressure area care",
      "Oral hygiene support",
    ],
    outcomes: [
      "Greater comfort at home",
      "Support delivered with dignity and sensitivity",
      "Improved confidence with daily routines",
    ],
  },
  {
    slug: "dementia-care",
    id: "dementia",
    title: "Dementia Care",
    shortTitle: "Dementia Care",
    icon: Brain,
    description: "Specialised, person-centred care for those living with dementia, delivered with patience, understanding, and compassion.",
    longDescription: "We provide calm, reassuring support for people living with dementia, helping to maintain routines, reduce distress, and preserve familiarity. Our carers focus on the individual rather than just the diagnosis.",
    image: dementiaCareImage,
    heroImage: dementiaCareImage,
    intro: "Our dementia care plans are tailored around life history, preferences, routines, and what matters most to the individual and their family.",
    features: [
      "Memory-stimulating activities",
      "Safe environment management",
      "Routine and structure support",
      "Family liaison and updates",
      "Behavioural support strategies",
      "Dignified end-of-life care",
    ],
    outcomes: [
      "Reduced anxiety through consistency",
      "More meaningful day-to-day engagement",
      "Support for families and loved ones",
    ],
  },
  {
    slug: "learning-disabilities",
    id: "learning-disabilities",
    title: "Learning Disabilities Support",
    shortTitle: "Learning Disabilities",
    icon: Users,
    description: "Tailored support programmes for individuals with moderate to profound learning disabilities, promoting independence and inclusion.",
    longDescription: "Our learning disability support is person-led, strengths-based, and designed to help each individual participate confidently in daily life, relationships, learning, and the wider community.",
    image: learningDisabilityImage,
    heroImage: learningDisabilityImage,
    intro: "We work closely with service users, families, and professionals to build routines and opportunities that encourage independence and wellbeing.",
    features: [
      "Person-centred planning",
      "Skills development activities",
      "Community participation support",
      "Behavioural support",
      "Health monitoring",
      "Family involvement",
    ],
    outcomes: [
      "More confident independent living",
      "Improved social participation",
      "Tailored routines that reflect individual goals",
    ],
  },
  {
    slug: "mental-health-support",
    id: "mental-health",
    title: "Mental Health Support",
    shortTitle: "Mental Health Support",
    icon: Sparkles,
    description: "Compassionate support for those experiencing mild to moderate mental health conditions, supporting recovery and wellbeing.",
    longDescription: "We offer practical and emotional support for people managing mental health challenges, helping them build structure, reconnect with daily life, and feel supported without judgement.",
    image: mentalHealthImage,
    heroImage: mentalHealthImage,
    intro: "Support can include routine-building, companionship, medication prompting, and encouragement to stay engaged with the things that matter most.",
    features: [
      "Emotional support and companionship",
      "Routine establishment",
      "Medication prompting",
      "Crisis support planning",
      "Social inclusion activities",
      "Recovery-focused care",
    ],
    outcomes: [
      "Improved stability and confidence",
      "Reduced isolation",
      "Practical support for recovery and wellbeing",
    ],
  },
  {
    slug: "live-in-care",
    id: "live-in",
    title: "Live-in Care",
    shortTitle: "Live-in Care",
    icon: Home,
    description: "24/7 around-the-clock support enabling you to remain in the comfort and familiarity of your own home.",
    longDescription: "Our live-in care service provides continuous one-to-one support for people who want to stay in their own home while receiving dedicated help with personal care, household tasks, companionship, and daily routines.",
    image: liveInImage,
    heroImage: liveInImage,
    intro: "This service is ideal for people who need more regular support but want the reassurance, familiarity, and independence that home provides.",
    features: [
      "Continuous companionship",
      "Night-time support",
      "Meal preparation",
      "Household management",
      "Emergency response",
      "Family respite",
    ],
    outcomes: [
      "24/7 reassurance at home",
      "Continuity with a trusted carer",
      "Reduced disruption compared with residential moves",
    ],
  },
  {
    slug: "respite-care",
    id: "respite",
    title: "Respite Care",
    shortTitle: "Respite Care",
    icon: Clock,
    description: "Flexible short-term care providing essential breaks for family caregivers while ensuring continuity of care.",
    longDescription: "Our respite care service gives family carers the time they need to rest, travel, or manage other commitments, with confidence that their loved one will receive thoughtful and reliable support.",
    image: respiteImage,
    heroImage: respiteImage,
    intro: "We can provide planned short-term cover, emergency support, or transitional care after a hospital stay, all shaped around existing routines and needs.",
    features: [
      "Planned breaks for carers",
      "Emergency cover",
      "Holiday care",
      "Post-hospital support",
      "Seamless transition",
      "Full care continuity",
    ],
    outcomes: [
      "Reliable cover for families",
      "Smooth transitions without unnecessary stress",
      "Flexible short-term support when it is needed most",
    ],
  },
];

export const additionalServices = [
  { icon: Pill, name: "Medication Management", image: medicationImage, description: "Safe, accurate medication support and prompting" },
  { icon: Utensils, name: "Meal Preparation", description: "Nutritious meals tailored to dietary needs and preferences" },
  { icon: Car, name: "Escort & Appointments", description: "Reliable accompaniment to medical visits and community activities" },
  { icon: MessageCircle, name: "Companionship", image: companionshipImage, description: "Friendly social support that reduces isolation and boosts wellbeing" },
];

export const testimonials = [
  {
    name: "Family member, Camden",
    quote:
      "The carers are warm, dependable, and genuinely attentive. They helped my mother feel safe again and kept us informed every step of the way.",
  },
  {
    name: "Service user family, East London",
    quote:
      "We noticed the difference immediately. The team brought patience, professionalism, and kindness, and my uncle now looks forward to each visit.",
  },
  {
    name: "Relative of a service user",
    quote:
      "From the first conversation, Focus Care Link felt reassuring and organised. The care plan was clear, flexible, and centred around what mattered to us.",
  },
];

export const faqs = [
  {
    question: "How quickly can care start?",
    answer:
      "This depends on the service required and assessment availability, but we aim to respond quickly and begin support as soon as it is safe and appropriate to do so.",
  },
  {
    question: "Do you provide short visits as well as ongoing care?",
    answer:
      "Yes. We support a wide range of needs, from shorter visits during the week to more frequent daily support and live-in care arrangements.",
  },
  {
    question: "Can care plans change over time?",
    answer:
      "Absolutely. Our care packages are designed to be flexible so they can adapt as needs, routines, health conditions, or family circumstances change.",
  },
  {
    question: "Do you support people with specialist conditions?",
    answer:
      "Yes. Alongside our core domiciliary services, we provide specialist condition-led support and work with families and professionals to tailor each plan.",
  },
];

export const getCoreServiceBySlug = (slug?: string) => coreServices.find((service) => service.slug === slug);
