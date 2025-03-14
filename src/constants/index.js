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

import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";

import java from "../assets/tech/java.png";
import bootstrap from "../assets/tech/bootstrap.png";
// import express from "../assets/tech/express.png"
import firebase from "../assets/tech/firebase.png";
import next from "../assets/tech/next.png";
// import postman from "../assets/tech/postman.png"
import sql from "../assets/tech/sql.png";
// import vsCode from "../assets/tech/vsCode.png"
import Balance1studio from "../assets/company/Balance1studio.png";

import AmazoneClone from "../assets/projects/AmazoneClone.png";
import PetsShop from "../assets/projects/PetsShop.png";
import DynamicForm from "../assets/dynamic-form.png";
import SchoolCRM from "../assets/projects/SchoolCRM.png";
import Kanban_Board from "../assets/projects/Kanban_Board.png";
import Text_Editor from "../assets/projects/Text_Editor.png"
import NextJS_Dashboard from "../assets/projects/NextJS_Dashboard.png"
import Blogi from "../assets/projects/Blogi.png"
import FinancialAI from "../assets/projects/FinancialAI.png"
import Livepng from "../assets/live-png.png";

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
      "Participated in code reviews to ensure high-quality code and maintainability in the React.js codebase.",
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
    "name": "Blogi - Fullstack Blogging Platform",
    "description": "A fullstack blogging platform built with React and Node.js, enabling users to create, edit, and manage blog posts with authentication, image uploads and pagination. Features a responsive UI, JWT-secured API, and a seamless user experience.",
    "tags": [
      {
        "name": "react",
        "color": "blue-text-gradient"
      },
      {
        "name": "node.js",
        "color": "green-text-gradient"
      },
      {
        "name": "express.js",
        "color": "yellow-text-gradient"
      },
      {
        "name": "mongodb",
        "color": "red-text-gradient"
      },
      {
        "name": "tailwind css",
        "color": "purple-text-gradient"
      },
      {
        "name": "jwt authentication",
        "color": "orange-text-gradient"
      },
      {
        "name": "multer",
        "color": "pink-text-gradient"
      }
    ],
    "image": Blogi,
    "source_code_link": {
      "frontend": "https://github.com/Raj2raaz/Blog_Frontend",
      "backend": "https://github.com/Raj2raaz/Blog_Backend"
    },
    "live_link": "https://blogi-subham.netlify.app/"
  },  
  {
    "name": "Next.js Dashboard with Google Sheets",
    "description": "A dynamic dashboard integrated with Google Sheets for real-time data visualization. Built with Next.js, Node.js, and MongoDB, it features JWT authentication, data fetching, CRUD operations, and a responsive UI with Tailwind CSS.",
    "tags": [
      {
        "name": "next.js",
        "color": "blue-text-gradient"
      },
      {
        "name": "node.js",
        "color": "green-text-gradient"
      },
      {
        "name": "mongodb",
        "color": "pink-text-gradient"
      },
      {
        "name": "tailwind css",
        "color": "purple-text-gradient"
      },
      {
        "name": "google sheets api",
        "color": "yellow-text-gradient"
      }
    ],
    "image": NextJS_Dashboard, 
    "source_code_link": "https://github.com/Raj2raaz/NextJS_Dashboard",
    "live_link": "https://next-js-dashboard-alpha-lovat.vercel.app/"
  }, 
  {
    "name": "Financial AI - AI-Powered Assistant",
    "description": "An AI-powered financial assistant that helps users automate financial queries, get insights, and manage tasks. Built with React, Node.js, and OpenAI’s ChatGPT, it provides real-time financial assistance with chatbot integration and a user-friendly interface.",
    "tags": [
      {
        "name": "react",
        "color": "blue-text-gradient"
      },
      {
        "name": "node.js",
        "color": "green-text-gradient"
      },
      {
        "name": "openai api",
        "color": "red-text-gradient"
      },
      {
        "name": "express.js",
        "color": "yellow-text-gradient"
      },
      {
        "name": "tailwind css",
        "color": "purple-text-gradient"
      }
    ],
    "image": FinancialAI, 
    "source_code_link": "https://github.com/Raj2raaz/Chat_Application",
    "live_link": "https://finbotassistant.netlify.app//"
  },   
  {
    name: "Kanban Board ",
    description:
      "A real-time task management application that allows users to organize, track, and collaborate on projects using a drag-and-drop interface. Built with React, Node.js, Express, and Socket.io for real-time updates, ensuring seamless team collaboration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "red-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind css",
        color: "purple-text-gradient",
      },
    ],
    image: Kanban_Board,
    source_code_link: "https://github.com/YourUsername/Kanban-Board",
    live_link: "https://kanban-app.netlify.app/",
  },
  {
    name: "Rich Text Editor",
    description:
      "A lightweight and intuitive rich text editor with formatting options, autosave, and state management using React Context API. Built with React, useContext, and Local Storage, it provides a seamless writing experience without external dependencies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "useContext",
        color: "green-text-gradient",
      },
      {
        name: "local storage",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind css",
        color: "purple-text-gradient",
      },
    ],
    image: Text_Editor,
    source_code_link: "https://github.com/YourUsername/Text-Editor",
    live_link: "https://text-editor-app.netlify.app/",
  },
  {
    name: "School CRM Application",
    description:
      "A web-based platform for managing students, teachers, and classes efficiently. Built with React, Node.js, and MongoDB, it features CRUD operations, dynamic forms, analytics with graphs, authentication, and responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind css",
        color: "purple-text-gradient",
      },
    ],
    image: SchoolCRM,
    source_code_link: "https://github.com/Raj2raaz/School_ERP",
    live_link: "https://erp-school.netlify.app/",
  },
  {
    name: "Dynamic JSON Form ",
    description:
      "An interactive tool for creating and managing forms from JSON data. Built with React and TypeScript, it offers real-time updates, field validation, dark mode, and options to download form submissions as JSON.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "jest",
        color: "pink-text-gradient",
      },
    ],
    image: DynamicForm,
    source_code_link: "https://github.com/Raj2raaz/Dynamic_Form_Generator/",
    live_link: "https://jsonformgenerator.netlify.app/",
  },
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
];

export { services, technologies, experiences, testimonials, projects };
