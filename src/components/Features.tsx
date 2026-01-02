'use client';

import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import { Icon } from '@iconify/react';

const features = [
  { 
    icon: "icon-park-outline:code-laptop", 
    title: "Workshops & Sessions", 
    desc: "Regular hands-on workshops covering AWS services, cloud architecture, and DevOps practices." 
  },
  { 
    icon: "streamline-flex:politics-speech-solid", 
    title: "Industry Speakers", 
    desc: "Learn from cloud professionals and AWS experts sharing real-world insights and career guidance." 
  },
  { 
    icon: "material-symbols:cloud", 
    title: "Hands-on Cloud Learning", 
    desc: "Build real projects with AWS services including EC2, S3, Lambda, and cutting-edge AI tools." 
  },
  { 
    icon: "flowbite:aws-solid", 
    title: "AWS Global Club", 
    desc: "Part of the official AWS Campus Reach Program, connecting you with Amazon's cloud ecosystem." 
  },
];

export default function Features() {
  return (
    <Box sx={{ 
      py: 10, 
      background: 'linear-gradient(to bottom, #0f0518 0%, #1A0B2E 100%)', 
      position: 'relative',
      overflow: 'hidden' 
    }}>
      
      {/* Background Lines & Blobs */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)', zIndex: 2 }} />
      <Box sx={{
        position: 'absolute',
        bottom: '-20%',
        right: '-10%',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(circle, rgba(100, 50, 255, 0.12) 0%, rgba(26, 11, 46, 0) 70%)',
        filter: 'blur(100px)',
        zIndex: 0, 
        pointerEvents: 'none', 
      }} />

      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 }, position: 'relative', zIndex: 1 }}> 
        
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" fontWeight="bold" sx={{ mb: 2 }}>
            Why Join AWS Cloud Club DTU?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Get hands-on experience with cutting-edge cloud technologies and build skills that matter in today's tech industry.
          </Typography>
        </Box>

        {/* FEATURES CONTAINER */}
        <Box sx={{ 
          display: 'flex', 
          // ✅ Mobile: Vertical Stack | Desktop: Horizontal Row
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 4, 
          pb: 2 
        }}>
          {features.map((feature, index) => (
            <Box key={index} sx={{ flex: 1 }}>
              
              <Card sx={{ 
                height: '100%', 
                bgcolor: '#13091B', 
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 3,
                transition: 'all 0.3s ease-in-out',
                '&:hover': { 
                  transform: 'translateY(-5px)', 
                  borderColor: 'primary.main',
                  boxShadow: '0 10px 40px -10px rgba(255, 153, 0, 0.15)',
                  '& .icon-wrapper': {
                    transform: 'scale(1.15)', 
                    boxShadow: '0 0 20px rgba(255, 153, 0, 0.4)' 
                  }
                }
              }}>
                <CardContent sx={{ 
                  p: 4, 
                  display: 'flex', 
                  // ✅ Mobile: Icon Left (Row) | Desktop: Icon Top (Column)
                  flexDirection: { xs: 'row', md: 'column' }, 
                  alignItems: { xs: 'center', md: 'flex-start' }, 
                  textAlign: 'left', 
                  height: '100%',
                  gap: { xs: 3, md: 0 } // Add gap between icon and text on mobile
                }}>
                  
                  {/* ICON WRAPPER */}
                  <Box 
                    className="icon-wrapper" 
                    sx={{ 
                      color: '#232F3E', 
                      bgcolor: 'primary.main', 
                      minWidth: 56, // Fixed size so it doesn't shrink
                      width: 56, 
                      height: 56, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      borderRadius: 2,
                      // ✅ Remove bottom margin on mobile since it's side-by-side
                      mb: { xs: 0, md: 3 }, 
                      fontSize: '28px',
                      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
                    }}
                  >
                    <Icon icon={feature.icon} />
                  </Box>

                  {/* TEXT CONTENT WRAPPER */}
                  <Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontSize: '1.25rem', mb: 0.5, lineHeight: 1.2 }}>
                      {feature.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {feature.desc}
                    </Typography>
                  </Box>

                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Button 
            href='/join'
            variant="contained" 
            size="large" 
            endIcon={<Icon icon="ph:rocket-launch-bold" style={{ fontSize: '1.2rem' }} />}
            sx={{ 
              py: 1.8, 
              px: 5, 
              fontWeight: 'bold',
              fontSize: '1rem',
              borderRadius: 2,
              boxShadow: '0 0 20px rgba(255, 153, 0, 0.4)',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              '&:hover': {
                transform: 'scale(1.05)', 
                boxShadow: '0 0 30px rgba(255, 153, 0, 0.7)'
              }
            }}
          >
            Start Your Cloud Journey Today
          </Button>
          
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Free to join • Open to all DTU students
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}