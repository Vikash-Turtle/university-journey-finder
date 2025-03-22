
import React from 'react';
import { AppBar, Container, Toolbar, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const CourseListHeader = () => {
  const navigate = useNavigate();
  
  return (
    <AppBar position="static" sx={{
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      color: '#333'
    }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ px: { xs: 0, sm: 0 } }}>
          <IconButton 
            edge="start" 
            sx={{ color: '#6E4D8B', mr: 2 }}
            onClick={() => navigate('/universities')} 
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Universities
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CourseListHeader;
