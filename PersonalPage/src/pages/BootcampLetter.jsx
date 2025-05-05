import { useEffect, useState } from "react";
import "../styles/BootcampLetter.css"; 

const letterLines = [
  "Querida IA que aún no existe,",
  "",
  "Hoy te escribo desde el presente, aún sin saber programarte del todo, sin entender del todo tus capas, tus pesos, tus sesgos...",
  "Pero con una certeza: quiero construirte.",
  "",
  "No quiero solo aprender sobre inteligencia artificial.",
  "Quiero colaborar contigo, diseñarte, resolver problemas reales, y quizá, crear algo que nunca haya existido antes.",
  "",
  "Este bootcamp no es una puerta. Es el primer paso hacia ese futuro.",
  "",
  "No tengo todas las respuestas. Pero tengo una obsesión: aprender.",
  "",
  "Atentamente,",
  "Bárbara",
];

export default function BootcampLetter() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < letterLines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, letterLines[index]]);
        setIndex(index + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <main className="bootcamp-container">
      <div className="letter-box">
        {displayedLines.map((line, i) => (
          <p key={i} className="letter-line">{line}</p>
        ))}
        {index === letterLines.length && (
          <a href="/" className="back-button">Volver al inicio</a>
        )}
      </div>
    </main>
  );
}
