import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Link to="/">BS</Link>
            </div>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">Sobre mi</Link>
                <Link to="/projects" className="nav-link">Proyectos</Link>
                <Link to="/contact" className="nav-link">Contacto</Link>
            </div>
        </nav>
    );
};

export default Navbar; 