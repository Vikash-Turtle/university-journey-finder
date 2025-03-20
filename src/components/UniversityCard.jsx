
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
  Divider,
  Tooltip
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

  // Check if university name is long
  const isLongName = university.name.length > 30;

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
        borderColor: isSelected ? '#6E4D8B' : '#e0e0e0',
        backgroundColor: isSelected ? 'rgba(110, 77, 139, 0.12)' : 'white'
      }}
    >
      <Box sx={{ 
        p: 2.5, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '1px solid',
        borderColor: isSelected ? 'rgba(110, 77, 139, 0.3)' : 'rgba(0, 0, 0, 0.08)',
        backgroundColor: isSelected ? 'rgba(110, 77, 139, 0.05)' : 'white'
      }}>
        <Avatar 
          src={university.logoUrl}
          alt={university.name}
          variant="rounded"
          sx={{ 
            width: 56, 
            height: 56,
            bgcolor: 'rgba(110, 77, 139, 0.1)',
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
            color: isSelected ? '#6E4D8B' : 'rgba(0, 0, 0, 0.54)',
            '&:hover': {
              transform: 'scale(1.1)',
              color: isSelected ? '#5a3e73' : '#6E4D8B'
            }
          }}
        >
          {isSelected ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
      </Box>
      
      <CardContent sx={{ flexGrow: 1, pt: 2, backgroundColor: isSelected ? 'rgba(110, 77, 139, 0.05)' : 'white' }}>
        <Tooltip title={university.name} placement="top">
          <Typography 
            variant="h6" 
            component="div" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              minHeight: '60px',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              textOverflow: 'ellipsis',
              mb: 1,
              lineHeight: 1.3,
              color: isSelected ? '#502e71' : '#2c3e50'
            }}
          >
            {university.name}
          </Typography>
        </Tooltip>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <LocationOnIcon sx={{ color: '#6E4D8B', fontSize: 18, mr: 0.5, opacity: 0.8 }} />
          <Typography variant="body2" color={isSelected ? 'text.primary' : 'text.secondary'}>
            {university.location}
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <MenuBookIcon sx={{ color: '#6E4D8B', fontSize: 18, mr: 0.5, opacity: 0.8 }} />
          <Typography variant="body2" color={isSelected ? 'text.primary' : 'text.secondary'}>
            {university.coursesOffered} Courses Offered
          </Typography>
        </Box>
        
        <Divider sx={{ mb: 2, borderColor: isSelected ? 'rgba(110, 77, 139, 0.3)' : 'rgba(0, 0, 0, 0.08)' }} />
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          <Chip 
            label={`QS World Ranking: ${university.qsRanking}`} 
            size="small" 
            variant="outlined"
            sx={{ 
              borderRadius: '6px', 
              backgroundColor: isSelected ? 'rgba(110, 77, 139, 0.15)' : 'rgba(110, 77, 139, 0.08)',
              borderColor: isSelected ? 'rgba(110, 77, 139, 0.5)' : 'rgba(110, 77, 139, 0.3)',
              color: isSelected ? '#502e71' : 'rgba(0, 0, 0, 0.7)',
              fontWeight: 500
            }}
          />
          <Chip 
            label={`THE Global Ranking: ${university.theRanking}`} 
            size="small" 
            variant="outlined"
            sx={{ 
              borderRadius: '6px', 
              backgroundColor: isSelected ? 'rgba(110, 77, 139, 0.15)' : 'rgba(110, 77, 139, 0.08)',
              borderColor: isSelected ? 'rgba(110, 77, 139, 0.5)' : 'rgba(110, 77, 139, 0.3)',
              color: isSelected ? '#502e71' : 'rgba(0, 0, 0, 0.7)',
              fontWeight: 500
            }}
          />
          <Chip 
            label={`Est. ${university.estd}`} 
            size="small" 
            variant="outlined"
            sx={{ 
              borderRadius: '6px', 
              backgroundColor: isSelected ? 'rgba(110, 77, 139, 0.15)' : 'rgba(110, 77, 139, 0.08)',
              borderColor: isSelected ? 'rgba(110, 77, 139, 0.5)' : 'rgba(110, 77, 139, 0.3)',
              color: isSelected ? '#502e71' : 'rgba(0, 0, 0, 0.7)',
              fontWeight: 500
            }}
          />
        </Box>
      </CardContent>
      
      <Box sx={{ 
        p: 2, 
        pt: 0, 
        backgroundColor: isSelected ? 'rgba(110, 77, 139, 0.05)' : 'white',
        borderTop: '1px solid',
        borderColor: isSelected ? 'rgba(110, 77, 139, 0.1)' : 'transparent'
      }}>
        <Button 
          size="medium" 
          variant={isSelected ? "contained" : "outlined"}
          fullWidth
          sx={{ 
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 600,
            borderColor: '#6E4D8B',
            color: isSelected ? 'white' : '#6E4D8B',
            backgroundColor: isSelected ? '#6E4D8B' : 'transparent',
            '&:hover': {
              borderColor: '#5a3e73',
              backgroundColor: isSelected ? '#5a3e73' : 'rgba(110, 77, 139, 0.05)',
            },
            boxShadow: isSelected ? 2 : 0,
            transition: 'all 0.3s ease'
          }}
        >
          View Courses
        </Button>
      </Box>
    </Card>
  );
};

export default UniversityCard;
