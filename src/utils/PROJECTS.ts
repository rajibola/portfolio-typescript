import {
  web,
  portfolio,
  project1,
  claneweb1,
  claneweb2,
  claneweb3,
  prospa1,
  prospa2,
  prospa3,
  prospa4,
  scandiweb1,
  scandiweb2,
  scandiweb3,
  portfolioOne1,
  portfolioOne2,
  portfolioOne3,
  tarvos1,
  tarvos2,
  tarvos3,
  tarvos4,
} from "assets/images";

export function getProject(name: string) {
  return PROJECTS.find(
    (project) => project?.name.split(" ").join("-").toLocaleLowerCase() === name
  );
}
export function getNextProject(name: string) {
  const currentIndex = PROJECTS.findIndex(
    (project) => project?.name.split(" ").join("-").toLocaleLowerCase() === name
  );
  const nextIndex = currentIndex === PROJECTS.length - 1 ? 0 : currentIndex + 1;
  return PROJECTS[nextIndex];
}
const PROJECTS: {
  name: string;
  title: string;
  tools: string[];
  images: string[];
  details: string;
  colors: [];
  tag: "web" | "mobile";
}[] = [
  {
    name: "Clane Website",
    title: "A React Web Application",
    tools: ["React", "Redux", "TailwindCSS", "Styled-Component", "Axios"],
    images: [claneweb1, claneweb2, claneweb3],
    details:
      "We’ve worked incredibly hard to build a talented, industry leading team of professionals. With a team of creative, strategist, business and development specialists, we consistently strive to be at the forefront of new media technology.",
    colors: [],
    tag: "web",
  },
  {
    name: "Scandiweb",
    title: "A React Web Application",
    tools: ["React", "Redux", "TailwindCSS", "Styled-Component", "Axios"],
    images: [scandiweb1, scandiweb2, scandiweb3],
    details:
      "We’ve worked incredibly hard to build a talented, industry leading team of professionals. With a team of creative, strategist, business and development specialists, we consistently strive to be at the forefront of new media technology.",
    colors: [],
    tag: "web",
  },
  {
    name: "First Portfolio",
    title: "A React Web Application",
    tools: ["React", "Redux", "TailwindCSS", "Styled-Component", "Axios"],
    images: [portfolioOne1, portfolioOne2, portfolioOne3],
    details:
      "We’ve worked incredibly hard to build a talented, industry leading team of professionals. With a team of creative, strategist, business and development specialists, we consistently strive to be at the forefront of new media technology.",
    colors: [],
    tag: "web",
  },
  {
    name: "Rapid",
    title: "A React Native Merchant Mobile Application",
    tools: [
      "React Native",
      "TypeScript",
      "Redux",
      "MomentJs",
      "React Native Camera",
      "Axios",
    ],
    colors: [],
    images: [web],
    details: "",
    tag: "mobile",
  },
  {
    name: "Clane Mobile App",
    title: "A React Native Consumer Mobile Application",
    tools: [
      "React Native",
      "Redux",
      "MomentJs",
      "React Native Camera",
      "React Native SVG",
      "Axios",
    ],
    images: [portfolio],
    details: "",
    tag: "mobile",
    colors: [],
  },
  {
    name: "Brij Mobile App",
    title: "A React Native Mobile Application For Storing Asset Documents",
    tools: [
      "React Native",
      "Redux",
      "MomentJs",
      "React Native Camera",
      "React Native SVG",
      "Axios",
    ],
    images: [web],
    details: "",
    tag: "mobile",
    colors: [],
  },
  {
    name: "Tarvos",
    title: "An E-commerce React Native Mobile Application",
    tools: [
      "React Native",
      "Redux",
      "MomentJs",
      "React Native Camera",
      "React Native SVG",
      "Axios",
    ],
    images: [tarvos1, tarvos2, tarvos3, tarvos4],
    details: "",
    tag: "mobile",
    colors: [],
  },
  {
    name: "Prospa",
    title: "A React Web Application",
    tools: [
      "React Native",
      "Redux",
      "MomentJs",
      "React Native Camera",
      "React Native SVG",
      "Axios",
    ],
    images: [prospa1, prospa2, prospa3, prospa4],
    details: "",
    tag: "web",
    colors: [],
  },
  {
    name: "Rise",
    title: "A React Web Application",
    tools: [
      "React Native",
      "Redux",
      "MomentJs",
      "React Native Camera",
      "React Native SVG",
      "Axios",
    ],
    images: [project1],
    details: "",
    tag: "mobile",
    colors: [],
  },
  {
    name: "Tic Tac Toe",
    title: "A React Web Application",
    tools: [
      "React Native",
      "Redux",
      "MomentJs",
      "React Native Camera",
      "React Native SVG",
      "Axios",
    ],
    images: [web],
    details: "",
    tag: "mobile",
    colors: [],
  },
];

export default PROJECTS;
