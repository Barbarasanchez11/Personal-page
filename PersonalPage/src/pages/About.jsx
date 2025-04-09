import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Transformaciones para el movimiento y escala
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.25]);
  const yPos = useTransform(scrollYProgress, [0, 0.4], ["85vh", "1vh"]);
  
  // Transformaciones para los colores con más pasos para suavizar
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4],
    ["#895cf6", "#895cf6", "#8bb50a"]
  );
  
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4],
    ["#8bb50a", "#8bb50a", "#895cf6"]
  );

  return (
    <motion.div 
      className="about-wrapper"
      style={{ backgroundColor }}
    >
      <div className="about-container" ref={containerRef}>
        <motion.div 
          className="about-title"
          style={{
            scale,
            y: yPos,
            color: textColor
          }}
        >
          <div className="title-container">
            <h1>About</h1>
            <h1>me</h1>
          </div>
        </motion.div>
        <div className="about-content">
          {/* Aquí irá el contenido del About */}
        </div>
      </div>
    </motion.div>
  );
};

export default About; 