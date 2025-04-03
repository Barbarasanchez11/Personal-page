import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import '../styles/Projects.css';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const maxScroll = scrollHeight - clientHeight;
        const scrollPercentage = (scrollTop / maxScroll) * 80; // 80% del viewport para el thumb
        setScrollY(scrollPercentage);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

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

  return (
    <div className="projects-container" ref={containerRef}>
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
                  transition={{ 
                    duration: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                >
                  {project.subtitle}
                </motion.h2>
              </div>
              {hoveredProject === project.id && (
                <motion.div 
                  className="project-image-container"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                >
                  <div className="project-image" />
                  <motion.div 
                    className="project-number"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.7,
                      delay: 0.4,
                      ease: "easeOut"
                    }}
                    style={{ transform: 'rotate(0deg)' }}
                  >
                    {String(project.id).padStart(2, '0')}
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="scroll-bar">
        <motion.div 
          className="scroll-thumb"
          style={{
            '--scroll-y': `${scrollY}%`
          }}
        />
      </div>
    </div>
  );
};

export default Projects;