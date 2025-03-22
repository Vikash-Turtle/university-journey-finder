
import React from 'react';
import { Paper, Typography } from '@mui/material';

const Disclaimer = () => {
  return (
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
  );
};

export default Disclaimer;
