// Single source of truth for site copy. Every design reads from here, so the
// four directions say exactly the same thing and only the presentation differs.
// Mirrors ~/Documents/VA-Workshop-Content.md.

import { PROGRAMMES } from "@/lib/programmes";

export { PROGRAMMES };

export const BRAND = {
  name: "The VA Workshop",
  short: "VA Workshop",
  logo: "/va-logo.png",
  email: "team@thevaworkshop.com",
  location: "Lagos, Nigeria",
  locationNote: "Remote-first, worldwide cohorts",
  hours: "Mon–Fri, 9:00–17:00 WAT",
  tagline: "Training and career assets for Africa's virtual assistants and remote workers.",
  footnote: "Built for Africa's remote workforce.",
  whatsapp: "https://chat.whatsapp.com/thevaworkshop",
};

/* Photography ------------------------------------------------------- */
/* Local files live in /public/images. Pexels URLs keep the query string the
   remotePatterns entry in next.config.ts expects. */

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1920`;

export const PHOTOS = {
  heroWoman: { src: pexels(3884406), alt: "Smiling virtual assistant with braids taking notes beside her laptop" },
  armchair: { src: pexels(5711686), alt: "Virtual assistant working on her laptop from a cosy armchair at home" },
  homeDesk: { src: pexels(8091207), alt: "Virtual assistant working at her home desk with a laptop" },
  floorLaptop: { src: pexels(5244072), alt: "Virtual assistant smiling while working on her laptop in the living room" },
  videoCall: { src: pexels(7690316), alt: "Virtual assistant on a video call wearing a headset" },
  manKitchen: { src: pexels(5198239), alt: "Smiling virtual assistant typing on his laptop at home" },
  manStudio: { src: pexels(4939701), alt: "Virtual assistant in glasses smiling at his laptop in a bright room" },
  manSuit: { src: pexels(7794033), alt: "Professional virtual assistant in a suit smiling behind his laptop" },
  classroom: { src: pexels(5940713), alt: "Two students working through a lesson on a laptop with their trainer" },
  office: { src: pexels(1181251), alt: "Virtual assistant working on a laptop by a bright office window" },
  deskHeadphones: { src: pexels(9928616), alt: "Laptop and wireless headphones beside a snake plant on a wooden desk" },
  deskMinimal: { src: pexels(30047570), alt: "Minimal home office desk with a laptop and books" },
  // Local brand photography from the previous site
  community: { src: "/images/hero-community.jpg", alt: "Smiling virtual assistant working from her home desk with a laptop" },
  cohortsMan: { src: "/images/hero-cohorts.jpg", alt: "Virtual assistant smiling at his desk in a bright office" },
  essentials: { src: "/images/hero-essentials.jpg", alt: "Minimal remote workspace with a laptop, desk lamp and plant" },
  talent: { src: "/images/hero-talent.jpg", alt: "VA Workshop cohort collaborating around a laptop" },
  cohortClass: { src: "/images/cohort-class.png", alt: "Two VA Workshop students taking notes together during a live training session" },
  hireVa: { src: "/images/hire-va.png", alt: "Business owner reviewing virtual assistant candidates on her laptop" },
  talentPool: { src: "/images/talent-pool.png", alt: "Confident virtual assistant holding her laptop, ready for client work" },
  videoPoster: { src: "/images/video-poster.png", alt: "Students in a live VA Workshop cohort session" },
  courseExecutive: { src: "/images/course-executive.png", alt: "Organised desk with a laptop showing a weekly calendar schedule" },
  courseAi: { src: "/images/course-ai-automation.png", alt: "Hands on a laptop showing an automation workflow diagram" },
  courseLegal: { src: "/images/course-legal.png", alt: "Tidy legal desk with contracts and scales of justice" },
} as const;

export type Photo = { src: string; alt: string };

/* Navigation -------------------------------------------------------- */

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/join#talent-pool", label: "Talent Pool" },
  { href: "/hire", label: "Hire" },
  { href: "/store", label: "Store" },
  { href: "/contact", label: "Contact" },
];

export const PRIMARY_CTA = { label: "Join a cohort", href: "/register" };
export const SECONDARY_CTA = { label: "Hire a VA", href: "/hire" };

export const ANNOUNCEMENT = {
  text: "November 2026 cohort is open. Limited spots.",
  cta: "Register",
  href: "/register",
};

/* Hero -------------------------------------------------------------- */

export const HERO = {
  eyebrow: "Live VA training · Lagos & remote",
  headline: "Build a remote career that clients trust.",
  sub: "Live VA training, hirable career assets and a community of 300+ virtual assistants growing together.",
  rotating: ["skills", "portfolio", "network", "first client"],
  proof: [
    { value: "300+", label: "VAs in the community" },
    { value: "6 weeks", label: "Live, coach-led programme" },
    { value: "3", label: "Specialist tracks" },
  ],
};

export const HERO_SLIDES = [
  {
    id: "community",
    headlinePre: "Join 300+ VAs building their ",
    headlineMark: "remote careers.",
    copy: "Get access to job leads, practical tips, resources, opportunities and a community of VAs growing together.",
    cta: "Join the Community",
    href: "/join",
    photo: "community" as const,
  },
  {
    id: "cohorts",
    headlinePre: "Your next remote opportunity starts with the ",
    headlineMark: "right skills.",
    copy: "Join an upcoming VA Workshop cohort and learn how to work smarter, deliver professionally and stand out to clients.",
    cta: "Explore Upcoming Cohorts",
    href: "/join#cohorts",
    photo: "cohortsMan" as const,
  },
  {
    id: "essentials",
    headlinePre: "Everything you need to show up ",
    headlineMark: "professionally.",
    copy: "From quality remote-work gadgets to CVs, cold-email templates and practical resources, get the tools you need to pursue remote opportunities with confidence.",
    cta: "Explore Remote Essentials",
    href: "/store",
    photo: "essentials" as const,
  },
  {
    id: "talent",
    headlinePre: "Your next opportunity could ",
    headlineMark: "start here.",
    copy: "Learn. Build your skills. Join our talent pool. Get ready for remote opportunities.",
    cta: "Join the Talent Pool",
    href: "/join#talent-pool",
    photo: "talent" as const,
  },
];

/* Skills & tools ---------------------------------------------------- */

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

/** Simple Icons CDN, tinted to any hex (no #). Render with a plain <img>. */
export const toolLogo = (slug: string, hex = "000000") =>
  `https://cdn.simpleicons.org/${slug}/${hex}`;

/* Offerings --------------------------------------------------------- */

export type OfferingIcon = "training" | "resume" | "call" | "community" | "interview" | "analytics";

export const OFFERINGS_INTRO = {
  title: "How we get you there.",
  sub: "Every step is designed to give you practical skills, support, and hirable assets, from total beginner to placed VA.",
};

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
      "Live sessions on the practical skills and tools you need to work confidently as a professional VA. Every session is recorded so you can revisit it later.",
    icon: "training",
    href: "/services#training",
  },
  {
    title: "Resume & portfolio building",
    description: "An ATS-optimised resume and a portfolio that wins clients, even with zero prior experience.",
    icon: "resume",
    href: "/store",
  },
  {
    title: "1-on-1 Career Discovery Session",
    description:
      "A paid session with the founder on your career goals, challenges, CV, portfolio and next steps in your remote-work journey.",
    icon: "call",
    href: "/book",
  },
  {
    title: "Community & job leads",
    description: "An active alumni network sharing job leads, referrals and peer feedback.",
    icon: "community",
    href: BRAND.whatsapp,
  },
  {
    title: "AI Mock Interview Preparation",
    description: "A smarter way to practise and prepare for remote job interviews.",
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

/* Training tracks (cards) ------------------------------------------- */

export const TRACKS_INTRO = {
  title: "Learn the skills employers ask for.",
  sub: "Three coach-led tracks built around the tools remote teams use today.",
};

export const TRACK_META: Record<string, { level: string; photo: keyof typeof PHOTOS }> = {
  "executive-assistance": { level: "Beginner friendly, live online", photo: "courseExecutive" },
  "ai-automation-for-vas": { level: "Intermediate, project based", photo: "courseAi" },
  "legal-virtual-assistant": { level: "Specialist, mentor led", photo: "courseLegal" },
};

/* Cohort ------------------------------------------------------------ */

export const COHORT = {
  title: "Join the next cohort.",
  sub: "Our 6-week programmes combine live weekend classes, practical assignments and a capstone project to help you develop skills you can apply in the real world.",
  month: "November 2026",
  summary:
    "4 weeks of live weekend classes, followed by 2 weeks to complete your capstone project. Classes are recorded so enrolled students can revisit the lessons.",
  graded: "Assignments are given and graded throughout the programme so you can apply what you learn.",
  facts: [
    { value: "6 weeks", label: "Duration" },
    { value: "Live weekends", label: "Format" },
    { value: "Limited spots", label: "Group size" },
  ],
  timeline: [
    { weeks: "Weeks 1–4", title: "Live weekend classes", detail: "Saturdays and Sundays, recorded for replay." },
    { weeks: "Weeks 5–6", title: "Capstone project", detail: "Apply everything to a real-world brief." },
    { weeks: "Finale", title: "Closing ceremony", detail: "Certification for eligible participants." },
  ],
  register: { label: "Register now", href: "/register" },
  waitlist: { label: "Join the waitlist", href: "/waitlist" },
  waitlistNote:
    "Don't see a date for your preferred programme yet? Join the waitlist and we'll notify you when the next cohort is announced.",
};

export const JOURNEY = [
  { title: "Choose your programme", description: "Select the training track that matches your career goals." },
  { title: "Register & get started", description: "Join the upcoming cohort and get access to the programme." },
  { title: "Learn live", description: "Attend live weekend classes and develop practical VA skills." },
  { title: "Practise & complete your capstone", description: "Complete assignments throughout the programme and submit your capstone project." },
  {
    title: "Get certified & keep growing",
    description:
      "Meet the attendance and assignment requirements to earn your certificate, then keep growing through opportunities, resources and the community.",
  },
];

/* Store ------------------------------------------------------------- */

export const STORE_INTRO = {
  title: "Everything you need to succeed.",
  sub: "VA templates and remote work equipment, in one place. All priced in Naira.",
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  originalPrice: string;
  save: string;
  tag?: string;
  kind: "digital" | "gear";
  image: string;
  description: string;
};

const unsplash = (id: string) => `https://images.unsplash.com/${id}?w=800&h=600&fit=crop`;

export const PRODUCTS: Product[] = [
  {
    id: "client-acquisition-kit",
    name: "Client Acquisition & Pitch Deck Kit",
    category: "Scripts & Proposals",
    price: "₦49,000",
    originalPrice: "₦75,000",
    save: "Save 35%",
    tag: "Best seller",
    kind: "digital",
    image: unsplash("photo-1460925895917-afdab827c52f"),
    description: "Proposal templates, pitch deck layouts and discovery-call closing frameworks.",
  },
  {
    id: "ats-resume-portfolio-bundle",
    name: "ATS Resume & Portfolio Bundle",
    category: "Career Assets",
    price: "₦35,000",
    originalPrice: "₦58,000",
    save: "Save 40%",
    kind: "digital",
    image: unsplash("photo-1586281380349-632531db7ed4"),
    description: "ATS-optimised Canva portfolio templates and executive VA resume layouts.",
  },
  {
    id: "va-sop-contract-vault",
    name: "VA Contracts & SOP Vault",
    category: "Legal & Docs",
    price: "₦42,000",
    originalPrice: "₦68,000",
    save: "Save 38%",
    kind: "digital",
    image: unsplash("photo-1521791136064-7986c2920216"),
    description: "VA service contracts, NDA templates and client onboarding checklists.",
  },
  {
    id: "cold-email-os",
    name: "Cold Email & Outreach OS",
    category: "Scripts & Proposals",
    price: "₦25,000",
    originalPrice: "₦40,000",
    save: "Save 38%",
    tag: "Popular",
    kind: "digital",
    image: unsplash("photo-1557200134-90327ee9fafa"),
    description: "Battle-tested email sequences that get remote clients to reply.",
  },
  {
    id: "ergonomic-desk-kit",
    name: "Ergonomic Remote Work Desk Kit",
    category: "Remote Work Gadgets",
    price: "₦85,000",
    originalPrice: "₦120,000",
    save: "Save 29%",
    kind: "gear",
    image: unsplash("photo-1593642632559-0c6d3fc62b89"),
    description: "Laptop stand, wireless keyboard, ergonomic mouse and cable organiser.",
  },
  {
    id: "noise-cancelling-headset",
    name: "Pro Noise-Cancelling Headset",
    category: "Remote Work Gadgets",
    price: "₦55,000",
    originalPrice: "₦80,000",
    save: "Save 31%",
    tag: "Best seller",
    kind: "gear",
    image: unsplash("photo-1505740420928-5e560c06d30e"),
    description: "Clear audio for client calls and focus sessions, built for remote work.",
  },
  {
    id: "ring-light-webcam-bundle",
    name: "Ring Light & HD Webcam Bundle",
    category: "Remote Work Gadgets",
    price: "₦65,000",
    originalPrice: "₦95,000",
    save: "Save 32%",
    kind: "gear",
    image: unsplash("photo-1526170375885-4d8ecf77b99f"),
    description: "Look and sound your best on every video call: ring light and 1080p webcam.",
  },
];

/** Product images: render with a plain <img> (Unsplash is not in remotePatterns). */
export const orderHref = (name: string) =>
  `mailto:${BRAND.email}?subject=${encodeURIComponent(`Order: ${name}`)}`;

/* Two ways to work with us ------------------------------------------ */

export const PATHS_INTRO = {
  title: "Two ways to work with us.",
  sub: "Ready to earn as a VA, or ready to delegate? Pick your path and our team takes it from there.",
};

export const PATHS = {
  talent: {
    label: "For VAs",
    title: "Join our talent pool",
    body: "Our team reviews every application. Selected candidates join a curated pool, and when a client needs a VA we match them directly. Workshop graduates get priority.",
    steps: ["Apply with your experience & Loom intro", "Get reviewed by our team", "Get matched with prospective clients"],
    cta: { label: "Apply to the pool", href: "/join#talent-pool" },
  },
  hire: {
    label: "For businesses",
    title: "Hire a virtual assistant",
    body: "Every VA in our pool has completed the Workshop programme, so you skip the guesswork and start with someone ready.",
    steps: ["Pre-vetted: every VA completes the programme", "Exact match to your service needs", "Our team handles every introduction"],
    cta: { label: "Hire a VA", href: "/hire" },
  },
};

export const HIRE_BENEFITS = [
  { title: "Pre-vetted", detail: "Every VA completes the Workshop programme" },
  { title: "Exact match", detail: "Matched to your specific service needs" },
  { title: "Real introductions", detail: "Our team handles every introduction" },
  { title: "Human follow-up", detail: "No automated systems, ever" },
];

/* Testimonials ------------------------------------------------------ */
/* NOTE: placeholder names and quotes carried over from the old site. Confirm before launch. */

export const TESTIMONIALS_INTRO = {
  title: "Hired, promoted, working remotely.",
  sub: "What graduates say after landing their first remote roles.",
};

export const TESTIMONIALS = [
  { quote: "My new CV and LinkedIn profile brought me three interviews in two weeks. I signed my first remote contract a month later.", name: "Amara Okafor", role: "Executive VA, Lagos" },
  { quote: "The cold-email templates landed me two retainers in my first month out of the cohort.", name: "Chidera Eze", role: "Social Media VA, Enugu" },
  { quote: "Six weeks in, I moved from part-time admin to a full remote salary.", name: "Naledi Dlamini", role: "Project VA, Johannesburg" },
  { quote: "The mock interviews removed every bit of fear. I knew exactly what to say.", name: "Kwame Mensah", role: "Legal VA, Accra" },
  { quote: "Live classes felt like sitting next to a colleague. I never once felt lost.", name: "Tunde Adeyemi", role: "Bookkeeping VA, Ibadan" },
  { quote: "The talent pool matched me with a client before I even finished the programme.", name: "Kwesi Appiah", role: "Research VA, Kumasi" },
  { quote: "I came in with admin skills and left with automations clients pay double for.", name: "Zainab Bello", role: "AI Automation VA, Nairobi" },
  { quote: "The portfolio piece from week four is the exact thing my client asked to see.", name: "Aisha Musa", role: "Customer Support VA, Kano" },
  { quote: "I finally charge what my work is worth. The pricing session changed everything.", name: "Fatima Bala", role: "Content VA, Abuja" },
];

export const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

/* Video ------------------------------------------------------------- */

export const VIDEO = {
  title: "See how we train our VAs.",
  body: "A look inside our live training sessions, learning activities and the skills we teach.",
  poster: "/images/video-poster.png",
  status: "Video coming soon",
};

/* FAQ --------------------------------------------------------------- */

export const FAQ_INTRO = { title: "Questions, answered." };

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
    q: "How soon can I land my first client?",
    a: "It varies with your niche and the hours you put in. The programme is structured so your portfolio, resume and outreach system are client-ready by the end of the six weeks.",
  },
  {
    q: "Are the templates and resources customisable?",
    a: "Yes. Every template, resume, portfolio, pitch deck, proposal, contract and onboarding checklist is fully editable for your niche and personality.",
  },
  {
    q: "What happens after I complete the programme?",
    a: "You join our alumni network with lifetime community access, job leads, monthly alumni calls and all future course updates at no extra cost.",
  },
];

/* Final CTA --------------------------------------------------------- */

export const FINAL_CTA = {
  title: "Your remote career starts in November.",
  sub: "Six weeks of live training, a capstone you can show clients, and a community that keeps sharing leads long after you graduate.",
  primary: { label: "Register for the cohort", href: "/register" },
  secondary: { label: "Book a discovery session", href: "/book" },
};

/* Footer ------------------------------------------------------------ */

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
      { label: "Join the waitlist", href: "/waitlist" },
    ],
  },
];

export const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
];
