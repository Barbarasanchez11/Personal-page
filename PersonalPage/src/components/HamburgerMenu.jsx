import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HamburgerMenu.css';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };

    return (
        <>
            <button 
                className={`hamburger-button ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Menu"
                aria-expanded={isOpen}
            >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>

            <nav className={`slide-menu ${isOpen ? 'open' : ''}`}>
                <div className="menu-content">
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                    <Link to="/about" onClick={toggleMenu}>About</Link>
                    <Link to="/projects" onClick={toggleMenu}>Projects</Link>
                    <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                </div>
            </nav>
        </>
    );
};

export default HamburgerMenu; 