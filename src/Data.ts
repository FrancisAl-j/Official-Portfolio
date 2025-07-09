import Port1 from "./assets/images/port1.png";
import Cake from "./assets/images/cake.png";
import Blog from "./assets/images/blog.png";
import CPOS from "./assets/images/CPOS.png";
import HTML from "./assets/stacks/html5.svg";
import CSS from "./assets/stacks/css.svg";
import JS from "./assets/stacks/javascript.svg";
import React from "./assets/stacks/react.svg";
import TS from "./assets/stacks/typescript.svg";
import TW from "./assets/stacks/tailwindcss.svg";
import Node from "./assets/stacks/nodedotjs.svg";
import Next from "./assets/stacks/nextdotjs.svg";
import Express from "./assets/stacks/express.svg";
import Redux from "./assets/stacks/redux.svg";
import Posgre from "./assets/stacks/postgresql.svg";
import Github from "./assets/stacks/github.svg";
import mongo from "./assets/stacks/mongodb.svg";

export type ProjectType = {
  name: string;
  description: string;
  url: string;
  stacks: string[];
  image: string;
};

export const StackImages = [
  {
    name: "HTML",
    image: HTML,
  },
  {
    name: "CSS",
    image: CSS,
  },
  {
    name: "JavaScript",
    image: JS,
  },
  {
    name: "TailwindCSS",
    image: TW,
  },
  {
    name: "TypeScript",
    image: TS,
  },
  {
    name: "React.js",
    image: React,
  },
  {
    name: "Next.js",
    image: Next,
  },
  {
    name: "NodeJS",
    image: Node,
  },
  {
    name: "ExpressJS",
    image: Express,
  },
  {
    name: "MongoDB",
    image: mongo,
  },
  {
    name: "PostgreSQL",
    image: Posgre,
  },
  {
    name: "Github",
    image: Github,
  },
  {
    name: "Redux Toolkit",
    image: Redux,
  },
];

export const projects: ProjectType[] = [
  {
    name: "Cake Shop",
    description:
      "Cake shop ordering management system with payment integration using paymongo for gcash and paymaya. This web app is the first MERN Stack I built.",
    url: "https://cake-shop-dgvz.onrender.com/",
    stacks: ["ReactJs", "NodeJs", "ExpressJs", "MongoDb"],
    image: Cake,
  },

  {
    name: "Portfolio as Intern",
    description:
      "Build a portfolio to showcase the academic projects and to apply as intern.",
    url: "https://francisalj.onrender.com/",
    stacks: ["ReactJs", "NodeJs", "ExpressJs", "MongoDb"],
    image: Port1,
  },
  {
    name: "Blog Supabase",
    description: "Created a Blog web app using BaaS which is Supabase",
    url: "https://blog-supabase-three.vercel.app/",
    stacks: ["ReactJs", "Redux", "Supabase", "TypeScript"],
    image: Blog,
  },
  {
    name: "CPOS Technologies",
    description:
      "This website was designed by me using wordpress which is my task as an intern (OJT). I just did the Frontend not the payment integration.",
    url: "https://cpostechnologies.com/",
    stacks: ["Wordpress"],
    image: CPOS,
  },
];
