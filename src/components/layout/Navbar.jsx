// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const navItems = [
  { label: 'RESUMEN', id: 'hero' },
  { label: 'PROYECTOS', id: 'proyectos' },
  { label: 'HABILIDADES', id: 'habilidades' },
];

const CYAN = '#00f3ff';
const GREEN_NEON = '#00ff87';

// ⚠️ Cambia '59170000000' por tu número de WhatsApp real con código de país
const WHATSAPP_NUMBER = '59175824357';
const WHATSAPP_MESSAGE = encodeURIComponent('Hola Julio, vi tu portafolio y me gustaría ponerme en contacto contigo.');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrolled
          ? 'rgba(6, 10, 22, 0.88)'
          : 'linear-gradient(180deg, rgba(6,10,22,0.9) 0%, rgba(6,10,22,0.2) 100%)',
        backdropFilter: 'blur(20px)',
        boxShadow: scrolled
          ? '0 0 25px rgba(0, 243, 255, 0.25), inset 0 -1px 0 rgba(0, 243, 255, 0.4)'
          : 'none',
        borderBottom: '1px solid rgba(0, 243, 255, 0.25)',
        transition: 'all 0.4s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.2, px: '0 !important' }}>
          {/* Logo Brand Cyberpunk */}
          <Box
            component="a"
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                bgcolor: CYAN,
                boxShadow: `0 0 12px ${CYAN}, 0 0 20px ${CYAN}`,
                borderRadius: '2px',
                transform: 'rotate(45deg)',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 900,
                color: '#fff',
                letterSpacing: '2px',
                fontSize: { xs: '1rem', sm: '1.25rem' },
                textShadow: `0 0 10px rgba(0, 243, 255, 0.5)`,
                '&:hover': {
                  color: CYAN,
                },
              }}
            >
              R._JULIO_DEVELOPER
            </Typography>
          </Box>

          {/* Menú Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3.5 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={(e) => scrollToSection(e, item.id)}
                sx={{
                  color: '#e2e8f0',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '1.5px',
                  position: 'relative',
                  px: 1.5,
                  py: 0.8,
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: CYAN,
                    backgroundColor: 'rgba(0, 243, 255, 0.08)',
                    boxShadow: '0 0 15px rgba(0, 243, 255, 0.2)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* Badge Status Activo */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                bgcolor: 'rgba(0, 255, 135, 0.08)',
                border: `1px solid ${GREEN_NEON}50`,
                px: 1.5,
                py: 0.5,
                borderRadius: '20px',
                boxShadow: `0 0 10px ${GREEN_NEON}30`,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: GREEN_NEON,
                  boxShadow: `0 0 10px ${GREEN_NEON}`,
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%': { opacity: 0.4 },
                    '50%': { opacity: 1 },
                    '100%': { opacity: 0.4 },
                  },
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: GREEN_NEON,
                  fontFamily: 'monospace',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  fontSize: '0.7rem',
                }}
              >
                ACTIVO
              </Typography>
            </Box>

            {/* Botón de Contacto por WhatsApp */}
            <Button
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
                px: 2.5,
                py: 1,
                borderRadius: '8px',
                letterSpacing: '1px',
                fontSize: '0.8rem',
                boxShadow: `0 0 20px rgba(0, 243, 255, 0.5)`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: GREEN_NEON,
                  boxShadow: `0 0 30px ${GREEN_NEON}`,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              CONTACTAR_AHORA
            </Button>
          </Box>

          {/* Menú Móvil Hamburger Icon */}
          <IconButton
            onClick={() => setMobileOpen(true)}
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: CYAN,
              border: '1px solid rgba(0, 243, 255, 0.3)',
              borderRadius: '8px',
              bgcolor: 'rgba(0, 243, 255, 0.05)',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Drawer Móvil Desplegable */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: '280px',
            background: 'rgba(6, 10, 22, 0.98)',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid rgba(0, 243, 255, 0.3)',
            p: 3,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: CYAN }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.id}
              onClick={(e) => scrollToSection(e, item.id)}
              sx={{
                cursor: 'pointer',
                mb: 1.5,
                borderRadius: '6px',
                '&:hover': { bgcolor: 'rgba(0, 243, 255, 0.1)' },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: 'monospace',
                  color: '#fff',
                  letterSpacing: '2px',
                  fontWeight: 'bold',
                }}
              />
            </ListItem>
          ))}
          <Button
            fullWidth
            variant="contained"
            component="a"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<WhatsAppIcon />}
            sx={{
              mt: 4,
              bgcolor: CYAN,
              color: '#0a0f1e',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              py: 1.2,
              borderRadius: '8px',
              boxShadow: `0 0 15px rgba(0, 243, 255, 0.4)`,
            }}
          >
            CONTACTAR_AHORA
          </Button>
        </List>
      </Drawer>
    </AppBar>
  );
}