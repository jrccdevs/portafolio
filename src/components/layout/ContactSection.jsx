// src/components/layout/ContactSection.jsx
import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import TerminalIcon from '@mui/icons-material/Terminal';
import SpeedIcon from '@mui/icons-material/Speed';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SocialNode from '../ui/SocialNode';
import Reveal from './Reveal';

const CYAN = '#00f3ff';
const GREEN_NEON = '#00ff87';

// ⚠️ Ajusta tu teléfono y email aquí
const WHATSAPP_NUMBER = '59175824357';
const WHATSAPP_MESSAGE = encodeURIComponent('Hola Julio, vi tu portafolio y me gustaría ponerme en contacto contigo.');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
const EMAIL_URL = 'mailto:reynaldocalani80@gmail.com?subject=Contacto%20desde%20Portafolio';

export default function ContactSection() {
  return (
    <Box
      id="contacto"
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        {/* Encabezado Principal */}
        <Reveal>
          <Box
            sx={{
              mb: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 900,
                color: '#fff',
                fontFamily: 'monospace',
                letterSpacing: '4px',
                textShadow: '0 0 20px rgba(0, 243, 255, 0.6)',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
              }}
            >
              DIRECT_CONNECTIONS
              <Box component="span" sx={{ fontSize: '1rem', color: CYAN, opacity: 0.7 }}>
                03//
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#a0aec0',
                fontFamily: 'monospace',
                mt: 1.5,
                fontSize: '0.95rem',
                letterSpacing: '1px',
              }}
            >
              Selecciona un canal para iniciar la transmisión de comunicación en tiempo real.
            </Typography>

            <Box
              sx={{
                width: '100px',
                height: '3px',
                bgcolor: CYAN,
                mt: 2,
                boxShadow: `0 0 12px ${CYAN}`,
                borderRadius: '2px',
              }}
            />
          </Box>
        </Reveal>

        {/* Nodos Sociales Flotantes Interactivos */}
        <Reveal delay={0.2}>
          <SocialNode />
        </Reveal>

        {/* Tarjeta HUD Terminal de Estado y Acción Rápida (Reemplazo de los cuadros de texto) */}
        <Reveal delay={0.3}>
          <Box
            sx={{
              maxWidth: '850px',
              mx: 'auto',
              mt: 4,
              p: { xs: 3, md: 4 },
              borderRadius: '20px',
              background: 'rgba(10, 15, 30, 0.85)',
              backdropFilter: 'blur(20px)',
              border: `1px solid rgba(0, 243, 255, 0.3)`,
              boxShadow: `0 0 30px rgba(0, 243, 255, 0.15), inset 0 0 15px rgba(0, 243, 255, 0.05)`,
            }}
          >
            {/* Header del Terminal HUD */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pb: 2,
                mb: 3,
                borderBottom: '1px solid rgba(0, 243, 255, 0.2)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <TerminalIcon sx={{ color: CYAN }} />
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: 'monospace',
                    color: '#fff',
                    fontWeight: 'bold',
                    letterSpacing: '1.5px',
                    fontSize: '0.9rem',
                  }}
                >
                  SYSTEM_STATUS // READY_FOR_PROJECTS
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: GREEN_NEON,
                    boxShadow: `0 0 8px ${GREEN_NEON}`,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{ fontFamily: 'monospace', color: GREEN_NEON, fontWeight: 'bold' }}
                >
                  ONLINE
                </Typography>
              </Box>
            </Box>

            {/* Grid de Metadatos del Desarrollador */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <SpeedIcon sx={{ color: CYAN, fontSize: '1.5rem' }} />
                  <Box>
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#a0aec0', display: 'block' }}>
                      RESPONSE_TIME
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: 'monospace', color: '#fff', fontWeight: 'bold' }}>
                      &lt; 2 HORAS
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <LocationOnIcon sx={{ color: CYAN, fontSize: '1.5rem' }} />
                  <Box>
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#a0aec0', display: 'block' }}>
                      LOCATION
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: 'monospace', color: '#fff', fontWeight: 'bold' }}>
                      LATAM // REMOTE_READY
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <TerminalIcon sx={{ color: GREEN_NEON, fontSize: '1.5rem' }} />
                  <Box>
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#a0aec0', display: 'block' }}>
                      AVAILABILITY
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: 'monospace', color: GREEN_NEON, fontWeight: 'bold' }}>
                      FREELANCE / FULL-TIME
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* Botones de Transmisión Inmediata */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
              <Button
                fullWidth
                variant="contained"
                component="a"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<WhatsAppIcon sx={{ color: '#0a0f1e !important' }} />}
                sx={{
                  bgcolor: CYAN,
                  color: '#0a0f1e',
                  fontFamily: 'monospace',
                  fontWeight: 900,
                  py: 1.5,
                  fontSize: '0.85rem',
                  borderRadius: '10px',
                  letterSpacing: '1.5px',
                  boxShadow: `0 0 20px rgba(0, 243, 255, 0.4)`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: GREEN_NEON,
                    boxShadow: `0 0 30px ${GREEN_NEON}`,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                INICIAR_CHAT_WHATSAPP
              </Button>

              <Button
                fullWidth
                variant="outlined"
                component="a"
                href={EMAIL_URL}
                startIcon={<EmailIcon />}
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.25)',
                  color: '#fff',
                  fontFamily: 'monospace',
                  fontWeight: 'bold',
                  py: 1.5,
                  fontSize: '0.85rem',
                  borderRadius: '10px',
                  letterSpacing: '1.5px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: CYAN,
                    color: CYAN,
                    backgroundColor: 'rgba(0, 243, 255, 0.1)',
                    boxShadow: `0 0 15px rgba(0, 243, 255, 0.3)`,
                  },
                }}
              >
                ENVIAR_CORREO_DIRECTO
              </Button>
            </Box>
          </Box>
        </Reveal>

        {/* Footer HUD Bottom */}
        <Box
          sx={{
            mt: 10,
            pt: 4,
            borderTop: '1px solid rgba(0, 243, 255, 0.2)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="caption"
            sx={{ fontFamily: 'monospace', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}
          >
            © 2026 R._JULIO_DEVELOPER // ALL_SYSTEMS_OPERATIONAL
          </Typography>

          <Typography
            variant="caption"
            sx={{ fontFamily: 'monospace', color: CYAN, letterSpacing: '1px' }}
          >
            STACK: REACT + VITE + MUI // SYSTEM_READY
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}