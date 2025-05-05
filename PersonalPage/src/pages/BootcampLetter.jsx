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
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLine < letterLines.length) {
      if (charIndex < letterLines[currentLine].length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + letterLines[currentLine][charIndex]);
          setCharIndex(charIndex + 1);
        }, 28); // velocidad de escritura
        return () => clearTimeout(timeout);
      } else {
        setDisplayedLines((prev) => [...prev, letterLines[currentLine]]);
        setCurrentLine(currentLine + 1);
        setCurrentText("");
        setCharIndex(0);
      }
    }
  }, [charIndex, currentLine]);

  return (
    <main className="bootcamp-container">
      <div className="letter-box">
        {displayedLines.map((line, i) => (
          <p key={i} className="letter-line">{line}</p>
        ))}
        {currentLine < letterLines.length && (
          <p className="letter-line typing">{currentText}</p>
        )}
        {currentLine === letterLines.length && (
          <a href="/" className="back-button">Volver al inicio</a>
        )}
      </div>
    </main>
  );
}
