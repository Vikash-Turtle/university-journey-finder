
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  CardMedia, 
  IconButton, 
  Box, 
  Chip, 
  Avatar,
  useMediaQuery,
  useTheme
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SchoolIcon from '@mui/icons-material/School';

const UniversityCard = ({ university, onToggleSelection, isSelected }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleToggleSelection = () => {
    onToggleSelection(university.id);
  };

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: 6,
          transform: 'translateY(-4px)'
        },
        border: '1px solid',
        borderColor: isSelected ? theme.palette.primary.main : theme.palette.divider,
        backgroundColor: isSelected ? theme.palette.primary.light + '10' : 'white'
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Avatar 
          src={university.logoUrl}
          alt={university.name}
          sx={{ 
            width: 64, 
            height: 64,
            bgcolor: theme.palette.primary.main + '20'
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
      
      <CardContent sx={{ flexGrow: 1, pt: 0 }}>
        <Typography variant="h6" component="div" gutterBottom noWrap>
          {university.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {university.location}
        </Typography>
        
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            Courses Offered: {university.coursesOffered}
          </Typography>
        </Box>
        
        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Chip 
            label={`QS: ${university.qsRanking}`} 
            size="small" 
            variant="outlined" 
          />
          <Chip 
            label={`THE: ${university.theRanking}`} 
            size="small" 
            variant="outlined"
          />
          <Chip 
            label={`Estd.: ${university.estd}`} 
            size="small" 
            variant="outlined"
          />
        </Box>
      </CardContent>
      
      <Box sx={{ p: 2, pt: 0 }}>
        <Button 
          size="small" 
          color="primary" 
          variant="outlined" 
          fullWidth
        >
          View Courses
        </Button>
      </Box>
    </Card>
  );
};

export default UniversityCard;
