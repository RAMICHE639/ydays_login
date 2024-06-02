import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Icon } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import './Header.css'; // Assurez-vous que ce chemin est correct
import logo from '../la-securite-sur-internet.png';
import logo2 from '../symbole-de-balance-balance-balance.png';

const Header = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SecurityIcon className="icon-security" />
          <Box className="time-container">
            <Box className="status-indicator" />
            <Typography variant="caption" color="inherit" className="time-text">
              {formatTime(seconds)}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        
        <Typography variant="h4" sx={{ flexGrow: 1, textAlign: 'center' }}>
          VOTING APP
        </Typography>
        
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
