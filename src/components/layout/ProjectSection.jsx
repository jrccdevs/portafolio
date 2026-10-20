// src/components/layout/ProjectSection.jsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ProjectCard from '../ui/ProjectCard';
import Reveal from './Reveal';

// Importación de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  {
    title: 'E-Commerce OS',
    description: 'Tienda virtual e-commerce interactiva y escalable con gestión de catálogo de productos, carrito de compras y UI moderna.',
    tags: ['React', 'Node.js', 'Vite', 'CSS3'],
    link: 'https://triton-blue.vercel.app',
    github: 'https://github.com/jrccdevs/triton',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Lab Alfa Web',
    description: 'Portal web corporativo para Laboratorio Farmacéutico Alfa, con catálogo interactivo de medicamentos y buscador por forma farmacéutica.',
    tags: ['React', 'JavaScript', 'MUI', 'Node.js'],
    link: 'https://boliviandcode.vercel.app/',
    github: 'https://boliviandcode.vercel.app/',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'CRM Vision',
    description: 'Sistema con algoritmos de visión computarizada para gestión de jerarquía de empleados y control analítico de rendimiento.',
    tags: ['Vite', 'Node.js', 'Python', 'OpenCV'],
    link: 'https://front-empleados-phi.vercel.app/login',
    github: 'https://github.com/jrccdevs',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'ERP System',
    description: 'Sistema modular de producción escalable para gestión de inventarios y procesos industriales.',
    tags: ['React', 'Node.js', 'MySQL', 'Express'],
    link: 'https://conbytex-frontend.vercel.app/login',
    github: 'https://github.com/jrccdevs',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'AI Trading Bot',
    description: 'Algoritmo predictivo de mercados financieros con análisis en tiempo real mediante WebSocket e IA.',
    tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    link: '#',
    github: 'https://github.com/jrccdevs',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function ProjectSection() {
  return (
    <Box
      id="proyectos"
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
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
                letterSpacing: '3px',
                textShadow: '0 0 20px rgba(0, 243, 255, 0.6)',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                fontSize: { xs: '1.8rem', md: '2.5rem' }
              }}
            >
              SELECTED_WORKS
              <Box component="span" sx={{ fontSize: '1rem', color: '#00f3ff', opacity: 0.7 }}>
                01//
              </Box>
            </Typography>
            <Box
              sx={{
                width: '80px',
                height: '3px',
                bgcolor: '#00f3ff',
                mt: 2,
                boxShadow: '0 0 10px #00f3ff',
                borderRadius: '2px',
              }}
            />
          </Box>
        </Reveal>

        {/* Carrusel Swiper */}
        <Box
          sx={{
            py: 2,
            '& .swiper-pagination-bullet': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              opacity: 1,
            },
            '& .swiper-pagination-bullet-active': {
              backgroundColor: '#00f3ff',
              boxShadow: '0 0 10px #00f3ff',
              width: '24px',
              borderRadius: '4px',
            },
          }}
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: '50px' }}
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                <ProjectCard {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}