import React from 'react'
import useFetch from '../components/hooks/useFetch'
import { Link } from 'react-router-dom'
import { Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material'

const Catalog = () => {
    const { data, loading, error } = useFetch(import.meta.env.VITE_CATALOG_API_URL)

    if (loading) {
      return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
      >
      
          <CircularProgress />
        </Grid>
      );
    } 

    if (error) {
        return <Typography color="error">Error al cargar las plantas.</Typography>
      }
      
  return (

    <Grid container spacing={2} sx={{ padding: '20px' }}>
      {
        data?.data.map(plant => (
          <Grid item xs={12} sm={6} md={4} key={plant.id}>
            <Card>
              <CardActionArea
                component={Link}
                to={`/plantas/${plant.common_name}`}
                state={{ plant }}

              >
                <CardMedia
                  component='img'
                  height='140'
                  image={plant.default_image?.original_url}
                />
                <CardContent>
                  <Typography gutterBottom variant='h6'>{plant.common_name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))
      }

    </Grid>
  )
}

export default Catalog