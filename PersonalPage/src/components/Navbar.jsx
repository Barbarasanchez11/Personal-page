import HamburgerMenu from './HamburgerMenu';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import '../styles/Navbar.css';

const Navbar = ({ isOpen, toggleMenu }) => {
    return (
        <nav className="navbar">
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
            <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </nav>
    );
};

export default Navbar;