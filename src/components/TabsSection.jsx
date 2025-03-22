
import React from 'react';
import { Box } from '@mui/material';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import OverviewTab from './OverviewTab';
import CoursesTab from './CoursesTab';
import ServicesTab from './ServicesTab';
import { useIsMobile } from '../hooks/use-mobile';

const TabsSection = ({ university, activeTab, setActiveTab, universityId, courses }) => {
  const isMobile = useIsMobile();
  
  return (
    <Box sx={{ 
      maxWidth: {
        xs: 'calc(100% - 32px)',
        sm: 'calc(100% - 80px)',
        md: 'calc(100% - 200px)',
      },
      margin: '0 auto',
      mt: 4,
    }}>
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-white border shadow-sm mb-4 w-full overflow-x-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="services">Our Services</TabsTrigger>
        </TabsList>
        
        {/* Overview Tab Content */}
        <TabsContent value="overview" className="mt-0">
          <OverviewTab university={university} />
        </TabsContent>
        
        {/* Courses Tab Content */}
        <TabsContent value="courses" className="mt-0">
          <CoursesTab universityId={universityId} courses={courses} />
        </TabsContent>
        
        {/* Services Tab Content */}
        <TabsContent value="services" className="mt-0">
          <ServicesTab />
        </TabsContent>
      </Tabs>
    </Box>
  );
};

export default TabsSection;
