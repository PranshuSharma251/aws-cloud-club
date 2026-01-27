'use client';

import { useState } from 'react';
import { Box, Container, Typography, Button, Chip, Stack, Modal, Fade, Backdrop, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import Image from 'next/image';

// ================= DATA (Enriched for Modal) =================
const sessions = [
  {
    image: "/images/private-cloud.jpg", 
    type: "Offline",
    date: "November 9, 2024",
    title: "Cloud Launch: Starting Your Cloud Career Journey",
    desc: "An introductory session covering cloud fundamentals, career paths, and getting started with AWS",
    speaker: "Ramneek Karla - AWS",
    // Added for Modal
    longDesc: "This session provides a comprehensive roadmap for students starting their cloud journey. We cover AWS certifications, fundamental services like EC2 and S3, and how to land your first internship.",
    location: "AB3-218",
    link: "https://youtube.com"
  },
  {
    image: "/images/clouds.webp", 
    type: "Online",
    date: "April 12, 2025",
    title: "SageMind: Generative AI with AWS",
    desc: "Deep dive into AWS SageMaker and building generative AI applications using Amazon Bedrock",
    speaker: "Dharam Thacker - Executive Director , JP Morgan Chase",
    // Added for Modal
    longDesc: "A hands-on workshop where we built a text-generation bot using Amazon Bedrock. Students learned about prompt engineering, model selection, and deploying AI apps on AWS Lambda.",
    location: "Google Meet",
    link: "https://youtube.com"
  },
  {
    image: "/images/codes.webp", 
    type: "Offline",
    date: "September 10, 2025",
    title: "Dive into AWS Cloud Club",
    desc: "An interactive orientation led by the Club Captain, introducing our community mission and the fundamentals of AWS cloud computing.",
    speaker: "Suhansh Varsaheny - Cloud Captain",
    // Added for Modal
    longDesc: "Kickstart your cloud journey with this exclusive orientation led by our Club Captain. Discover the mission of AWS Cloud Club DTU, explore our upcoming roadmap, and grasp the fundamentals of cloud computing. This session is your gateway to hands-on learning, community networking, and future innovation.",
    location: "AB3-114",
    link: "https://youtube.com"
  },
];

export default function RecentSessions() {
  const [open, setOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState<any>(null);

  const handleOpen = (session: any) => {
    setSelectedSession(session);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSelectedSession(null), 300);
  };

  // Helper for Button Logic
  const getSessionAction = (session: any) => {
    if (!session) return null;
    const isPast = new Date(session.date) < new Date();
    
    if (session.type === 'Offline') return null;

    if (isPast) {
      return { label: "Watch Recording", icon: "ph:play-circle-bold", color: "#1A0B2E", text: "#FF9900", border: "#FF9900" };
    } else {
      return { label: "Join Session", icon: "ph:rocket-launch-bold", color: "#FF9900", text: "black", border: "none" };
    }
  };

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

          {/* Cards Container */}
          <Box sx={{
            display: 'flex',
            gap: 4,
            flexDirection: { xs: 'column', md: 'row' }
          }}>
            {sessions.map((session, index) => (
               <Box key={index} sx={{ flex: 1 }}>
                  
                  {/* CARD WRAPPER (Clickable) */}
                  <Box 
                    onClick={() => handleOpen(session)}
                    sx={{
                     bgcolor: '#13091B', 
                     borderRadius: 4,
                     overflow: 'hidden',
                     border: '1px solid rgba(255,255,255,0.1)',
                     height: '100%',
                     display: 'flex',
                     flexDirection: 'column',
                     cursor: 'pointer',
                     transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                     '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 0 30px rgba(255, 153, 0, 0.25)', 
                        borderColor: 'primary.main',
                        '& .session-title': { color: '#FF9900' },
                        '& .image-overlay': { opacity: 0 } 
                     }
                  }}>
                     
                     {/* IMAGE SECTION */}
                     <Box sx={{ position: 'relative', height: 240, width: '100%' }}>
                        
                        <Chip
                          label={session.type}
                          size="small"
                          sx={{
                            position: 'absolute', top: 16, right: 16, fontWeight: 'bold',
                            bgcolor: session.type === 'Online' ? '#FF9900' : '#624FA2', 
                            color: session.type === 'Online' ? 'black' : 'white',
                            zIndex: 3, 
                            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                          }}
                        />

                        <Image
                           src={session.image}
                           alt={session.title}
                           fill
                           style={{ objectFit: 'cover' }}
                        />
                        
                        <Box 
                           className="image-overlay"
                           sx={{ 
                              position: 'absolute', inset: 0, 
                              bgcolor: 'rgba(75, 54, 124, 0.5)', 
                              zIndex: 1, 
                              transition: 'opacity 0.4s ease-in-out'
                           }} 
                        />
                        
                        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #13091B 0%, transparent 60%)', zIndex: 2 }} />
                     </Box>

                     {/* TEXT CONTENT */}
                     <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 1 }}>
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'grey.500' }}>
                           <Icon icon="ph:calendar-blank-bold" width={18} />
                           <Typography variant="caption" fontWeight="bold" fontSize={13}>{session.date}</Typography>
                        </Stack>

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
                           <Typography variant="caption" fontWeight="bold" fontSize={13}>{session.speaker}</Typography>
                        </Stack>
                     </Box>

                  </Box>
               </Box>
            ))}
          </Box>

          {/* FOOTER BUTTON */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button
              href='/sessions'
              variant="contained"
              sx={{
                bgcolor: '#4B367C', 
                color: 'white',
                px: 5, 
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                '&:hover': { 
                   bgcolor: '#624FA2',
                   transform: 'scale(1.05)',
                   boxShadow: '0 0 20px rgba(98, 79, 162, 0.5)' 
                }
              }}
              endIcon={<Icon icon="ph:arrow-right-bold" />}
            >
              View All Sessions
            </Button>
          </Box>

          {/* ================= EXACT SAME MODAL ================= */}
          <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: { timeout: 500, sx: { backdropFilter: 'blur(12px)', bgcolor: 'rgba(0,0,0,0.85)' } },
            }}
          >
            <Fade in={open}>
              <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '90%', md: '500px' },
                bgcolor: '#0f0518',
                border: '1px solid rgba(138, 99, 210, 0.3)', 
                borderRadius: 4,
                boxShadow: '0 0 80px rgba(138, 99, 210, 0.2)',
                outline: 'none',
                overflow: 'hidden'
              }}>
                {selectedSession && (
                  <>
                    <Box sx={{ position: 'relative', height: 200, width: '100%' }}>
                      <Image src={selectedSession.image} alt={selectedSession.title} fill style={{ objectFit: 'cover' }} />
                      <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0f0518 0%, transparent 100%)' }} />
                      <IconButton 
                        onClick={handleClose}
                        sx={{ position: 'absolute', top: 10, right: 10, color: 'white', bgcolor: 'rgba(0,0,0,0.6)', '&:hover': { bgcolor: '#FF9900', color: 'black' } }}
                      >
                        <Icon icon="ph:x-bold" />
                      </IconButton>
                    </Box>

                    <Box sx={{ px: 4, pb: 4 }}>
                      <Stack direction="row" spacing={1.5} mb={2}>
                        <Chip label={selectedSession.type} size="small" sx={{ bgcolor: selectedSession.type === 'Online' ? '#FF9900' : '#8A63D2', color: 'white', fontWeight: 'bold' }} />
                        <Chip icon={<Icon icon="ph:calendar-blank-bold" />} label={selectedSession.date} size="small" variant="outlined" sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)', '& .MuiChip-icon': { color: '#FF9900' } }} />
                      </Stack>

                      <Typography variant="h4" fontWeight="bold" color="white" sx={{ mb: 3, lineHeight: 1.2, fontSize: '1.75rem' }}>
                        {selectedSession.title}
                      </Typography>

                      <Stack spacing={2} sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Icon icon="ph:microphone-stage-bold" width={24} color="#FF9900" />
                            <Box>
                                <Typography variant="caption" color="grey.500" sx={{ textTransform: 'uppercase' }}>Speaker</Typography>
                                <Typography variant="body1" color="white" fontWeight="bold" lineHeight={1}>{selectedSession.speaker}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Icon icon="ph:map-pin-bold" width={24} color="#8A63D2" />
                            <Box>
                                <Typography variant="caption" color="grey.500" sx={{ textTransform: 'uppercase' }}>Location</Typography>
                                <Typography variant="body1" color="white" fontWeight="bold" lineHeight={1}>{selectedSession.location}</Typography>
                            </Box>
                        </Box>
                      </Stack>

                      <Typography variant="body2" color="grey.400" sx={{ lineHeight: 1.6, mb: 4 }}>
                        {selectedSession.longDesc}
                      </Typography>

                      {(() => {
                        const action = getSessionAction(selectedSession);
                        if (!action) return null; 

                        return (
                          <Button 
                            variant="contained" 
                            fullWidth 
                            href={selectedSession.link}
                            target="_blank"
                            size="large"
                            startIcon={<Icon icon={action.icon} />}
                            sx={{ 
                              bgcolor: action.color,
                              color: action.text,
                              border: action.border !== 'none' ? `1px solid ${action.border}` : 'none',
                              fontWeight: 'bold', 
                              py: 1.5,
                              '&:hover': { 
                                  bgcolor: action.color === '#FF9900' ? '#FFB84D' : '#FF9900',
                                  color: 'black',
                                  borderColor: '#FF9900'
                              }
                            }}
                          >
                            {action.label}
                          </Button>
                        );
                      })()}
                    </Box>
                  </>
                )}
              </Box>
            </Fade>
          </Modal>

       </Container>
    </Box>
  );
}