'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { Icon } from '@iconify/react';

const benefits = [
  "Access to exclusive workshops and resources",
  "Network with industry professionals",
  "Build real-world cloud projects",
  "AWS certification guidance"
];

const stats = [
  { 
    count: "500+", 
    label: "Active Members", 
    icon: "ph:users-three-bold" 
  },
  { 
    count: "20+", 
    label: "Workshops Conducted", 
    icon: "ph:chalkboard-teacher-bold" 
  },
  { 
    count: "50+", 
    label: "Projects Built", 
    icon: "ph:rocket-launch-bold" 
  },
];

export default function JoinClub() {
  return (
    <Box sx={{ 
      py: 12, 
      background: 'radial-gradient(circle at 50% 100%, #2E1A47 0%, #0f0518 100%)',
      position: 'relative'
    }}>
      
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" fontWeight="bold" sx={{ color: 'white', mb: 1.5 }}>
            Ready to Start Building?
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Join a community of passionate students learning cloud computing together
          </Typography>
        </Box>

        <Box sx={{ 
          background: 'linear-gradient(145deg, rgba(40, 25, 60, 0.6) 0%, rgba(15, 5, 24, 0.9) 100%)',
          border: '1px solid rgba(255, 153, 0, 0.3)',
          borderRadius: 4,
          p: { xs: 4, md: 6 },
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
        }}>
          
          {/* Inner Glow Blob */}
          <Box sx={{
            position: 'absolute',
            top: '-50%',
            left: '-20%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(255, 153, 0, 0.05) 0%, rgba(0,0,0,0) 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }} />

          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'center', 
            gap: 8 
          }}>
            
            {/* LEFT SIDE: Content (Flex 1.2 for slightly more width) */}
            <Box sx={{ flex: 1.2, width: '100%', position: 'relative', zIndex: 1 }}>
              <Typography variant="h3" fontWeight="bold" sx={{ color: 'white', mb: 2 }}>
                Join AWS Cloud Club DTU
              </Typography>
              <Typography variant="body1" sx={{ color: 'grey.300', mb: 4, lineHeight: 1.7, fontSize: '1.1rem' }}>
                Connect with fellow students, attend workshops, and build cloud projects that matter. 
                It's completely free and open to all DTU students.
              </Typography>

              {/* Benefits List */}
              <Stack spacing={2} sx={{ mb: 5 }}>
                {benefits.map((benefit, index) => (
                  <Stack key={index} direction="row" spacing={1.5} alignItems="center">
                    <Icon icon="ph:check-circle-fill" color="#FF9900" width={24} />
                    <Typography variant="body1" sx={{ color: 'grey.300' }}>
                      {benefit}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              {/* CTA Button */}
              <Button 
                variant="contained" 
                size="large"
                endIcon={<Icon icon="ph:arrow-right-bold" />}
                sx={{ 
                  bgcolor: '#FF9900', 
                  color: '#000', 
                  px: 5, 
                  py: 1.8,
                  borderRadius: 2,
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 20px rgba(255, 153, 0, 0.3)',
                  '&:hover': {
                    bgcolor: '#FFB84D', 
                    transform: 'scale(1.05)',
                    boxShadow: '0 0 30px rgba(255, 153, 0, 0.6)'
                  }
                }}
              >
                Join Now
              </Button>
            </Box>

            <Box sx={{ flex: 0.8, width: '100%' }}>
              <Stack spacing={2.5}>
                {stats.map((stat, index) => (
                  <Box key={index} sx={{ 
                    bgcolor: '#130822', // Very dark purple background for contrast
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 3,
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    transition: 'transform 0.3s ease',
                    '&:hover': { 
                      transform: 'translateX(8px)', 
                      borderColor: 'rgba(255, 153, 0, 0.4)',
                      bgcolor: '#1A0B2E' 
                    }
                  }}>
                    <Box sx={{ 
                      minWidth: 56, 
                      height: 56, 
                      bgcolor: '#FF9900', 
                      borderRadius: 2,
                      boxShadow: '0 0 15px rgba(255, 153, 0, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000' // Icon color
                    }}>
                      <Icon icon={stat.icon} width={28} height={28} />
                    </Box>
                    
                    <Box>
                      <Typography variant="h5" fontWeight="bold" sx={{ color: 'white', lineHeight: 1, mb: 0.5 }}>
                        {stat.count}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'grey.400', fontSize: '0.9rem' }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>

          </Box>
        </Box>
      </Container>
    </Box>
  );
}