
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  AppBar, 
  Toolbar, 
  IconButton,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Paper,
  Breadcrumbs,
  Link,
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CourseCard from '../components/CourseCard';
import { sampleUniversities } from '../data/sampleUniversities';
import { sampleCourses } from '../data/sampleCourses';

const CourseList = () => {
  const { universityId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [department, setDepartment] = useState('all');
  
  const university = sampleUniversities.find(uni => uni.id === universityId);
  const [filteredCourses, setFilteredCourses] = useState([]);
  
  useEffect(() => {
    const universitySpecificCourses = sampleCourses.filter(course => 
      course.universityId === universityId
    );
    
    // Filter and sort courses
    const filtered = universitySpecificCourses
      .filter(course => {
        const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            course.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesDepartment = department === 'all' || course.department === department;
        
        return matchesSearch && matchesDepartment;
      })
      .sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'rating') {
          return b.rating - a.rating;
        } else if (sortBy === 'credits') {
          return b.credits - a.credits;
        }
        return 0;
      });
    
    setFilteredCourses(filtered);
  }, [universityId, searchTerm, sortBy, department]);
  
  // Get unique departments for filter dropdown
  const departments = ['all', ...new Set(sampleCourses
    .filter(course => course.universityId === universityId)
    .map(course => course.department))];
  
  // Determine grid size based on screen size
  const getGridSize = () => {
    if (isMobile) return 12; // 1 card per row
    if (isTablet) return 6; // 2 cards per row
    return 4; // 3 cards per row for larger screens
  };
  
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
      backgroundColor: '#F5F5F5',
    }}>
      {/* Header */}
      <AppBar position="static" sx={{
        backgroundColor: 'white',
        color: 'text.primary',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.05)'
      }}>
        <Toolbar>
          <IconButton 
            edge="start" 
            color="inherit" 
            onClick={() => navigate('/universities')} 
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" component="h1" sx={{ fontWeight: 600 }}>
            {university.name}
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="xl" sx={{ pt: 4, pb: 8 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ mb: 4 }}
        >
          <Link 
            color="inherit" 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            underline="hover"
          >
            Home
          </Link>
          <Link 
            color="inherit" 
            href="/universities" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/universities');
            }}
            underline="hover"
          >
            Universities
          </Link>
          <Typography color="text.primary">{university.name}</Typography>
        </Breadcrumbs>
        
        {/* Title and Filter Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ 
            fontWeight: 700,
            color: '#2c3e50'
          }}>
            Available Courses
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Browse {filteredCourses.length} courses available at {university.name}
          </Typography>
          
          <Paper elevation={0} sx={{ 
            p: 3, 
            mt: 3,
            borderRadius: 3,
            backgroundColor: 'white',
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            <Grid container spacing={2} alignItems="flex-end">
              {/* Search */}
              <Grid item xs={12} md={5}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search courses by name, code, or description"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              
              {/* Department Filter */}
              <Grid item xs={6} md={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="department-label">Department</InputLabel>
                  <Select
                    labelId="department-label"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    label="Department"
                    startAdornment={
                      <InputAdornment position="start">
                        <FilterListIcon />
                      </InputAdornment>
                    }
                  >
                    <MenuItem value="all">All Departments</MenuItem>
                    {departments.filter(dep => dep !== 'all').map(dept => (
                      <MenuItem key={dept} value={dept}>{dept}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              
              {/* Sort By */}
              <Grid item xs={6} md={3}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="sort-label">Sort By</InputLabel>
                  <Select
                    labelId="sort-label"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    label="Sort By"
                    startAdornment={
                      <InputAdornment position="start">
                        <SortIcon />
                      </InputAdornment>
                    }
                  >
                    <MenuItem value="name">Name (A-Z)</MenuItem>
                    <MenuItem value="rating">Rating (High to Low)</MenuItem>
                    <MenuItem value="credits">Credits (High to Low)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        
        {/* Results Info */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3
        }}>
          <Typography variant="body2" color="text.secondary">
            Showing {filteredCourses.length} courses
          </Typography>
        </Box>
        
        {/* Course Cards */}
        {filteredCourses.length > 0 ? (
          <Grid container spacing={3}>
            {filteredCourses.map(course => (
              <Grid 
                item 
                xs={getGridSize()} 
                sm={getGridSize()} 
                md={getGridSize()} 
                key={course.id}
                sx={{ display: 'flex' }}
              >
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
        
        {/* Disclaimer */}
        <Paper elevation={0} sx={{
          mt: 6,
          p: 3,
          backgroundColor: 'rgba(110, 77, 139, 0.08)',
          borderRadius: 3,
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
