import React from 'react';
import { Box } from '@mui/material';
import CustomCard from './components/CustomCard/customcard';

const App: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Asegura que el contenedor ocupe toda la altura de la pantalla
        backgroundColor: '#FFFFFF', // Fondo gris claro
      }}
    >
      <CustomCard />
    </Box>
  );
};

export default App;
