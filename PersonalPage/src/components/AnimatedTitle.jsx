import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import '../styles/AnimatedTitle.css';

const AnimatedTitle = ({ text = "proyectos" }) => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animación suave del scroll
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 15,
    stiffness: 30
  });

  // Transformaciones para las letras antes y después de la 't'
  const leftPartX = useTransform(smoothProgress, [0, 0.3], [0, -50]);
  const rightPartX = useTransform(smoothProgress, [0, 0.3], [0, 50]);
  
  // Transformación de la letra 't'
  const tHeight = useTransform(smoothProgress, [0.1, 0.5], [1, 15]);
  const tScale = useTransform(smoothProgress, [0.1, 0.5], [1, 0.5]);
  
  // Opacidad y transformación del contenedor de contenido
  const contentOpacity = useTransform(smoothProgress, [0.6, 0.8], [0, 1]);
  const contentY = useTransform(smoothProgress, [0.6, 0.8], [100, 0]);

  // Calcular altura del contenedor basado en el viewport
  useEffect(() => {
    const updateHeight = () => {
      setContainerHeight(window.innerHeight * 3);
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Separar el texto en partes (antes de 't', 't', después de 't')
  const beforeT = text.slice(0, text.indexOf('t'));
  const afterT = text.slice(text.indexOf('t') + 1);

  return (
    <div 
      ref={containerRef} 
      className="animated-title-container"
      style={{ height: containerHeight }}
    >
      <div className="title-wrapper">
        <motion.div 
          className="title-content"
          style={{ position: 'sticky', top: '50%', transform: 'translateY(-50%)' }}
        >
          {/* Parte izquierda del texto */}
          <motion.span 
            className="title-part"
            style={{ x: leftPartX }}
          >
            {beforeT}
          </motion.span>

          {/* Letra 't' animada */}
          <motion.span 
            className="title-t"
            style={{ 
              scaleY: tHeight,
              scale: tScale,
              originY: 0.5
            }}
          >
            t
          </motion.span>

          {/* Parte derecha del texto */}
          <motion.span 
            className="title-part"
            style={{ x: rightPartX }}
          >
            {afterT}
          </motion.span>

          {/* Línea base */}
          <motion.div 
            className="baseline"
            style={{
              opacity: useTransform(smoothProgress, [0, 0.3], [1, 0])
            }}
          />
        </motion.div>

        {/* Contenedor de contenido */}
        <motion.div 
          className="content-container"
          style={{
            opacity: contentOpacity,
            y: contentY
          }}
        >
          <div className="content-inner">
            <h2>Mis Proyectos</h2>
            <p>Aquí encontrarás una selección de mis mejores trabajos...</p>
            {/* Aquí puedes añadir el contenido de tus proyectos */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedTitle; 