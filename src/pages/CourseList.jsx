
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, IconButton, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { sampleUniversities } from '../data/sampleUniversities';
import { sampleCourses } from '../data/sampleCourses';
import CourseListHeader from '../components/CourseListHeader';
import HeroSection from '../components/HeroSection';
import TabsSection from '../components/TabsSection';
import Disclaimer from '../components/Disclaimer';
import LoadingOverlayOption1 from '../components/LoadingOverlayOption1';
import { useIsMobile } from '../hooks/use-mobile';

const CourseList = () => {
  const { universityId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();
  const university = sampleUniversities.find(uni => uni.id === parseInt(universityId));
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  if (!university) {
    return (
      <Container sx={{
        py: 8,
        textAlign: 'center'
      }}>
        <Typography variant="h4" component="h1" gutterBottom>
          University not found
        </Typography>
        <Typography variant="body1" paragraph>
          Sorry, we couldn't find the university you're looking for.
        </Typography>
        <Box sx={{
          mt: 4
        }}>
          <IconButton color="primary" onClick={() => navigate('/universities')}>
            <ArrowBackIcon />
            <Typography variant="button" sx={{
              ml: 1
            }}>
              Back to Universities
            </Typography>
          </IconButton>
        </Box>
      </Container>
    );
  }
  
  return (
    <>
      {loading && <LoadingOverlayOption1 />}
      <Box sx={{
        minHeight: '100vh',
        backgroundColor: '#F8F9FA',
        paddingBottom: isMobile ? '70px' : 0 // Add padding at the bottom for mobile to prevent content being hidden behind the fixed button
      }}>
        {/* Header with back button */}
        <CourseListHeader />
        
        {/* Hero Section - full width */}
        <HeroSection university={university} />
        
        {/* Content Section with Tabs */}
        <Box sx={{ py: 4 }}>
          <TabsSection 
            university={university} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            universityId={universityId} 
            courses={sampleCourses} 
          />
          
          {/* Disclaimer with matched width */}
          <Box sx={{ 
            maxWidth: {
              xs: 'calc(100% - 32px)',
              sm: 'calc(100% - 80px)',
              md: 'calc(100% - 200px)',
            },
            margin: '0 auto',
            mt: 4
          }}>
            <Disclaimer />
          </Box>
        </Box>
        
        {/* Sticky Apply Button for Mobile */}
        {isMobile && (
          <Box sx={{
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
          }}>
            <Button variant="contained" fullWidth sx={{
              py: 1.5,
              borderRadius: 2,
              backgroundColor: '#6E4D8B',
              '&:hover': {
                backgroundColor: '#5a3e73'
              },
              fontWeight: 'bold',
              boxShadow: 3,
              maxWidth: '500px'
            }}>
              Apply Now
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default CourseList;
