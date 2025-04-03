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

  return (
    <div ref={containerRef} className="about-container">
      <motion.div 
        className="about-title"
        style={{ 
          scale,
          x: xPos,
          y: yPos
        }}
      >
        <span className="about-text">About</span>
        <span className="me-text">me</span>
      </motion.div>
      <div className="about-content">
        {/* Aquí irá el contenido del About */}
      </div>
    </div>
  );
};

export default About; 