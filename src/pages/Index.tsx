
import { Button, Typography, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Container maxWidth="sm">
        <Box className="text-center" sx={{ p: 4, bgcolor: 'white', borderRadius: 2, boxShadow: 1 }}>
          <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
            University Finder
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Find your perfect university with our AI-powered recommendation engine
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              onClick={() => navigate('/universities')}
              sx={{ px: 4, py: 1.5 }}
            >
              View Recommended Universities
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Index;
