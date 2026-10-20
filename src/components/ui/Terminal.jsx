import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, TextField } from '@mui/material';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    'SYSTEM_READY...',
    'TYPE "help" TO SEE AVAILABLE COMMANDS.'
  ]);
  const scrollRef = useRef(null);

  // Auto-scroll al final de la terminal
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.toLowerCase().trim();
      let response = '';

      switch (cmd) {
        case 'help':
          response = 'AVAILABLE: about, skills, contact, clear';
          break;
        case 'about':
          response = 'ESTEBAN_DEV: Fullstack Engineer specializing in 3D Interfaces.';
          break;
        case 'skills':
          response = 'TECH_STACK: React, Node.js, Three.js, PostgreSQL, Docker.';
          break;
        case 'contact':
          response = 'REDIRECTING TO: esteban@dev.com (example)';
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        default:
          response = `COMMAND NOT FOUND: ${cmd}`;
      }

      setHistory([...history, `> ${input}`, response]);
      setInput('');
    }
  };

  return (
    <Box sx={{
      background: 'rgba(0, 20, 30, 0.6)',
      backdropFilter: 'blur(10px)',
      border: '1px solid #00f3ff',
      p: 2,
      fontFamily: 'monospace',
      width: '100%',
      maxWidth: '500px',
      height: '250px',
      display: 'flex',
      flexDirection: 'column',
      pointerEvents: 'auto', // Para que el usuario pueda escribir
      boxShadow: '0 0 15px rgba(0, 243, 255, 0.2)'
    }}>
      <Box ref={scrollRef} sx={{ flexGrow: 1, overflowY: 'auto', mb: 1 }}>
        {history.map((line, i) => (
          <Typography key={i} variant="body2" sx={{ color: '#00f3ff', opacity: 0.9, fontSize: '0.85rem' }}>
            {line}
          </Typography>
        ))}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ color: '#00f3ff', mr: 1 }}>$</Typography>
        <TextField
          variant="standard"
          fullWidth
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          InputProps={{
            disableUnderline: true,
            sx: { color: '#00f3ff', fontFamily: 'monospace', fontSize: '0.85rem' }
          }}
        />
      </Box>
    </Box>
  );
}