import { motion } from 'framer-motion';
import '../styles/About.css';

import portrait from '../assets/portrait.jpeg'

const timelineData = [
  {
    year: "2024",
    title: "De biomateriales a líneas de código",
    description: "Finalmente,regresé a España con la intención de poner en marcha un laboratorio de nuevos materiales. Aunque el proyecto no llegó a despegar, me permitió colaborar con perfiles creativos y multidisciplinares que ampliaron mi enfoque hacia la innovación. Ese impulso me llevó a formarme en desarrollo web full stack a través de un bootcamp intensivo, integrando la tecnología digital como una nueva herramienta dentro de mi proceso creativo."
  },
  {
    year: "2018",
    title: "Biomateriales: diseño que crece (literalmente)",
    description: "Después de terminar la carrera, empecé a colaborar con el FabLab Barcelona, donde investigaba nuevas formas de producir materiales a partir de residuos orgánicos. Pasé de diseñar prendas a experimentar con kombucha, agar y cáscaras de naranja, en una especie de laboratorio de cocina mutante. En 2019 me mudé a Londres con el objetivo de seguir creciendo en este campo y, de paso, mejorar mi inglés en la vida real. Aprendí que un biomaterial puede empezar en la nevera, pero también que el moho siempre tiene su propia opinión."
  },
  {
    year: "2018",
    title: "TFM: Moda, 3D y un poco de caos creativo",
    description: "Para mi trabajo final de carrera desarrollé una colección de moda utilizando impresión 3D. Fue el cruce perfecto entre diseño, tecnología y muchas horas de prueba y error (spoiler: las impresoras 3D no siempre son tus amigas). Exploré cómo los nuevos materiales y procesos digitales pueden cambiar la forma en la que diseñamos y producimos ropa. Fue intenso, experimental y totalmente fuera de mi zona de confort… justo como me gusta trabajar."
  },
  {
    year: "2016",
    title: "Entre telas y circuitos",
    description: "Estudié diseño de moda en el IED de Madrid y luego en Barcelona, donde el enfoque más experimental me atrapó. Hice prácticas en marcas, desfiles y editoriales, pero lo que realmente me enganchó fue la innovación: empecé a interesarme por nuevos tejidos, sostenibilidad y tecnología aplicada al diseño. Este fue mi primer proyecto con Arduino (sí, moda + electrónica = ❤️)"
  },
  {
    year: "2012",
    title: "Del carrete al escenario",
    description: "Con 18 años y cero planes de futuro (más allá de no madrugar), mi madre me animó a probar un curso de fotografía analógica. Sin saberlo, ese clic en la cámara fue el primer paso hacia el mundo audiovisual. Estudié un grado superior en Producción de Audiovisuales y Espectáculos, colabore en proyectos cinematográficos y trabajé como técnico en un teatro. Aprendí a mover focos, resolver problemas técnicos en segundos y que el café puede ser considerado una herramienta de producción."
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
            <img src={portrait} alt="Barbara Sanchez" />
          </div>
          <div className="card-content">
            <p className="tagline">Desarrolladora Web Full Stack</p>
            <p>Me motiva la posibilidad de construir productos que no solo resuelven problemas, sino que también ofrecen experiencias intuitivas y eficientes. Creo en el aprendizaje constante, en la colaboración como motor de crecimiento y en el valor del código bien estructurado como base de cualquier proyecto tecnológico.</p>
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