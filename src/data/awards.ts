export interface Award {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export const awards: Award[] = [
  {
    id: "opefe",
    title: "Ontario Professional Engineers Foundation for Education Scholarship",
    issuer: "Engineers Foundation Ontario",
    year: "2024–2025",
    description:
      "Undergraduate scholarship recognizing academic achievement among engineering students at CEAB-accredited Ontario institutions.",
  },
  {
    id: "hydro-wie",
    title: "Hydro One Women in Engineering Award",
    issuer: "Hydro One · Ontario Tech WiE Society",
    year: "2026",
    description:
      "Award celebrating academic excellence and leadership within the university and broader community. Includes an opportunity with Hydro One.",
  },
];
