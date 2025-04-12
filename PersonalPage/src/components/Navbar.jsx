import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Link to="/">BS</Link>
            </div>
            
            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )}
            </div>

            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
                <Link to="/about" className="nav-link" onClick={toggleMenu}>Sobre mi</Link>
                <Link to="/projects" className="nav-link" onClick={toggleMenu}>Proyectos</Link>
                <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contacto</Link>
            </div>

            {/* Overlay para prevenir interacción con el contenido detrás del menú */}
            {isOpen && <div className="nav-overlay" onClick={toggleMenu}></div>}
        </nav>
    );
};

export default Navbar; 