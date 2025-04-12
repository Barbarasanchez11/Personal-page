import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };

    return (
        <header className="header">
            
            {!isOpen && (
                <div className="logo">
                    <Link to="/">BS</Link>
                </div>
            )}
            <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
        </header>
    );
};

export default Header;