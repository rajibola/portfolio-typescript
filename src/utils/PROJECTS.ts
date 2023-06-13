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
  // {
  //   name: "Animere",
  //   title: "A Web Banner Ad Designer",
  //   tools: [
  //     "Next13",
  //     "TypeScript",
  //     "Redux",
  //     "Framer Motion",
  //     "Styled-Component",
  //     "GraphQL",
  //     "Apollo",
  //   ],
  //   images: [
  //     "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684825840/portfolio/screenshot-2023-05-21-at-173739_mo61rx.webp",
  //     "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684825840/portfolio/screenshot-2023-05-21-at-174512_sof3e3.webp",
  //     "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684825840/portfolio/screenshot-2023-05-21-at-174442_a5j1wz.webp",
  //     "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684825841/portfolio/screenshot-2023-05-21-at-174618_stpsk9.webp",
  //     "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684825840/portfolio/screenshot-2023-04-18-at-225233_oysma3.webp",
  //     "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684825840/portfolio/screenshot-2023-05-21-at-173953_awtpk1.webp",
  //     "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684825841/portfolio/screenshot-2023-05-21-at-174546_zmnm2k.webp",
  //   ],
  //   details:
  //     "We’ve worked incredibly hard to build a talented, industry leading team of professionals. With a team of creative, strategist, business and development specialists, we consistently strive to be at the forefront of new media technology.",
  //   colors: [],
  //   tag: "web",
  // },
  {
    name: "BannerWave Component Library",
    title: "A component library for building Animere",
    tools: [
      "React18",
      "Storybook",
      "Styled-Component",
      "Webpack",
      "Babel",
      "TypeScript",
      "NPM",
    ],
    images: [
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684837008/portfolio/screenshot-2023-05-21-at-172905-2_yho745.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684837009/portfolio/screenshot-2023-05-21-at-172851-2_mh8xgi.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684837008/portfolio/screenshot-2023-05-21-at-173302-2_kjvcjc.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684837009/portfolio/screenshot-2023-05-23-at-110631-2_fzcoec.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684837009/portfolio/screenshot-2023-05-21-at-173225-2_iwvd9i.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684837008/portfolio/screenshot-2023-05-23-at-110428-2_vc2j01.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684837008/portfolio/screenshot-2023-05-23-at-110428-2_vc2j01.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684837008/portfolio/screenshot-2023-05-23-at-110456-2_gl2v7k.webp",
    ],
    details:
      "We’ve worked incredibly hard to build a talented, industry leading team of professionals. With a team of creative, strategist, business and development specialists, we consistently strive to be at the forefront of new media technology.",
    colors: [],
    tag: "web",
  },
  {
    name: "Clane Website",
    title: "A React Web Application",
    tools: ["React", "Redux", "TailwindCSS", "Styled-Component", "Axios"],
    images: [
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690592/portfolio/1_pt9d3q.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690592/portfolio/2_v0q5or.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690592/portfolio/3_kbqzjp.webp",
    ],
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
    images: [
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690680/portfolio/1_vld49j.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690680/portfolio/2_o6bkyc.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690680/portfolio/3_rbow9b.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690680/portfolio/4_ahkyyy.webp",
    ],
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
    images: [
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690549/portfolio/1_lhexk2.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690549/portfolio/2_e8pvnp.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690550/portfolio/3_pwtdvy.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690550/portfolio/4_pksak5.webp",
    ],
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
    images: [
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690496/portfolio/1_b6bicx.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690496/portfolio/2_slndm5.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690496/portfolio/3_okdb2d.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690496/portfolio/4_wqzgmp.webp",
    ],
    details: "",
    tag: "mobile",
    colors: [],
  },
  {
    name: "Scandiweb",
    title: "A React Web Application",
    tools: ["React", "Redux", "TailwindCSS", "Styled-Component", "Axios"],
    images: [
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684691043/portfolio/1_ugjdc6.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684691043/portfolio/2_kodziq.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684691043/portfolio/3_yrsqoy.webp",
    ],
    details:
      "We’ve worked incredibly hard to build a talented, industry leading team of professionals. With a team of creative, strategist, business and development specialists, we consistently strive to be at the forefront of new media technology.",
    colors: [],
    tag: "web",
  },
  {
    name: "First Portfolio",
    title: "A React Web Application",
    tools: ["React", "Redux", "TailwindCSS", "Styled-Component", "Axios"],
    images: [
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684696710/portfolio/1_udec3m.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684696710/portfolio/2_jdkzz5.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684696710/portfolio/3_eiogxr.webp",
    ],
    details:
      "We’ve worked incredibly hard to build a talented, industry leading team of professionals. With a team of creative, strategist, business and development specialists, we consistently strive to be at the forefront of new media technology.",
    colors: [],
    tag: "web",
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
    images: [
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690730/portfolio/1_qiqgas.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690730/portfolio/2_kcdanr.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690730/portfolio/3_sqlyjc.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690731/portfolio/4_nclwxy.webp",
    ],
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
    images: [
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690856/portfolio/3_owely8.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690856/portfolio/4_ybzstt.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690856/portfolio/1_aq4wjd.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690856/portfolio/2_fqw5by.webp",
    ],
    details: "",
    tag: "web",
    colors: [],
  },
  {
    name: "Brass",
    title: "A React Web Application",
    tools: [
      "React Native",
      "Redux",
      "MomentJs",
      "React Native Camera",
      "React Native SVG",
      "Axios",
    ],
    images: [
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684688893/portfolio/1_wmm2dl.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684688893/portfolio/2_bx2eqg.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684688893/portfolio/3_wtervg.webp",
      "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684688893/portfolio/4_zc6eoe.webp",
    ],
    details: "",
    tag: "mobile",
    colors: [],
  },
];

export default PROJECTS;
