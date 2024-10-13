import { HoverEffect } from "./ui/card-hover-effect";

export function ActivityList() {
  return (
    <section id="activity">
      <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
        All The Basic Activities I've Completed
      </h1>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        These are all the activities I completed during the KodeGo bootcamp to
        enhance my knowledge and skills in web development. I focused on
        familiarizing myself with JavaScript, HTML, CSS, and Tailwind CSS. I
        learned a lot from this experience and I&apos;m excited to continue
        learning and working with the community.
      </p>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}

export const projects = [
  {
    title: "First Activity in HTML",
    description:
      "This is my first HTML page, where I learned the basics of HTML.",
    link: "https://johnorland24.github.io/Wwwhtmlpractice/",
  },
  {
    title: "Second Activity",
    description:
      "This is my second activity from bootcamp, where I learned to use HTML and CSS.",
    link: "https://johnorland24.github.io/Myprofile/",
  },
  {
    title: "Third Activity",
    description:
      "In this activity, I learned how to create a table using HTML and CSS.",
    link: "https://johnorland24.github.io/Myfirstpages/",
  },
  {
    title: "Creating Resume",
    description:
      "I learned how to use various HTML tags and integrate simple media queries for responsiveness.",
    link: "https://johnorland24.github.io/ResumeOrland2024/",
  },
  {
    title: "My First Portfolio",
    description:
      "This project showcases my skills in HTML and CSS, culminating in my first portfolio.",
    link: "https://johnorland24.github.io/myfirstportfolio/",
  },
  {
    title: "To-Do List",
    description:
      "This is my first bootcamp project where I used JavaScript, HTML, and CSS to create a functional to-do list.",
    link: "https://johnorland24.github.io/TodolistApp/",
  },
  {
    title: "Pokemon Images",
    description:
      "In this project, I fetched images from the Pokemon API using JavaScript, HTML, and CSS.",
    link: "https://johnorland24.github.io/phase3/",
  },
  {
    title: "Bootstrap Portfolio",
    description:
      "This project helped me familiarize myself with Bootstrap while creating a portfolio.",
    link: "https://johnorland24.github.io/updatedportfoliobootstrap/",
  },
  {
    title: "Shopping Cart",
    description:
      "This is my first project using JavaScript along with HTML and CSS to create a shopping cart.",
    link: "https://johnorland24.github.io/ShoppingCart/",
  },
];
