import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import '../styles/Projects.css';

const ProjectCard = ({ number, title, subtitle, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-10% 0px -10% 0px",
    once: true
  });
  
  const isFirstProject = index === 0;

  return (
    <section className="project-section" ref={ref}>
      <motion.div 
        className="project-card"
        initial={{ 
          x: index % 2 === 0 ? 1000 : -1000,
          opacity: 0 
        }}
        animate={{ 
          x: isFirstProject || isInView ? 0 : (index % 2 === 0 ? 1000 : -1000),
          opacity: isFirstProject || isInView ? 1 : 0
        }}
        transition={{
          duration: 1,
          ease: "easeOut"
        }}
      >
        <div className="project-content">
          <span className="project-number">{number}</span>
          <h2 className="project-title">{title}</h2>
          <div className="project-links">
            <a href="#" className="project-link">Ver Proyecto</a>
            <a href="#" className="project-link">Ver Github</a>
          </div>
          <h3 className="project-subtitle">{subtitle}</h3>
        </div>
      </motion.div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "Project 1",
      subtitle: "Subtitulo 1"
    },
    {
      number: "02",
      title: "Project 2",
      subtitle: "Subtitulo 2"
    },
    {
      number: "03",
      title: "Project 3",
      subtitle: "Subtitulo 3"
    },
    {
      number: "04",
      title: "Project 4",
      subtitle: "Subtitulo 4"
    }
  ];

  return (
    <main className="projects-page">
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.number} 
          {...project} 
          index={index}
        />
      ))}
    </main>
  );
};

export default Projects; 