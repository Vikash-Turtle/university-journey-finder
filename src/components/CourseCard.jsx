
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box, 
  Chip, 
  Avatar,
  Rating, 
  Divider,
  Grid
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';

const CourseCard = ({ course }) => {
  return (
    <Card sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.3s ease',
      borderRadius: 3,
      overflow: 'hidden',
      border: '1px solid #e0e0e0'
    }}>
      <CardContent sx={{
        p: 3,
        '&:last-child': { pb: 3 }
      }}>
        <Typography variant="h5" component="div" gutterBottom sx={{
          fontWeight: 'bold',
          color: '#2c3e50',
          mb: 1
        }}>
          {course.name}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {course.code} • {course.department}
        </Typography>
        
        <Divider sx={{ mb: 2 }} />
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Field of Study (Department) */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">
                  Field of Study
                </Typography>
                <Typography variant="body2" fontWeight="medium">
                  {course.department}
                </Typography>
              </Box>
              
              {/* Learning Type */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">
                  Learning Type
                </Typography>
                <Chip 
                  label={course.learningType || "Full-time"} 
                  size="small" 
                  variant="outlined"
                  sx={{ 
                    borderRadius: '6px',
                    backgroundColor: 'rgba(110, 77, 139, 0.08)',
                    borderColor: 'rgba(110, 77, 139, 0.3)',
                    fontWeight: 500
                  }}
                />
              </Box>
              
              {/* Duration */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">
                  Duration
                </Typography>
                <Typography variant="body2" fontWeight="medium">
                  {course.duration}
                </Typography>
              </Box>
              
              {/* Tuition Fees */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">
                  Tuition Fees
                </Typography>
                <Typography variant="body2" fontWeight="bold" color="#2c3e50">
                  {course.tuitionFee}
                </Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4} sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderLeft: { md: '1px solid #e0e0e0' },
            pt: { xs: 2, md: '16px !important' },
            mt: { xs: 2, md: 0 },
            borderTop: { xs: '1px solid #e0e0e0', md: 'none' }
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={course.rating} precision={0.1} readOnly size="small" sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">
                {course.rating}
              </Typography>
            </Box>
            
            <Button 
              variant="contained"
              sx={{
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 600,
                backgroundColor: '#6E4D8B',
                px: 3,
                py: 1,
                '&:hover': {
                  backgroundColor: '#5a3e73',
                },
                width: { xs: '100%', md: 'auto' }
              }}
            >
              Check Eligibility
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
