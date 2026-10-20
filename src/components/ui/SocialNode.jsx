// src/components/ui/SocialNode.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const socialLinks = [
  {
    name: 'GITHUB',
    protocol: '// REPO_ACCESS',
    url: 'https://github.com/jrccdevs',
    icon: <GitHubIcon sx={{ fontSize: '2.5rem' }} />,
    color: '#00f3ff',
    id: '01',
    delay: '0s',
  },
  {
    name: 'LINKEDIN',
    protocol: '// PROFESSIONAL_NET',
    url: 'https://linkedin.com/in/tu-perfil',
    icon: <LinkedInIcon sx={{ fontSize: '2.5rem' }} />,
    color: '#00a2ff',
    id: '02',
    delay: '0.6s',
  },
  {
    name: 'WHATSAPP',
    protocol: '// DIRECT_STREAM',
    url: 'https://wa.me/59175824357?text=Hola%20Julio,%20vi%20tu%20portafolio!',
    icon: <WhatsAppIcon sx={{ fontSize: '2.5rem' }} />,
    color: '#00ff87',
    id: '03',
    delay: '1.2s',
  },
  {
    name: 'EMAIL',
    protocol: '// SMTP_PROTOCOL',
    url: 'mailto:reynaldocalani80@gmail.com',
    icon: <EmailIcon sx={{ fontSize: '2.5rem' }} />,
    color: '#ff0055',
    id: '04',
    delay: '1.8s',
  },
];

export default function SocialNode() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: { xs: 3, sm: 6, md: 8 },
        flexWrap: 'wrap',
        py: 6,
        px: 2,
        position: 'relative',
      }}
    >
      {/* Línea Neón de Interconexión de Fondo */}
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          left: '10%',
          right: '10%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(0, 243, 255, 0.4), #00f3ff, rgba(0, 243, 255, 0.4), transparent)',
          boxShadow: '0 0 12px #00f3ff',
          zIndex: 0,
          display: { xs: 'none', md: 'block' },
        }}
      />

      {socialLinks.map((node, i) => (
        <Box
          key={i}
          component="a"
          href={node.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textDecoration: 'none',
            position: 'relative',
            zIndex: 1,
            animation: `floatNode 4s ease-in-out infinite`,
            animationDelay: node.delay,
            '@keyframes floatNode': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-14px)' },
            },
            '&:hover': {
              '& .node-orb': {
                transform: 'scale(1.18) rotate(8deg)',
                borderColor: node.color,
                boxShadow: `0 0 35px ${node.color}, inset 0 0 20px ${node.color}`,
                background: `radial-gradient(circle, ${node.color}33 0%, rgba(10,15,30,0.9) 80%)`,
              },
              '& .node-icon': {
                color: '#fff',
                filter: `drop-shadow(0 0 12px ${node.color})`,
              },
              '& .node-title': {
                color: node.color,
                textShadow: `0 0 10px ${node.color}`,
              },
            },
          }}
        >
          {/* Anillo Orbital / Esfera Flotante */}
          <Box
            className="node-orb"
            sx={{
              width: { xs: 80, sm: 100 },
              height: { xs: 80, sm: 100 },
              borderRadius: '50%',
              background: 'rgba(10, 15, 30, 0.85)',
              backdropFilter: 'blur(16px)',
              border: `2px solid ${node.color}66`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 0 20px ${node.color}30, inset 0 0 10px ${node.color}15`,
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              position: 'relative',
              mb: 2,
            }}
          >
            {/* Destello/Aura Orbital Interno */}
            <Box
              sx={{
                position: 'absolute',
                inset: -6,
                borderRadius: '50%',
                border: `1px dashed ${node.color}40`,
                animation: 'spinOrbit 12s linear infinite',
                '@keyframes spinOrbit': {
                  '0%': { transform: 'rotate(0deg)' },
                  '100%': { transform: 'rotate(360deg)' },
                },
              }}
            />

            {/* Icono en el Centro */}
            <Box
              className="node-icon"
              sx={{
                color: node.color,
                display: 'flex',
                transition: 'all 0.3s ease',
              }}
            >
              {node.icon}
            </Box>
          </Box>

          {/* Información y Protocolo Inferior */}
          <Typography
            className="node-title"
            variant="subtitle1"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 900,
              color: '#fff',
              fontSize: '0.9rem',
              letterSpacing: '2px',
              transition: 'all 0.3s ease',
            }}
          >
            {node.name}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              fontFamily: 'monospace',
              color: node.color,
              fontSize: '0.65rem',
              letterSpacing: '1px',
              opacity: 0.8,
              mt: 0.5,
            }}
          >
            {node.protocol}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}