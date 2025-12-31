'use client';

import { AppBar, Toolbar, Button, Box, Container, Typography } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud'; 

export default function Navbar() {
  const navLinks = ['About', 'Team', 'Sessions', 'Resources'];

  return (
    <AppBar 
      position="static" 
      color="transparent" 
      elevation={0} 
      sx={{ 
        py: 1, 
        position: 'relative',
        bgcolor: '#0f0518' // Match page background
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 8 } }}>
        <Toolbar disableGutters>
          
          {/* ================= LOGO AREA ================= */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <CloudIcon sx={{ color: '#FF9900', fontSize: 40, mr: 1.5 }} />
            <Box>
              <Typography variant="h6" fontWeight="bold" lineHeight={1} sx={{ color: 'white', letterSpacing: '0.5px' }}>
                AWS
              </Typography>
              <Typography variant="h6" fontWeight="bold" lineHeight={1} sx={{ color: '#FF9900' }}>
                Cloud Club <span style={{ color: 'white' }}>DTU</span>
              </Typography>
            </Box>
          </Box>

          {/* ================= NAVIGATION LINKS ================= */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5, alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Box 
                key={link} 
                component="a" 
                href="#" 
                sx={{ 
                  position: 'relative',
                  color: 'grey.300', 
                  textDecoration: 'none', 
                  fontWeight: 500,
                  fontSize: '1rem',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#FF9900' },
                  
                  // ✅ "TIMED" UNDERLINE ANIMATION
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    bottom: '-4px',
                    left: '0',
                    backgroundColor: '#FF9900',
                    transition: 'width 0.3s ease-in-out', // The "timed" part
                  },
                  '&:hover::after': {
                    width: '100%', // Expands to full width on hover
                  }
                }}
              >
                {link}
              </Box>
            ))}

            {/* ✅ JOIN BUTTON (Matching other button animations) */}
            <Button 
              variant="contained" 
              sx={{
                bgcolor: '#FF9900',
                color: '#000',
                fontWeight: 'bold',
                borderRadius: 2,
                px: 3,
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Bouncy
                '&:hover': {
                  bgcolor: '#FFB84D',
                  transform: 'scale(1.05)',
                  boxShadow: '0 0 20px rgba(255, 153, 0, 0.5)'
                }
              }}
            >
              Join the Club
            </Button>
          </Box>
        </Toolbar>
      </Container>

      {/* ================= CREATIVE BOTTOM LINE ================= */}
      {/* This isn't a border. It's a glowing gradient line. */}
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '1px',
        // Fades from transparent -> Purple -> transparent
        background: 'linear-gradient(90deg, transparent 0%, rgba(138, 99, 210, 0.8) 50%, transparent 100%)',
        boxShadow: '0 0 10px rgba(138, 99, 210, 0.5)' // Purple glow
      }} />

    </AppBar>
  );
}