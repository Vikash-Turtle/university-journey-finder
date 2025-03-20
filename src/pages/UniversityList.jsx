
import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Button, 
  Box, 
  useMediaQuery, 
  useTheme,
  Badge,
  Paper,
  Divider
} from '@mui/material';
import { sampleUniversities } from '../data/sampleUniversities';
import UniversityCard from '../components/UniversityCard';

const UniversityList = () => {
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
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
    <Container maxWidth="lg" sx={{ pt: 4, pb: 8 }}>
      {/* Header Placeholder */}
      <Box sx={{ height: '60px', backgroundColor: 'lightgrey', mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Header Placeholder
      </Box>
      
      {/* Title and Apply Button */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', 
        alignItems: isMobile ? 'flex-start' : 'center',
        mb: 4,
        gap: 2
      }}>
        <Typography variant="h4" component="h1" gutterBottom={isMobile}>
          Recommended Universities
        </Typography>
        
        <Button 
          variant="contained" 
          color="primary"
          disabled={selectedUniversities.length === 0}
          sx={{ 
            px: 3, 
            py: 1,
            transition: 'all 0.3s ease',
            '&:not(:disabled):hover': {
              transform: 'translateY(-2px)',
              boxShadow: 4
            }
          }}
        >
          Apply Now ({selectedUniversities.length})
        </Button>
      </Box>
      
      {/* University Cards */}
      <Grid container spacing={3}>
        {sampleUniversities.map((university) => (
          <Grid 
            item 
            xs={12} 
            sm={isTablet ? 6 : 4} 
            md={4} 
            lg={3} 
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
          backgroundColor: theme.palette.grey[50], 
          borderRadius: 2,
          border: `1px solid ${theme.palette.divider}`
        }}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          The results have been generated using AI, which is highly accurate but may occasionally produce rare errors. 
          Rest assured, our experts will thoroughly review and verify your admission eligibility once your application is submitted.
        </Typography>
      </Paper>
    </Container>
  );
};

export default UniversityList;
