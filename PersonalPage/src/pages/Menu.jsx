import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import '../styles/Menu.css';

const Menu = () => {
    const menuItems = [
        { title: 'PROJECTS', path: '/projects' },
        { title: 'ABOUT ME', path: '/aboutme' },
        { title: 'HIRE ME', path: '/hireme' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.3 }
        },
        exit: { 
            opacity: 0,
            transition: { duration: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: i => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.3
            }
        })
    };

    return (
        <motion.div 
            className="menu-page"
            variants={containerVariants}
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
                
                <Link to="/" className="close-button">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <CloseOutlinedIcon fontSize="large" />
                    </motion.div>
                </Link>
            </nav>

            <div className="menu-content">
                <div className="menu-items">
                    {menuItems.map((item, i) => (
                        <motion.div
                            key={item.title}
                            custom={i}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <Link to={item.path} className="menu-link">
                                {item.title}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Menu; 