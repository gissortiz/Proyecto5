import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Card, CardMedia, CardContent } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../data/dataPlants.json';

const Home = () => {
  const [fraseDelDia, setFraseDelDia] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * data.frases.length);
    setFraseDelDia(data.frases[randomIndex]);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  };

  return (
    <Container sx={{ paddingTop: '50px', minHeight: '80vh' }}>
      <Box textAlign="center">
        {/* 1. Título */}
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Montserrat' }}>
          Bienvenidos a Verde en Casa
        </Typography>

        {/* 2. Carrusel de plantas */}
        <Box sx={{ width: '100%', margin: 'auto' }}>
          <Slider {...settings}>
            {data.plantas.map((planta, index) => (
              <Box key={index}>
                <Card sx={{ height: '100%', maxWidth: '1000px', margin: 'auto' }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={planta.url}
                    alt={planta.nombre}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {planta.nombre}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {planta.descripcion}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>

        {/* 3. Frase del día */}
        <Card
          sx={{
            backgroundColor: '#E8F5E9',
            width: '100%',
            maxWidth: '600px',
            margin: '40px auto 0',
            borderRadius: '16px'
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              color="text.primary"
              sx={{ fontStyle: 'italic', fontFamily: 'Montserrat' }}
            >
              {fraseDelDia}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Home;
