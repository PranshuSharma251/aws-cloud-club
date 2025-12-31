'use client';

import { Box, Container, Typography, Button, Chip, Stack } from '@mui/material';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const sessions = [
  {
    image: "/images/private-cloud.jpg", 
    type: "Online",
    date: "December 15, 2024",
    title: "Cloud Launch: Starting Your Cloud Career Journey",
    desc: "An introductory session covering cloud fundamentals, career paths, and getting started with AWS",
    speaker: "Industry Expert"
  },
  {
    image: "/images/clouds.webp", 
    type: "Offline",
    date: "November 28, 2024",
    title: "SageMind: Generative AI with AWS",
    desc: "Deep dive into AWS SageMaker and building generative AI applications using Amazon Bedrock",
    speaker: "AWS ML Specialist"
  },
  {
    image: "/images/codes.webp", 
    type: "Online",
    date: "October 20, 2024",
    title: "Cloud Security Best Practices",
    desc: "Learn AWS IAM, security groups, encryption, and compliance in cloud environments",
    speaker: "Security Architect"
  }
];

export default function RecentSessions() {
  return (
    <Box sx={{ py: 12, bgcolor: '#0f0518' }}> 
       <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 } }}>
          
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" fontWeight="bold" sx={{ color: 'white', mb: 1 }}>
              Recent Sessions & Events
            </Typography>
            <Typography variant="body1" sx={{ color: 'grey.400' }}>
              Check out what we've been working on lately
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            gap: 4,
            flexDirection: { xs: 'column', md: 'row' }
          }}>
            {sessions.map((session, index) => (
               <Box key={index} sx={{ flex: 1 }}>
                  
                  <Box sx={{
                     bgcolor: '#13091B', 
                     borderRadius: 4,
                     overflow: 'hidden',
                     border: '1px solid rgba(255,255,255,0.1)',
                     height: '100%',
                     display: 'flex',
                     flexDirection: 'column',
                     cursor: 'pointer',
                     transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                     // ✅ HOVER EFFECTS
                     '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 0 30px rgba(255, 153, 0, 0.25)', 
                        borderColor: 'primary.main',
                        '& .session-title': { color: '#FF9900' },
                        // 👇 Fade out the purple overlay on hover
                        '& .image-overlay': { opacity: 0 } 
                     }
                  }}>
                     
                     <Box sx={{ position: 'relative', height: 240, width: '100%' }}>
                        
                        <Chip
                          label={session.type}
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            fontWeight: 'bold',
                            bgcolor: session.type === 'Online' ? '#FF9900' : '#624FA2', 
                            color: session.type === 'Online' ? 'black' : 'white',
                            zIndex: 3, // Sit above overlay
                            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                          }}
                        />

                        {/* Image */}
                        <Image
                           src={session.image}
                           alt={session.title}
                           fill
                           style={{ objectFit: 'cover' }}
                        />
                        
                        <Box 
                           className="image-overlay"
                           sx={{ 
                              position: 'absolute', 
                              inset: 0, 
                              // Purple tint color
                              bgcolor: 'rgba(75, 54, 124, 0.5)', 
                              zIndex: 1, 
                              transition: 'opacity 0.4s ease-in-out'
                           }} 
                        />
                        
                        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #13091B 0%, transparent 60%)', zIndex: 2 }} />
                     </Box>

                     <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 1 }}>
                        
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'grey.500' }}>
                           <Icon icon="ph:calendar-blank-bold" width={18} />
                           <Typography variant="caption" fontWeight="bold" fontSize={13}>
                              {session.date}
                           </Typography>
                        </Stack>

                        {/* Title */}
                        <Typography 
                           variant="h6" 
                           className="session-title"
                           fontWeight="bold" 
                           sx={{ color: 'white', lineHeight: 1.3, transition: 'color 0.3s ease' }}
                        >
                           {session.title}
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'grey.400', flexGrow: 1, lineHeight: 1.6 }}>
                           {session.desc}
                        </Typography>

                        <Stack direction="row" spacing={1} alignItems="center" sx={{ color: '#FF9900', mt: 1 }}>
                           <Icon icon="ph:user-circle-bold" width={20} />
                           <Typography variant="caption" fontWeight="bold" fontSize={13}>
                              {session.speaker}
                           </Typography>
                        </Stack>
                     </Box>

                  </Box>
               </Box>
            ))}
          </Box>

          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button
              variant="contained"
                  sx={{ 
                    bgcolor: '#4B367C', 
                    color: 'white',
                    py: 1.5, 
                    px: 4, 
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease-in-out', 
                    '&:hover': {
                      bgcolor: '#624FA2',      // ✅ Brighter Purple
                      transform: 'scale(1.05)', // ✅ Scales up
                      boxShadow: '0 0 20px rgba(98, 79, 162, 0.5)' 
                    }
                  }}
              endIcon={<Icon icon="ph:arrow-right-bold" />}
            >
              View All Sessions
            </Button>
          </Box>
       </Container>
    </Box>
  );
}