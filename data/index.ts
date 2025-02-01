import { react01, react02, react03, react04, react05 } from "@/public/projects/react";

export const Routes = [
  {
    name: "Home",
    link: "hero",
  },
  {
    name: "About Me",
    link: "about",
  },
  {
    name: "Projects",
    link: "projects",
  },
  {
    name: "Skills",
    link: "skills",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

export const ProjectsTabs = [
  {
    title: "All",
    id: "all",
  },
  {
    title: "Html & Css",
    id: "html",
  },
  {
    title: "Html & Css & Js",
    id: "css",
  },
  {
    title: "React",
    id: "react",
  },
  {
    title: "Next",
    id: "next",
  },
];

export const AllProjects = [
  {
    id: "react",
    title: "Shopping World",
    description: "Shopping World Description",
    href: "/",
    image: react01.src,
  },
  {
    id: "react",
    title: "Product Builder",
    description: "Product Builder Description",
    href: "/",
    image: react02.src,
  },
  {
    id: "react",
    title: "Food List",
    description: "Food List Description",
    href: "/",
    image: react03.src,
  },
  {
    id: "react",
    title: "Nike Page",
    description: "Nike Page Description",
    href: "/",
    image: react04.src,
  },
  {
    id: "react",
    title: "GPT-3",
    description: "GPT-3 Description",
    href: "/",
    image: react05.src,
  },
];
