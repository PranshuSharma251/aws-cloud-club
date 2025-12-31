'use client';

import { Box, Container, Grid, Typography, Link, Stack, IconButton } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#0f0518', 
        color: 'white', 
        pt: 10, 
        pb: 4, 
        mt: 'auto',
        position: 'relative',
        overflow: 'hidden' 
      }}
    >
      
      {/* ================= BACKGROUND BLOBS ================= */}
      {/* 1. Purple Blob (Top Right) */}
      <Box sx={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(138, 99, 210, 0.15) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />
      
      {/* 2. Orange Blob (Bottom Left) */}
      <Box sx={{
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255, 153, 0, 0.1) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />


      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 10 }, position: 'relative', zIndex: 1 }}>
        
        {/* Main Grid Content */}
        <Grid container spacing={8} justifyContent="space-between">
          
          {/* Column 1: Logo & Socials */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CloudIcon sx={{ color: '#FF9900', fontSize: 40, mr: 1.5 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold" lineHeight={1}>
                  AWS
                </Typography>
                <Typography variant="h6" fontWeight="bold" lineHeight={1} sx={{ color: '#FF9900' }}>
                  Cloud Club <span style={{ color: 'white' }}>DTU</span>
                </Typography>
              </Box>
            </Box>
            
            <Typography variant="body2" sx={{ color: 'grey.400', mb: 4, maxWidth: 300, lineHeight: 1.6 }}>
              Building cloud-native minds at DTU through hands-on learning, workshops, and community collaboration.
            </Typography>

            {/* Social Icons - NO JUMPING, JUST COLOR FILL */}
            <Stack direction="row" spacing={1}>
              {[<LinkedInIcon key="li" />, <InstagramIcon key="ig" />, <TwitterIcon key="tw" />].map((icon, index) => (
                <IconButton 
                  key={index}
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.05)', 
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      bgcolor: '#FF9900', // Fills with Orange
                      color: 'black',     // Icon turns black for contrast
                      borderColor: '#FF9900',
                      boxShadow: '0 0 15px rgba(255, 153, 0, 0.5)' // Subtle glow
                    }
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              {['Home', 'About', 'Team', 'Sessions'].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  underline="none" 
                  color="grey.400" 
                  sx={{ 
                    transition: 'all 0.2s ease',
                    // NO MOVEMENT -> JUST GLOW & COLOR
                    '&:hover': { 
                      color: '#FF9900', 
                      textShadow: '0 0 10px rgba(255, 153, 0, 0.5)' // Creative neon glow
                    },
                    display: 'inline-block'
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Resources */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
              Resources
            </Typography>
            <Stack spacing={1.5}>
              {['Workshops', 'Study Materials', 'Contact Support'].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  underline="none" 
                  color="grey.400" 
                  sx={{ 
                    transition: 'all 0.2s ease',
                    '&:hover': { 
                      color: '#FF9900', 
                      textShadow: '0 0 10px rgba(255, 153, 0, 0.5)' 
                    },
                    display: 'inline-block'
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 4: Get In Touch */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
              Get In Touch
            </Typography>
            <Stack spacing={2.5}>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <EmailIcon sx={{ color: '#FF9900', fontSize: 20 }} />
                <Typography 
                  variant="body2" 
                  color="grey.400" 
                  sx={{ 
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'white' }
                  }}
                >
                  aws@dtu.ac.in
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ color: '#FF9900', fontSize: 20, mt: 0.5 }} />
                <Typography variant="body2" color="grey.400" lineHeight={1.6}>
                  Delhi Technological University<br />
                  Shahbad Daulatpur, Bawana Road<br />
                  New Delhi, India
                </Typography>
              </Box>
            </Stack>
          </Grid>

        </Grid>

        {/* Divider & Copyright */}
        <Box sx={{ 
          mt: 8, 
          pt: 3, 
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: 2 
        }}>
          <Typography variant="body2" color="grey.600">
            © 2025 AWS Cloud Club DTU. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="caption" color="grey.600">Powered by</Typography>
            <Typography variant="body2" fontWeight="bold" sx={{ color: '#FF9900', letterSpacing: 0.5 }}>
              AWS
            </Typography> 
          </Box>
        </Box>

      </Container>
    </Box>
  );
}