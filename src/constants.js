// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";

import mongodbLogo from "./assets/tech_logo/mongodb.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import TTlogo from "./assets/company_logo/TT logo.png";

// Education Section Logo's
import interLogo from "./assets/education_logo/+2 logo.png";
import BSCLogo from "./assets/education_logo/Bachelor's logo.jpg";
import masterLogo from "./assets/education_logo/master_logo2.png";

// Project Section Logo's
import bmiCalculator from "./assets/work_logo/bmi calculator logo.png"; 
import addToCart from "./assets/work_logo/Added-to-cart logo.png";
import todoLogo from './assets/work_logo/todo-logo.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: TTlogo,
    role: "Frontend Developer",
    company: "TT INFOTECHS PVT LTD",
    date: "Oct 2022 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: masterLogo,
    school: "G. Pullareddy Degree & P.G College, Hyderabad",
    date: "Aug 2019 - sept 2021",
    grade: "7.81 CGPA",
    desc: "I have completed my Master's degree (MCA) in Physics from G. Pullareddy Degree & P.G College, Hyderabad. During my time at G Pullareddy , I am honed my skills by learning full stack development using javascript , Take some courses for better understanding  of the language for  prepare myself for industry standard.",
    degree: "Master of Science - MSC",
  },
  {
    id: 1,
    img: BSCLogo,
    school: "Remuna Degree College ,Remuna",
    date: "Aug 2016 - Apr 2019",
    grade: "73.2%",
    desc: "I completed my Bachelor's degree in Physics (B.Sc.) from Remuna Degree College ,Remuna. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of Physics . And learning javascript language and its fundamental during that period .",
    degree: "Bachelor of Science - BSC (Physics)",
  },
  {
    id: 2,
    img: interLogo,
    school: "Gopalpur Junior College,Gopalpur",
    date: "Apr 2014 - March 2016",
    grade: "78%",
    desc: "I completed my class 12 education from Gopalpur Junior College ,Gopalpur , Balasore , under the CHSE board Odisha, where I studied Physics, Chemistry, and Mathematics (PCM) With biology and some Basic Computer Science .",
    degree: "CHSE(XII) - PCM IN Science",
  },
  {
    id: 3,
    img: interLogo,
    school: "K.M.U.B.P Karanjabindha ",
    date: "Apr 2013 - March 2014",
    grade: "87.5%",
    desc: "I completed my class 10 education from Kshetramohan Ucha Bidyapitha, Karanjabindha, under the BSE board Odisha, where I studied Science with Computer.",
    degree: "BSE(X), Science ",
  },
];

export const projects = [
  {
    id: 0,
    title: "Todo List App",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: csprepLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github:
      "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "Add To Cart",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: csprepLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "BMI Calculator",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "BMI Calculator",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: bmiCalculator,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Added To Cart",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: addToCart,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/codingmastr/Task-Reminder-Tool",
    webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 5,
    title: "Todo App",
    description:
      "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    image: todoLogo,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind Css","React js","Github","Vercel"],
    github: "https://github.com/codingmastr/Webverse-Digital",
    webapp: "https://webversedigital.com/",
  },
];
