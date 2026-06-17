export interface Collaboration {
  id: string;
  title: string;
  organization: string;
  role: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export const collaborations: Collaboration[] = [
  {
    id: "ci-tech",
    title: "President & Co-Founder",
    organization: "CI Tech",
    role: "President & Co-Founder",
    description:
      "Co-founded and lead CI Tech, building a technical community focused on innovation, collaboration, and hands-on engineering at Ontario Tech.",
    highlights: [
      "Founded the club and shaped its vision and direction",
      "Led initiatives, events, and member engagement",
      "Built a community around technology and execution",
    ],
    tags: ["Leadership", "Founder", "Community"],
  },
  {
    id: "cloud-club",
    title: "Sponsorship Director",
    organization: "Cloud Computing Club",
    role: "Sponsorship Director",
    description:
      "Lead sponsorship strategy and partnerships for the Cloud Computing Club, connecting industry partners with club initiatives and technical programming.",
    highlights: [
      "Secured and managed sponsor relationships",
      "Supported club events and technical workshops",
      "Bridged industry with student cloud computing community",
    ],
    tags: ["Sponsorship", "Cloud", "Leadership"],
  },
  {
    id: "investment-club",
    title: "Director of Events",
    organization: "Investment Club",
    role: "Director of Events",
    description:
      "Direct events programming for the university Investment Club, planning and executing initiatives that develop member engagement in finance and investing.",
    highlights: [
      "Planned and led club events and programming",
      "Coordinated logistics and member engagement",
      "Bridged technical thinking with financial literacy",
    ],
    tags: ["Leadership", "Finance", "Events"],
  },
  {
    id: "eng-society",
    title: "Academic Affairs",
    organization: "Ontario Tech Engineering Society",
    role: "Academic Affairs",
    description:
      "Academic Affairs lead for the Engineering Society, supporting student academic initiatives, advocacy, and engineering culture on campus.",
    highlights: [
      "Supported academic initiatives for engineering students",
      "Organized and participated in student-facing events",
      "Fostered collaboration among engineering students",
    ],
    tags: ["Leadership", "Academia", "Community"],
  },
  {
    id: "cppnorth",
    title: "Technical Assistant Volunteer",
    organization: "CppNorth, The Canadian C++ Conference",
    role: "Technical Assistant Volunteer",
    description:
      "Volunteered as a Technical Assistant at CppNorth, Canada's premier C++ conference, supporting technical operations and conference execution.",
    highlights: [
      "Supported technical setup and conference operations",
      "Collaborated with organizers and speakers",
      "Contributed to a major national developer conference",
    ],
    tags: ["C++", "Volunteer", "Conference"],
  },
  {
    id: "scouty",
    title: "Marketing & Growth",
    organization: "Scouty",
    role: "Content Creator",
    description:
      "Contributed to marketing and growth initiatives for Scouty, helping expand reach and engagement through strategic outreach and community building.",
    highlights: [
      "Drove growth-focused campaigns and outreach",
      "Bridged technical understanding with marketing strategy",
      "Collaborated cross-functionally on user acquisition",
    ],
    tags: ["Growth", "Marketing", "Strategy"],
  },
  {
    id: "technisahacks",
    title: "Hackathon Host & Growth",
    organization: "TechnisaHacks",
    role: "Host & Growth Lead",
    description:
      "Hosted and organized own hackathon at TechnisaHacks while driving growth initiatives — leading end-to-end event planning, outreach, community engagement, and execution.",
    highlights: [
      "Hosted and organized a full hackathon from planning to execution",
      "Coordinated logistics, outreach, and participant engagement",
      "Drove growth strategy to expand the hackathon ecosystem",
      "Connected students and builders through hands-on event experience",
    ],
    tags: ["Hackathon", "Host", "Growth", "Leadership"],
  },
  {
    id: "student-union",
    title: "Student Union Ambassador",
    organization: "Ontario Tech Student Union",
    role: "Ambassador",
    description:
      "Served as a Student Union Ambassador, representing student interests, facilitating campus engagement, and supporting university community initiatives.",
    highlights: [
      "Represented student body at campus events",
      "Facilitated communication between students and administration",
      "Promoted inclusive campus culture",
    ],
    tags: ["Ambassador", "Community", "Representation"],
  },
];

export interface NetworkNode {
  id: string;
  label: string;
  type: "person" | "org" | "project";
  x: number;
  y: number;
}

export interface NetworkEdge {
  from: string;
  to: string;
}

export const networkNodes: NetworkNode[] = [
  { id: "inshal", label: "Inshal", type: "person", x: 200, y: 155 },
  { id: "rbc", label: "RBC", type: "org", x: 80, y: 55 },
  { id: "heartline", label: "Heartline", type: "org", x: 320, y: 55 },
  { id: "hydro", label: "Hydro One", type: "org", x: 200, y: 25 },
  { id: "ci-tech", label: "CI Tech", type: "org", x: 35, y: 195 },
  { id: "cloud", label: "Cloud Club", type: "org", x: 95, y: 265 },
  { id: "invest", label: "Invest Club", type: "org", x: 155, y: 295 },
  { id: "eng-soc", label: "EngSoc", type: "org", x: 305, y: 285 },
  { id: "scouty", label: "Scouty", type: "org", x: 365, y: 195 },
  { id: "technisa", label: "TechnisaHacks", type: "org", x: 365, y: 120 },
  { id: "cppnorth", label: "CppNorth", type: "org", x: 55, y: 120 },
  { id: "empowerher", label: "EmpowerHer", type: "org", x: 155, y: 225 },
  { id: "ot-research", label: "OT Research", type: "org", x: 245, y: 225 },
];

export const networkEdges: NetworkEdge[] = [
  { from: "inshal", to: "rbc" },
  { from: "inshal", to: "heartline" },
  { from: "inshal", to: "hydro" },
  { from: "inshal", to: "ci-tech" },
  { from: "inshal", to: "cloud" },
  { from: "inshal", to: "invest" },
  { from: "inshal", to: "eng-soc" },
  { from: "inshal", to: "scouty" },
  { from: "inshal", to: "technisa" },
  { from: "inshal", to: "cppnorth" },
  { from: "inshal", to: "empowerher" },
  { from: "inshal", to: "ot-research" },
  { from: "ci-tech", to: "eng-soc" },
  { from: "cloud", to: "eng-soc" },
  { from: "invest", to: "eng-soc" },
];
