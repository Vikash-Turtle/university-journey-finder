
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Chip, 
  Avatar,
  useTheme,
  Divider
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const UniversityCard = ({ university, onToggleSelection, isSelected }) => {
  const theme = useTheme();
  
  const handleToggleSelection = () => {
    onToggleSelection(university.id);
  };

  return (
    <Card 
      sx={{ 
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
        border: '1px solid',
        borderColor: isSelected ? '#3498db' : '#e0e0e0',
        backgroundColor: isSelected ? 'rgba(52, 152, 219, 0.05)' : 'white'
      }}
    >
      <Box sx={{ 
        p: 2.5, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.08)'
      }}>
        <Avatar 
          src={university.logoUrl}
          alt={university.name}
          variant="rounded"
          sx={{ 
            width: 56, 
            height: 56,
            bgcolor: 'rgba(52, 152, 219, 0.1)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}
        >
          {!university.logoUrl && <SchoolIcon />}
        </Avatar>
        <IconButton 
          aria-label="add to watchlist" 
          onClick={handleToggleSelection}
          color={isSelected ? 'primary' : 'default'}
          sx={{ 
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.1)'
            }
          }}
        >
          {isSelected ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
      </Box>
      
      <CardContent sx={{ flexGrow: 1, pt: 2 }}>
        <Typography 
          variant="h6" 
          component="div" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold',
            height: '56px',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            mb: 1
          }}
        >
          {university.name}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <LocationOnIcon sx={{ color: 'text.secondary', fontSize: 18, mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {university.location}
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <MenuBookIcon sx={{ color: 'text.secondary', fontSize: 18, mr: 0.5 }} />
          <Typography variant="body2">
            {university.coursesOffered} Courses Offered
          </Typography>
        </Box>
        
        <Divider sx={{ mb: 2 }} />
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          <Chip 
            label={`QS: ${university.qsRanking}`} 
            size="small" 
            variant="outlined"
            sx={{ 
              borderRadius: '4px', 
              backgroundColor: 'rgba(52, 152, 219, 0.08)',
              borderColor: 'rgba(52, 152, 219, 0.3)',
            }}
          />
          <Chip 
            label={`THE: ${university.theRanking}`} 
            size="small" 
            variant="outlined"
            sx={{ 
              borderRadius: '4px', 
              backgroundColor: 'rgba(46, 204, 113, 0.08)',
              borderColor: 'rgba(46, 204, 113, 0.3)',
            }}
          />
          <Chip 
            label={`Est. ${university.estd}`} 
            size="small" 
            variant="outlined"
            sx={{ 
              borderRadius: '4px', 
              backgroundColor: 'rgba(155, 89, 182, 0.08)',
              borderColor: 'rgba(155, 89, 182, 0.3)',
            }}
          />
        </Box>
      </CardContent>
      
      <Box sx={{ p: 2, pt: 0 }}>
        <Button 
          size="medium" 
          variant="outlined" 
          fullWidth
          sx={{ 
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 600,
            borderColor: '#3498db',
            color: '#3498db',
            '&:hover': {
              borderColor: '#2980b9',
              backgroundColor: 'rgba(52, 152, 219, 0.05)',
            },
          }}
        >
          View Courses
        </Button>
      </Box>
    </Card>
  );
};

export default UniversityCard;
