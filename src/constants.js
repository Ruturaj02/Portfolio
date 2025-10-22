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
import todoLogo from "./assets/work_logo/todo-logo.png";
import ecommerce from "./assets/work_logo/Ecommerce-logo.png";
import quiz from "./assets/work_logo/quiz_app.png";
import geminiLogo from "./assets/work_logo/gemini_clone.png";

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
    date: "Aug 2023 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling only frontend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux js",
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
    title: "Gemini Clone",
    description:
      "A powerful and user-friendly React.js application designed to create a real-world AI chatbot-style UI with clean code and modern design principles . IT is a Gemini AI Clone app same as gemini , You can use it for ai assistance ",
    image: geminiLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Gemini API" , "Tailwind Css"],
    github:
      "https://github.com/Ruturaj02/ai-tool-gemini",
    webapp: "https://ai-tool-gemini.vercel.app/",
  },
  {
    id: 1,
    title: "Quiz App",
    description:
      "A  quiz-App for multiple choice questions designed for Frontend Interview questions and according to your answer you can check your score ",
    image: quiz,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/Ruturaj02/project/tree/main/Quiz%20app",
    webapp: "https://luxury-hamster-5c880a.netlify.app/",
  },
  {
    id: 1,
    title: "BMI Calculator",
    description:
      "An efficient and customizable BMI Calculator for Calculating Body mass index using height ,weight. Built using React.js ,javascript, html, css, it provides .",
    image: bmiCalculator,
    tags: ["React JS", "javascript", "html", "Css"],
    github: "https://github.com/Ruturaj02/BMI-calculator",
    webapp: "https://bmi-calculator-psi-blue.vercel.app/",
  },
  {
    id: 2,
    title: "Add To Cart",
    description:
      "Build A product page for fetching products from API and show it on product page , product added to cart and remove it functionality attached to it  .Technology used for creating this project is Html ,  Css , javascript , tailwind css , react js .",
    image: addToCart,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind Css",
      "React js",
      "Github",
      "Vercel",
    ],
    github: "https://github.com/Ruturaj02/Added-to-cart",
    webapp: "https://added-to-cart.vercel.app/",
  },
  {
    id: 3,
    title: "Todo App",
    description:
      "The official website forTodo App, a creative Todo App to make todos. Built using HTML, CSS, JavaScript, tailwindcss and React js, it features visually appealing animations and a clean design to showcase the todo lists.",
    image: todoLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind Css",
      "React js",
      "Github",
      "Vercel",
    ],
    github: "https://github.com/Ruturaj02/todo_app",
    webapp: "https://todo-app-seven-lilac-38.vercel.app/",
  },
  {
    id: 4,
    title: "Ecommerce App",
    description:
      "A powerful and user-friendly Fullstack Ecommerce Application designed for browse products ,sort products and search products using filter and search functionality according to your liking . And you can order product in this application also . ",
    image: ecommerce,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind Css",
      "React js",
      "Node js",
      "Express js",
      "JWt",
      "MongoDB",
      "Github",
      "Vercel",
    ],
    github: "https://github.com/Ruturaj02/mern-ecommerce",
    webapp: "https://mern-ecommerce-sepia.vercel.app/login",
  },
];
