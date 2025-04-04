import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import '../styles/Menu.css';

const Menu = () => {
    const navigate = useNavigate();
    const menuItems = [
        { title: 'PROJECTS', path: '/projects' },
        { title: 'ABOUT ME', path: '/aboutme' },
        { title: 'HIRE ME', path: '/hireme' }
    ];

    const handleClose = (e) => {
        e.preventDefault();
        const menuPage = document.querySelector('.menu-page');
        menuPage.style.animation = 'slideOut 0.8s ease forwards';
        setTimeout(() => {
            navigate('/');
        }, 800);
    };

    const menuVariants = {
        hidden: {
            opacity: 0,
            x: -100,
            transition: {
                duration: 0.2,
                ease: "circOut"
            }
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.25,
                ease: "circOut",
                staggerChildren: 0.05
            }
        },
        exit: {
            opacity: 0,
            x: 100,
            transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            x: -20,
            transition: {
                duration: 0.15,
                ease: "circOut"
            }
        },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.2,
                ease: "circOut"
            }
        },
        exit: { 
            opacity: 0, 
            x: 20,
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    return (
        <motion.div 
            className="menu-page"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <nav className="menu-navigation">
                <motion.div 
                    className="menu-logo"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    BS
                </motion.div>
                
                <motion.div 
                    className="close-button"
                    onClick={handleClose}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <CloseOutlinedIcon fontSize="large" />
                </motion.div>
            </nav>

            <div className="menu-content">
                <div className="menu-items">
                    <Link to="/" className="menu-link">Home</Link>
                    <Link to="/projects" className="menu-link">Projects</Link>
                    <Link to="/aboutme" className="menu-link">About me</Link>
                    <Link to="/contact" className="menu-link">Contact</Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Menu; 