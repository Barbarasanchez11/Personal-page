import '../styles/Cv.css'

function Cv({ title, description }) {
  return (
    <div className="animation-cv">
      <h2 className="title-container-cv">
        {title}
      </h2>
      
      <p className="description-title-container-cv">
        {description}
      </p>
    </div>
  );
}

export default Cv;
