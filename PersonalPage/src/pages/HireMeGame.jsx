import { useState } from "react";
import { motion } from "framer-motion";

import "../styles/HireMeGame.css";
import meetingRoom from '../assets/meetingRoom.png';

function HireMeGame() {
  const [selectedChair, setSelectedChair] = useState(null);

  // Lista de sillas con posiciones relativas a la imagen
  const chairs = [
    { id: 1, x: "28%", y: "56%", occupied: false }, // Silla izquierda
    { id: 2, x: "46%", y: "26%", occupied: true }, // Silla arriba
    { id: 3, x: "50%", y: "70%", occupied: false }, // Silla derecha
    { id: 4, x: "70%", y: "50%", occupied: false },// Silla abajo
    {id: 5, x: "60%", y: "64%", occupied: false} // Silla abajo
  ];

  // Encontrar la silla seleccionada
  const selectedChairData = chairs.find((c) => c.id === selectedChair);

  return (
    <div className="game-container">
      
      <img src={meetingRoom} alt="Mesa de reunión" className="background-image" />

      
      {chairs.map((chair) => (
        <motion.div
          key={chair.id}
          className={`chair ${chair.occupied ? "occupied" : "available"}`}
          style={{
            top: chair.y,
            left: chair.x,
            position: 'absolute', // Asegura que la silla esté posicionada correctamente
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => !chair.occupied && setSelectedChair(chair.id)}
        >
          {chair.occupied ? "❌" : "🪑"}
        </motion.div>
      ))}

     
      {selectedChairData && (
        <motion.div
          className="recruiter-avatar"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            top: selectedChairData.y,
            left: selectedChairData.x,
            position: 'absolute',
          }}
        >
          👤
        </motion.div>
      )}

      
      {selectedChairData && (
        <motion.div
          className="welcome-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>¡Bienvenido a la entrevista!</h2>
          <p>Ahora hablemos sobre cómo puedo aportar a tu equipo.</p>
        </motion.div>
      )}
    </div>
  );
}

export default HireMeGame;
