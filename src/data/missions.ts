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
    role: "Incoming",
    company: "Hydro One",
    status: "incoming",
    minimal: true,
  },
  {
    id: "002",
    role: "Machine Learning Engineer",
    company: "RBC",
    status: "active",
    period: "Present",
    objective:
      "Develop and deploy machine learning solutions within a financial technology environment. Collaborate with engineering teams to build scalable, production-ready AI systems.",
    outcome:
      "Contributing to ML-driven products in a regulated enterprise setting. Applying software engineering rigor to model development, data pipelines, and deployment workflows.",
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
