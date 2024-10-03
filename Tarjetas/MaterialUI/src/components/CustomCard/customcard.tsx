import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const CustomCard: React.FC = () => {
  return (
    <Card
      sx={{
        width: 345,
        borderRadius: 5,
        background: 'linear-gradient(135deg, #76C7C0 30%, #4A90E2 100%)',
        color: 'white',
      }}
      elevation={3}
    >
      <CardMedia
        component="img"
        sx={{ height: 140, objectFit: 'cover' }} // La imagen se adapta al tamaño sin distorsión
        image="/web.jpg" // Asegúrate de que la imagen esté correctamente ubicada
        alt="React GraphQL Development"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          REACT GRAHQL DEVELOP
        </Typography>
        <Typography variant="body2">
          Best one bars to take friends and relatives, one bars to take friends
          and relatives
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
