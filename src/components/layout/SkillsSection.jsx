// src/components/layout/SkillsSection.jsx
import React from 'react';
import { Container, Typography, Box, Grid, LinearProgress } from '@mui/material';
import Reveal from './Reveal';

// Importación de iconos de Material UI
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import TerminalIcon from '@mui/icons-material/Terminal';
import MemoryIcon from '@mui/icons-material/Memory';
import SpeedIcon from '@mui/icons-material/Speed';

const skillCategories = [
  {
    category: 'FRONTEND_CORE',
    icon: <CodeIcon sx={{ color: '#00f3ff' }} />,
    skills: [
      { name: 'React.js / Next.js', level: 90, status: 'ADVANCED' },
      { name: 'JavaScript (ES6+) / TS', level: 88, status: 'PRO' },
      { name: 'Material UI / Tailwind', level: 85, status: 'EXPERT' },
    ],
    color: '#00f3ff',
  },
  {
    category: 'BACKEND_ENGINE',
    icon: <TerminalIcon sx={{ color: '#b000ff' }} />,
    skills: [
      { name: 'Node.js / Express', level: 85, status: 'ADVANCED' },
      { name: 'Python / FastAPI', level: 75, status: 'INTERMEDIATE' },
      { name: 'REST APIs / WebSockets', level: 88, status: 'PRO' },
    ],
    color: '#b000ff',
  },
  {
    category: 'DATABASE_SYSTEMS',
    icon: <StorageIcon sx={{ color: '#00ff87' }} />,
    skills: [
      { name: 'MySQL / PostgreSQL', level: 80, status: 'PRO' },
      { name: 'MongoDB / NoSQL', level: 75, status: 'INTERMEDIATE' },
      { name: 'ORMs (Prisma / Sequelize)', level: 82, status: 'PRO' },
    ],
    color: '#00ff87',
  },
  {
    category: 'CLOUD_&_DEVOPS',
    icon: <CloudQueueIcon sx={{ color: '#ff0055' }} />,
    skills: [
      { name: 'Git / GitHub Workflow', level: 90, status: 'EXPERT' },
      { name: 'Docker / Containers', level: 65, status: 'LEARNING' },
      { name: 'Vercel / AWS Basics', level: 70, status: 'INTERMEDIATE' },
    ],
    color: '#ff0055',
  },
];

export default function SkillsSection() {
  return (
    <Box
      id="habilidades"
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        {/* Encebezado Principal */}
        <Reveal>
          <Box
            sx={{
              mb: 8,
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
              TECHNICAL_CAPABILITIES
              <Box component="span" sx={{ fontSize: '1rem', color: '#00f3ff', opacity: 0.7 }}>
                02//
              </Box>
            </Typography>
            <Box
              sx={{
                width: '100px',
                height: '3px',
                bgcolor: '#00f3ff',
                mt: 2,
                boxShadow: '0 0 12px #00f3ff',
                borderRadius: '2px',
              }}
            />
          </Box>
        </Reveal>

        {/* Grid de Habilidades por Categoría */}
        <Grid container spacing={4} justifyContent="center" maxWidth="lg">
  {skillCategories.map((cat, i) => (
    /* Cambiamos md={6} para que sean exactamente 2 columnas y 2 filas bien equilibradas */
    <Grid item xs={12} sm={6} md={6} key={i}>
      <Reveal delay={i * 0.1}>
        <Box
          sx={{
            p: 3.5,
            borderRadius: '16px',
            background: 'rgba(10, 15, 30, 0.75)',
            backdropFilter: 'blur(16px)',
            border: `1px solid ${cat.color}33`,
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s ease',
            height: '100%', // Asegura que todas tengan la misma altura
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            '&:hover': {
              transform: 'translateY(-6px)',
              borderColor: cat.color,
              boxShadow: `0 0 25px ${cat.color}40, inset 0 0 15px ${cat.color}15`,
            },
          }}
        >
          {/* Resto del contenido interno de la tarjeta igual... */}
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 3,
                pb: 1.5,
                borderBottom: `1px solid ${cat.color}25`,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                {cat.icon}
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    color: '#fff',
                    letterSpacing: '1px',
                    fontSize: '0.95rem',
                  }}
                >
                  {cat.category}
                </Typography>
              </Box>
              <MemoryIcon sx={{ color: cat.color, opacity: 0.4, fontSize: '1.2rem' }} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {cat.skills.map((skill, idx) => (
                <Box key={idx}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 0.8,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#e2e8f0',
                        fontFamily: 'monospace',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                      }}
                    >
                      {skill.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: 'monospace',
                        color: cat.color,
                        bgcolor: `${cat.color}15`,
                        px: 1,
                        py: 0.2,
                        borderRadius: '4px',
                        border: `1px solid ${cat.color}40`,
                        fontSize: '0.65rem',
                        letterSpacing: '1px',
                      }}
                    >
                      {skill.status}
                    </Typography>
                  </Box>

                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 3,
                        background: `linear-gradient(90deg, ${cat.color}88 0%, ${cat.color} 100%)`,
                        boxShadow: `0 0 8px ${cat.color}`,
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          <Typography
            variant="caption"
            sx={{
              display: 'block',
              mt: 3,
              fontFamily: 'monospace',
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.65rem',
              textAlign: 'right',
              letterSpacing: '2px',
            }}
          >
            // ESTADO: EN LINEA
          </Typography>
        </Box>
      </Reveal>
    </Grid>
  ))}
</Grid>
          
      </Container>
    </Box>
  );
}