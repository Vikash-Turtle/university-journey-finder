
import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Button, 
  Box, 
  useMediaQuery, 
  useTheme,
  Paper,
  AppBar,
  Toolbar,
  IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { sampleUniversities } from '../data/sampleUniversities';
import UniversityCard from '../components/UniversityCard';

const UniversityList = () => {
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleToggleSelection = (universityId) => {
    setSelectedUniversities(prev => {
      if (prev.includes(universityId)) {
        return prev.filter(id => id !== universityId);
      } else {
        return [...prev, universityId];
      }
    });
  };
  
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: '#F5F5F5', 
      position: 'relative', 
      pb: isMobile && selectedUniversities.length > 0 ? 8 : 0 
    }}>
      {/* Header */}
      <AppBar position="static" sx={{ 
        backgroundColor: 'white', 
        color: 'text.primary',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.05)'
      }}>
        <Toolbar>
          <IconButton 
            edge="start" 
            color="inherit" 
            onClick={() => navigate('/')}
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" component="h1" sx={{ fontWeight: 600 }}>
            University Finder
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="lg" sx={{ pt: 4, pb: 8 }}>
        {/* Title and Apply Button (non-mobile) */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between', 
          alignItems: isMobile ? 'flex-start' : 'center',
          mb: 4,
          gap: 2
        }}>
          <Typography 
            variant="h6" 
            component="h2" 
            gutterBottom={isMobile}
            sx={{ 
              fontWeight: 700,
              color: '#2c3e50'
            }}
          >
            Recommended Universities
          </Typography>
          
          {!isMobile && selectedUniversities.length > 0 && (
            <Button 
              variant="contained" 
              sx={{ 
                px: 3, 
                py: 1,
                borderRadius: 2,
                backgroundColor: '#6E4D8B',
                '&:hover': {
                  backgroundColor: '#5a3e73',
                },
                transition: 'all 0.3s ease',
                fontWeight: 'bold',
                boxShadow: 3
              }}
            >
              Apply Now ({selectedUniversities.length})
            </Button>
          )}
        </Box>
        
        {/* University Cards */}
        <Grid container spacing={3}>
          {sampleUniversities.map((university) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={university.id}
              sx={{ display: 'flex' }}
            >
              <UniversityCard 
                university={university}
                onToggleSelection={handleToggleSelection}
                isSelected={selectedUniversities.includes(university.id)}
              />
            </Grid>
          ))}
        </Grid>
        
        {/* Disclaimer */}
        <Paper 
          elevation={0} 
          sx={{ 
            mt: 6, 
            p: 3, 
            backgroundColor: 'rgba(110, 77, 139, 0.08)', 
            borderRadius: 3,
            border: '1px solid rgba(110, 77, 139, 0.2)'
          }}
        >
          <Typography variant="body2" color="text.secondary" align="center" sx={{ fontStyle: 'italic' }}>
            The results have been generated using AI, which is highly accurate but may occasionally produce rare errors. 
            Rest assured, our experts will thoroughly review and verify your admission eligibility once your application is submitted.
          </Typography>
        </Paper>
      </Container>

      {/* Sticky Apply Button for Mobile */}
      {isMobile && selectedUniversities.length > 0 && (
        <Box 
          sx={{ 
            position: 'fixed', 
            bottom: 0, 
            left: 0, 
            right: 0, 
            p: 2, 
            backgroundColor: 'white', 
            boxShadow: '0px -2px 10px rgba(0,0,0,0.1)',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Button 
            variant="contained" 
            fullWidth
            sx={{ 
              py: 1.5,
              borderRadius: 2,
              backgroundColor: '#6E4D8B',
              '&:hover': {
                backgroundColor: '#5a3e73',
              },
              fontWeight: 'bold',
              boxShadow: 3,
              maxWidth: '500px'
            }}
          >
            Apply Now ({selectedUniversities.length})
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default UniversityList;
