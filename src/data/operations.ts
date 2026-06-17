export interface Operation {
  id: string;
  codename: string;
  objective: string;
  techStack: string[];
  status: "completed" | "stealth";
  impact: string;
  description: string;
  github?: string;
}

export const operations: Operation[] = [
  {
    id: "newleaf",
    codename: "Operation NewLeaf",
    objective:
      "AI-powered settlement assistant helping newcomers navigate life in Canada, the U.S., and the U.K.",
    techStack: ["React Native", "Expo", "Node.js", "Firebase", "AI/ML"],
    status: "completed",
    github: "https://github.com/Inshalc/NewLeaf",
    impact:
      "Combines document conversion, settlement checklists, and a localized assistant to help immigrants adapt with confidence.",
    description:
      "An all-in-one smart companion for newcomers — turning paperwork, cultural norms, and everyday systems into a guided, approachable experience.",
  },
  {
    id: "edulift",
    codename: "Operation EduLift",
    objective:
      "AI-powered teaching assistant for lesson planning, quiz creation, grading, and student performance insights.",
    techStack: ["Python", "AI/ML", "Data Analysis", "Automation"],
    status: "completed",
    github: "https://github.com/Inshalc/EduLift",
    impact:
      "Helps educators generate lesson plans, automate grading, and surface actionable insights from student performance data.",
    description:
      "Built to bridge gaps in educational technology — making personalized, data-informed teaching more accessible for educators.",
  },
  {
    id: "openheart",
    codename: "Operation OpenHeart",
    objective:
      "Accessible dating app inclusive of people with disabilities — text, voice, and assistive hardware support.",
    techStack: ["Next.js", "Flask", "Python", "ElevenLabs", "Arduino"],
    status: "completed",
    github: "https://github.com/alyssayuan17/OpenHeart",
    impact:
      "Focused on accessible communication so everyone can connect comfortably. Built for ElleHacks with AI chatbot and TTS integration.",
    description:
      "A health-forward social experience putting accessibility first — inclusive design, voice integration, and hardware-assisted interaction.",
  },
  {
    id: "vantage",
    codename: "Secret Mission — Vantage",
    objective:
      "Stealth-mode legal tech tool built for lawyers — streamlining workflows and intelligence for legal practice.",
    techStack: ["TypeScript", "AI/ML", "Legal Tech", "SaaS"],
    status: "stealth",
    impact:
      "In active stealth development. Purpose-built tooling for legal professionals — details under wraps until launch.",
    description:
      "Vantage is a confidential operation targeting the legal industry. Mission parameters classified. Check back post-launch.",
  },
];
