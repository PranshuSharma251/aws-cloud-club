'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import Image from 'next/image';

// Data Array
const learnItems = [
  {
    icon: "ph:brain-bold",
    title: "AI & Machine Learning",
    desc: "Explore AWS SageMaker, generative AI, and ML model deployment at scale."
  },
  {
    icon: "ph:medal-bold",
    title: "AWS Certifications",
    desc: "Preparation guidance for AWS Cloud Practitioner, Solutions Architect, and Developer certifications."
  },
  {
    icon: "ph:cloud-bold",
    title: "Core AWS Services",
    desc: "EC2, S3, RDS, Lambda, and more - learn to build scalable cloud infrastructure from scratch."
  },
  {
    icon: "ph:infinity-bold",
    title: "DevOps & CI/CD",
    desc: "Master deployment pipelines, containerization with Docker, and infrastructure as code."
  },
];

export default function WhatYouWillLearn() {
  return (
    <Box sx={{ 
      py: 12, 
      bgcolor: '#0f0518', 
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      
      {/* BACKGROUND BLOBS */}
      <Box sx={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255, 153, 0, 0.2) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <Box sx={{
        position: 'absolute',
        bottom: '10%',
        right: '-5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(80, 60, 180, 0.15) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(90px)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, md: 6 } }}>
        
        {/* HEADER */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" fontWeight="bold" sx={{ mb: 1.5 }}>
            What You'll Learn
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Master the skills that top tech companies are looking for
          </Typography>
        </Box>

        {/* CONTENT FLEX CONTAINER */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 8
        }}>
          
          {/* LEFT SIDE: Image */}
          <Box sx={{ flex: 1, width: '100%' }}>
            <Box sx={{ 
              position: 'relative', 
              borderRadius: 4, 
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 20px 50px -10px rgba(0,0,0,0.5)',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.02)' }
            }}>
              <Image 
                src="/images/cloud.avif" 
                alt="AWS Learning Dashboard" 
                width={800} 
                height={500}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <Box sx={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to top, rgba(15, 5, 24, 0.6), transparent)' 
              }} />
            </Box>
          </Box>

          {/* RIGHT SIDE: List & Button */}
          <Box sx={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
              
              {/* List Items */}
              {learnItems.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', gap: 3 }}>
                  <Box sx={{ 
                    minWidth: 48, 
                    height: 48, 
                    bgcolor: 'primary.main', 
                    borderRadius: 1.5,
                    boxShadow: '0 0 15px rgba(255, 153, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#232F3E'
                  }}>
                    <Icon icon={item.icon} width={28} />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 0.5, fontSize: '1.1rem' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}

              {/* ✅ CENTERED BUTTON */}
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Button 
                  href='/resources'
                  variant="contained" 
                  size="large" 
                  endIcon={<Icon icon="ph:arrow-right-bold" />}
                  sx={{ 
                    bgcolor: '#4B367C', 
                    color: 'white',
                    py: 1.5, 
                    px: 6, 
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease-in-out', 
                    '&:hover': {
                      bgcolor: '#624FA2',      
                      transform: 'scale(1.05)', 
                      boxShadow: '0 0 20px rgba(98, 79, 162, 0.5)' 
                    }
                  }}
                >
                  View AWS Resources
                </Button>
              </Box>

          </Box>
        </Box>
      </Container>
    </Box>
  );
}