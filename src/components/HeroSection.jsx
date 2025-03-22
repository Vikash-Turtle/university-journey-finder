
import React from 'react';
import { Box, Typography, Link, Button } from '@mui/material';
import { Avatar } from '@/components/ui/avatar';
import { Button as ShadcnButton } from '@/components/ui/button';

const HeroSection = ({ university }) => {
  if (!university) return null;

  return (
    <Box sx={{ width: '100%' }}>
      {/* Hero Image with Overlay */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '200px', sm: '300px', md: '400px' },
          backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay at the bottom with university info */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: { xs: 2, sm: 3 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* University Logo */}
            <Avatar
              src={university.logoUrl}
              alt={university.name}
              className="h-16 w-16"
            />
            
            {/* University Name and Courses */}
            <Box>
              <Typography variant="h5" component="h1" sx={{ 
                fontWeight: 'bold', 
                color: '#2c3e50',
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' }
              }}>
                {university.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Offers {university.coursesOffered}+ Courses across disciplines
              </Typography>
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
              py: 1,
              '&:hover': {
                backgroundColor: '#5a3e73',
              }
            }}
          >
            Apply
          </Button>
        </Box>
      </Box>
      
      {/* University Info Section */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
          gap: 2,
          py: 4,
          borderBottom: '1px solid #eaeaea',
        }}
      >
        {/* Website */}
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Website
          </Typography>
          <Link 
            href={`https://${university.website}`} 
            underline="hover" 
            sx={{ color: '#6E4D8B', fontWeight: 500 }}
            target="_blank" 
            rel="noopener noreferrer"
          >
            {university.website || "pixelz.studio"}
          </Link>
        </Box>
        
        {/* Location */}
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Location
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {university.location}
          </Typography>
        </Box>
        
        {/* QS Ranking */}
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            QS World Ranking
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {university.qsRanking || "10-50"}
          </Typography>
        </Box>
        
        {/* THE Ranking */}
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            THE Global Ranking
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {university.theRanking || "10-50"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
