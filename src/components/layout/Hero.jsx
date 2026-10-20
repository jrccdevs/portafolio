// src/components/layout/Hero.jsx
import { Box, Typography, Container } from '@mui/material';

export default function Hero({ rotationEffect }) {
  const CYAN = "#00f3ff";

  return (
    <Box 
      id="hero"
      sx={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        zIndex: 2,
        overflow: 'hidden',
        // Efecto de viñeta para centrar la atención
        background: 'radial-gradient(circle at 50% 50%, rgba(0, 243, 255, 0.03) 0%, transparent 70%)',
        ...rotationEffect 
      }}
    >
      {/* 1. MALLA DE FONDO TÉCNICA (GRID) */}
      <Box sx={{
        position: 'absolute',
        width: '200%',
        height: '200%',
        top: '-50%',
        left: '-50%',
        backgroundImage: `linear-gradient(${CYAN}05 1px, transparent 1px), linear-gradient(90deg, ${CYAN}05 1px, transparent 1px)`,
        backgroundSize: '100px 100px',
        transform: 'perspective(500px) rotateX(60deg)',
        zIndex: -1,
        opacity: 0.5
      }} />

      <Container maxWidth="lg">
        <Box sx={{ position: 'relative', pointerEvents: 'auto' }}>
          
          {/* INDICADOR DE COORDENADAS (FLOTANTE IZQUIERDA) */}
          <Box sx={{ 
            position: 'absolute', left: -60, top: '50%', transform: 'rotate(-90deg)',
            display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 2, opacity: 0.3
          }}>
            <Typography sx={{ color: '#fff', fontSize: '0.6rem', fontFamily: 'monospace', letterSpacing: 4 }}>
              LAT_2.441 // LONG_40.882
            </Typography>
            <Box sx={{ width: 40, height: '1px', bgcolor: '#fff' }} />
          </Box>

          {/* ETIQUETA DE SISTEMA */}
          <Typography sx={{ 
            color: CYAN, fontFamily: 'monospace', fontSize: '0.7rem', 
            letterSpacing: 8, mb: 1, fontWeight: 'bold',
            display: 'flex', alignItems: 'center', gap: 2,
            animation: 'fadeIn 2s ease-out'
          }}>
            
          </Typography>

          {/* TÍTULO PRINCIPAL CON EFECTO DE CAPAS */}
          <Box sx={{ mb: 4, position: 'relative' }}>
            <Typography 
              variant="h1"
              sx={{ 
                color: '#fff', 
                fontSize: { xs: '4.5rem', md: '9rem' }, 
                fontWeight: 900, 
                lineHeight: 0.8,
                letterSpacing: '-5px',
                position: 'relative',
                textShadow: `0 0 40px rgba(0, 243, 255, 0.2)`,
                '& span': { 
                  display: 'block',
                  fontWeight: 200,
                  fontSize: { xs: '2.5rem', md: '5rem' },
                  letterSpacing: '15px',
                  color: 'transparent',
                  WebkitTextStroke: `1px rgba(255,255,255,0.4)`,
                  mt: 1,
                  ml: 1
                }
              }}
            >
              R.JULIO
              <span className="glitch-text">DEVELOPER</span>
            </Typography>
          </Box>

          {/* DESCRIPCIÓN TÉCNICA ASIMÉTRICA */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'flex-start',
            gap: 4,
            mt: 8
          }}>
            <Box sx={{ 
              p: 3, 
              borderLeft: `1px solid ${CYAN}`, 
              background: 'linear-gradient(90deg, rgba(0,243,255,0.05) 0%, transparent 100%)',
              backdropFilter: 'blur(5px)'
            }}>
              <Typography sx={{ 
                color: '#fff', fontSize: '0.9rem', maxWidth: '400px', 
                lineHeight: 1.8, opacity: 0.8, fontFamily: 'sans-serif' 
              }}>
                Ingeniería de software enfocada en <b>sistemas inmersivos</b>. 
                Construyendo puentes entre la lógica de datos y la percepción visual 
                mediante algoritmos de IA y renderizado avanzado.
              </Typography>
            </Box>

            {/* STATUS BOX (TIPO INSTRUMENTAL) */}
            <Box sx={{ 
              display: 'flex', flexDirection: 'column', gap: 1,
              p: 2, border: '1px solid rgba(255,255,255,0.1)',
              minWidth: '200px'
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ color: CYAN, fontSize: '0.6rem', fontFamily: 'monospace' }}>Uptime</Typography>
                <Typography sx={{ color: '#fff', fontSize: '0.6rem', fontFamily: 'monospace' }}>99.9%</Typography>
              </Box>
              <Box sx={{ width: '100%', height: 2, bgcolor: 'rgba(255,255,255,0.1)' }}>
                <Box sx={{ width: '75%', height: '100%', bgcolor: CYAN, boxShadow: `0 0 10px ${CYAN}` }} />
              </Box>
              <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.5rem', fontFamily: 'monospace', mt: 1 }}>
                LOG: READY_FOR_DEPLOYMENT
              </Typography>
            </Box>
          </Box>

        </Box>
      </Container>

      {/* ESTILOS DE ANIMACIÓN */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .glitch-text {
          animation: glitch 5s infinite;
        }
        @keyframes glitch {
          0%, 90%, 100% { transform: none; opacity: 1; }
          92% { transform: skewX(10deg); opacity: 0.8; }
          95% { transform: skewX(-10deg); opacity: 0.8; }
        }
      `}</style>
    </Box>
  );
}