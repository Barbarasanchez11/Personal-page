import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import '../styles/CarouselProjects.css'

/*const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
   
    link: "/projects/ecommerce",
  },
  {
    id: 2,
    title: "Portfolio Website",
    
    link: "/projects/portfolio",
  },
  {
    id: 3,
    title: "Dashboard UI",
    
    link: "/projects/dashboard",
  },
];
*/
const CarouselProjects = ({projects}) => {
  return (
    <div className="carousel-container">
      {/* Botón Izquierdo */}
      <button className="swiper-button-prev">
        <ChevronLeft size={24} />
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        pagination={{ clickable: true }}
        className="swiper-wrapper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="swiper-slide">
            <Link to={project.link} className="project-slide">
              <img src={project.image} alt={project.title} className="slide-image" />
              <div className="slide-overlay">
                <h2>{project.title}</h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botón Derecho */}
      <button className="swiper-button-next">
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default CarouselProjects;

