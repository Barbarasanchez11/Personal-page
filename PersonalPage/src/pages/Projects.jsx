import { motion } from "framer-motion";
import { useState } from "react";
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: "Project 1",
    subtitle: "Subtitulo 1",
    description: "Diseño y desarrollo de interfaz",
    image: "/placeholder.jpg",
    link: "/projects/project1"
  },
  {
    id: 2,
    title: "Project 2",
    subtitle: "Subtitulo 2",
    description: "Desarrollo web y animaciones",
    image: "/placeholder.jpg",
    link: "/projects/project2"
  },
  {
    id: 3,
    title: "Project 3",
    subtitle: "Subtitulo 3",
    description: "Diseño de experiencia de usuario",
    image: "/placeholder.jpg",
    link: "/projects/project3"
  },
  {
    id: 4,
    title: "Project 4",
    subtitle: "Subtitulo 4",
    description: "Desarrollo de aplicación móvil",
    image: "/placeholder.jpg",
    link: "/projects/project4"
  },
  {
    id: 5,
    title: "Project 5",
    subtitle: "Subtitulo 5",
    description: "Diseño de interfaz de usuario",
    image: "/placeholder.jpg",
    link: "/projects/project5"
  },
  {
    id: 6,
    title: "Project 6",
    subtitle: "Subtitulo 6",
    description: "Desarrollo full stack",
    image: "/placeholder.jpg",
    link: "/projects/project6"
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="projects-container">
      <div className="projects-list">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-item"
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            <div className="project-content">
              <div className="project-text">
                <h3 className="project-title">{project.title}</h3>
                <motion.h2 
                  className="project-subtitle"
                  animate={{
                    x: hoveredProject === project.id ? 20 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.subtitle}
                </motion.h2>
              </div>
              {hoveredProject === project.id && (
                <motion.div 
                  className="project-image-container"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-image" />
                  <div className="project-number">
                    {String(project.id).padStart(2, '0')}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;