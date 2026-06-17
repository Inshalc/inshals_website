export interface TimelineMilestone {
  id: string;
  year: string;
  sortYear: number;
  title: string;
  subtitle: string;
  narrative: string;
  type: "education" | "leadership" | "internship" | "award" | "career";
}

export const timeline: TimelineMilestone[] = [
  {
    id: "entry",
    year: "2022",
    sortYear: 2022,
    title: "Engineering Journey Begins",
    subtitle: "Ontario Tech University — Software Engineering",
    narrative:
      "Entered the Software Engineering program at Ontario Tech University with a clear vision: build technology that creates real impact. Laid the foundation in algorithms, systems design, and collaborative engineering.",
    type: "education",
  },
  {
    id: "leadership-early",
    year: "2023",
    sortYear: 2023,
    title: "Leadership & Founding",
    subtitle: "CI Tech · EngSoc · Investment Club",
    narrative:
      "Co-founded CI Tech as President, and stepped into executive roles with the Engineering Society and Investment Club — building communities, leading events, and driving execution across campus.",
    type: "leadership",
  },
  {
    id: "heartline",
    year: "2024",
    sortYear: 2024,
    title: "Heartline Internship",
    subtitle: "Software Engineer Intern",
    narrative:
      "Completed a software engineering internship at Heartline, a health-tech company. Shipped production features, strengthened full-stack skills, and gained startup agility.",
    type: "internship",
  },
  {
    id: "rbc",
    year: "2025",
    sortYear: 2025,
    title: "RBC — Machine Learning Engineer",
    subtitle: "Enterprise AI at Scale",
    narrative:
      "Joined RBC as a Machine Learning Engineer, applying AI expertise in a regulated financial environment. Building production ML systems with engineering rigor and enterprise standards.",
    type: "career",
  },
  {
    id: "research-ot",
    year: "2025",
    sortYear: 2025.1,
    title: "Research Assistant",
    subtitle: "Ontario Tech University",
    narrative:
      "Completed a Research Assistant role at Ontario Tech University — applying engineering and analytical skills to academic research under faculty supervision.",
    type: "career",
  },
  {
    id: "empowerher",
    year: "2025",
    sortYear: 2025.2,
    title: "Software Developer Intern",
    subtitle: "EmpowerHer",
    narrative:
      "Built software as a Software Developer Intern at EmpowerHer, contributing technical solutions to initiatives supporting women in STEM.",
    type: "career",
  },
  {
    id: "awards",
    year: "2025–2026",
    sortYear: 2025.5,
    title: "Recognition & Awards",
    subtitle: "Hydro One WiE Award · OPEFE Scholarship",
    narrative:
      "Recognized with the Hydro One Women in Engineering Award and the Ontario Professional Engineers Foundation for Education Scholarship — affirming academic excellence and community leadership.",
    type: "award",
  },
  {
    id: "scouty",
    year: "2026",
    sortYear: 2026,
    title: "Scouty — Marketing & Growth",
    subtitle: "Content Creator at Scouty",
    narrative:
      "Joined Scouty this year to drive marketing and growth initiatives. Bridged technical skills with business strategy, learning how to scale products and engage communities effectively.",
    type: "career",
  },
  {
    id: "hackathon-host",
    year: "2026",
    sortYear: 2026.05,
    title: "Hosted Own Hackathon",
    subtitle: "HackCI — Host & Organizer",
    narrative:
      "Hosted and organized own hackathon at HACKCI — leading planning, logistics, outreach, and execution to bring students and builders together for a hands-on building experience.",
    type: "leadership",
  },
  {
    id: "hackathon-host",
    year: "2026",
    sortYear: 2026.05,
    title: "Growth Lead",
    subtitle: "TechnisaHacks — Organizer",
    narrative:
      "Hosted and organized own hackathon at TechnisaHacks — leading planning, logistics, outreach, and execution to bring students and builders together for a hands-on building experience.",
    type: "leadership",
  },
  {
    id: "hydro",
    year: "2026",
    sortYear: 2026.1,
    title: "Hydro One — Incoming",
    subtitle: "Incoming",
    narrative: "Incoming role at Hydro One.",
    type: "career",
  },
];

export function getTimelineByYear() {
  const sorted = [...timeline].sort((a, b) => a.sortYear - b.sortYear);
  const groups: { year: string; milestones: TimelineMilestone[] }[] = [];

  for (const milestone of sorted) {
    const last = groups[groups.length - 1];
    if (last && last.year === milestone.year) {
      last.milestones.push(milestone);
    } else {
      groups.push({ year: milestone.year, milestones: [milestone] });
    }
  }

  return groups;
}
