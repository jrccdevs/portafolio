import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';

export default function ProjectCard({ title, description, tags = [], link, github, image }) {
  // Imagen por defecto si el proyecto aún no tiene una asignada
  const defaultBg = 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop';

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 380,
        height: 460,
        position: 'relative',
        background: 'rgba(10, 15, 30, 0.75)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(0, 243, 255, 0.2)',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-10px) scale(1.02)',
          borderColor: '#00f3ff',
          boxShadow: '0 0 30px rgba(0, 243, 255, 0.35), inset 0 0 15px rgba(0, 243, 255, 0.1)',
          '& .project-image': {
            transform: 'scale(1.1)',
            filter: 'brightness(0.9) contrast(1.1)',
          },
          '& .project-overlay': {
            opacity: 0.4,
          }
        },
      }}
    >
      {/* Cabecera / Imagen de fondo con overlay cybernetic */}
      <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
        <Box
          className="project-image"
          sx={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${image || defaultBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'transform 0.5s ease, filter 0.5s ease',
            filter: 'brightness(0.7) contrast(1.2)',
          }}
        />
        <Box
          className="project-overlay"
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(10, 15, 30, 0.95) 100%)',
            transition: 'opacity 0.4s ease',
          }}
        />
        {/* Etiqueta de ID de Módulo en la esquina */}
        <Typography
          variant="caption"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            fontFamily: 'monospace',
            color: '#00f3ff',
            backgroundColor: 'rgba(0,0,0,0.6)',
            px: 1.5,
            py: 0.5,
            borderRadius: '6px',
            border: '1px solid rgba(0, 243, 255, 0.3)',
            fontSize: '0.7rem',
            letterSpacing: '1px',
          }}
        >
          SYS_MOD_v3.1
        </Typography>
      </Box>

      {/* Contenido del Proyecto */}
      <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 800,
            color: '#fff',
            fontFamily: 'monospace',
            letterSpacing: '1px',
            textShadow: '0 0 10px rgba(0,243,255,0.3)',
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: '#a0aec0',
            lineHeight: 1.6,
            fontSize: '0.875rem',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {description}
        </Typography>

        {/* Tags de Tecnologías */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mt: 'auto', pt: 1 }}>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              sx={{
                fontSize: '0.7rem',
                fontFamily: 'monospace',
                backgroundColor: 'rgba(0, 243, 255, 0.08)',
                color: '#00f3ff',
                border: '1px solid rgba(0, 243, 255, 0.25)',
                borderRadius: '4px',
              }}
            />
          ))}
        </Box>
      </CardContent>

      {/* Acciones Directas (Botones) */}
      <Box
        sx={{
          p: 2,
          px: 3,
          pt: 0,
          display: 'flex',
          gap: 1.5,
        }}
      >
        <Button
          fullWidth
          variant="outlined"
          href={link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<LaunchIcon />}
          sx={{
            borderColor: '#00f3ff',
            color: '#00f3ff',
            fontFamily: 'monospace',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            borderRadius: '8px',
            textTransform: 'uppercase',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(0, 243, 255, 0.2)',
              borderColor: '#00f3ff',
              boxShadow: '0 0 15px rgba(0, 243, 255, 0.5)',
            },
          }}
        >
          View Demo
        </Button>

        {github && (
          <Button
            variant="outlined"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              minWidth: 42,
              px: 1,
              borderColor: 'rgba(255,255,255,0.2)',
              color: '#fff',
              borderRadius: '8px',
              '&:hover': {
                borderColor: '#fff',
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            <CodeIcon fontSize="small" />
          </Button>
        )}
      </Box>
    </Card>
  );
}