// Shared homepage content for the design variants (app/(designs)/design-N).
// Plain data module: safe to import from Server and Client Components.
// Copy is lifted from the live site's components so every variant says the same thing.

import { PROGRAMMES } from "@/lib/programmes";

export { PROGRAMMES };

/* ------------------------------------------------------------------ */
/* Photography                                                         */
/* Free Pexels photos for now. Swap any URL here for a Lummi image and */
/* every design picks it up. Keep the host in next.config remotePatterns. */
/* ------------------------------------------------------------------ */

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1920`;

export const PHOTOS = {
  heroWoman: {
    src: pexels(3884406),
    alt: "Smiling virtual assistant with braids taking notes beside her laptop",
  },
  armchair: {
    src: pexels(5711686),
    alt: "Virtual assistant working on her laptop from a cosy armchair at home",
  },
  homeDesk: {
    src: pexels(8091207),
    alt: "Virtual assistant working at her home desk with a laptop",
  },
  floorLaptop: {
    src: pexels(5244072),
    alt: "Virtual assistant smiling while working on her laptop in the living room",
  },
  videoCall: {
    src: pexels(7690316),
    alt: "Virtual assistant on a video call wearing a headset",
  },
  manKitchen: {
    src: pexels(5198239),
    alt: "Smiling virtual assistant typing on his laptop at home",
  },
  manStudio: {
    src: pexels(4939701),
    alt: "Virtual assistant in glasses smiling at his laptop in a bright room",
  },
  manSuit: {
    src: pexels(7794033),
    alt: "Professional virtual assistant in a suit smiling behind his laptop",
  },
  classroom: {
    src: pexels(5940713),
    alt: "Two students working through a lesson on a laptop with their trainer",
  },
  office: {
    src: pexels(1181251),
    alt: "Virtual assistant working on a laptop by a bright office window",
  },
  deskHeadphones: {
    src: pexels(9928616),
    alt: "Laptop and wireless headphones beside a snake plant on a wooden desk",
  },
  deskMinimal: {
    src: pexels(30047570),
    alt: "Minimal home office desk with a laptop and books",
  },
} as const;

export type Photo = { src: string; alt: string };

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/join#talent-pool", label: "Talent Pool" },
  { href: "/hire", label: "Hire" },
  { href: "/store", label: "Store" },
  { href: "/contact", label: "Contact" },
];

export const PRIMARY_CTA = { label: "Join a cohort", href: "/register" };

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const HERO = {
  headline: "Build a remote career that clients trust.",
  sub: "Live VA training, hirable career assets and a community of 300+ virtual assistants growing together.",
  // Rotating verbs/phrases for designs that animate a single word
  rotating: ["skills", "portfolio", "network", "first client"],
};

export const HERO_SLIDES = [
  {
    id: "community",
    headlinePre: "Join 300+ VAs building their ",
    headlineMark: "remote careers.",
    copy: "Job leads, practical tips, resources and a community of VAs growing together.",
    cta: "Join the Community",
    href: "/join",
  },
  {
    id: "cohorts",
    headlinePre: "Your next remote opportunity starts with the ",
    headlineMark: "right skills.",
    copy: "Join an upcoming cohort and learn to work smarter, deliver professionally and stand out to clients.",
    cta: "Explore Cohorts",
    href: "/join#cohorts",
  },
  {
    id: "essentials",
    headlinePre: "Everything you need to show up ",
    headlineMark: "professionally.",
    copy: "Remote-work gadgets, CVs, cold-email templates and practical resources in one place.",
    cta: "Explore Essentials",
    href: "/store",
  },
  {
    id: "talent",
    headlinePre: "Your next opportunity could ",
    headlineMark: "start here.",
    copy: "Learn. Build your skills. Join our talent pool. Get ready for remote opportunities.",
    cta: "Join the Talent Pool",
    href: "/join#talent-pool",
  },
];

/* ------------------------------------------------------------------ */
/* Skills strip                                                        */
/* ------------------------------------------------------------------ */

export const SKILLS = [
  "AI & Automation",
  "Calendar Management",
  "Google Workspace",
  "Documentation & SOPs",
  "Zapier & Workflow Automation",
  "Email & Inbox Management",
  "Client Communication",
  "Remote Work Tools",
];

export const TOOLS = [
  { name: "Google Workspace", slug: "google" },
  { name: "Gmail", slug: "gmail" },
  { name: "Google Calendar", slug: "googlecalendar" },
  { name: "Notion", slug: "notion" },
  { name: "Zoom", slug: "zoom" },
  { name: "Calendly", slug: "calendly" },
  { name: "Zapier", slug: "zapier" },
  { name: "Make", slug: "make" },
  { name: "Airtable", slug: "airtable" },
  { name: "Trello", slug: "trello" },
  { name: "ClickUp", slug: "clickup" },
  { name: "Asana", slug: "asana" },
];

/** Simple Icons CDN, tinted to any hex (no #). */
export const toolLogo = (slug: string, hex = "051a4b") =>
  `https://cdn.simpleicons.org/${slug}/${hex}`;

/* ------------------------------------------------------------------ */
/* Offerings                                                           */
/* ------------------------------------------------------------------ */

export const WHATSAPP_COMMUNITY_URL = "https://chat.whatsapp.com/thevaworkshop";

export type OfferingIcon =
  | "training"
  | "resume"
  | "call"
  | "community"
  | "interview"
  | "analytics";

export const OFFERINGS: {
  title: string;
  description: string;
  icon: OfferingIcon;
  href: string;
  soon?: boolean;
}[] = [
  {
    title: "Live trainings",
    description:
      "Practical, live sessions on the skills and tools you need to work as a professional VA. Every class is recorded.",
    icon: "training",
    href: "/services#training",
  },
  {
    title: "Resume & portfolio building",
    description:
      "An ATS-optimised resume and a portfolio that wins clients, even with zero prior experience.",
    icon: "resume",
    href: "/store",
  },
  {
    title: "1-on-1 Career Discovery Session",
    description:
      "A paid session with the founder on your goals, challenges, CV, portfolio and next steps.",
    icon: "call",
    href: "/book",
  },
  {
    title: "Community & job leads",
    description:
      "An active alumni network sharing job leads, referrals and peer feedback.",
    icon: "community",
    href: WHATSAPP_COMMUNITY_URL,
  },
  {
    title: "AI Mock Interview Preparation",
    description:
      "A smarter way to practise and prepare for remote job interviews.",
    icon: "interview",
    href: "/coming-soon",
    soon: true,
  },
  {
    title: "Progress Tracking & Analytics",
    description: "Tools to help you track your learning and career progress.",
    icon: "analytics",
    href: "/coming-soon",
    soon: true,
  },
];

/* ------------------------------------------------------------------ */
/* Cohort                                                              */
/* ------------------------------------------------------------------ */

export const COHORT = {
  month: "November 2026",
  summary:
    "4 weeks of live weekend classes, then 2 weeks to complete your capstone project. Every class is recorded.",
  graded:
    "Assignments are given and graded throughout, so you can apply what you learn.",
  facts: [
    { value: "6 weeks", label: "Duration" },
    { value: "Live weekends", label: "Format" },
    { value: "Limited spots", label: "Group size" },
  ],
  timeline: [
    { weeks: "Weeks 1-4", title: "Live weekend classes", detail: "Saturdays and Sundays, recorded for replay." },
    { weeks: "Weeks 5-6", title: "Capstone project", detail: "Apply everything to a real-world brief." },
    { weeks: "Finale", title: "Closing ceremony", detail: "Certification for eligible participants." },
  ],
  register: { label: "Register now", href: "/register" },
  waitlist: { label: "Join the waitlist", href: "/waitlist" },
};

/* ------------------------------------------------------------------ */
/* Store                                                               */
/* ------------------------------------------------------------------ */

export const PRODUCTS = [
  {
    id: "client-acquisition-kit",
    name: "Client Acquisition & Pitch Deck Kit",
    category: "Scripts & Proposals",
    price: "₦49,000",
    originalPrice: "₦75,000",
    kind: "digital" as const,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Proposal templates, pitch deck layouts and discovery-call closing frameworks.",
  },
  {
    id: "ats-resume-portfolio-bundle",
    name: "ATS Resume & Portfolio Bundle",
    category: "Career Assets",
    price: "₦35,000",
    originalPrice: "₦58,000",
    kind: "digital" as const,
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    description: "ATS-optimised Canva portfolio templates and executive VA resume layouts.",
  },
  {
    id: "cold-email-os",
    name: "Cold Email & Outreach OS",
    category: "Scripts & Proposals",
    price: "₦25,000",
    originalPrice: "₦40,000",
    kind: "digital" as const,
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&h=600&fit=crop",
    description: "Email sequences that get remote clients to reply.",
  },
  {
    id: "noise-cancelling-headset",
    name: "Pro Noise-Cancelling Headset",
    category: "Remote Work Gadgets",
    price: "₦55,000",
    originalPrice: "₦80,000",
    kind: "gear" as const,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
    description: "Clear audio for client calls and focus sessions.",
  },
  {
    id: "ergonomic-desk-kit",
    name: "Ergonomic Remote Work Desk Kit",
    category: "Remote Work Gadgets",
    price: "₦85,000",
    originalPrice: "₦120,000",
    kind: "gear" as const,
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=600&fit=crop",
    description: "Laptop stand, wireless keyboard, ergonomic mouse and cable organiser.",
  },
];

/* ------------------------------------------------------------------ */
/* Two ways to work with us                                            */
/* ------------------------------------------------------------------ */

export const PATHS = {
  talent: {
    title: "Join our talent pool",
    body: "Selected candidates join our curated pool. When a client needs a VA, we match them directly, and graduates get priority.",
    steps: [
      "Apply with your experience & Loom intro",
      "Get reviewed by our team",
      "Get matched with prospective clients",
    ],
    cta: { label: "Apply to the pool", href: "/join#talent-pool" },
  },
  hire: {
    title: "Hire a virtual assistant",
    body: "Every VA in our pool has completed the Workshop programme, so you skip the guesswork and start with someone ready.",
    steps: [
      "Exact match to your service needs",
      "Our team handles every introduction",
      "Rates open to discussion",
    ],
    cta: { label: "Hire a VA", href: "/hire" },
  },
};

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export const TESTIMONIALS = [
  {
    quote:
      "My new CV and LinkedIn profile brought me three interviews in two weeks. I signed my first remote contract a month later.",
    name: "Amara Okafor",
    role: "Executive VA, Lagos",
  },
  {
    quote: "The cold-email templates landed me two retainers in my first month out of the cohort.",
    name: "Chidera Eze",
    role: "Social Media VA, Enugu",
  },
  {
    quote: "Six weeks in, I moved from part-time admin to a full remote salary.",
    name: "Naledi Dlamini",
    role: "Project VA, Johannesburg",
  },
  {
    quote: "The mock interviews removed every bit of fear. I knew exactly what to say.",
    name: "Kwame Mensah",
    role: "Legal VA, Accra",
  },
  {
    quote: "Live classes felt like sitting next to a colleague. I never once felt lost.",
    name: "Tunde Adeyemi",
    role: "Bookkeeping VA, Ibadan",
  },
  {
    quote: "The talent pool matched me with a client before I even finished the programme.",
    name: "Kwesi Appiah",
    role: "Research VA, Kumasi",
  },
  {
    quote: "I came in with admin skills and left with automations clients pay double for.",
    name: "Zainab Bello",
    role: "AI Automation VA, Nairobi",
  },
];

export const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

/* ------------------------------------------------------------------ */
/* Video                                                               */
/* ------------------------------------------------------------------ */

export const VIDEO = {
  title: "See how we train our VAs.",
  body: "A look inside our live training sessions, learning activities and the skills we teach.",
  poster: "/images/video-poster.png",
  status: "Video coming soon",
};

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const FAQS = [
  {
    q: "How does the VA Workshop programme work?",
    a: "A 6-week practical programme. Weeks 1 to 4 are live classes on Saturdays and Sundays, weeks 5 to 6 are your capstone project, and it ends with a closing ceremony and certification for eligible participants.",
  },
  {
    q: "Is the programme suitable for beginners?",
    a: "Yes. Most of our students start with zero VA experience. We walk you through everything step by step, from setting up to landing your first paying client.",
  },
  {
    q: "Do I need any prior experience or qualifications?",
    a: "No degree or formal experience is required. A laptop, a stable internet connection and the drive to build something real is enough to start.",
  },
  {
    q: "Are the training sessions live?",
    a: "Yes. Classes run live on Saturdays and Sundays for the first four weeks, and every session is recorded so you can revisit it later.",
  },
  {
    q: "Do you provide coaching and mentorship?",
    a: "Weekly 1-on-1 coaching is not part of the cohort. You can book a paid 1-on-1 Career Discovery Session with the founder to discuss your goals, CV, portfolio and next steps.",
  },
  {
    q: "What happens after I complete the programme?",
    a: "You join our alumni network with lifetime community access, job leads, monthly alumni calls and all future course updates at no extra cost.",
  },
];

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const FOOTER_COLUMNS = [
  {
    heading: "Programme",
    links: [
      { label: "How we get you there", href: "/services" },
      { label: "Training tracks", href: "/services#training" },
      { label: "Upcoming cohorts", href: "/join#cohorts" },
      { label: "VA storefront", href: "/store" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Meet the team", href: "/about#team" },
      { label: "Contact", href: "/contact" },
      { label: "Book a discovery call", href: "/book" },
    ],
  },
  {
    heading: "Get started",
    links: [
      { label: "Register for a cohort", href: "/register" },
      { label: "Talent pool", href: "/join#talent-pool" },
      { label: "Hire a VA", href: "/hire" },
      { label: "team@thevaworkshop.com", href: "mailto:team@thevaworkshop.com" },
    ],
  },
];

export const BRAND = {
  name: "The VA Workshop",
  logo: "/va-logo.png",
  email: "team@thevaworkshop.com",
};
