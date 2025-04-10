import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="geometric-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>
      <div className="content-wrapper">
        <div className="about-card">
          <div className="card-image">
            <img src="/path-to-your-image.jpg" alt="Profile" />
          </div>
          <div className="card-content">
            <h2>Sobre mí</h2>
            <p className="tagline">Full Stack Developer & Creative Designer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 