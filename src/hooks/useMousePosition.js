// src/hooks/useMousePosition.js
import { useState, useEffect } from 'react';

export const useMousePosition = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalizamos: Izquierda = -1, Derecha = 1, Arriba = 1, Abajo = -1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mouse;
};