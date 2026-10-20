// src/components/ui/EnergyBar.jsx
import { Box, Typography } from '@mui/material';

export default function EnergyBar({ skill, level }) {
  const totalBlocks = 12;
  const activeBlocks = Math.round((level / 100) * totalBlocks);

  // Paleta VR/IA 
  const COLORS = {
    primary: '#00f3ff',   // Cian Neón
    secondary: '#9d00ff', // Púrpura Eléctrico
    glass: 'rgba(5, 10, 20, 0.8)', // Fondo más opaco para evitar mezcla con circuitos
    border: 'rgba(0, 243, 255, 0.2)'
  };

  return (
    <Box sx={{ 
      mb: 5, 
      width: '100%', 
      maxWidth: '500px',
      position: 'relative',
      p: 3,
      background: COLORS.glass,
      backdropFilter: 'blur(20px)', // Aumento de blur para separar del fondo
      border: `1px solid ${COLORS.border}`,
      // Esquinas Tácticas
      '&::before': {
        content: '""', position: 'absolute', top: -1, left: -1, width: '20px', height: '20px',
        borderTop: `3px solid ${COLORS.primary}`, borderLeft: `3px solid ${COLORS.primary}`,
      },
      transition: 'all 0.4s ease',
      '&:hover': {
        transform: 'translateY(-5px) rotateX(5deg)',
        boxShadow: `0 15px 40px rgba(0,0,0,0.6), 0 0 20px ${COLORS.primary}22`
      }
    }}>
      
      {/* HEADER */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box>
          <Typography sx={{ 
            color: COLORS.primary, fontSize: '0.65rem', fontFamily: 'monospace', 
            letterSpacing: 3, fontWeight: 'bold' 
          }}>
            {/*`[ NODE_CORE_SCAN ]`*/}
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#fff', fontWeight: 900, letterSpacing: 1,
            textShadow: `0 0 15px ${COLORS.primary}88`
          }}>
            {skill.toUpperCase()}
          </Typography>
        </Box>
        
        <Box sx={{ textAlign: 'right' }}>
          <Typography sx={{ 
            color: COLORS.secondary, fontFamily: 'monospace', fontWeight: 'bold', 
            fontSize: '1.3rem', display: 'block'
          }}>
            {level}%
          </Typography>
          <Box sx={{ width: '40px', height: '2px', bgcolor: COLORS.secondary, ml: 'auto' }} />
        </Box>
      </Box>

      {/* SISTEMA DE BLOQUES DINÁMICOS */}
      <Box sx={{ display: 'flex', gap: '6px', height: '25px' }}>
        {[...Array(totalBlocks)].map((_, index) => (
          <Box
            key={index}
            sx={{
              height: '100%',
              flex: 1,
              position: 'relative',
              clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)',
              bgcolor: index < activeBlocks ? 'transparent' : 'rgba(255,255,255,0.05)',
              border: `1px solid ${index < activeBlocks ? COLORS.primary : 'rgba(255,255,255,0.1)'}`,
              transition: 'all 0.5s ease',
              overflow: 'hidden',
              
              ...(index < activeBlocks && {
                background: `linear-gradient(180deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
                boxShadow: `0 0 15px ${COLORS.primary}`,
                '&::after': {
                  content: '""', position: 'absolute', top: 0, left: '-100%',
                  width: '200%', height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                  animation: 'shimmer 3s infinite linear',
                }
              })
            }}
          />
        ))}
      </Box>

      {/* FOOTER (CORREGIDO) */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, pt: 1, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <Typography sx={{ color: 'rgba(0, 243, 255, 0.4)', fontSize: '0.6rem', fontFamily: 'monospace' }}>
          {`// STATUS: ACTIVE_STREAM`}
        </Typography>
        <Typography sx={{ color: 'rgba(255, 255, 255, 0.2)', fontSize: '0.6rem', fontFamily: 'monospace' }}>
          {/* Usamos un valor fijo o prop para evitar el error de referencia */}
          {`ADDR: 0x${Math.floor(level * 12.34).toString(16).toUpperCase()}`}
        </Typography>
      </Box>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </Box>
  );
}