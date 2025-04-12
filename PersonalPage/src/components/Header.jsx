import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Header.css';
import '../styles/HamburgerMenu.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };

    return (
        <header className="header">
            <div className="logo"><a href='/'>BS</a></div>
            <button 
                className="menu-button"
                onClick={toggleMenu}
                aria-label="Menu"
                aria-expanded={isOpen}
            >
                {isOpen ? (
                    <CloseIcon className="menu-icon" />
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </button>

            <nav className={`slide-menu ${isOpen ? 'open' : ''}`}>
                <div className="menu-content">
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                    <Link to="/about" onClick={toggleMenu}>Sobre mi</Link>
                    <Link to="/projects" onClick={toggleMenu}>Proyectos</Link>
                    <Link to="/contact" onClick={toggleMenu}>Contacto</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header; 