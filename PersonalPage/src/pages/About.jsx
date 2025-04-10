import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Animación solo para la línea de tiempo
  const timelineProgress = useTransform(
    scrollYProgress,
    [0, 0.9],
    ["0%", "100%"]
  );

  const timelineItems = [
    {
      year: "2018",
      title: "Inicio en Audiovisuales",
      description: "Descubrí mi pasión por la fotografía analógica y el mundo audiovisual",
      image: "https://picsum.photos/400/300?random=1"
    },
    {
      year: "2019",
      title: "Producción Audiovisual",
      description: "Estudié producción audiovisual y participé en diversos proyectos cinematográficos",
      image: "https://picsum.photos/400/300?random=2"
    },
    {
      year: "2021",
      title: "Desarrollo Web",
      description: "Me adentré en el mundo del desarrollo web, combinando mi experiencia visual con la programación",
      image: "https://picsum.photos/400/300?random=3"
    },
    {
      year: "2023",
      title: "Freelance Developer",
      description: "Comencé mi carrera como desarrolladora freelance, especializándome en experiencias web interactivas",
      image: "https://picsum.photos/400/300?random=4"
    },
    {
      year: "2024",
      title: "Full Stack Developer",
      description: "Expandí mis habilidades para incluir desarrollo backend y arquitectura de sistemas",
      image: "https://picsum.photos/400/300?random=5"
    }
  ];

  return (
    <div className="about-wrapper" ref={containerRef}>
      <div className="timeline-section">
        <motion.div 
          className="timeline-progress"
          style={{ scaleY: timelineProgress }}
        />
        
        {timelineItems.map((item, index) => (
          <motion.div 
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'right' : 'left'}`}
            initial={{ 
              opacity: 0, 
              x: index % 2 === 0 ? 100 : -100 
            }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                duration: 0.8,
                delay: index * 0.2 
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="timeline-image">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
            <div className="timeline-dot" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About; 