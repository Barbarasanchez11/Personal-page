import { Link, useLocation } from 'react-router-dom';
import '../styles/HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <>
            <nav className={`slide-menu ${isOpen ? 'open' : ''}`}>
                <div className="menu-content">
                    {!isHome && (
                        <Link to="/" onClick={toggleMenu} className="menu-link light-blue">Home</Link>
                    )}
                    <Link to="/about" onClick={toggleMenu} className="menu-link light-orange">Sobre mi</Link>
                    <Link to="/projects" onClick={toggleMenu} className="menu-link light-green">Proyectos</Link>
                    <Link to="/contact" onClick={toggleMenu} className="menu-link medium-blue">Contacto</Link>
                </div>
            </nav>
            {isOpen && <div className="nav-overlay" onClick={toggleMenu}></div>}
        </>
    );
};

export default HamburgerMenu;