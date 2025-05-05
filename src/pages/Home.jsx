import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const Home = () => {
  const frases = [
    "Plantar una semilla es creer en el mañana.",
    "Cada hoja nueva es un paso hacia la luz.",
    "Cuidar una planta es cuidar tu paz.",
    "Todo florece cuando es amado.",
    "El crecimiento lleva tiempo. Sé paciente contigo misma."
  ];

  const [frase, setFrase] = useState('');

  const generarFrase = () => {
    const index = Math.floor(Math.random() * frases.length);
    setFrase(frases[index]);
  };

  useEffect(() => {
    generarFrase();
  }, []);

  return (
    <Container sx={{ paddingTop: '50px' }}>
      <Box textAlign="center">
        <Typography variant="h3" gutterBottom>
          Bienvenida a Verde en Casa
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {frase}
        </Typography>

        <Button
          variant="outlined"
          onClick={generarFrase}
          sx={{ mt: 3 }}
        >
          Dame otra frase 🌱
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
