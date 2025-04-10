import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.2], [0.5, 0.15]);
  const yPos = useTransform(scrollYProgress, [0, 0.2], ["85vh", "2vh"]);
  const xPos = useTransform(scrollYProgress, [0, 0.2], ["5vw", "5vw"]);

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    ["#895cf6", "#8bb50a", "#8bb50a"]
  );

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    ["#8bb50a", "#895cf6", "#895cf6"]
  );

  return (
    <motion.div 
      className="about-wrapper"
      ref={containerRef}
      style={{ backgroundColor }}
    >
      <div className="intro-section">
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
      </div>
    </motion.div>
  );
};

export default About; 