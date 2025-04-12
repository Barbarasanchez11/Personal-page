import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import '../styles/Projects.css';
import futura from '../assets/futura.png';
import veganfit from '../assets/veganfit.png';
import hoverboard from '../assets/hoverboard.png';

// Paleta de colores para los fondos
const backgroundColors = [
  '#FFE5E5', // Rosa suave
  '#E5F4FF', // Azul suave
  '#F4FFE5', // Verde suave
  '#FFE5F4'  // Lila suave
];

const getTechIcon = (tech) => {
  const icons = {
    'React': '/icons/react.svg',
    'Node.js': '/icons/nodejs.svg',
    'MongoDB': '/icons/mongodb.svg',
    'Next.js': '/icons/nextjs.svg',
    'GraphQL': '/icons/graphql.svg',
    'Firebase': '/icons/firebase.svg',
    'Vue.js': '/icons/vuejs.svg',
    'Express': '/icons/express.svg',
    'PostgreSQL': '/icons/postgresql.svg',
    'Angular': '/icons/angular.svg',
    'Django': '/icons/django.svg',
    'MySQL': '/icons/mysql.svg'
  };
  return icons[tech] || '/icons/code.svg';
};

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
        <div className="decorative-bg">
          <div className="circle-cream"></div>
          <div className="circle-pink"></div>
          <div className="circle-green"></div>
          <div className="shape-wave"></div>
          <div className="shape-blob"></div>
          <div className="floating-dots dot-1"></div>
          <div className="floating-dots dot-2"></div>
          <div className="floating-dots dot-3"></div>
        </div>
        
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
                <span key={i} className="tech-tag">
                  <img 
                    src={getTechIcon(tech)} 
                    alt={tech} 
                    className="tech-icon"
                  />
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={projectLink} className="project-link primary">Ir al proyecto</a>
              <a href={githubLink} className="project-link secondary">Ir a GitHub</a>
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
      title: "Futura Biolab",
      description: "FuturaBioLab es una plataforma colaborativa de código abierto que conecta creadores e investigadores de biomateriales. Permite compartir proyectos, gestionar contenido y fomentar la innovación sostenible en un entorno accesible y escalable.",
      imageUrl: futura,
      technologies: ["React", "Node.js", "MongoDB"],
      projectLink: "#",
      githubLink: "https://github.com/Barbarasanchez11/FuturaBioLab"
    },
    {
      number: "02",
      title: "VeganFit Store",
      description: "VeganFit Store es una tienda online desarrollada con React para el frontend, Node.js en el backend y MongoDB como base de datos, ofreciendo una experiencia de compra segura y optimizada para productos deportivos y suplementos veganos.",
      imageUrl: veganfit,
      technologies: ["React", "Node.js", "MongoDB"],
      projectLink: "https://backend-project-break-7.onrender.com",
      githubLink: "https://github.com/Barbarasanchez11/backend-project-break"
    },
    {
      number: "03",
      title: "Hoverboard",
      description: "Pequeño proyecto web donde los colores se iluminan en una cuadrícula animada, desafiando la memoria visual del usuario. Desarrollado con HTML, CSS y JavaScript.",
      imageUrl: hoverboard,
      technologies: ["JavaScript", "CSS", "HTML"],
      projectLink: "#",
      githubLink: "https://github.com/Barbarasanchez11/Hoverboard"
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