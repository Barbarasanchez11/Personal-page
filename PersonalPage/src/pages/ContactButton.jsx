const ContactButton = () => {
    const handleEmailClick = () => {
      window.location.href = "mailto:tuemail@example.com";
    };
  
    return (
      <button onClick={handleEmailClick} className="contact-button">
        Contact
      </button>
    );
  };
  
  export default ContactButton;
  