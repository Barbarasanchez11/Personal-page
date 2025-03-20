import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/projects.css";
import ProjectCard from "./ProjectCard";

// Datos de los proyectos
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
];

function ProjectCarousel() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1.5}
        centeredSlides={true}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard
              project={project}
              isHovered={hovered === project.id}
              setHovered={setHovered}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectCarousel;
