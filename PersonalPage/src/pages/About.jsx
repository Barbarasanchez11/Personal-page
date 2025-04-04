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
    [0.2, 0.3, 0.35],
    [0, 1, 0]
  );
  const descriptionY = useTransform(
    scrollYProgress,
    [0.2, 0.3],
    ["100vh", "0vh"]
  );

  // Transformaciones para la sección de grid
  const gridOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.35],
    [0, 1]
  );

  // Transformaciones para la imagen superior derecha
  const topRightImageScale = useTransform(
    scrollYProgress,
    [0.35, 0.4, 0.5, 0.6, 0.7],
    [0.3, 1, 1, 1, 0.3]
  );

  // Transformaciones para la imagen inferior izquierda
  const bottomLeftImageScale = useTransform(
    scrollYProgress,
    [0.45, 0.5, 0.6, 0.7],
    [0.3, 1, 1, 0.3]
  );

  return (
    <motion.div 
      ref={containerRef} 
      className="about-container"
      style={{ backgroundColor }}
    >
      {/* Sección del título y descripción inicial */}
      <section className="intro-section">
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
      </section>

      {/* Sección de la cuadrícula con imágenes */}
      <section className="grid-section">
        <motion.div 
          className="grid-content"
          style={{
            opacity: gridOpacity
          }}
        >
          <div className="grid-lines">
            <div className="vertical-line"></div>
            <div className="vertical-line"></div>
            <div className="horizontal-line"></div>
            <div className="horizontal-line"></div>
          </div>

          <motion.div 
            className="top-right-image"
            style={{
              scale: topRightImageScale
            }}
          >
            <img src="https://cdn.pixabay.com/photo/2024/04/10/22/52/autumn-8688876_1280.jpg" alt="Autumn landscape" />
          </motion.div>

          <motion.div 
            className="bottom-left-image"
            style={{
              scale: bottomLeftImageScale
            }}
          >
            <img src="https://images.pexels.com/photos/1526713/pexels-photo-1526713.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1526713.jpg&fm=jpg" alt="Ocean waves" />
          </motion.div>

          <div className="grid-text">
            <p>Texto que aparecerá en el centro de la cuadrícula</p>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About; 