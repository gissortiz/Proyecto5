import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, Box, Button } from '@mui/material';

const PlantDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { nombre } = useParams();

  const plant = location.state?.plant;

  if (!plant) {
    return (
      <Container>
        <Typography variant="h5" color="error">
          No se encontró la planta "{nombre}" 😢
        </Typography>
        <Button variant="contained" onClick={() => navigate(-1)}>
          Volver
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ padding: '20px' }}>
      <Card sx={{ padding: 2 }}>
        <CardMedia
          component="img"
          height="300"
          image={plant.default_image?.original_url}
          alt={plant.common_name}
        />
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h4" gutterBottom>
            {plant.common_name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Nombre científico: {plant.scientific_name?.join(', ')}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Género: {plant.genus}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Cultivar: {plant.cultivar || 'No aplica'}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Imagen con licencia:{" "}
            <a href={plant.default_image.license_url} target="_blank" rel="noreferrer">
              {plant.default_image.license_name}
            </a>
          </Typography>
        </Box>
        <Box sx={{ marginTop: 4 }}>
          <Button variant="outlined" onClick={() => navigate('/catalogo')}>
            ← Volver al catálogo
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default PlantDetail;
