// src/components/layout/ProjectSection.jsx
import { Grid, Container, Typography, Box } from '@mui/material';
import ProjectCard from '../ui/ProjectCard';
import Reveal from './Reveal'; 

const projects = [
  { title: 'ERP', description: 'De Produccion escalable con node y react.', tags: ['React', 'Node', 'MySql'], link: 'https://conbytex-frontend.vercel.app/' },
  { title: 'E-COMERCE_OS', description: 'Tienda virtual', tags: ['React', 'Node'], link: 'https://triton-blue.vercel.app/' },
  { title: 'CRM', description: 'Sistema de visión computarizada jeraarquia de empleados', tags: ['vite', 'Node'], link: 'https://front-empleados-phi.vercel.app/' }
];

export default function ProjectSection() {
  return (
    <Box sx={{
     
      display: 'flex',
      alignItems: 'center', // Centrado vertical absoluto
      justifyContent: 'center', // Centrado horizontal
      width: '100%'
    }}>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Reveal>
          <Box sx={{ 
            mb: 8, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' // Centra el título de la sección
          }}>
            <Typography 
              variant="h4" 
              color="primary" 
              fontWeight="bold" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                letterSpacing: '4px',
                textShadow: '0 0 20px rgba(0, 243, 255, 0.5)'
              }}
            >
              <span style={{ fontSize: '1rem', opacity: 0.5, fontFamily: 'monospace' }}>01//</span> 
              SELECTED_WORKS
            </Typography>
            <Box sx={{ width: '60px', height: '2px', bgcolor: 'primary.main', mt: 2, opacity: 0.3 }} />
          </Box>
        </Reveal>

        <Grid 
          container 
          spacing={4} 
          justifyContent="center" // Centra los items del grid si hay menos de 3
          alignItems="stretch"
        >
          {projects.map((p, i) => (
            <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Reveal delay={i * 0.2}>
                <ProjectCard {...p} />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}