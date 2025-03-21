
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
  Divider
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';

const CourseCard = ({ course }) => {
  return (
    <Card sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.3s ease',
      borderRadius: 3,
      overflow: 'hidden',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)'
      },
      border: '1px solid #e0e0e0'
    }}>
      <Box sx={{
        position: 'relative',
        height: 160,
        overflow: 'hidden'
      }}>
        <Box
          component="img"
          src={course.image || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2940&auto=format&fit=crop'}
          alt={course.name}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: 2
        }}>
          <Typography variant="h6" component="div" sx={{
            color: 'white',
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
          }}>
            {course.code}
          </Typography>
        </Box>
      </Box>

      <CardContent sx={{
        flexGrow: 1,
        pt: 2,
        pb: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Typography variant="h6" component="div" gutterBottom sx={{
          fontWeight: 'bold',
          color: '#2c3e50',
          mb: 1
        }}>
          {course.name}
        </Typography>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 1
        }}>
          <SchoolIcon sx={{
            color: '#6E4D8B',
            fontSize: 18,
            mr: 0.5,
            opacity: 0.8
          }} />
          <Typography variant="body2" color="text.secondary">
            {course.department} • {course.level}
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 1
        }}>
          <AccessTimeIcon sx={{
            color: '#6E4D8B',
            fontSize: 18,
            mr: 0.5,
            opacity: 0.8
          }} />
          <Typography variant="body2" color="text.secondary">
            {course.duration} • {course.credits} Credits
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2
        }}>
          <PersonIcon sx={{
            color: '#6E4D8B',
            fontSize: 18,
            mr: 0.5,
            opacity: 0.8
          }} />
          <Typography variant="body2" color="text.secondary">
            {course.instructor}
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{
          mb: 2,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          textOverflow: 'ellipsis',
        }}>
          {course.description}
        </Typography>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
          mt: 'auto'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating value={course.rating} precision={0.1} readOnly size="small" sx={{ mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {course.rating}
            </Typography>
          </Box>
          
          <Chip 
            label={course.enrollmentStatus} 
            size="small" 
            color={course.enrollmentStatus === 'Open' ? 'success' : 'warning'}
            variant="outlined"
            sx={{ fontWeight: 'medium' }}
          />
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <AttachMoneyIcon sx={{
              color: '#6E4D8B',
              fontSize: 20,
              opacity: 0.8
            }} />
            <Typography variant="body1" fontWeight="bold" color="#2c3e50">
              {course.tuitionFee}
            </Typography>
          </Box>
          
          <Button 
            variant="contained"
            size="small"
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 600,
              backgroundColor: '#6E4D8B',
              '&:hover': {
                backgroundColor: '#5a3e73',
              },
              boxShadow: 1
            }}
          >
            Enroll
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
