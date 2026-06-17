export interface Operation {
  id: string;
  codename: string;
  objective: string;
  techStack: string[];
  status: "active" | "completed" | "in-progress";
  impact: string;
  description: string;
}

export const operations: Operation[] = [
  {
    id: "newleaf",
    codename: "Operation NewLeaf",
    objective:
      "Create a platform or initiative focused on fresh starts, growth, and positive transformation through technology.",
    techStack: ["React", "Node.js", "TypeScript", "Cloud Services"],
    status: "in-progress",
    impact:
      "Designed to empower users with tools for personal and professional renewal. Building with scalability and user experience as core priorities.",
    description:
      "A mission-driven project exploring how technology can support new beginnings — whether in education, career transitions, or personal development.",
  },
  {
    id: "edulift",
    codename: "Operation EduLift",
    objective:
      "Elevate educational access and learning outcomes through innovative software solutions.",
    techStack: ["Python", "React", "AI/ML", "PostgreSQL"],
    status: "active",
    impact:
      "Aims to bridge gaps in educational technology by creating accessible, intelligent learning tools for students and educators.",
    description:
      "An education-focused operation leveraging AI and modern web technologies to make learning more engaging, personalized, and effective.",
  },
  {
    id: "openheart",
    codename: "Operation OpenHeart",
    objective:
      "Build technology with empathy at its core — solutions that prioritize human connection and wellbeing.",
    techStack: ["TypeScript", "Next.js", "API Design", "Mobile-First"],
    status: "in-progress",
    impact:
      "Focused on health and wellness technology that puts people first. Emphasizes thoughtful design and meaningful user impact.",
    description:
      "Inspired by experiences in health-tech (Heartline), this operation explores how open, compassionate technology can improve lives.",
  },
];
