import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  // html,
  // css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  // docker,
  // carrent,
  // jobit,
  tripguide,
  // threejs,
} from "../assets";

import html from "../assets/tech/html.png"
import css from "../assets/tech/css.png"

import java from "../assets/tech/java.png"
import bootstrap from "../assets/tech/bootstrap.png"
// import express from "../assets/tech/express.png"
import firebase from "../assets/tech/firebase.png"
import next from "../assets/tech/next.png"
// import postman from "../assets/tech/postman.png"
import sql from "../assets/tech/sql.png"
// import vsCode from "../assets/tech/vsCode.png"
import Balance1studio from "../assets/company/Balance1studio.png"

import AmazoneClone from "../assets/projects/AmazoneClone.png";
import PetsShop from "../assets/projects/PetsShop.png";

// import LinkedIn from "../assets/linkedIn.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Management",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "Website Developer",
    company_name: "Balance 1 Studio",
    icon: Balance1studio,
    iconBg: "#383E56",
    date: "Dec 2023 - Feb 2024",
    points: [
      "Developed and maintained a comprehensive website for Balance 1 Studio using React.js, focusing on both aesthetics and functionality to represent a global wellness center.",
      "Integrated traditional Indian wellness practices with modern web technologies, creating a unique user experience that reflects the center's fusion of ancient and contemporary wellness techniques.",
      "Designed visually engaging and responsive content using frontend technologies like CSS, ensuring cross-browser compatibility and optimal performance.",
      "Emphasized user experience by implementing an intuitive and accessible user interface, improving navigation and engagement across devices.",
      "Collaborated with the design team to develop visually appealing layouts and ensure alignment with Balance 1 Studio’s wellness-focused mission.",
      "Participated in code reviews to ensure high-quality code and maintainability in the React.js codebase."
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Amazone Clone",
    description:
      "A clone of the Amazon website made with HTML, CSS, React, and Firebase. It includes features like product search, user login, and shopping cart management, providing a smooth and easy-to-use online shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: AmazoneClone,
    source_code_link: "https://github.com/Raj2raaz/Amazon-clone",
  },
  {
    name: "Pets Shop",
    description:
      "Built a pet shop website with React and Node.js, allowing users to browse pets, make inquiries, and purchase. Includes secure login with JWT and is developed with a React frontend and Node.js backend. Demonstrated strong problem-solving skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
    ],
    image: PetsShop,
    source_code_link: "hhttps://github.com/Raj2raaz/web-wizard",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
