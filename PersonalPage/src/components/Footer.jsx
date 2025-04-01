import ContactButton from "../pages/ContactButton"
import '../styles/Footer.css'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

               <ContactButton />
               <p>&copy; 2025 Bárbara sánchez. Todos los derechos reservados.</p>

            </div>
        </footer>
    )
}

export default Footer