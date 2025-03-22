
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { sampleUniversities } from '../data/sampleUniversities';
import { sampleCourses } from '../data/sampleCourses';
import CourseListHeader from '../components/CourseListHeader';
import HeroSection from '../components/HeroSection';
import TabsSection from '../components/TabsSection';
import Disclaimer from '../components/Disclaimer';

const CourseList = () => {
  const {
    universityId
  } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const university = sampleUniversities.find(uni => uni.id === parseInt(universityId));
  
  if (!university) {
    return <Container sx={{
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
      </Container>;
  }
  
  return <Box sx={{
    minHeight: '100vh',
    backgroundColor: '#F8F9FA'
  }}>
      {/* Header with back button */}
      <CourseListHeader />
      
      {/* Hero Section - full width */}
      <HeroSection university={university} />
      
      {/* Content Section with Tabs - container removed to allow custom width in TabsSection */}
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
          maxWidth: 'calc(100% - 200px)', 
          margin: '0 auto' 
        }}>
          <Disclaimer />
        </Box>
      </Box>
    </Box>;
};

export default CourseList;
