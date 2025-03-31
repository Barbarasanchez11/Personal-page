import { use, useState } from "react"


const HamburgerMenu = () => {

    const [isOpen,setIsOpen] = useState(false)
    
    const links = [
        {name: 'Contact', path: '/contact', id: crypto.randomUUID},
        {name: 'Projects', path: '/projects', id: crypto.randomUUID},
        {name: 'AboutMe', path: '/aboutme', id: crypto.randomUUID},
        {name: 'HireMe', path: '/hireme', id: crypto.randomUUID}
    ]
    return (
        <nav className="hamburger-menu">
      <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
        {isOpen ? "✖" : "☰"}
      </button>

      {isOpen && (
        <ul className="menu-list">
          {links.map((link) => (
            <li key={link.id} className="menu-item">
              <a href={link.path} className="menu-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>

    )
}

export default HamburgerMenu

