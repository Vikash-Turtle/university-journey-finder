
import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  InputAdornment, 
  Grid, 
  Paper 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CourseCard from './CourseCard';

const CoursesTab = ({ universityId, courses = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  
  useEffect(() => {
    const universitySpecificCourses = courses.filter(course => 
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
  }, [universityId, searchTerm, courses]);

  return (
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
  );
};

export default CoursesTab;
