import React from 'react';
import { Container, Typography, Box, Card } from '@mui/material';

const About = () => {
  return (
   
    <Container sx={{ paddingTop: '50px', minHeight: '80vh' }}>
      <Box textAlign="center">

      <Box sx={{ marginBottom: 4 }}>
          <img
            src="https://thenunheadgardener.com/wp-content/uploads/images/Nunhead-4.jpg" 
            alt="Naturaleza en casa"
            style={{ width: '100%', maxHeight: '300px', objectFit: 'cover',  objectPosition: 'top', borderRadius: '20px' }}
          />
        </Box>

        <Box sx={{ boxShadow: 3, borderRadius: '20px' }}>
        <Typography variant="h3" gutterBottom sx={{ fontFamily: 'Montserrat', marginBottom: '20px'}}>
          Sobre Verde en Casa
        </Typography>

        <Typography variant="h5" 
        sx={{ 
          fontFamily: 'Montserrat',
          mt: 6, 
          maxWidth: '1000px', 
          margin: 'auto',  
          lineHeight: 1.3, 
          marginBottom: '20px' 
          }}>
          Somos un equipo de personas con una profunda pasión por la naturaleza y el bienestar que esta nos ofrece. 
          Por eso creamos este espacio: para compartir contigo consejos, ideas y pequeños rituales que te ayuden a reconectar con lo natural, incluso en medio del ritmo urbano.
        </Typography>

        <Typography variant="h5" 
        sx={{ 
          fontFamily: 'Montserrat',
          mt: 6, 
          maxWidth: '1000px',
          margin: 'auto',
          lineHeight: 1.3,
          marginBottom: '20px'  
          }}>
          Además, en Verde en Casa queremos acercarte a ese pedacito de calma que solo una planta puede ofrecer. 
          Por eso también vendemos nuestras plantas favoritas: seleccionadas con amor, fáciles de cuidar y perfectas para tener tu propio rincón verde en casa.
        </Typography>

        <Typography variant="h5" 
        sx={{
          fontFamily: 'Montserrat',
          mt: 6,
          maxWidth: '1000px',
          margin: 'auto',
          lineHeight: 1.3, 
          marginBottom: '20px'  
          }}>
          Que este sea tu refugio verde. Un lugar donde florezcan tus ideas, tus pausas y tu conexión con lo esencial. 🌱
        </Typography>
        </Box>

        <Typography variant="h6" sx={{ mt: 6 }}>
          El equipo de Verde en Casa
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
