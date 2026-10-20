import { Box, Typography, Button, Chip, Stack } from '@mui/material';

export default function AIProjectCard({ title, description, tags, link }) {
  return (
    <Box sx={{
      position: 'relative',
      p: '2px', // Espacio para el borde degradado animado
      background: 'linear-gradient(135deg, #00f3ff 0%, #9d00ff 100%)',
      clipPath: 'polygon(0 0, 95% 0, 100% 15%, 100% 100%, 5% 100%, 0 85%)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 0 30px rgba(157, 0, 255, 0.4)',
      }
    }}>
      <Box sx={{
        bgcolor: 'rgba(10, 10, 20, 0.95)',
        backdropFilter: 'blur(20px)',
        p: 3,
        height: '100%',
        clipPath: 'polygon(0 0, 95% 0, 100% 15%, 100% 100%, 5% 100%, 0 85%)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        // Fondo de malla de "red neuronal" sutil
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 243, 255, 0.05) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
          pointerEvents: 'none'
        }
      }}>
        
        {/* Header con estilo de carga de procesador */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="caption" sx={{ color: '#00f3ff', fontFamily: 'monospace', opacity: 0.8 }}>
            
          </Typography>
          <Box sx={{ 
            width: '40px', height: '4px', bgcolor: 'rgba(0, 243, 255, 0.2)', borderRadius: 2,
            position: 'relative', overflow: 'hidden'
          }}>
            <Box sx={{ 
              position: 'absolute', width: '60%', height: '100%', bgcolor: '#00f3ff',
              boxShadow: '0 0 10px #00f3ff', animation: 'load 2s infinite ease-in-out'
            }} />
          </Box>
        </Stack>

        <Typography variant="h5" sx={{ 
          fontWeight: 900, color: '#fff', mb: 1, letterSpacing: '1px',
          textShadow: '0 0 15px rgba(0, 243, 255, 0.3)'
        }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ 
          color: 'rgba(255, 255, 255, 0.7)', mb: 3, fontSize: '0.9rem', 
          fontFamily: '"Orbitron", "Roboto", sans-serif', // Opcional si tienes la fuente
          minHeight: '60px'
        }}>
          {description}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 4 }}>
          {tags.map((tag) => (
            <Chip 
              key={tag} 
              label={tag} 
              sx={{ 
                bgcolor: 'rgba(157, 0, 255, 0.1)', 
                color: '#d68aff', 
                border: '1px solid rgba(157, 0, 255, 0.3)',
                borderRadius: '4px',
                fontSize: '0.7rem',
                fontWeight: 'bold',
                '&:hover': { bgcolor: 'rgba(157, 0, 255, 0.2)', borderColor: '#9d00ff' }
              }} 
            />
          ))}
        </Box>

        {/* Botón con estilo Cyber-Tech */}
        <Button 
          variant="text" 
          fullWidth
          component="a"
          href={link}
          target="_blank"
          sx={{ 
            mt: 'auto',
            color: '#fff',
            fontWeight: 'bold',
            py: 1.5,
            border: '1px solid rgba(0, 243, 255, 0.3)',
            background: 'linear-gradient(90deg, rgba(0, 243, 255, 0.1) 0%, transparent 100%)',
            transition: 'all 0.3s',
            '&:hover': {
              background: 'linear-gradient(90deg, rgba(0, 243, 255, 0.2) 0%, rgba(157, 0, 255, 0.2) 100%)',
              borderColor: '#00f3ff',
              letterSpacing: '3px'
            }
          }}
        >
          VIEW_DEMO_&gt;
        </Button>

        {/* Decoración de esquina inferior */}
        <Box sx={{
          position: 'absolute', bottom: 5, right: 5, width: 20, height: 20,
          borderBottom: '2px solid #9d00ff', borderRight: '2px solid #9d00ff',
          opacity: 0.5
        }} />
      </Box>

      {/* Animación keyframes para el procesador */}
      <style>{`
        @keyframes load {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </Box>
  );
}