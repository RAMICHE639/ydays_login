import React from 'react';
import { Typography, Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Bienvenue sur le tableau de bord
      </Typography>
    </Box>
  );
};

export default Dashboard;
