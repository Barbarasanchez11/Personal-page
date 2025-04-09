import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <Link to="/" className="logo">BS</Link>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header; 