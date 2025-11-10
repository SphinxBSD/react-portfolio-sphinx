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
  file02,
  homeSmile,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  searchMd,
  sliders04,

  devImage3,
  devIcon15,
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
  {
    id: "2",
    title: "Odisea Rent a Car",
    text: "Odisea Rent a Car is a descentralized application built with React Vite and Soroban for the Stellar Network in order to process the transactions",
    backgroundUrl: "src/assets/benefits/card-4.svg",
    iconUrl: [devIcon15],
    imageUrl: devImage3,
    light: true,
  },
  {
    id: "3",
    title: "Sueltitos",
    text: "Sueltitos was a project built with Ethereum scaffold and Solidity, deployed on arbitrum network",
    backgroundUrl: "src/assets/benefits/card-4.svg",
    iconUrl: [],
    imageUrl: devImage3,
    light: true,
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
    id: "0",
    title: "Smart Contract Developer Internship",
    description: "Blockchain Consultora",
    date: "July, 2025 — Oct, 2025 \nLa Paz, Bolivia",
    details: [
      "Developed and tested smart contracts using Foundry and Solidity, applying OpenZeppelin standards and ERC-4337 (Account Abstraction) - Designed and implemented zero-knowledge proof circuits using Noir, generating off-chain and on-chain proofs (e.g., age verification) - Built prototype dApps integrating ZK proofs with React (Vite/Next.js) and JWT authentication",
    ],
  },
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
