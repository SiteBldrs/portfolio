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

export const tools = [
  {
    title: "Workstation",
    items: [
      {
        title: "MacBook Pro (13-inch, 2017, Two Thunderbolt 3 ports)",
        description:
          "I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.",
      },
      {
        title: "Airtel 4G Smartbox",
        description:
          "Using a prepaid SIM card and an Airtel 4G Smartbox, I have access to fast and consistent internet from the comfort of my home or place of business.",
      },
    ],
  },
  {
    title: "Development tools",
    items: [
      {
        title: "Visual Studio Code",
        description:
          "Due to how simple and effective VSCode is, I adore using it for development. It's similar to coding having superpowers. Writing, reading, and navigating code is made simple by the interface's simplicity and ease of use. Additionally, the wide variety of extensions that are offered let me personalize it and increase productivity. VSCode has my back whether I'm working on a web, mobile, or other project. Coding is now enjoyable and hassle-free thanks to this ideal companion!",
      },
      {
        title: "Chrome",
        description:
          "Chrome is an excellent choice for developers due to its numerous tools and integrations. It simplifies web page development, enables real-time editing of HTML, CSS, and JavaScript, and simplifies testing and troubleshooting.",
      },
      {
        title: "LT Browser",
        description:
          "LT Browser simplifies website testing and optimization for various devices, allowing users to see their website's appearance on different screen sizes and resolutions. This saves time and effort, ensuring smooth functionality across all platforms. LT Browser is a developer's best friend for responsive design and is a valuable tool for testing and optimizing websites for different devices.",
      },
      {
        title: "Unsplash",
        description:
          "I use Unsplash for development since it's a fantastic site that offers high-quality, gorgeous photographs for free. It saves me time and effort while looking for appropriate graphics for my projects, plus the photographs are donated by excellent photographers from all around the world.",
      },
    ],
  },
  {
    title: "Production",
    items: [
      {
        title: "Vercel",
        description:
          "I use Vercel for production because it's an awesome platform that makes deploying and managing websites and web applications super easy and efficient. It takes care of all the technical stuff in the background, so I can focus on building and improving my projects without worrying about server setups and configurations.",
      },
      {
        title: "Github",
        description:
          "I use GitHub for production because it provides an efficient and collaborative platform for managing code, version control, and team coordination.",
      },
    ],
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

export const reviews = [
  {
    createdAt: "September 2, 2022",
    name: "Abdullahi Salihu",
    content:
      "The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit.",
    rating: 4.5,
  },
  {
    createdAt: "January 15, 2018",
    name: "James Morgan",
    content:
      "Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards.",
    rating: 5,
  },
  {
    createdAt: "August 13, 2020",
    name: "Abdullahi Salihu",
    content: "The only thing I loved more than computers as a kid was space.",
    rating: 4,
  },
  {
    createdAt: "September 2, 2022",
    name: "Abdullahi Salihu",
    content:
      "The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit.",
    rating: 2,
  },
];

export const projects = [
  {
    name: "ChatGPT Clone",
    description:
      "The Chat GPT Clone is created using the React framework that emulates the capabilities of a chatbot powered by the GPT-3.5 language model.",
    url: "https://reactjs-openai-chatgpt-clone.vercel.app/",
  },
  {
    name: "ICart",
    description:
      "A diverse team aims to create sustainable value for food businesses in UAE and Nigeria. They offer a comprehensive solution, including solar-powered, eco-friendly food kiosks, marketing support, trained staff, and management assistants through a dedicated app.",
    url: "https://geticart.com",
  },
  {
    name: "GADA Studios",
    description:
      "GADA Studios is a brand and product design agency focused on building brands that work. They are the bridge that connects the dots between business model and the users’ needs.",
    url: "https://gada-studios.vercel.app/",
  },
  {
    name: "Google Clone",
    description:
      "Google Clone is a clone of the well-known search engine Google. It aims to provide consumers with a comparable search experience while simultaneously providing its own distinctive features.",
    url: "https://gada-studios.vercel.app/",
  },
];

export const qualifications = [
  {
    type: "experience",
    company: "ITCentral",
    title: "ReactJs Intern",
    date: "October 5th 2022 - February 31th 2023",
    description:
      "My internship at IT Central was a valuable learning experience that prepared me for a successful career in the IT industry. I had the opportunity to work alongside experienced professionals and learn about the latest technologies and industry trends. Additionally, I was given challenging tasks and responsibilities, helping me develop a strong work ethic and confidence in my abilities.",
    url: "https://itcentral.ng/",
  },
  {
    type: "education",
    company: "Colab advanced Code School",
    title: "Web Development",
    date: "January 2nd 2019 - December 14th 2022",
    description:
      "CoLab is a collaborative community and innovation hub for startups, innovators, creatives, and entrepreneurs. At Colab, I started learning to code. It was challenging at first since the system I was using had various problems, but I persisted and eventually became the developer I am today.",
    url: "https://colab.com.ng/",
  },
];

export const about_content = [
  "As a Developer, I am passionate about tailoring solutions to my clients' needs and developing high-quality web apps that help companies achieve their objectives. Web design and development, software creation and modification, mobile app development, IT consulting, digital transformation, and unique product engineering are some of the services I provide. I provide a variety of services to assist my clients in realizing their goals.",
  "Based on my expertise and experience, I strive to provide the finest service possible. By integrating cutting-edge technology, I can ensure that my customers receive high-quality solutions that are tailored to their individual needs and goals.",
  "My goal as a developer is to create software and web applications that improve people's lives. I take a complete approach to programming, always keeping the user experience in mind and creating software that is intuitive, responsive, and visually appealing.",
  "When I'm not working on web development projects, I like to keep up with the newest methodologies and trends in the industry. In my spare time, I also enjoy learning new things.",
];
