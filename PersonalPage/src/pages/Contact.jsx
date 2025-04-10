import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la lógica de envío del formulario
  };

  return (
    <div className="contact">
      <div className="geometric-background">
        <div className="column column-1">
          <div className="shape circle-1"></div>
        </div>
        <div className="column column-2">
          <div className="shape circle-2"></div>
        </div>
        <div className="column column-3">
          <div className="shape circle-3"></div>
        </div>
      </div>
      
      <motion.div 
        className="form-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="visually-hidden">Nombre</label>
            <motion.input 
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="text" 
              id="name" 
              placeholder="Nombre"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="visually-hidden">Email</label>
            <motion.input 
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="email" 
              id="email" 
              placeholder="Email"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="visually-hidden">Mensaje</label>
            <motion.textarea 
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              id="message" 
              placeholder="Mensaje"
              rows="6"
              required
            ></motion.textarea>
          </div>

          <motion.button 
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Enviar mensaje
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;