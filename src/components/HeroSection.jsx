
import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Avatar,
  Button 
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const HeroSection = ({ university }) => {
  if (!university) return null;

  return (
    <Box sx={{
      position: 'relative',
      backgroundColor: '#fff',
      pt: 3,
      pb: 4,
      borderBottom: '1px solid #eaeaea'
    }}>
      <Paper elevation={0} sx={{
        display: 'flex',
        width: '100%',
        p: { xs: 2, md: 3 },
        borderRadius: 2,
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        gap: 3,
        border: '1px solid #e0e0e0',
        backgroundColor: '#fff'
      }}>
        {/* University Logo */}
        <Avatar 
          src={university.logoUrl} 
          alt={university.name}
          variant="rounded"
          sx={{
            width: { xs: 60, md: 80 },
            height: { xs: 60, md: 80 },
            bgcolor: 'rgba(110, 77, 139, 0.1)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}
        >
          {!university.logoUrl && <SchoolIcon sx={{ fontSize: 40 }} />}
        </Avatar>
        
        {/* University Info */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="h1" sx={{ 
            fontWeight: 'bold', 
            color: '#2c3e50',
            fontSize: { xs: '1.3rem', md: '1.5rem' }
          }}>
            {university.name}
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon sx={{ color: '#6E4D8B', fontSize: 18, mr: 0.5 }} />
              <Typography variant="body2" color="text.secondary">
                {university.location}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <MenuBookIcon sx={{ color: '#6E4D8B', fontSize: 18, mr: 0.5 }} />
              <Typography variant="body2" color="text.secondary">
                {university.coursesOffered} Courses Offered
              </Typography>
            </Box>
          </Box>
        </Box>
        
        {/* Apply Button */}
        <Button 
          variant="contained" 
          sx={{
            backgroundColor: '#6E4D8B',
            borderRadius: '8px',
            boxShadow: 2,
            textTransform: 'none',
            fontWeight: 600,
            px: 3,
            py: 0.8,
            '&:hover': {
              backgroundColor: '#5a3e73',
            },
            alignSelf: { xs: 'flex-start', md: 'center' }
          }}
        >
          Apply Now
        </Button>
      </Paper>
    </Box>
  );
};

export default HeroSection;
