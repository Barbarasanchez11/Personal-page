import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "E-Commerce React",
    description: "Tienda online con carrito y pagos.",
    image: "/src/assets/project1.jpg",
    link: "https://mi-ecommerce.com",
  },
  {
    id: 2,
    title: "Dashboard Interactivo",
    description: "Panel de control con gráficos dinámicos.",
    image: "/src/assets/project2.jpg",
    link: "https://mi-dashboard.com",
  },
  {
    id: 3,
    title: "Portfolio Creativo",
    description: "Diseño minimalista con animaciones únicas.",
    image: "/src/assets/project3.jpg",
    link: "https://mi-portfolio.com",
  },

  {
    id: 4,
    title: "Portfolio Creativo",
    description: "Diseño minimalista con animaciones únicas.",
    image: "/src/assets/project4.jpg",
    link: "https://mi-portfolio.com",
  },
];

function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="carousel-container">
      <button className="prev-btn" onClick={prevSlide}>‹</button>
      <div className="carousel">
        <motion.div
          className="carousel-inner"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectCard project={projects[currentIndex]} />
        </motion.div>
      </div>
      <button className="next-btn" onClick={nextSlide}>›</button>
    </div>
  );
}

export default ProjectCarousel;

