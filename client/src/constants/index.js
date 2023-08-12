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
  "As a Developer, I am passionate about tailoring solutions to my clients' needs and developing high-quality web apps that help companies achieve their objectives. Web design and development, software creation and modification, mobile app development, IT consulting, digital transformation, and unique product engineering are some of the services I provide. I provide a variety of services to assist my clients in realizing their goals.",
  "Based on my expertise and experience, I strive to provide the finest service possible. By integrating cutting-edge technology, I can ensure that my customers receive high-quality solutions that are tailored to their individual needs and goals.",
  "My goal as a developer is to create software and web applications that improve people's lives. I take a complete approach to programming, always keeping the user experience in mind and creating software that is intuitive, responsive, and visually appealing.",
  "When I'm not working on web development projects, I like to keep up with the newest methodologies and trends in the industry. In my spare time, I also enjoy learning new things.",
];
