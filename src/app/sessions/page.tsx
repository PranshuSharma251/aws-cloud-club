'use client';

import { useState, useMemo } from 'react';
import { Box, Container, Typography, Chip, Stack, Modal, IconButton, Button, Fade, Backdrop, MenuItem, Select, FormControl } from '@mui/material';
import { Icon } from '@iconify/react';
import Image from 'next/image';

// ==========================================
// 1. DATA
// ==========================================
const sessionsData = [
  {
    id: 1,
    image: "/images/private-cloud.jpg", 
    type: "Offline",
    date: "November 9, 2024",
    title: "Cloud Launch: Starting Your Cloud Career Journey",
    shortDesc: "An introductory session covering cloud fundamentals, career paths, and getting started with AWS",
    speaker: "Ramneek Karla - AWS",
    longDesc: "This session provides a comprehensive roadmap for students starting their cloud journey. We cover AWS certifications, fundamental services like EC2 and S3, and how to land your first internship.",
    location: "AB3-218",
    link: "https://youtube.com"
  },
  {
    id: 2,
    image: "/images/clouds.webp", 
    type: "Online",
    date: "April 12, 2025",
    title: "SageMind: Generative AI with AWS",
    shortDesc: "Deep dive into AWS SageMaker and building generative AI applications using Amazon Bedrock",
    speaker: "Dharam Thacker - Executive Director , JP Morgan Chase",
    longDesc: "A hands-on workshop where we built a text-generation bot using Amazon Bedrock. Students learned about prompt engineering, model selection, and deploying AI apps on AWS Lambda.",
    location: "Google Meet",
    link: "https://youtube.com"
  },
  {
    id: 3,
    image: "/images/codes.webp", 
    type: "Offline",
    date: "September 10, 2025",
    title: "Dive into AWS Cloud Club",
    shortDesc: "An interactive orientation led by the Club Captain, introducing our community mission and the fundamentals of AWS cloud computing.",
    speaker: "Suhansh Varsaheny - Cloud Captain",
    longDesc: "Kickstart your cloud journey with this exclusive orientation led by our Club Captain. Discover the mission of AWS Cloud Club DTU, explore our upcoming roadmap, and grasp the fundamentals of cloud computing. This session is your gateway to hands-on learning, community networking, and future innovation.",
    location: "AB3-114",
    link: "https://youtube.com"
  }
];

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
export default function SessionsPage() {
  const [open, setOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState<any>(null);

  // Filter States
  const [filterType, setFilterType] = useState('All');
  const [filterTime, setFilterTime] = useState('All');

  const handleOpen = (session: any) => {
    setSelectedSession(session);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSelectedSession(null), 300);
  };

  // Filter Logic
  const filteredSessions = useMemo(() => {
    const now = new Date();
    return sessionsData.filter(session => {
      const sessionDate = new Date(session.date);
      const typeMatch = filterType === 'All' || session.type === filterType;
      let timeMatch = true;
      if (filterTime === 'Upcoming') timeMatch = sessionDate >= now;
      else if (filterTime === 'Past') timeMatch = sessionDate < now;
      return typeMatch && timeMatch;
    });
  }, [filterType, filterTime]);

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

  // Custom Icon for Dropdown (Replaces the boring triangle)
  const CustomSelectIcon = (props: any) => (
    <Box {...props} sx={{ ...props.sx, pointerEvents: 'none', display: 'flex', alignItems: 'center', color: '#FF9900' }}>
      <Icon icon="ph:caret-down-bold" width={16} />
    </Box>
  );

  return (
    <Box sx={{ bgcolor: '#0f0518', minHeight: '100vh', position: 'relative', overflow: 'hidden', pb: 20 }}>
      
      {/* Background Blobs */}
      <Box sx={{ position: 'absolute', top: '-10%', right: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(138, 99, 210, 0.1) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(100px)', zIndex: 0 }} />
      <Box sx={{ position: 'absolute', bottom: '10%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255, 153, 0, 0.08) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(100px)', zIndex: 0 }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, md: 6 }, pt: 10 }}>
        
        {/* HEADER */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h1" fontWeight={800} sx={{ 
            fontSize: { xs: '3rem', md: '5rem' }, 
            background: 'linear-gradient(90deg, #fff 0%, #8A63D2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2
          }}>
            Sessions & Workshops
          </Typography>
          <Typography variant="h5" sx={{ color: 'grey.400', maxWidth: 700, mx: 'auto' }}>
            Explore our archive of hands-on labs, speaker sessions, and hackathons.
          </Typography>
        </Box>

        {/* ================= UPDATED SLEEK FILTER BAR ================= */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
          <Box sx={{ 
            bgcolor: 'rgba(255, 255, 255, 0.02)', // Ultra subtle
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 50,
            p: '8px 24px',
            display: 'flex',
            gap: 4,
            alignItems: 'center',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}>
            
            {/* Filter Group 1: Type */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Icon icon="ph:faders-bold" color="#666" width={18} />
              <FormControl variant="standard" sx={{ minWidth: 100 }}>
                <Select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  disableUnderline
                  IconComponent={CustomSelectIcon}
                  sx={{ 
                    color: 'white', 
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    '&:hover': { color: '#FF9900' }, // Glows orange on hover
                    '& .MuiSelect-select': { py: 0.5, pr: '24px !important' } // Fix padding for custom icon
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: '#13091B',
                        border: '1px solid rgba(255,255,255,0.1)',
                        mt: 1,
                        '& .MuiMenuItem-root': {
                          color: 'grey.400',
                          fontSize: '0.9rem',
                          '&:hover': { bgcolor: 'rgba(255, 153, 0, 0.1)', color: 'white' },
                          '&.Mui-selected': { bgcolor: 'rgba(255, 153, 0, 0.2)', color: '#FF9900' }
                        }
                      }
                    }
                  }}
                >
                  <MenuItem value="All">All Types</MenuItem>
                  <MenuItem value="Online">Online</MenuItem>
                  <MenuItem value="Offline">Offline</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Divider Line */}
            <Box sx={{ width: '1px', height: '20px', bgcolor: 'rgba(255,255,255,0.1)' }} />

            {/* Filter Group 2: Time */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Icon icon="ph:clock-bold" color="#666" width={18} />
              <FormControl variant="standard" sx={{ minWidth: 100 }}>
                <Select
                  value={filterTime}
                  onChange={(e) => setFilterTime(e.target.value)}
                  disableUnderline
                  IconComponent={CustomSelectIcon}
                  sx={{ 
                    color: 'white', 
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    '&:hover': { color: '#FF9900' },
                    '& .MuiSelect-select': { py: 0.5, pr: '24px !important' }
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: '#13091B',
                        border: '1px solid rgba(255,255,255,0.1)',
                        mt: 1,
                        '& .MuiMenuItem-root': {
                          color: 'grey.400',
                          fontSize: '0.9rem',
                          '&:hover': { bgcolor: 'rgba(255, 153, 0, 0.1)', color: 'white' },
                          '&.Mui-selected': { bgcolor: 'rgba(255, 153, 0, 0.2)', color: '#FF9900' }
                        }
                      }
                    }
                  }}
                >
                  <MenuItem value="All">Any Time</MenuItem>
                  <MenuItem value="Upcoming">Upcoming</MenuItem>
                  <MenuItem value="Past">Past</MenuItem>
                </Select>
              </FormControl>
            </Box>

          </Box>
        </Box>

        {/* SESSIONS GRID */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
          {filteredSessions.length > 0 ? (
            filteredSessions.map((session) => (
               <Box key={session.id} sx={{ flex: '1 1 350px', maxWidth: '450px' }}>
                  <SessionCard session={session} onClick={() => handleOpen(session)} />
               </Box>
            ))
          ) : (
            <Typography variant="h6" color="grey.600">No sessions found matching your filters.</Typography>
          )}
        </Box>

      </Container>

      {/* ================= DETAIL MODAL ================= */}
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
                {/* Modal Image */}
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

                {/* Content */}
                <Box sx={{ px: 4, pb: 4 }}>
                  
                  {/* Tags */}
                  <Stack direction="row" spacing={1.5} mb={2}>
                    <Chip label={selectedSession.type} size="small" sx={{ bgcolor: selectedSession.type === 'Online' ? '#FF9900' : '#8A63D2', color: 'white', fontWeight: 'bold' }} />
                    <Chip 
                        icon={<Icon icon="ph:calendar-blank-bold" />} 
                        label={selectedSession.date} 
                        size="small"
                        variant="outlined" 
                        sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)', '& .MuiChip-icon': { color: '#FF9900' } }} 
                    />
                  </Stack>

                  <Typography variant="h4" fontWeight="bold" color="white" sx={{ mb: 3, lineHeight: 1.2, fontSize: '1.75rem' }}>
                    {selectedSession.title}
                  </Typography>

                  {/* Info Rows */}
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

                  {/* Button Logic */}
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

    </Box>
  );
}

// 3. CARD COMPONENT
const SessionCard = ({ session, onClick }: { session: any, onClick: () => void }) => (
  <Box 
    onClick={onClick}
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
        borderColor: '#FF9900',
        '& .session-title': { color: '#FF9900' },
        '& .image-overlay': { opacity: 0 } 
      }
    }}
  >
    <Box sx={{ position: 'relative', height: 240, width: '100%' }}>
      <Chip
        label={session.type}
        size="small"
        sx={{
          position: 'absolute', top: 16, right: 16, fontWeight: 'bold', zIndex: 3,
          bgcolor: session.type === 'Online' ? '#FF9900' : '#8A63D2', 
          color: session.type === 'Online' ? 'black' : 'white',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
        }}
      />
      <Image src={session.image} alt={session.title} fill style={{ objectFit: 'cover' }} />
      <Box className="image-overlay" sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(75, 54, 124, 0.5)', zIndex: 1, transition: 'opacity 0.4s ease' }} />
      <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #13091B 0%, transparent 60%)', zIndex: 2 }} />
    </Box>

    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 1 }}>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'grey.500' }}>
         <Icon icon="ph:calendar-blank-bold" width={18} />
         <Typography variant="caption" fontWeight="bold" fontSize={13}>{session.date}</Typography>
      </Stack>

      <Typography variant="h6" className="session-title" fontWeight="bold" sx={{ color: 'white', lineHeight: 1.3, transition: 'color 0.3s ease' }}>
         {session.title}
      </Typography>

      <Typography variant="body2" sx={{ color: 'grey.400', flexGrow: 1, lineHeight: 1.6 }}>
         {session.shortDesc}
      </Typography>

      <Stack direction="row" spacing={1} alignItems="center" sx={{ color: '#FF9900', mt: 1 }}>
         <Icon icon="ph:user-circle-bold" width={20} />
         <Typography variant="caption" fontWeight="bold" fontSize={13}>{session.speaker}</Typography>
      </Stack>
    </Box>
  </Box>
);