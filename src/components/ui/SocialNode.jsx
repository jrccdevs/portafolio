// src/components/ui/SocialNodes.jsx
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const socialLinks = [
  { name: 'GITHUB', icon: <GitHubIcon />, url: '#' },
  { name: 'LINKEDIN', icon: <LinkedInIcon />, url: '#' },
  { name: 'E-MAIL', icon: <EmailIcon />, url: '#' },
];

const WHITE = "#ffffff";

export default function SocialNodes() {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      gap: { xs: 8, md: 16 }, // Más espacio para las órbitas
      flexWrap: 'wrap',
      py: 20,
      perspective: '2000px', // Profundidad VR aumentada
    }}>
      {socialLinks.map((link, i) => (
        <Box
          key={i}
          component="a"
          href={link.url}
          target="_blank"
          sx={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
            // HOVER: El sistema orbital se acelera y se expande
            '&:hover': { 
              transform: 'scale(1.1) translateZ(50px)',
              '& .orbit-ring-1': { transform: 'rotateX(70deg) rotateY(10deg) rotateZ(360deg)', borderColor: WHITE },
              '& .orbit-ring-2': { transform: 'rotateX(-70deg) rotateY(-10deg) rotateZ(-360deg)', borderColor: WHITE },
              '& .data-pulse': { animation: 'pulse-active 0.5s infinite alternate' },
              '& .node-core': { boxShadow: `0 0 50px ${WHITE}` },
              '& .label-text': { color: WHITE, opacity: 1, letterSpacing: '6px' }
            }
          }}
        >
          {/* SISTEMA ORBITAL 3D */}
          <Box sx={{
            width: '120px',
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            transformStyle: 'preserve-3d',
            // Rotación lenta constante del sistema completo
            animation: `system-float ${4 + i}s infinite ease-in-out`
          }}>
            
            {/* ANILLO ORBITAL 1 (Eje X) */}
            <Box className="orbit-ring-1" sx={{
              position: 'absolute',
              width: '100%', height: '100%',
              borderRadius: '50%',
              border: `1px solid ${WHITE}22`,
              transform: 'rotateX(70deg) rotateY(10deg)',
              transition: 'all 1s ease-in-out',
              // Partícula orbitando en el anillo
              '&::after': {
                content: '""', position: 'absolute', top: '50%', left: '-2px',
                width: '4px', height: '4px', bgcolor: WHITE, borderRadius: '50%',
                boxShadow: `0 0 10px ${WHITE}`,
                animation: 'orbit-particle 3s infinite linear'
              }
            }} />

            {/* ANILLO ORBITAL 2 (Eje Y) */}
            <Box className="orbit-ring-2" sx={{
              position: 'absolute',
              width: '100%', height: '100%',
              borderRadius: '50%',
              border: `1px solid ${WHITE}22`,
              transform: 'rotateX(-70deg) rotateY(-10deg)',
              transition: 'all 1s ease-in-out',
            }} />

            {/* NÚCLEO DEL NODO (Orb central) */}
            <Box 
              className="node-core"
              sx={{
                width: '70px', height: '70px',
                borderRadius: '50%',
                bgcolor: 'rgba(0,0,0,0.9)', // Fondo opaco para aislar
                border: `2px solid ${WHITE}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', zIndex: 3,
                boxShadow: `0 0 20px ${WHITE}44`,
                transition: 'all 0.3s ease',
                overflow: 'hidden',
              }}
            >
              {/* Efecto de Pulso de Datos Interno */}
              <Box className="data-pulse" sx={{
                position: 'absolute', top: '50%', left: '50%',
                width: '10px', height: '10px',
                bgcolor: WHITE, borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: 0,
                zIndex: 1
              }} />

              {/* Icono Principal */}
              <Box sx={{ 
                color: WHITE, fontSize: '2.5rem', zIndex: 2,
                filter: `drop-shadow(0 0 10px ${WHITE})`
              }}>
                {link.icon}
              </Box>
            </Box>
          </Box>
          
          {/* ETIQUETA DE DATOS */}
          <Box sx={{ mt: 5, textAlign: 'center' }}>
            <Typography 
              className="label-text"
              variant="overline" 
              sx={{ 
                display: 'block', color: 'rgba(255,255,255,0.7)', fontWeight: 900, 
                letterSpacing: 4, fontSize: '0.85rem', transition: 'all 0.3s ease',
                textShadow: `0 0 10px ${WHITE}44`
              }}
            >
              {link.name}
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace', fontSize: '0.65rem' }}
            >
              {`// NODE_ID: 0x${i + 1}AA`}
            </Typography>
          </Box>
        </Box>
      ))}

      {/* KEYFRAMES DE ANIMACIONES ULTRA-DINÁMICAS */}
      <style>{`
        @keyframes system-float {
          0%, 100% { transform: translateY(0) rotateY(0deg); }
          50% { transform: translateY(-15px) rotateY(5deg); }
        }
        @keyframes orbit-particle {
          0% { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
        @keyframes pulse-active {
          0% { width: 10px; height: 10px; opacity: 1; }
          100% { width: 100px; height: 100px; opacity: 0; }
        }
      `}</style>
    </Box>
  );
}