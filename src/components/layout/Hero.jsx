// src/components/layout/Hero.jsx
import React from 'react';
import { Container, Typography, Box, Button, Chip } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';
import TerminalIcon from '@mui/icons-material/Terminal';
import Reveal from './Reveal';

const CYAN = '#00f3ff';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: { xs: 12, md: 0 },
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 6,
          }}
        >
          {/* Lado Izquierdo: Título y Bio */}
          <Box sx={{ flex: 1, textContent: 'left' }}>
            <Reveal>
              <Chip
                icon={<TerminalIcon sx={{ color: `${CYAN} !important`, fontSize: '1rem' }} />}
                label="SOFTWARE_ENGINEER // FULL_STACK"
                sx={{
                  fontFamily: 'monospace',
                  bgcolor: 'rgba(0, 243, 255, 0.08)',
                  color: CYAN,
                  border: `1px solid rgba(0, 243, 255, 0.3)`,
                  mb: 3,
                  py: 2,
                  px: 1,
                  borderRadius: '6px',
                  letterSpacing: '1.5px',
                  fontSize: '0.8rem',
                }}
              />
            </Reveal>

            <Reveal delay={0.1}>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 900,
                  fontSize: { xs: '2.8rem', sm: '4rem', md: '5rem' },
                  lineHeight: 1.1,
                  color: '#fff',
                  mb: 1,
                  letterSpacing: '2px',
                }}
              >
                R. JULIO
              </Typography>
            </Reveal>

            <Reveal delay={0.2}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 900,
                  fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4rem' },
                  lineHeight: 1.1,
                  color: 'transparent',
                  WebkitTextStroke: `1px ${CYAN}`,
                  mb: 3,
                  letterSpacing: '2px',
                  textShadow: `0 0 15px rgba(0, 243, 255, 0.3)`,
                }}
              >
                DEVELOPER
              </Typography>
            </Reveal>

            <Reveal delay={0.3}>
              <Typography
                variant="body1"
                sx={{
                  color: '#a0aec0',
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  maxWidth: '580px',
                  lineHeight: 1.7,
                  mb: 4,
                }}
              >
                Desarrollo de software orientado a{' '}
                <Box component="span" sx={{ color: CYAN, fontWeight: 'bold' }}>
                  sistemas inmersivos
                </Box>{' '}
                y arquitectura web de alto rendimiento. Construyendo puentes entre la lógica de datos
                y la percepción visual mediante IA y renderizado avanzado.
              </Typography>
            </Reveal>

            {/* Botones de Acción Principal */}
            <Reveal delay={0.4}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  href="/CV_JULIO_DEVELOPER.pdf"
                  target="_blank"
                  download
                  sx={{
                    bgcolor: CYAN,
                    color: '#0a0f1e',
                    fontWeight: 'bold',
                    fontFamily: 'monospace',
                    px: 3,
                    py: 1.2,
                    borderRadius: '8px',
                    letterSpacing: '1px',
                    boxShadow: `0 0 20px rgba(0, 243, 255, 0.4)`,
                    '&:hover': {
                      bgcolor: '#fff',
                      boxShadow: `0 0 30px #fff`,
                    },
                  }}
                >
                  DESCARGAR_CV
                </Button>

                <Button
                  variant="outlined"
                  endIcon={<SendIcon />}
                  component="a"
                  href="#proyectos"
                  sx={{
                    borderColor: 'rgba(255,255,255,0.2)',
                    color: '#fff',
                    fontFamily: 'monospace',
                    px: 3,
                    py: 1.2,
                    borderRadius: '8px',
                    letterSpacing: '1px',
                    '&:hover': {
                      borderColor: CYAN,
                      color: CYAN,
                      backgroundColor: 'rgba(0, 243, 255, 0.08)',
                    },
                  }}
                >
                  VER_PROYECTOS
                </Button>
              </Box>
            </Reveal>
          </Box>

          {/* Lado Derecho: Widget de Status HUD en Vivo */}
          <Box sx={{ flexShrink: 0, width: { xs: '100%', md: '320px' } }}>
            <Reveal delay={0.5}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: '16px',
                  background: 'rgba(10, 15, 30, 0.75)',
                  backdropFilter: 'blur(16px)',
                  border: `1px solid rgba(0, 243, 255, 0.25)`,
                  boxShadow: `0 0 25px rgba(0, 243, 255, 0.15)`,
                  position: 'relative',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{ fontFamily: 'monospace', color: CYAN, letterSpacing: '1px' }}
                  >
                    // SYSTEM_METRICS
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontFamily: 'monospace', color: '#00ff87' }}
                  >
                    ONLINE
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2" sx={{ fontFamily: 'monospace', color: '#fff' }}>
                      Tiempo de Actividad
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontFamily: 'monospace', color: CYAN, fontWeight: 'bold' }}
                    >
                      99.9%
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: '100%',
                      height: '4px',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      borderRadius: '2px',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        width: '99.9%',
                        height: '100%',
                        bgcolor: CYAN,
                        boxShadow: `0 0 10px ${CYAN}`,
                      }}
                    />
                  </Box>
                </Box>

                <Box sx={{ pt: 1, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <Typography
                    variant="caption"
                    sx={{ fontFamily: 'monospace', color: '#a0aec0', display: 'block' }}
                  >
                    LOG: READY_FOR_DEPLOYMENT
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontFamily: 'monospace', color: '#a0aec0', display: 'block', mt: 0.5 }}
                  >
                    LOCATION: LATAM // REMOTE
                  </Typography>
                </Box>
              </Box>
            </Reveal>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}