import React from 'react';
import { Box, Typography, Grid, Paper, IconButton } from '@mui/material';
import { 
  EmailOutlined, 
  LinkedIn, 
  GitHub, 
  Telegram, 
  LanguageOutlined,
  ContentCopyOutlined 
} from '@mui/icons-material';
import Reveal from '../layout/Reveal';

export default function ContactInfo() {
  
  const contactData = [
    {
      label: 'Email',
      value: 'hola@tuproyecto.com',
      icon: <EmailOutlined sx={{ color: '#fff' }} />,
      action: () => window.location.href = 'mailto:hola@tuproyecto.com'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/tuusuario',
      icon: <LinkedIn sx={{ color: '#fff' }} />,
      action: () => window.open('https://linkedin.com', '_blank')
    },
    {
      label: 'GitHub',
      value: 'github.com/tuusuario',
      icon: <GitHub sx={{ color: '#fff' }} />,
      action: () => window.open('https://github.com', '_blank')
    },
    {
      label: 'Telegram',
      value: '@tu_usuario',
      icon: <Telegram sx={{ color: '#fff' }} />,
      action: () => window.open('https://t.me', '_blank')
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Aquí podrías añadir un pequeño aviso o "Toast" de copiado
  };

  return (
    <Reveal>
      <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
        <Typography variant="h4" sx={{ color: '#fff', mb: 1, fontWeight: 300, textAlign: 'center' }}>
          Conexiones Directas
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.5)', mb: 6, textAlign: 'center', fontFamily: 'monospace' }}>
          Selecciona un canal para iniciar la comunicación
        </Typography>

        <Grid container spacing={3}>
          {contactData.map((contact, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.07)',
                    transform: 'translateY(-5px)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                  }
                }}
                onClick={contact.action}
              >
                <Box sx={{ 
                  p: 1.5, 
                  borderRadius: '12px', 
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex'
                }}>
                  {contact.icon}
                </Box>
                
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1 }}>
                    {contact.label}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#fff', fontWeight: 500 }}>
                    {contact.value}
                  </Typography>
                </Box>

                <IconButton 
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard(contact.value);
                  }}
                  sx={{ color: 'rgba(255,255,255,0.2)', '&:hover': { color: '#fff' } }}
                >
                  <ContentCopyOutlined fontSize="small" />
                </IconButton>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center', opacity: 0.5 }}>
          <Typography variant="caption" sx={{ color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <LanguageOutlined fontSize="small" /> Disponible para proyectos en remoto a nivel global
          </Typography>
        </Box>
      </Box>
    </Reveal>
  );
}