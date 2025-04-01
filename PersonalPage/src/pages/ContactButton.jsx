const ContactButton = () => {
    const handleEmailClick = () => {
      window.location.href = "mailto:barbarasanchezurbano.com";
    };
  
    return (
      <div onClick={handleEmailClick} className="contact-button">
        Contact
      </div>
    );
  };
  
  export default ContactButton;
  