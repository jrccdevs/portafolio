// src/components/layout/SkillsSection.jsx
import { Container, Grid, Typography, Box } from '@mui/material';
import EnergyBar from '../ui/EnergyBar';
import Reveal from './Reveal';

const skills = [
  { name: 'React / Next.js', level: 85 },
  { name: 'Node.js / Express', level: 80 },
  { name: 'MySql', level: 75 },
  { name: 'PostgreSQL / NoSQL', level: 75 },
  { name: 'Docker / AWS', level: 60 },
  { name: 'Python ', level: 65 },
];

export default function SkillsSection() {
  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      position: 'relative', // Asegura que esté sobre el fondo
      zIndex: 1
    }}>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        
        {/* Encabezado Centrado */}
        <Reveal>
          <Box sx={{ 
            mb: 10, 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Typography 
              variant="h4" 
              color="primary" 
              fontWeight="900" 
              sx={{ 
                letterSpacing: 8,
                textShadow: '0 0 30px rgba(0, 243, 255, 0.6)',
                mb: 1
              }}
            >
              SKILLS
            </Typography>
           
            <Box sx={{ width: '150px', height: '2px', bgcolor: 'primary.main', mt: 3, opacity: 0.4, boxShadow: '0 0 10px #00f3ff' }} />
          </Box>
        </Reveal>

        {/* Grid Ajustado a 3 Columnas (md={4}) */}
        <Grid 
          container 
          spacing={5} // Espaciado entre tarjetas
          justifyContent="center" 
        >
          {skills.map((s, i) => (
            /* xs={12}: 1 columna en móvil 
               sm={6}: 2 columnas en tablets
               md={4}: 3 columnas en escritorio (12 / 4 = 3)
            */
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Reveal delay={i * 0.1}>
                <Box>
                  {/* Pasamos el index para que la EnergyBar pueda calcular su ID único */}
                  <EnergyBar skill={s.name} level={s.level} index={i} />
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>

        {/* Pie de sección decorativo */}
        <Box sx={{ mt: 12, textAlign: 'center', opacity: 0.3 }}>
          <Typography variant="overline" sx={{ color: '#fff', fontSize: '0.7rem', letterSpacing: 4 }}>
            [ END_OF_CAPABILITIES_REPORT ]
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}