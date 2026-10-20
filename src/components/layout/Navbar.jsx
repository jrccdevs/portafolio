import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';

const navItems = [
  { label: 'RESUMEN', id: 'hero' },
  { label: 'HABILIDADES', id: 'skills'},
  { label: 'PROYECTOS', id: 'projects'},
 
];

const CYAN = "#00f3ff";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función de navegación suave
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Ajuste para que no quede tapado por el navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'transparent', 
        boxShadow: 'none',
        transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
        top: scrolled ? 0 : 20, 
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(2, 4, 10, 0.9)' : 'rgba(2, 4, 10, 0.2)',
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${scrolled ? 'rgba(0, 243, 255, 0.3)' : 'rgba(255, 255, 255, 0.05)'}`,
          transition: 'all 0.5s ease',
          height: scrolled ? '60px' : '80px',
          px: { md: 6 },
        }}>
          
          {/* LADO IZQUIERDO: IDENTITY */}
          <Box 
            onClick={(e) => scrollToSection(e, 'hero')}
            sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ 
                width: 4, height: 18, bgcolor: CYAN, 
                boxShadow: `0 0 15px ${CYAN}`,
                animation: 'blink 2s infinite' 
              }} />
              <Typography sx={{ 
                fontFamily: 'monospace', fontWeight: 900, letterSpacing: 5,
                color: '#fff', fontSize: '0.9rem' 
              }}>
                R.JULIO_DEVELOPER
              </Typography>
            </Box>
          </Box>

          {/* CENTRO: NAVEGACIÓN */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 6 }}>
            {navItems.map((item) => (
              <Box 
                key={item.label}
                component="a"
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                sx={{
                  textDecoration: 'none',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover .label': { color: CYAN },
                  '&:hover .line': { width: '100%', bgcolor: CYAN }
                }}
              >
                <Typography sx={{ 
                  color: CYAN, fontSize: '0.5rem', fontFamily: 'monospace', mb: 0.5, opacity: 0.5 
                }}>
                  {item.code}
                </Typography>
                <Typography className="label" sx={{ 
                  color: '#fff', fontSize: '0.7rem', fontWeight: 600, 
                  letterSpacing: 3, transition: '0.3s' 
                }}>
                  {item.label}
                </Typography>
                <Box className="line" sx={{ 
                  width: '0%', height: '1px', bgcolor: 'rgba(255,255,255,0.2)', 
                  mt: 0.5, transition: '0.4s cubic-bezier(0.19, 1, 0.22, 1)' 
                }} />
              </Box>
            ))}
          </Box>

          {/* LADO DERECHO: ACCIÓN */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
            <Box sx={{ textAlign: 'right' }}>
              <Typography sx={{ color: '#00ff00', fontSize: '0.5rem', fontFamily: 'monospace', fontWeight: 'bold' }}>
                ACTIVO
              </Typography>
            </Box>
            
            <Box 
              onClick={(e) => scrollToSection(e, 'contact')}
              sx={{ 
                border: `1px solid ${CYAN}`,
                p: '8px 20px',
                position: 'relative',
                cursor: 'pointer',
                transition: '0.3s',
                '&:hover': {
                  bgcolor: `${CYAN}11`,
                  boxShadow: `inset 0 0 15px ${CYAN}33`,
                  '& .corner': { width: 12, height: 12 }
                }
              }}
            >
              <Box className="corner" sx={{ position: 'absolute', top: -2, left: -2, width: 6, height: 6, borderTop: `2px solid ${CYAN}`, borderLeft: `2px solid ${CYAN}`, transition: '0.3s' }} />
              <Box className="corner" sx={{ position: 'absolute', bottom: -2, right: -2, width: 6, height: 6, borderBottom: `2px solid ${CYAN}`, borderRight: `2px solid ${CYAN}`, transition: '0.3s' }} />
              
              <Typography sx={{ color: '#fff', fontSize: '0.65rem', fontWeight: 900, letterSpacing: 2 }}>
                CONTACTAR_AHORA
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; filter: brightness(1.2); }
          50% { opacity: 0.3; filter: brightness(0.8); }
        }
      `}</style>
    </AppBar>
  );
}