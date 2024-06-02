import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, Card, CardContent, AppBar, Toolbar, Tooltip, IconButton, InputAdornment, Alert } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import logo from '../voteapplogo.png'; // Assurez-vous que le chemin est correct

const LoginPage = () => {
  const [identifiant, setIdentifiant] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (identifiant === 'CD987654' && password === 'root') {
      navigate('/home');
    } else if (identifiant === 'admin' && password === 'admin') {
      navigate('/dashboard');
    } else {
      setError('Identifiant ou mot de passe incorrect');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
        <Card sx={{ width: '100%' }}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
                AUTHENTIFICATION
              </Typography>
              <Tooltip title="Pour vous connecter, vous devez entrer le numéro de votre carte nationale CIM (ex: CD34839) et votre mot de passe.">
                <IconButton color="inherit">
                  <HelpOutlineIcon />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>
          <CardContent>
            {error && <Alert severity="error">{error}</Alert>}
            <form onSubmit={handleLogin}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="identifiant"
                label="Identifiant"
                name="identifiant"
                autoComplete="identifiant"
                margin="normal"
                value={identifiant}
                onChange={(e) => setIdentifiant(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Se connecter
              </Button>
            </form>
          </CardContent>
        </Card>
        <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
          Pour des raisons de sécurité, fermez votre navigateur après vous être connecté aux services protégés !
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginPage;
