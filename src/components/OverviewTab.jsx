
import React from 'react';
import { Paper, Typography } from '@mui/material';

const OverviewTab = ({ university }) => {
  if (!university) return null;

  return (
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
  );
};

export default OverviewTab;
