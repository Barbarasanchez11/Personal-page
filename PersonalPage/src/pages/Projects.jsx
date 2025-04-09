import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Projects.css';

const ProjectCard = ({ number, title, subtitle }) => {
  return (
    <motion.div 
      className="project-card"
      initial="initial"
      whileHover="hover"
      animate="initial"
    >
      <div className="project-text">
        <h2 className="project-title">{title}</h2>
        <h3 className="project-subtitle">{subtitle}</h3>
      </div>
      <motion.div 
        className="project-media"
        variants={{
          initial: { opacity: 0, height: 0 },
          hover: { opacity: 1, height: 'auto' }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="project-image"></div>
        <span className="project-number">{number}</span>
      </motion.div>
    </motion.div>
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
    <div className="projects-page">
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.number} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects; 