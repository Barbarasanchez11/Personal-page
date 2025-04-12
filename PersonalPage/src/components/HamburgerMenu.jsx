import { Link } from 'react-router-dom';
import '../styles/HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <nav className={`slide-menu ${isOpen ? 'open' : ''}`}>
                <div className="menu-content">
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                    <Link to="/about" onClick={toggleMenu}>Sobre mi</Link>
                    <Link to="/projects" onClick={toggleMenu}>Proyectos</Link>
                    <Link to="/contact" onClick={toggleMenu}>Contacto</Link>
                </div>
            </nav>
            {isOpen && <div className="nav-overlay" onClick={toggleMenu}></div>}
        </>
    );
};

export default HamburgerMenu;