import React from 'react';
import { Container, TextField, Button, Typography, Box, Card, CardContent, Grid } from '@mui/material';

function RegisterPage() {
  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card>
          <CardContent>
            <Typography component="h1" variant="h5" align="center" gutterBottom>
              Inscription
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Nom"
                    name="name"
                    autoComplete="name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Mot de passe"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirmez le mot de passe"
                    type="password"
                    id="confirmPassword"
                    autoComplete="confirm-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                S'inscrire
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default RegisterPage;
