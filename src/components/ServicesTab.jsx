
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const ServiceCard = ({ service }) => {
  return (
    <Paper sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.3s ease',
      borderRadius: 2,
      overflow: 'hidden',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)'
      },
      border: '1px solid #e0e0e0'
    }}>
      <Box sx={{
        height: 180,
        overflow: 'hidden'
      }}>
        <Box
          component="img"
          src={service.image}
          alt={service.title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Box>
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" component="div" gutterBottom sx={{
          fontWeight: 'bold',
          color: '#2c3e50'
        }}>
          {service.title}
        </Typography>
        <Box 
          component="a"
          href={service.link}
          sx={{
            mt: 1,
            color: '#6E4D8B',
            textDecoration: 'none',
            fontWeight: 600,
            display: 'inline-block',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          Learn more
        </Box>
      </Box>
    </Paper>
  );
};

const ServicesTab = () => {
  const services = [
    { id: 1, title: "Admission Consulting", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2940&auto=format&fit=crop", link: "#" },
    { id: 2, title: "SOP Writing", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2940&auto=format&fit=crop", link: "#" },
    { id: 3, title: "Appeal Letter", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop", link: "#" },
    { id: 4, title: "Passport Request", image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2940&auto=format&fit=crop", link: "#" },
    { id: 5, title: "Interview Preparation", image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=2940&auto=format&fit=crop", link: "#" }
  ];

  return (
    <Box>
      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50', mb: 3 }}>
        Our Services
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        We offer the following services to help students with their application process and educational journey.
      </Typography>
      
      <Grid container spacing={3}>
        {services.map(service => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesTab;
