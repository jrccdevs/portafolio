// src/App.jsx
import React from 'react';
import { ThemeProvider, Box, CssBaseline } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom, ChromaticAberration, Noise } from '@react-three/postprocessing';
import { theme } from './theme';

// Componentes
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import ProjectSection from './components/layout/ProjectSection';
import SkillsSection from './components/layout/SkillsSection';
import ContactSection from './components/layout/ContactSection';
import VRNeuralNetwork from './components/3d/NeuralNetwork';

// Hooks / Assets
import { useMousePosition } from './hooks/useMousePosition.js';
//import techTags from './data/techTags'; // Sugerencia: Mueve los tags a un archivo de datos

function App() {
  const mouse = useMousePosition();

  const rotationEffect = {
    transform: `perspective(1000px) rotateY(${mouse.x * 2}deg) rotateX(${mouse.y * -2}deg)`,
    transition: 'transform 0.1s ease-out',
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style>{`
        body, html { 
          margin: 0; padding: 0; background: #02040a; 
          overflow-x: hidden;
          scroll-behavior: smooth; /* Importante para el Navbar */
        }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-thumb { background: #00f3ff; border-radius: 10px; }
      `}</style>
      
      <Navbar />

      {/* FONDO 3D FIJO */}
      <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <VRNeuralNetwork />
          <EffectComposer>
            <Bloom intensity={1.5} luminanceThreshold={0.2} radius={0.8} />
            <ChromaticAberration offset={[0.001, 0.001]} />
            <Noise opacity={0.03} />
          </EffectComposer>
        </Canvas>
      </Box>

      {/* CONTENIDO SCROLLABLE */}
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        
        {/* Cada sección debe estar pegada a la otra */}
        <Hero rotationEffect={rotationEffect} />
        
        <Box id="projects" sx={{ background: 'rgba(0,0,0,0.2)' }}>
          <ProjectSection />
        </Box>

        <Box id="skills" sx={{ background: 'rgba(0,0,0,0.4)' }}>
          <SkillsSection />
        </Box>

        <Box id="contact">
          <ContactSection />
        </Box>

      </Box>
    </ThemeProvider>
  );
}

export default App;