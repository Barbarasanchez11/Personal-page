import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transformaciones para el scroll
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.15]);
  const yPos = useTransform(scrollYProgress, [0, 0.2], ["630px", "-162px"]);
  const xPos = useTransform(scrollYProgress, [0, 0.2], ["28px", "28px"]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    ["#ffffff", "#ffffff", "rgb(8, 3, 255)"]
  );
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    ["rgb(8, 3, 255)", "rgb(8, 3, 255)", "#ffffff"]
  );
  
  // Transformación para el texto descriptivo
  const descriptionOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.3],
    [0, 1]
  );
  const descriptionY = useTransform(
    scrollYProgress,
    [0.2, 0.3],
    ["100vh", "0vh"]
  );

  return (
    <motion.div 
      ref={containerRef} 
      className="about-container"
      style={{ backgroundColor }}
    >
      <motion.div 
        className="about-title"
        style={{ 
          scale,
          x: xPos,
          y: yPos,
          color: textColor
        }}
      >
        <span className="about-text">About</span>
        <span className="me-text">me</span>
      </motion.div>
      <motion.p 
        className="about-description"
        style={{
          opacity: descriptionOpacity,
          y: descriptionY
        }}
      >
        A los 18, un curso de fotografía analógica despertó mi interés por lo audiovisual. 
        Estudié Producción de Audiovisuales y trabajé como técnico de teatro mientras 
        colaboraba en cortometrajes y películas.
      </motion.p>
    </motion.div>
  );
};

export default About; 