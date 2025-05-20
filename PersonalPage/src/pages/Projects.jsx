import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import '../styles/Projects.css';
import futura from '../../assets/futura.png';
import veganfit from '../../assets/veganfit.png';
import colorGame from '../../assets/colorGame.png';
import agrotech from "../../assets/agrotech.png";


const backgroundColors = [
  '#FFE5E5',
  '#E5F4FF', 
  '#F4FFE5', 
  '#FFE5F4' 
];

const getTechIcon = (tech) => {
  const icons = {
    'React': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    'Node.js': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    'MongoDB': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    'JavaScript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    'CSS': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    'HTML': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    'Python': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    'Streamlit': 'https://streamlit.io/images/brand/streamlit-logo-secondary-colormark-darktext.png',
    'Firebase': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg',
    'Pandas': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg',
    'Scikit-learn': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg'
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
      projectLink: "https://futurabiolab2.netlify.app/",
      githubLink: "https://github.com/Barbarasanchez11/FuturaBioLab"
    },
    {
      number: "02",
      title: "AgroTech Verde",
      description: "AgroTech Verde es una aplicación interactiva que recomienda cultivos óptimos según las condiciones del terreno, utilizando inteligencia artificial para analizar parámetros. Permite registrar datos y consultar un historial de cultivos, optimizando la toma de decisiones agrícolas.",
      imageUrl: agrotech,
      technologies: ["Python", "Streamlit", "Firebase", "Pandas", "Scikit-learn"],
      projectLink: "https://barbarasanchez11-agrotech-verde-app-2kwtr2.streamlit.app/",
      githubLink: "https://github.com/Barbarasanchez11/AgroTech-Verde"
    },
    {
      number: "03",
      title: "VeganFit Store",
      description: "VeganFit Store es una tienda online desarrollada con React para el frontend, Node.js en el backend y MongoDB como base de datos, ofreciendo una experiencia de compra segura y optimizada para productos deportivos y suplementos veganos.",
      imageUrl: veganfit,
      technologies: ["React", "Node.js", "MongoDB"],
      projectLink: "https://backend-project-break-7.onrender.com",
      githubLink: "https://github.com/Barbarasanchez11/backend-project-break"
    },
    {
      number: "04",
      title: "Color game",
      description: "Pequeño proyecto web donde los colores se iluminan en una cuadrícula animada, desafiando la memoria visual del usuario. Desarrollado con HTML, CSS y JavaScript.",
      imageUrl: colorGame,
      technologies: ["JavaScript", "CSS", "HTML"],
      projectLink: "https://barbarasanchez11.github.io/Hoverboard/",
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