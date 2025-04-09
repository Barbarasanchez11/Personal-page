import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import '../styles/Home.css';

const ParticleEffect = () => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const createParticles = () => {
            const radius = 150; // Radio de la circunferencia
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            
            for (let i = 0; i < 50; i++) {
                const angle = Math.random() * Math.PI * 2;
                const spread = 30; // Dispersión desde la circunferencia
                const distanceFromCenter = radius + (Math.random() * spread * 2) - spread;
                
                particles.push({
                    x: centerX + Math.cos(angle) * distanceFromCenter,
                    y: centerY + Math.sin(angle) * distanceFromCenter,
                    size: Math.random() * 2,
                    speedX: Math.random() * 0.5 - 0.25,
                    speedY: Math.random() * 0.5 - 0.25,
                    opacity: Math.random(),
                    angle: angle
                });
            }
            particlesRef.current = particles;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                // Actualizar posición
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                particle.opacity = Math.sin(Date.now() * 0.003 + particle.angle) * 0.5 + 0.5;

                // Mantener partículas dentro del círculo
                const dx = particle.x - canvas.width / 2;
                const dy = particle.y - canvas.height / 2;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance > 180) {
                    const angle = Math.atan2(dy, dx);
                    particle.x = canvas.width / 2 + Math.cos(angle) * 180;
                    particle.y = canvas.height / 2 + Math.sin(angle) * 180;
                    particle.speedX *= -1;
                    particle.speedY *= -1;
                }

                // Dibujar partícula
                ctx.beginPath();
                ctx.fillStyle = `rgba(139, 181, 10, ${particle.opacity})`;
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            createParticles();
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="particles-canvas" />;
};

const Home = () => {
    return (
        <div className="home">
            <ParticleEffect />
            <div className="title-container">
                <h1>Bárbara Sánchez</h1>
                <p className="role">Fullstack Developer</p>
            </div>
        </div>
    );
};

export default Home; 