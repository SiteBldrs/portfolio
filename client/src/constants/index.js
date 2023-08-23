/* eslint-disable no-script-url */
import {
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
  LinkedInIcon,
} from "constants/icons";

export const ROOT = "/",
  ABOUT = "/about",
  PROJECTS = "/projects",
  TOOLS = "/tools",
  REVIEWS = "/reviews",
  QUALIFICATIONS = "/qualifications",
  NOTFOUND = "/*";

export const pathNames = [
  {
    path: ROOT,
    element: "Home",
  },
  {
    path: ABOUT,
    element: "About",
  },
  {
    path: PROJECTS,
    element: "Projects",
  },
  {
    path: TOOLS,
    element: "Tools",
  },
  {
    path: REVIEWS,
    element: "Reviews",
  },
];

export const socials = [
  {
    path: "https://twitter.com/tech_bro_4th",
    title: "Twitter",
    icon: <TwitterIcon />,
  },
  {
    path: "https://www.instagram.com/tech_bro_4th/",
    title: "Instagram",
    icon: <InstagramIcon />,
  },
  {
    path: "https://github.com/SiteBldrs/",
    title: "Github",
    icon: <GithubIcon />,
  },
  {
    path: "https://www.linkedin.com/in/abdullahisalihu/",
    title: "LinkedIn",
    icon: <LinkedInIcon />,
  },
];

export const about_content = [
  {
    title: "IT Stacks",
    subtitle:
      "I'm able to create outstanding digital experiences thanks to my expertise in technology stacks:",
    wrap: true,
    lists: [
      "HTML & CSS",
      "SASS",
      "Tailwind CSS",
      "JavaScript",
      "ReactJS",
      "TypeScript",
      "NextJs",
      "NodeJs",
      "MongoDB",
      "Appwrite",
      "Sanity",
    ],
  },
  {
    title: "What I Offer",
    subtitle:
      "As a developer dedicated to your success, I provide a variety of services, including:",
    lists: [
      "Web development.",
      "IT strategy consulting.",
      "Making digital transformation possible.",
      "Software development and customization.",
      "Crafting unique product engineering solutions.",
    ],
  },
  {
    title: "Customer-Centered Approach:",
    subtitle:
      "I'm committed to delivering excellence while being guided by experience and knowledge. With the help of cutting-edge technology, I can provide services that are specifically designed to meet your needs.",
  },
  {
    title: "Goals and Objectives:",
    subtitle:
      "As a developer, it is my goal to improve people's lives through software and web applications. I write all of my code with the intention of producing intuitive, responsive, and visually appealing digital solutions.",
  },
  {
    title: "Beyond Development:",
    subtitle:
      "I'm very involved in web development, but I also keep an eye on business trends. Beyond work, my love of learning inspires me to grow and innovate.",
  },
];
