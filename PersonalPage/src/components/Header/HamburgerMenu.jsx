import { useState } from "react"
import { Link } from "react-router-dom";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import '../../styles/HamburgerMenu.css'

const HamburgerMenu = () => {

    const [isOpen,setIsOpen] = useState(false)
    const [isHome,setIsHome] = useState(true)

    const clickHandler = () => {
      setIsOpen(!isOpen)
      
    }
    
    const links = [
        
        {name: 'Projects', path: '/projects', id: crypto.randomUUID},
        {name: 'AboutMe', path: '/aboutme', id: crypto.randomUUID},
        {name: 'HireMe', path: '/hireme', id: crypto.randomUUID},
        {name: 'Home', path: '/', id: crypto.randomUUID}
    ]
    
    return (
      <nav className="navbar">
        <div>
        Logo
        </div>
        <div  onClick={clickHandler}>
          <MenuOutlinedIcon  />
        </div>
        <div className= {!isOpen ? "close-navbar" : 'close-navbar showNavbar'} onClick={clickHandler}>
          <CloseOutlinedIcon />

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
        </div>
        

        
      </nav>
       
    )
}

export default HamburgerMenu

