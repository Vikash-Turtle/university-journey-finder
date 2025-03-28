
import React from 'react';
import { Box, Typography, Link, Button } from '@mui/material';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useIsMobile } from '../hooks/use-mobile';

const HeroSection = ({
  university
}) => {
  const isMobile = useIsMobile();
  
  if (!university) return null;
  
  return (
    <Box sx={{
      width: '100%',
      position: 'relative'
    }}>
      {/* Hero Image with Overlay */}
      <Box sx={{
        position: 'relative',
        width: '100%',
        height: {
          xs: '150px',
          sm: '200px',
          md: '250px'
        },
        backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Unified card with university info - floating over the image */}
        <Box sx={{
          position: 'absolute',
          bottom: { xs: -120, sm: -100, md: -80 },
          left: 0,
          right: 0,
          margin: '0 auto',
          maxWidth: {
            xs: 'calc(100% - 32px)',
            sm: 'calc(100% - 80px)',
            md: 'calc(100% - 200px)',
          },
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden'
        }}>
          {/* University info header */}
          <Box sx={{
            p: { xs: 2, sm: 3 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}>
              {/* University Logo with Fallback - now larger and matches height of university name section */}
              <Avatar className="h-20 w-20 rounded-lg">
                <AvatarImage src={university.logoUrl} alt={university.name} />
                <AvatarFallback className="rounded-lg">{university.name.charAt(0)}{university.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
              </Avatar>
              
              {/* University Name and Courses */}
              <Box>
                <Typography variant="h5" component="h1" sx={{
                  fontWeight: 'bold',
                  color: '#2c3e50',
                  fontSize: {
                    xs: '1.1rem',
                    sm: '1.4rem',
                    md: '1.6rem'
                  }
                }}>
                  {university.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Offers {university.coursesOffered}+ Courses across disciplines
                </Typography>
              </Box>
            </Box>
            
            {/* Apply Button - will be shown only on desktop/tablet */}
            {!isMobile && (
              <Button variant="contained" sx={{
                backgroundColor: '#6E4D8B',
                borderRadius: '8px',
                boxShadow: 2,
                textTransform: 'none',
                fontWeight: 600,
                px: { xs: 2, md: 3 },
                py: 1,
                fontSize: { xs: '0.8rem', md: '0.875rem' },
                '&:hover': {
                  backgroundColor: '#5a3e73'
                }
              }}>
                Apply
              </Button>
            )}
          </Box>
          
          {/* University Info Section - now part of the same card */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr 1fr',
              md: 'repeat(4, 1fr)'
            },
            gap: 2,
            p: { xs: 2, sm: 3 },
            backgroundColor: 'white',
          }}>
            {/* Website */}
            <Box sx={{
              textAlign: 'left'
            }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Website
              </Typography>
              <Link href={`https://${university.website}`} underline="hover" sx={{
                color: '#6E4D8B',
                fontWeight: 500,
                fontSize: { xs: '0.85rem', md: '1rem' }
              }} target="_blank" rel="noopener noreferrer">
                {university.website || "pixelz.studio"}
              </Link>
            </Box>
            
            {/* Location */}
            <Box sx={{
              textAlign: 'left'
            }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Location
              </Typography>
              <Typography variant="body1" sx={{
                fontWeight: 500,
                fontSize: { xs: '0.85rem', md: '1rem' }
              }}>
                {university.location}
              </Typography>
            </Box>
            
            {/* QS Ranking */}
            <Box sx={{
              textAlign: 'left'
            }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                QS World Ranking
              </Typography>
              <Typography variant="body1" sx={{
                fontWeight: 500,
                fontSize: { xs: '0.85rem', md: '1rem' }
              }}>
                {university.qsRanking || "10-50"}
              </Typography>
            </Box>
            
            {/* THE Ranking */}
            <Box sx={{
              textAlign: 'left'
            }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                THE Global Ranking
              </Typography>
              <Typography variant="body1" sx={{
                fontWeight: 500,
                fontSize: { xs: '0.85rem', md: '1rem' }
              }}>
                {university.theRanking || "10-50"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
