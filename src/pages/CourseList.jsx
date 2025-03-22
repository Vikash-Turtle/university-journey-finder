
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Container, 
  AppBar, 
  Toolbar, 
  IconButton,
  TextField,
  InputAdornment,
  Grid,
  Paper,
  Avatar,
  Divider,
  Button
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useIsMobile } from '../hooks/use-mobile';
import { sampleUniversities } from '../data/sampleUniversities';
import { sampleCourses } from '../data/sampleCourses';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import CourseCard from '../components/CourseCard';

const CourseList = () => {
  const { universityId } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  
  const university = sampleUniversities.find(uni => uni.id === parseInt(universityId));
  const [filteredCourses, setFilteredCourses] = useState([]);
  
  useEffect(() => {
    const universitySpecificCourses = sampleCourses.filter(course => 
      course.universityId === universityId
    );
    
    // Filter courses
    const filtered = universitySpecificCourses.filter(course => {
      const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesSearch;
    });
    
    setFilteredCourses(filtered);
  }, [universityId, searchTerm]);
  
  if (!university) {
    return (
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          University not found
        </Typography>
        <Typography variant="body1" paragraph>
          Sorry, we couldn't find the university you're looking for.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <IconButton color="primary" onClick={() => navigate('/universities')}>
            <ArrowBackIcon />
            <Typography variant="button" sx={{ ml: 1 }}>
              Back to Universities
            </Typography>
          </IconButton>
        </Box>
      </Container>
    );
  }
  
  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: '#F8F9FA',
    }}>
      {/* Header with back button */}
      <AppBar position="static" sx={{
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        color: '#333'
      }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ px: { xs: 0, sm: 0 } }}>
            <IconButton 
              edge="start" 
              sx={{ color: '#6E4D8B', mr: 2 }}
              onClick={() => navigate('/universities')} 
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
              Universities
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      
      {/* Hero Section with Background Image */}
      <Box sx={{
        position: 'relative',
        backgroundColor: '#fff',
        pt: 3,
        pb: 4,
        borderBottom: '1px solid #eaeaea'
      }}>
        <Container maxWidth="xl">
          <Paper elevation={0} sx={{
            display: 'flex',
            width: '100%',
            p: { xs: 2, md: 3 },
            borderRadius: 2,
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 3,
            border: '1px solid #e0e0e0',
            backgroundColor: '#fff'
          }}>
            {/* University Logo */}
            <Avatar 
              src={university.logoUrl} 
              alt={university.name}
              variant="rounded"
              sx={{
                width: { xs: 60, md: 80 },
                height: { xs: 60, md: 80 },
                bgcolor: 'rgba(110, 77, 139, 0.1)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
            >
              {!university.logoUrl && <SchoolIcon sx={{ fontSize: 40 }} />}
            </Avatar>
            
            {/* University Info */}
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="h1" sx={{ 
                fontWeight: 'bold', 
                color: '#2c3e50',
                fontSize: { xs: '1.3rem', md: '1.5rem' }
              }}>
                {university.name}
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOnIcon sx={{ color: '#6E4D8B', fontSize: 18, mr: 0.5 }} />
                  <Typography variant="body2" color="text.secondary">
                    {university.location}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <MenuBookIcon sx={{ color: '#6E4D8B', fontSize: 18, mr: 0.5 }} />
                  <Typography variant="body2" color="text.secondary">
                    {university.coursesOffered} Courses Offered
                  </Typography>
                </Box>
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
                py: 0.8,
                '&:hover': {
                  backgroundColor: '#5a3e73',
                },
                alignSelf: { xs: 'flex-start', md: 'center' }
              }}
            >
              Apply Now
            </Button>
          </Paper>
        </Container>
      </Box>
      
      {/* Content Section with Tabs */}
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Tabs Navigation */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-white border shadow-sm mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="services">Our Services</TabsTrigger>
          </TabsList>
          
          {/* Overview Tab Content */}
          <TabsContent value="overview" className="mt-0">
            <Paper sx={{ p: 4, borderRadius: 2, border: '1px solid #e0e0e0' }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                About {university.name}
              </Typography>
              <Typography variant="body1" paragraph>
                Established in {university.estd}, {university.name} is proud of their unique ways and it's this drive that makes them the right place for students, their future, their mark.
              </Typography>
              <Typography variant="body1" paragraph>
                Students are looking for a university that understands them. A place that will leverage their career intentions and be their partner along the way. A university where faculty are ready to share their knowledge and convictions and direct students on the right course, and where graduates have carved a path to follow.
              </Typography>
              <Typography variant="body1">
                From it's student-centred approach to learning, to one-on-one interactions with faculty, to the endless opportunities to get involved on and off-campus. At this university, students have the opportunity to leave their mark on campus and make a difference in their community.
              </Typography>
            </Paper>
          </TabsContent>
          
          {/* Courses Tab Content */}
          <TabsContent value="courses" className="mt-0">
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                  Available Courses
                </Typography>
                
                <TextField
                  placeholder="Search courses"
                  variant="outlined"
                  size="small"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    sx: { borderRadius: 2 }
                  }}
                  sx={{ width: { xs: '100%', sm: '300px' } }}
                />
              </Box>
              
              {filteredCourses.length > 0 ? (
                <Grid container spacing={3}>
                  {filteredCourses.map(course => (
                    <Grid item xs={12} key={course.id} sx={{ display: 'flex' }}>
                      <CourseCard course={course} />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 6, 
                    textAlign: 'center',
                    borderRadius: 3,
                    backgroundColor: 'rgba(0,0,0,0.02)',
                    border: '1px dashed rgba(0,0,0,0.1)'
                  }}
                >
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    No courses found
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Try adjusting your search or filter criteria
                  </Typography>
                </Paper>
              )}
            </Box>
          </TabsContent>
          
          {/* Services Tab Content */}
          <TabsContent value="services" className="mt-0">
            <Box>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50', mb: 3 }}>
                Our Services
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                We offer the following services to help students with their application process and educational journey.
              </Typography>
              
              <Grid container spacing={3}>
                {[
                  { id: 1, title: "Admission Consulting", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2940&auto=format&fit=crop" },
                  { id: 2, title: "SOP Writing", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2940&auto=format&fit=crop" },
                  { id: 3, title: "Appeal Letter", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop" },
                  { id: 4, title: "Passport Request", image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2940&auto=format&fit=crop" },
                  { id: 5, title: "Interview Preparation", image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=2940&auto=format&fit=crop" }
                ].map(service => (
                  <Grid item xs={12} sm={6} md={4} key={service.id}>
                    <Paper sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      borderRadius: 2,
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)'
                      },
                      border: '1px solid #e0e0e0'
                    }}>
                      <Box sx={{
                        height: 180,
                        overflow: 'hidden'
                      }}>
                        <Box
                          component="img"
                          src={service.image}
                          alt={service.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </Box>
                      <Box sx={{ p: 3 }}>
                        <Typography variant="h6" component="div" gutterBottom sx={{
                          fontWeight: 'bold',
                          color: '#2c3e50'
                        }}>
                          {service.title}
                        </Typography>
                        <Button 
                          sx={{
                            mt: 1,
                            color: '#6E4D8B',
                            textTransform: 'none',
                            fontWeight: 600,
                            p: 0,
                            '&:hover': {
                              backgroundColor: 'transparent',
                              textDecoration: 'underline'
                            }
                          }}
                        >
                          Learn more
                        </Button>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </TabsContent>
        </Tabs>
        
        {/* Disclaimer */}
        <Paper elevation={0} sx={{
          mt: 6,
          p: 3,
          backgroundColor: 'rgba(110, 77, 139, 0.08)',
          borderRadius: 2,
          border: '1px solid rgba(110, 77, 139, 0.2)'
        }}>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ fontStyle: 'italic' }}>
            Course information is subject to change. Please verify details with the university's official course catalog.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default CourseList;
