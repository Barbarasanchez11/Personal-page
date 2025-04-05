import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import '../styles/About.css';

const ProjectItem = ({ title, description, services, image, index }) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, 
    [0.6 + (index * 0.08), 0.75 + (index * 0.08)], 
    ["100%", "0%"]
  );

  return (
    <motion.div 
      className="project-item"
      style={{ 
        x,
        top: `${index * 20}vh`
      }}
    >
      <div className="project-title">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-services">
        <ul>
          {services.map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const projects = [
  {
    title: "Brand transformation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3",
    services: [
      "Brand identity",
      "Brand guidelines",
      "Brand strategy"
    ]
  },
  {
    title: "Digital evolution",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
    services: [
      "Web design",
      "Web development",
      "Audience centric strategy"
    ]
  },
  {
    title: "Visibility optimization",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3",
    services: [
      "Keyword research",
      "Content structure optimization",
      "Blog development"
    ]
  },
  {
    title: "Content creation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3",
    services: [
      "Visual design",
      "Content strategy",
      "Social media"
    ]
  }
];

const About = () => { 
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scroll específico para la sección del grid
  const { scrollYProgress: gridProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"]
  });

  // Transformaciones para el scroll inicial
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
    [0.15, 0.2, 0.25, 0.3],
    [0, 1, 1, 0]
  );
  const descriptionY = useTransform(
    scrollYProgress,
    [0.15, 0.2],
    ["100vh", "0vh"]
  );

  // Transformaciones para la sección de grid usando gridProgress
  const gridOpacity = useTransform(
    gridProgress,
    [0, 0.1, 0.8, 1],
    [0, 1, 1, 0]
  );

  // Transformaciones para la imagen superior derecha
  const topRightImageScale = useTransform(
    gridProgress,
    [0.1, 0.3, 0.5, 0.7, 0.9],
    [0.3, 0.6, 1, 0.6, 0.3]
  );

  // Transformaciones para la imagen inferior izquierda
  const bottomLeftImageScale = useTransform(
    gridProgress,
    [0.2, 0.4, 0.5, 0.7, 0.9],
    [0.3, 1, 1, 0.6, 0.3]
  );

  // Transformaciones para el efecto ventana y fondo
  const { scrollYProgress: windowScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // La ventana se mueve desde el inicio hasta el 60% del scroll
  const windowY = useTransform(windowScrollProgress, 
    [0, 0.3, 0.6, 0.8], 
    ["100%", "50%", "0%", "-100%"]
  );

  // La opacidad de la imagen de fondo empieza a aparecer cuando la ventana está completamente abierta
  const backgroundOpacity = useTransform(windowScrollProgress, 
    [0.6, 0.7, 0.8, 0.9], 
    [0, 0.3, 0.7, 1]
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
      <section ref={gridRef} className="grid-section">
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
            <img src="https://images.pexels.com/photos/1526713/pexels-photo-1526713.jpeg" alt="Ocean waves" />
          </motion.div>

          <div className="grid-text">
            <p>Texto que aparecerá en el centro de la cuadrícula</p>
          </div>
        </motion.div>
      </section>

      {/* Nueva sección con efecto ventana */}
      <section className="window-reveal-section">
        <div className="content-container">
          <div className="text-side">
            <h2>
              Lorem ipsum dolor
              sit amet, consectetur
              adipiscing elit
              sed do eiusmod.
            </h2>
            <p className="reveal-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris.
            </p>
          </div>
          
          <div className="image-reveal">
            {/* Imagen de fondo fija */}
            <div className="background-image">
              <img 
                src="https://blog.foto24.com/wp-content/uploads/2019/02/4-684x1024.jpg" 
                alt="Background"
              />
            </div>
            
            {/* Ventana con efecto de revelado */}
            <motion.div 
              className="reveal-window"
              style={{
                y: windowY
              }}
            >
              <div className="window-content">
                <img 
                  src="https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg" 
                  alt="Revealed content"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectItem 
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default About; 