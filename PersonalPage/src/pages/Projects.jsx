import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import '../styles/Projects.css'
import CarouselProjects from "./CarouselProjects";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    image: "/images/project1.jpg",
    link: "/projects/ecommerce",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: "/images/project2.jpg",
    link: "/projects/portfolio",
  },
  {
    id: 3,
    title: "Dashboard UI",
    image: "/images/project3.jpg",
    link: "/projects/dashboard",
  },
];

const Projects= () => {
  return (
    <div className="projects-container">
      <h1 className="title">Mis Proyectos</h1>
      <div className="grid-container">
        
        <CarouselProjects projects={projects} />
      </div>
    </div>
  );
}

export default Projects