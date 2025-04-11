import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import '../styles/Projects.css';

// Paleta de colores para los fondos
const backgroundColors = [
  '#FFE5E5', // Rosa suave
  '#E5F4FF', // Azul suave
  '#F4FFE5', // Verde suave
  '#FFE5F4'  // Lila suave
];

const ProjectCard = ({ number, title, description, technologies = [], projectLink = "#", githubLink = "#", imageUrl, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-10% 0px -10% 0px",
    once: true
  });
  
  const isFirstProject = index === 0;

  return (
    <section className="project-section" ref={ref} style={{ backgroundColor: backgroundColors[index] }}>
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
        <div className="project-image-wrapper">
          <img 
            src={imageUrl || "https://picsum.photos/800/500"} 
            alt={title}
            className="project-image"
          />
        </div>

        <div className="hover-mask">
          <div className="project-info">
            <h2 className="project-title">{title}</h2>
            <p className="project-description">{description}</p>
            <div className="project-technologies">
              {technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={projectLink} className="project-link primary">Ver Proyecto</a>
              <a href={githubLink} className="project-link secondary">Ver Github</a>
            </div>
          </div>
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
      description: "Una breve descripción del proyecto 1 que muestra sus características principales.",
      imageUrl: "https://picsum.photos/800/500?random=1",
      technologies: ["React", "Node.js", "MongoDB"],
      projectLink: "#",
      githubLink: "#"
    },
    {
      number: "02",
      title: "Project 2",
      description: "Una breve descripción del proyecto 2 que muestra sus características principales.",
      imageUrl: "https://picsum.photos/800/500?random=2",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      projectLink: "#",
      githubLink: "#"
    },
    {
      number: "03",
      title: "Project 3",
      description: "Una breve descripción del proyecto 3 que muestra sus características principales.",
      imageUrl: "https://picsum.photos/800/500?random=3",
      technologies: ["Next.js", "GraphQL", "Firebase"],
      projectLink: "#",
      githubLink: "#"
    },
    {
      number: "04",
      title: "Project 4",
      description: "Una breve descripción del proyecto 4 que muestra sus características principales.",
      imageUrl: "https://picsum.photos/800/500?random=4",
      technologies: ["Angular", "Django", "MySQL"],
      projectLink: "#",
      githubLink: "#"
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