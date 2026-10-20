import { Container, Typography, Box } from '@mui/material';
import SocialNodes from '../ui/SocialNode';
import Reveal from './Reveal';

export default function ContactSection() {
  return (
    <Container maxWidth="lg" sx={{ py: 2, textAlign: 'center' }}>
     
     <Typography variant="h4" sx={{ color: '#fff', mb: 1, fontWeight: 300, textAlign: 'center' }}>
          Conexiones Directas
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.5)', mb: 6, textAlign: 'center', fontFamily: 'monospace' }}>
          Selecciona un canal para iniciar la comunicación
        </Typography>
      <Reveal delay={0.3}>
        <SocialNodes />
      </Reveal>

      {/* Footer Estilo HUD */}
      <Box sx={{ mt: 15, opacity: 0.2, borderTop: '1px solid rgba(0, 243, 255, 0.2)', pt: 4 }}>
        <Typography variant="caption" color="primary" sx={{ fontFamily: 'monospace' }}>
          JULIO_DEV // 2026 // LOC_LAT_LONG_UNDEFINED
        </Typography>
      </Box>
    </Container>
  );
}