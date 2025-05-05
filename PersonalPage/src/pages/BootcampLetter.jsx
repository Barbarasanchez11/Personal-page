import { useEffect, useState } from "react";
import "../styles/BootcampLetter.css";

const letterLines = [
  "Hola, Somos F5",
  "",
  "Sé que probablemente ahora mismo estáis leyendo un montón de candidaturas muy intensas, llenas de grandes palabras como 'transformación digital', 'visión estratégica' o 'disrupción'. Esta no es una de esas.",
  "",
  "Vengo con algo más simple: tengo muchísimas ganas de aprender Inteligencia Artificial.",
  "No porque esté de moda (aunque sí, un poco), sino porque llevo tiempo pensando en cómo usarla para crear cosas útiles, raras o simplemente divertidas.",
  "",
  "He hecho cursos, he jugado con modelos, he generado imágenes que dan miedo sin querer (lo típico)... pero sé que me falta estructura, feedback, y estar rodeado de gente que también esté loca por esto.",
  "",
  "Por eso este bootcamp me parece perfecto. Porque no quiero aprender solo. Quiero aprender bien.",
  "",
  "No prometo ser la persona más técnica desde el día uno, pero sí la que más pregunta, más prueba, más se frustra y vuelve a intentarlo con una taza de café en la mano.",
  "",
  "Así que esta es mi (humilde pero motivada) candidatura. Si me cogéis, prometo darlo todo. Y si no… bueno, probablemente os entrene una IA que escriba mejores cartas el año que viene",
  "",
  "Gracias por leer, de verdad.",
  "",
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
        }, 28);
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
