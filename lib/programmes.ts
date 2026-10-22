export type Programme = {
  slug: string;
  name: string;
  short: string;
  entails: string[];
  skills: string[];
  tools: string[];
  certification: string[];
  nextCohort: string | null;
};

export const PROGRAMMES: Programme[] = [
  {
    slug: "executive-assistance",
    name: "Executive Assistance",
    short:
      "Calendar control, inbox management, travel and reporting for founders and executives.",
    entails: [
      "4 weeks of live weekend classes covering executive-support workflows",
      "2 weeks to complete a capstone project with a real-world executive brief",
      "Assignments given and graded throughout the programme",
      "Closing ceremony and certification for eligible participants",
    ],
    skills: [
      "Calendar Management",
      "Email & Inbox Management",
      "Client Communication",
      "Documentation & SOPs",
      "Travel & Meeting Coordination",
    ],
    tools: ["Google Workspace", "Notion", "Slack", "Zoom", "Calendly"],
    certification: [
      "Attend the live weekend classes across weeks 1 to 4",
      "Submit all graded assignments",
      "Complete and present your capstone project",
    ],
    nextCohort: "November 2026",
  },
  {
    slug: "ai-automation-for-vas",
    name: "AI Automation For VAs",
    short:
      "Build AI-powered automations that save your clients hours every single week.",
    entails: [
      "4 weeks of live weekend classes on automation design and AI tooling",
      "2 weeks to build a capstone automation for a real client scenario",
      "Assignments given and graded throughout the programme",
      "Closing ceremony and certification for eligible participants",
    ],
    skills: [
      "AI & Automation",
      "Zapier & Workflow Automation",
      "Process Mapping",
      "Prompt Writing",
      "Client Communication",
    ],
    tools: ["Zapier", "Make", "ChatGPT", "Google Workspace", "Airtable"],
    certification: [
      "Attend the live weekend classes across weeks 1 to 4",
      "Submit all graded assignments",
      "Ship a working capstone automation",
    ],
    nextCohort: "November 2026",
  },
  {
    slug: "legal-virtual-assistant",
    name: "Legal Virtual Assistant",
    short:
      "Document preparation, filing and case support for law firms and legal teams.",
    entails: [
      "4 weeks of live weekend classes on legal-administration fundamentals",
      "2 weeks to complete a capstone case-support project",
      "Assignments given and graded throughout the programme",
      "Closing ceremony and certification for eligible participants",
    ],
    skills: [
      "Document Preparation",
      "Filing & Case Support",
      "Documentation & SOPs",
      "Client Communication",
      "Confidentiality & Data Handling",
    ],
    tools: ["Google Workspace", "Clio", "DocuSign", "Notion", "Zoom"],
    certification: [
      "Attend the live weekend classes across weeks 1 to 4",
      "Submit all graded assignments",
      "Complete and present your capstone project",
    ],
    nextCohort: "November 2026",
  },
];

export function getProgramme(slug: string) {
  return PROGRAMMES.find((p) => p.slug === slug);
}
