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
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar; 