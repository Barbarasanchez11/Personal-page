import { useState } from "react"
import { Link } from "react-router-dom";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const HamburgerMenu = () => {

    const [isOpen,setIsOpen] = useState(false)
    
    const links = [
        
        {name: 'Projects', path: '/projects', id: crypto.randomUUID},
        {name: 'AboutMe', path: '/aboutme', id: crypto.randomUUID},
        {name: 'HireMe', path: '/hireme', id: crypto.randomUUID},
        {name: 'Home', path: '/', id: crypto.randomUUID}
    ]
    return (
        <nav className="hamburger-menu">
      <div onClick={() => setIsOpen(!isOpen)} className="menu-button">
        {isOpen ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
      </div>

      {isOpen && (
        <ul className="menu-list">
          {links.map((link) => (
            <li key={link.name} className="menu-item">
              <Link to={link.path} className="menu-link">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>

    )
}

export default HamburgerMenu

