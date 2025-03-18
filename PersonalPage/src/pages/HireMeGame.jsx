import { useState } from "react";
import { motion } from "framer-motion";

import meetingRoom from '/src/assets/meetingRoom.png'
console.log(meetingRoom)

function HireMeGame() {
  const [selectedChair, setSelectedChair] = useState(null);



  // Lista de sillas con posiciones y si están ocupadas
  const chairs = [
    { id: 1, x: "15%", y: "55%", occupied: false },
    { id: 2, x: "35%", y: "45%", occupied: true },
    { id: 3, x: "55%", y: "65%", occupied: false },
    { id: 4, x: "75%", y: "50%", occupied: false },
  ];

  return (
    <div className="game-container">
      {/* Imagen de fondo */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${meetingRoom})` }}
      ></div>

    
      {chairs.map((chair) => (
        <motion.div
          key={chair.id}
          className={`chair ${chair.occupied ? "occupied" : "available"}`}
          style={{ top: chair.y, left: chair.x }}
          
          onClick={() => !chair.occupied && setSelectedChair(chair.id)}
        >
          {chair.occupied ? "❌" : "🪑"}
        </motion.div>
      ))}

      
      {selectedChair && (
        <motion.div
          className="recruiter-avatar"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            top: chairs.find((c) => c.id === selectedChair).y,
            left: chairs.find((c) => c.id === selectedChair).x,
          }}
        >
          👤
        </motion.div>
      )}

      {/* Mensaje de bienvenida */}
      {selectedChair && (
        <motion.div
          className="welcome-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2>¡Bienvenido a la entrevista!</h2>
          <p>Ahora hablemos sobre cómo puedo aportar a tu equipo.</p>
        </motion.div>
      )}
    </div>
  );
}

export default HireMeGame;

