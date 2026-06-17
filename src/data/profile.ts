export const profile = {
  name: "Inshal Chaudhry",
  class: "Engineer",
  subclass: "Founder",
  alignment: "Growth/GTM",
  level: 21,
  xp: 8420,
  xpToNext: 10000,
  currentMission: "BUILD TECHNOLOGY THAT SOLVES REAL PROBLEMS",
  evolutionPath: ["ENGINEER", "BUILDER", "FOUNDER"],
  university: "Ontario Tech University",
  program: "Software Engineering",
  contact: {
    email: "chaudhryinshal@gmail.com",
    linkedin: "https://www.linkedin.com/in/inshalch",
    github: "https://github.com/Inshalc",
  },
  profileImage: "/profile.jpg",
} as const;

export const skills = [
  { name: "Python", level: 88 },
  { name: "JavaScript", level: 85 },
  { name: "Cloud Computing", level: 78 },
  { name: "AI / Machine Learning", level: 82 },
  { name: "Leadership", level: 90 },
  { name: "Public Speaking", level: 85 },
  { name: "Product Thinking", level: 80 },
  { name: "Research", level: 72 },
] as const;

export const traits = {
  buffs: ["Curiosity", "Leadership", "Execution"],
  debuff: "sidequestmaxxing",
} as const;

export const growthStats = [
  { category: "Engineering", value: 88, trend: "+12%" },
  { category: "Leadership", value: 92, trend: "+18%" },
  { category: "Execution", value: 90, trend: "+15%" },
  { category: "AI Capability", value: 84, trend: "+22%" },
  { category: "Research", value: 76, trend: "+10%" },
  { category: "Communication", value: 85, trend: "+14%" },
] as const;