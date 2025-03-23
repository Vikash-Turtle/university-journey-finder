
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box, 
  Divider,
  Grid,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useIsMobile } from '../hooks/use-mobile';

const CourseCard = ({ course }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Card sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 3,
      overflow: 'hidden',
      border: '1px solid #e0e0e0',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)'
      }
    }}>
      <CardContent sx={{
        p: { xs: 2, md: 3 },
        '&:last-child': { pb: { xs: 2, md: 3 } }
      }}>
        {/* Header with course name and details button */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: { xs: 'flex-start', md: 'center' },
          flexDirection: { xs: 'column', md: 'row' },
          mb: 2,
          gap: { xs: 2, md: 0 }
        }}>
          <Box>
            <Typography variant="h5" component="div" sx={{
              fontWeight: 'bold',
              color: '#2c3e50',
              mb: 1,
              fontSize: { xs: '1.1rem', md: '1.3rem' }
            }}>
              {course.name}
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
              {course.code} • {course.department}
            </Typography>
          </Box>
          
          {/* Only show button in header for desktop */}
          {!isMobile && !isTablet && (
            <Button 
              variant="contained"
              sx={{
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 600,
                backgroundColor: '#6E4D8B',
                px: 3,
                py: 1,
                alignSelf: { xs: 'flex-start', md: 'center' },
                '&:hover': {
                  backgroundColor: '#5a3e73',
                },
                width: { xs: 'auto', md: 'auto' }
              }}
            >
              Check Eligibility
            </Button>
          )}
        </Box>
        
        <Divider sx={{ mb: 3 }} />
        
        {/* Course details in horizontal layout */}
        <Grid container spacing={2}>
          {/* Field of Study */}
          <Grid item xs={6} sm={3}>
            <Box>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Field of Study
              </Typography>
              <Typography variant="body2" fontWeight="medium">
                {course.department}
              </Typography>
            </Box>
          </Grid>
          
          {/* Learning Type */}
          <Grid item xs={6} sm={3}>
            <Box>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Learning Type
              </Typography>
              <Typography variant="body2" fontWeight="medium">
                {course.learningType || "Full-time"}
              </Typography>
            </Box>
          </Grid>
          
          {/* Duration */}
          <Grid item xs={6} sm={3}>
            <Box>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Duration
              </Typography>
              <Typography variant="body2" fontWeight="medium">
                {course.duration}
              </Typography>
            </Box>
          </Grid>
          
          {/* Tuition Fees */}
          <Grid item xs={6} sm={3}>
            <Box>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Tuition Fees
              </Typography>
              <Typography variant="body2" fontWeight="bold" color="#2c3e50">
                {course.tuitionFee}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        {/* Show button at bottom for mobile and tablet - now full width on mobile */}
        {(isMobile || isTablet) && (
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
            <Button 
              variant="contained"
              fullWidth={isMobile}
              sx={{
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 600,
                backgroundColor: '#6E4D8B',
                px: 3,
                py: 1,
                '&:hover': {
                  backgroundColor: '#5a3e73',
                }
              }}
            >
              Check Eligibility
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseCard;
