import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import '../styles/Projects.css'


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
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to={project.link}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="overlay">
                <h2>{project.title}</h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects