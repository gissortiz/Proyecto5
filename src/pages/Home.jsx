import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Grid, Card, CardMedia, CardContent } from '@mui/material';


const Home = () => {
  const frases = [
    "Plantar una semilla es creer en el mañana.",
    "Cada hoja nueva es un paso hacia la luz.",
    "Cuidar una planta es cuidar tu paz.",
    "Todo florece cuando es amado.",
    "El crecimiento lleva tiempo. Sé paciente contigo misma."
  ];

  const plantas = [
    {
      nombre: "Calathea",
      descripcion: "Ideal para interiores con poca luz",
      url: "https://thenunheadgardener.com/wp-content/uploads/images/28000000000000839-1.jpg"
    },
    {
      nombre: "Suculenta",
      descripcion: "Requiere poco riego y mucho amor",
      url: "https://thenunheadgardener.com/wp-content/uploads/images/28000000000000390-1-600x600.jpg"
    },
    
  ];
  

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
        <Typography variant="h4" gutterBottom>
          Bienvenidos a Verde en Casa
        </Typography>

        <Box sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
          <Slider {...settings}>
            {frases.map((frase, index) => (
              <Box key={index} sx={{ px: 2 }}>
                <Typography variant="h6" color="text.secondary">
                  {frase}
                </Typography>
                <Typography variant="h5" sx={{ mt: 6, mb: 2 }} align="center">
  Plantas que inspiran 🌿
</Typography>

<Grid container spacing={3} justifyContent="center">
  {plantas.map((planta, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          height="200"
          image={planta.url}
          alt={planta.nombre}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {planta.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {planta.descripcion}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
