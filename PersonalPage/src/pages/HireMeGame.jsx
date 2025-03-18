import { useState } from "react";

function HireMeGame() {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ top: "50%", left: "50%" });

  const moveButton = () => {
    setScore(score + 1);
    setPosition({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    });
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center">
      <h2 className="text-xl font-bold">¡Atrápame si puedes para contratarme! 😜</h2>
      <button
        className="absolute p-4 bg-blue-500 text-white rounded transition-all"
        style={{ top: position.top, left: position.left, position: "absolute" }}
        onClick={moveButton}
      >
        ¡Clickeame! ({score})
      </button>
    </div>
  );
}

export default HireMeGame;