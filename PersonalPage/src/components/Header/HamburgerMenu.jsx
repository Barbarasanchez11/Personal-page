import { Link } from "react-router-dom";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { motion } from "framer-motion";
import '../../styles/HamburgerMenu.css'

const HamburgerMenu = () => {
    return (
        <nav className="navbar">
            <motion.div 
                className="logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                BS
            </motion.div>
            
            <Link to="/menu">
                <motion.div 
                    className="menu-icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <MenuOutlinedIcon />
                </motion.div>
            </Link>
        </nav>
    )
}

export default HamburgerMenu

