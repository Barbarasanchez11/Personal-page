import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HamburgerMenu.css';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };

    return (
        <>

            <div className="navbar">
                
                {!isOpen && (
                    <div className="logo">
                        BS
                    </div>
                )}
            </div>
            <button 
                className={`hamburger-button ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Menu"
                aria-expanded={isOpen}
            >
              
                {isOpen ? (
                    <CloseOutlinedIcon className="menu-icon" />
                ) : (
                    <MenuOutlinedIcon className="menu-icon" />
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
        </>
    );
};

export default HamburgerMenu; 