import { motion } from 'framer-motion';
import '../styles/About.css';

const timelineData = [
  {
    year: "2019",
    title: "Inicios en Desarrollo Web",
    description: "Primeros pasos en el mundo del desarrollo web. Aprendizaje de HTML, CSS y JavaScript básico.",
    image: "/timeline/web-dev.jpg"
  },
  {
    year: "2020",
    title: "Frontend Development",
    description: "Especialización en React y otras tecnologías frontend. Creación de interfaces modernas y responsive.",
    image: "/timeline/frontend.jpg"
  },
  {
    year: "2021",
    title: "Full Stack Journey",
    description: "Expansión hacia el desarrollo backend. Aprendizaje de Node.js, Express y bases de datos.",
    image: "/timeline/fullstack.jpg"
  },
  {
    year: "2022",
    title: "Proyectos Freelance",
    description: "Inicio en el mundo freelance. Desarrollo de proyectos personalizados para clientes.",
    image: "/timeline/freelance.jpg"
  },
  {
    year: "2023",
    title: "Especialización UI/UX",
    description: "Profundización en diseño de interfaces y experiencia de usuario. Creación de productos digitales completos.",
    image: "/timeline/uiux.jpg"
  }
];

const About = () => {
  return (
    <div className="about">
      <div className="geometric-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>
      <div className="content-wrapper">
        <div className="about-card">
          <div className="card-image">
            <img src="/path-to-your-image.jpg" alt="Profile" />
          </div>
          <div className="card-content">
            <h2>Sobre mí</h2>
            <p className="tagline">Full Stack Developer & Creative Designer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>
        
        <div className="timeline-container">
          <motion.div 
            className="timeline-line"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              className={`timeline-card ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -100 : 100,
                y: 20
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                y: 0
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut"
              }}
            >
              <motion.div 
                className="timeline-dot"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2 + 0.4,
                  duration: 0.4,
                  type: "spring"
                }}
              >
                <div className="dot-pulse"></div>
              </motion.div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <div className="timeline-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About; 