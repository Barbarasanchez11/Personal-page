import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);



  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'El email no es válido';
    if (!formData.subject.trim()) newErrors.subject = 'El asunto es requerido';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validar formulario antes de enviar
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }
console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID,import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );


      console.log('Formulario enviado con éxito:', result.text);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="geometric-pattern">
          <div className="column left"></div>
          <div className="column center"></div>
          <div className="column right"></div>
        </div>
        <div className="contact-content">
          <h1 className="contact-heading">Contacto</h1>
          <div className="contact-layout">
            <div className="contact-form-wrapper">
              <form ref={form} onSubmit={handleSubmit} noValidate className="contact-form">
                <div className="contact-form-group">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu Nombre"
                    required
                    aria-label="Nombre"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="contact-input"
                  />
                  {errors.name && <span id="name-error" className="contact-error">{errors.name}</span>}
                </div>
                <div className="contact-form-group">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Tu Email"
                    required
                    aria-label="Email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="contact-input"
                  />
                  {errors.email && <span id="email-error" className="contact-error">{errors.email}</span>}
                </div>
                <div className="contact-form-group">
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Asunto"
                    required
                    aria-label="Asunto"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className="contact-input"
                  />
                  {errors.subject && <span id="subject-error" className="contact-error">{errors.subject}</span>}
                </div>
                <div className="contact-form-group">
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tu Mensaje"
                    rows="5"
                    required
                    aria-label="Mensaje"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="contact-textarea"
                  ></textarea>
                  {errors.message && <span id="message-error" className="contact-error">{errors.message}</span>}
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="contact-submit"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
                {submitStatus === 'success' && (
                  <p className="contact-success">¡Mensaje enviado con éxito!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="contact-error">Error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>
                )}
              </form>
            </div>
            <div className="contact-sidebar">
              <h2 className="connect-heading">Conecta Conmigo</h2>
              <div className="social-buttons">
                <a 
                  href="https://github.com/Barbarasanchez11" 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/barbara-sanchez-49b230181/" 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
              <div className="email-section">
                <h3 className="email-heading">¿Prefieres el correo?</h3>
                <a 
                  href="mailto:barbarasanchezurbano@gmail.com" 
                  className="email-address"
                  aria-label="Enviar correo a barbarasanchezurbano@gmail.com"
                >
                  barbarasanchezurbano@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;