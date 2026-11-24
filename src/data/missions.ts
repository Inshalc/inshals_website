export interface Mission {
  id: string;
  role: string;
  company: string;
  status?: "active" | "completed" | "incoming";
  objective?: string;
  outcome?: string;
  period?: string;
  minimal?: boolean;
}

export const missions: Mission[] = [
  {
    id: "001",
    role: "AI Solutions",
    company: "Hydro One",
    status: "active",
    period: "Sep 2026 – Present",
    objective:
      "Build AI solutions at Hydro One, applying machine learning inside a large utility after the Women in Engineering work term.",
    outcome:
      "Started in September 2026. Current role is AI Solutions, following the completed Generative AI co-op at RBC.",
  },
  {
    id: "002",
    role: "Machine Learning Engineer",
    company: "RBC",
    status: "completed",
    period: "Jan 2026 – Aug 2026",
    objective:
      "Develop and deploy machine learning solutions on the Generative AI team. Collaborate with engineering teams to build scalable, production-ready AI systems.",
    outcome:
      "Completed an eight-month co-op in August 2026. Shipped ML work in a regulated enterprise setting, from model development through data pipelines and deployment.",
  },
  {
    id: "003",
    role: "Software Engineer Intern",
    company: "Heartline",
    status: "completed",
    objective:
      "Build and maintain software features for a health-tech platform. Work across the stack to deliver reliable, user-focused engineering solutions.",
    outcome:
      "Gained hands-on experience shipping production code in a startup environment. Strengthened full-stack development and agile collaboration skills.",
  },
  {
    id: "004",
    role: "Research Assistant",
    company: "Ontario Tech University",
    status: "completed",
    objective:
      "Support academic research initiatives within the university. Apply engineering and analytical skills to research projects under faculty supervision.",
    outcome:
      "Contributed to research methodology, data analysis, and technical documentation within an academic research environment.",
  },
  {
    id: "005",
    role: "Software Developer Intern",
    company: "EmpowerHer",
    status: "completed",
    objective:
      "Build and maintain software for EmpowerHer initiatives focused on empowering women in technology and engineering.",
    outcome:
      "Developed technical solutions supporting EmpowerHer's mission in STEM, applying full-stack development skills to real community impact.",
  },
];
