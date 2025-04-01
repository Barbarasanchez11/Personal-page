import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function ProjectCard({ project, isHovered, setHovered }) {
  return (
    <motion.div
      className="project-card"
      onMouseEnter={() => setHovered(project.id)}
      onMouseLeave={() => setHovered(null)}
    >
      <img src={project.image} alt={project.title} className="project-image" />
      
      {/* Capa de hover con texto y enlace */}
      {isHovered && (
        <motion.div
          className="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <Link to={project.link}
           className="project-link">
            Ver Proyecto →
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}

export default ProjectCard;
