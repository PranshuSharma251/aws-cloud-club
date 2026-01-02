'use client';

import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, MenuItem, Stack, Alert, Snackbar, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

// =========================================================
// 🚦 MASTER SWITCH: RECRUITMENT STATUS
// =========================================================
// Set this to TRUE to show the form.
// Set this to FALSE to show the "Closed" message.
const RECRUITMENT_OPEN = false; 

// ✅ PASTE YOUR GOOGLE SCRIPT WEB APP URL HERE
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyi1qst5zY3GGafs5fXD2O4hWchaUcim_V-nbzR0fZ_UEHCwjWqzDGg8RllivuZVkwo/exec";

export default function JoinPage() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    "Student ID": '', 
    Branch: '',
    Year: '',
    LinkedIn: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = new FormData();
      Object.keys(formData).forEach(key => {
        form.append(key, formData[key as keyof typeof formData]);
      });

      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: form,
        mode: 'no-cors'
      });

      setSuccess(true);
      setFormData({ Name: '', Email: '', "Student ID": '', Branch: '', Year: '', LinkedIn: '' });
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ bgcolor: '#0f0518', minHeight: '100vh', position: 'relative', overflow: 'hidden', py: 10 }}>
      
      {/* Background Blobs */}
      <Box sx={{ position: 'absolute', top: '-10%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255, 153, 0, 0.08) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(80px)', zIndex: 0 }} />
      <Box sx={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(138, 99, 210, 0.1) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(80px)', zIndex: 0 }} />

      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* =========================================================
            CONDITIONAL RENDERING START
        ========================================================= */}
        {RECRUITMENT_OPEN ? (
          
          /* ✅ CASE 1: RECRUITMENT OPEN (SHOW FORM) */
          <>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h2" fontWeight="bold" sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(90deg, #fff 0%, #FF9900 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1
              }}>
                Join the Revolution
              </Typography>
              <Typography variant="body1" sx={{ color: 'grey.400' }}>
                Be part of the fastest growing cloud community at DTU.
              </Typography>
            </Box>

            <Box 
              component="form" 
              onSubmit={handleSubmit}
              sx={{ 
                bgcolor: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 4,
                p: { xs: 3, md: 5 },
                boxShadow: '0 0 40px rgba(0,0,0,0.5)'
              }}
            >
              <Stack spacing={3}>
                <TextField 
                  label="Full Name" 
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="filled"
                  sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1, '& .MuiInputBase-root': { color: 'white' }, '& .MuiInputLabel-root': { color: 'grey.500' } }}
                />
                <TextField 
                  label="College Email" 
                  name="Email"
                  type="email"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="filled"
                  sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1, '& .MuiInputBase-root': { color: 'white' }, '& .MuiInputLabel-root': { color: 'grey.500' } }}
                />
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField 
                    label="Student ID" 
                    name="Student ID"
                    value={formData["Student ID"]}
                    onChange={handleChange}
                    required
                    fullWidth
                    variant="filled"
                    sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1, '& .MuiInputBase-root': { color: 'white' }, '& .MuiInputLabel-root': { color: 'grey.500' } }}
                  />
                   <TextField 
                    label="Year" 
                    name="Year"
                    select
                    value={formData.Year}
                    onChange={handleChange}
                    required
                    fullWidth
                    variant="filled"
                    sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1, '& .MuiInputBase-root': { color: 'white' }, '& .MuiInputLabel-root': { color: 'grey.500' }, '& .MuiSvgIcon-root': { color: 'grey.500' } }}
                  >
                    {['1st Year', '2nd Year', '3rd Year', '4th Year'].map((option) => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                  </TextField>
                </Stack>
                <TextField 
                  label="Branch" 
                  name="Branch"
                  value={formData.Branch}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="filled"
                  sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1, '& .MuiInputBase-root': { color: 'white' }, '& .MuiInputLabel-root': { color: 'grey.500' } }}
                />
                <TextField 
                  label="LinkedIn URL (Optional)" 
                  name="LinkedIn"
                  value={formData.LinkedIn}
                  onChange={handleChange}
                  fullWidth
                  variant="filled"
                  sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1, '& .MuiInputBase-root': { color: 'white' }, '& .MuiInputLabel-root': { color: 'grey.500' } }}
                />
                <Button 
                  type="submit"
                  variant="contained" 
                  size="large"
                  disabled={loading}
                  sx={{ 
                    bgcolor: '#FF9900', 
                    color: 'black', 
                    fontWeight: 'bold', 
                    py: 1.8,
                    fontSize: '1.1rem',
                    '&:hover': { bgcolor: '#FFB84D', transform: 'scale(1.02)' },
                    transition: 'all 0.2s'
                  }}
                >
                  {loading ? "Submitting..." : "Send Application"}
                </Button>
              </Stack>
            </Box>
          </>

        ) : (

          /* ✅ CASE 2: RECRUITMENT CLOSED */
          <Box sx={{ 
            textAlign: 'center', 
            py: 8,
            px: 4,
            bgcolor: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
          }}>
            <Icon icon="ph:hourglass-medium-bold" width={80} color="#FF9900" style={{ marginBottom: '1rem', opacity: 0.8 }} />
            
            <Typography variant="h3" fontWeight="bold" sx={{ color: 'white', mb: 1 }}>
              Doors are Closed
            </Typography>
            
            <Typography variant="h6" sx={{ color: 'grey.400', maxWidth: 400, lineHeight: 1.6, mb: 3 }}>
              Our recruitment drive for this semester has officially ended. We will be back soon!
            </Typography>

            <Typography variant="body2" sx={{ color: 'grey.600', mb: 2, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 'bold' }}>
              Don't miss the next one
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button 
                variant="outlined" 
                href="https://www.linkedin.com/company/aws-cloud-club-dtu/" 
                target="_blank"
                startIcon={<LinkedInIcon />}
                sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)', '&:hover': { borderColor: '#FF9900', color: '#FF9900' } }}
              >
                LinkedIn
              </Button>
              <Button 
                variant="outlined" 
                href="https://www.instagram.com/awscloudclubdtu" 
                target="_blank"
                startIcon={<InstagramIcon />}
                sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)', '&:hover': { borderColor: '#E1306C', color: '#E1306C' } }}
              >
                Instagram
              </Button>
            </Stack>
          </Box>
        )}

      </Container>

      {/* Snackbars */}
      <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
        <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%', bgcolor: '#4CAF50', color: 'white' }}>
          Welcome aboard! Your application has been submitted.
        </Alert>
      </Snackbar>

      <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
        <Alert onClose={() => setError(false)} severity="error" sx={{ width: '100%', bgcolor: '#f44336', color: 'white' }}>
          Something went wrong. Please try again.
        </Alert>
      </Snackbar>

    </Box>
  );
}