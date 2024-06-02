import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Paper, TextField, IconButton, Tooltip, Menu, MenuItem, Button, ListItemIcon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ElectionsPage = () => {
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleMenuOpen = (setAnchorEl) => (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (setAnchorEl) => () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          Elections
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
          <Box>
            <Tooltip title="Categories">
              <Button
                variant="contained"
                color="primary"
                aria-controls="categories-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen(setAnchorEl1)}
                endIcon={<ArrowDropDownIcon />}
                sx={{ mr: 1 }}
              >
                Categories
              </Button>
            </Tooltip>
            <Menu
              id="categories-menu"
              anchorEl={anchorEl1}
              keepMounted
              open={Boolean(anchorEl1)}
              onClose={handleMenuClose(setAnchorEl1)}
            >
              <MenuItem onClick={handleMenuClose(setAnchorEl1)}>Category 1</MenuItem>
              <MenuItem onClick={handleMenuClose(setAnchorEl1)}>Category 2</MenuItem>
              <MenuItem onClick={handleMenuClose(setAnchorEl1)}>Category 3</MenuItem>
            </Menu>
            <Tooltip title="Status">
              <Button
                variant="contained"
                color="secondary"
                aria-controls="status-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen(setAnchorEl2)}
                endIcon={<ArrowDropDownIcon />}
              >
                Status
              </Button>
            </Tooltip>
            <Menu
              id="status-menu"
              anchorEl={anchorEl2}
              keepMounted
              open={Boolean(anchorEl2)}
              onClose={handleMenuClose(setAnchorEl2)}
            >
              <MenuItem onClick={handleMenuClose(setAnchorEl2)}>
                <ListItemIcon>
                  <PlayCircleOutlineIcon />
                </ListItemIcon>
                Ongoing
              </MenuItem>
              <MenuItem onClick={handleMenuClose(setAnchorEl2)}>
                <ListItemIcon>
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                Finished
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <Grid container spacing={2}>
          {[...Array(6)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={2} sx={{ height: 180, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 1 }}>
                <Typography variant="h6">
                  Election {index + 1}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default ElectionsPage;
