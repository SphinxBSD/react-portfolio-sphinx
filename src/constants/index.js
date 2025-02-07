import {
  devIcon1,
  devIcon2,
  devIcon3,
  devIcon4,
  // devIcon5,
  devIcon6,
  devIcon7,
  // devIcon8,
  devIcon9,
  // devIcon10,
  devIcon11,
  // devIcon12,
  devIcon13,
  devIcon14,
  devImage1,
  devImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "2",
    title: "Resume",
    url: "#resume",
  },
  {
    id: "3",
    title: "About me",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Contact",
    url: "#contact",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Logistic Transport Management System",
    text: "A full-stack web application designed to streamline logistics and transport operations, built with Angular 17 for a dynamic front-end and Spring Boot with PostgreSQL for a secure and scalable backend.",
    backgroundUrl: "src/assets/benefits/card-1.svg",
    iconUrl: [
      devIcon1,
      devIcon6,
      devIcon9,
      devIcon11,
      devIcon4,
      devIcon14,
      devIcon2,
    ],
    imageUrl: devImage1,
  },
  {
    id: "1",
    title: "E-Commerce Platform - Tierra Creativa",
    text: "Tierra Creativa is a full-stack e-commerce web application built with Angular for a dynamic and responsive front-end, and Node.js with Express for a scalable backend, powered by MySQL for secure data management.",
    backgroundUrl: "src/assets/benefits/card-2.svg",
    iconUrl: [devIcon1, devIcon13, devIcon3, devIcon4, devIcon7],
    imageUrl: devImage2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const educationItems = [
  {
    id: "1",
    title: "Universidad Mayor de San Andres",
    description: "Licenciatura en ciencias de la computación",
    date: "Jan, 2019 — Dec, 2024",
  },
  {
    id: "2",
    title: "CEA - Don Bosco ",
    description: "Technician's degree: English language",
    date: "Feb, 2017 — Dec, 2019",
  },
  {
    id: "3",
    title: "Infocal ",
    description: "Certificate course: Data Base with Oracle SQL",
    date: "Jan, 2018 — Jun, 2018",
  },
];

export const experienceItems = [
  {
    id: "1",
    title: "Full stack Web Developer ",
    description: "Trucks Laurel S.R.L.",
    date: "Jan, 2024 — Oct 2024 \nLa Paz, Bolivia",
    details: [
      "As a Web Developer at Trucks Laurel, the main responsibilities included designing, developing, and maintaining the web application. Collaborating with cross-functional teams to create user-friendly interfaces and ensure seamless user experiences. The role required proficiency in both front-end and back-end technologies, leveraging skills in JavaScript, Angular, Spring boot and database management using PostgreSQL, and finally AWS.",
    ],
  },
  {
    id: "2",
    title: "Junior Software Developer ",
    description: "DTIC - UMSA",
    date: "Feb, 2023 — Dec, 2023 \nLa Paz, Bolivia",
    details: [
      "At Communication and Information technologies department of UMSA, I was involved in every stage of software development, from understanding project requirements with senior developers to designing, implementing, debugging, and testing our applications. Working on real-world projects allowed me to enhance my coding skills and gain a deep understanding of the full software lifecycle, working with angular, spring boot, pl/sql, git, spring mvc and docker.",
    ],
  },
];

export const coursesItems = [
  {
    id: "1",
    title: "Angular - The Complete Guide",
    description: "Udemy",
    date: "Apr, 2024 — Aug, 2024",
  },
  {
    id: "2",
    title: "Angular & Spring Boot: Creando Webapp Full Stack",
    description: "Udemy",
    date: "May, 2023 — Feb, 2024",
  },
  {
    id: "3",
    title: "Docker & Kubernetes: The Practical Guide",
    description: "Udemy",
    date: "Aug, 2023 — Dec, 2023",
  },
  {
    id: "4",
    title: "Ultimate AWS Certified Developer Associate 2025 DVA-C02",
    description: "Udemy",
    date: "Sep, 2024 — Dec, 2024",
  },
  {
    id: "5",
    title: "Clase maestra SQL",
    description: "Academia-X",
    date: "Jan, 2022 — Jul, 2022",
  },
  {
    id: "6",
    title: "Clase maestra Hosting",
    description: "Academia-X",
    date: "Apr, 2024 — Oct, 2024",
  },
];
