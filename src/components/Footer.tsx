'use client';

import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  IconButton,
} from "@mui/material";
import { Icon } from '@iconify/react';
import CloudIcon from "@mui/icons-material/Cloud";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// ✅ Social Media Links
const socialLinks = [
  {
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/company/aws-cloud-club-dtu/",
  },
  {
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/awscloudclubdtu",
  },
];

// ✅ Navigation Links
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  { label: "Sessions", href: "/sessions" },
  { label: "Join Club", href: "/join" },
];

// ✅ Resource Links
const resourceLinks = [
  { label: "Workshops", href: "/sessions" },
  { label: "Study Materials", href: "/resources" },
  { label: "Contact Support", href: "mailto:aws@dtu.ac.in" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0f0518",
        color: "white",
        pt: { xs: 6, md: 10 },
        pb: 4,
        mt: "auto",
        position: "relative",
        overflow: "hidden",
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}
    >
      {/* Background Blobs */}
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(138, 99, 210, 0.1) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{ px: { xs: 3, md: 6 }, position: "relative", zIndex: 1 }}
      >
        {/* ✅ MAIN CONTENT WRAPPER */}
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          // ✅ Mobile: Tighter vertical gap (40px) | Desktop: No vertical gap
          rowGap: { xs: 5, md: 0 }, 
          justifyContent: 'space-between',
        }}>
          
          {/* =============================================
              1. BRANDING (Left)
              Mobile: 100% width
              Desktop: 30% width (Equal weight)
          ============================================= */}
          <Box sx={{ 
            width: { xs: '100%', md: '30%' }, 
            textAlign: { xs: 'center', md: 'left' } 
          }}>
            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: { xs: 'center', md: 'flex-start' },
              mb: 2 
            }}>
              <CloudIcon sx={{ color: "#FF9900", fontSize: 36, mr: 1.5 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="h6" fontWeight="bold" lineHeight={1} fontSize="1.1rem">
                  AWS
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  lineHeight={1}
                  fontSize="1.1rem"
                  sx={{ color: "#FF9900" }}
                >
                  Cloud Club <span style={{ color: "white" }}>DTU</span>
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{ 
                color: "grey.500", 
                mb: 3, 
                maxWidth: { xs: '100%', md: 300 }, 
                fontSize: '0.9rem',
                lineHeight: 1.6 
              }}
            >
              Building cloud-native minds at DTU through hands-on learning and community collaboration.
            </Typography>

            {/* ✅ ICONS SPACED OUT (spacing={2}) */}
            <Stack 
              direction="row" 
              spacing={2} 
              sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
            >
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.03)",
                    color: "grey.400",
                    border: "1px solid rgba(255,255,255,0.1)",
                    '&:hover': {
                      bgcolor: "#FF9900",
                      color: "black",
                      borderColor: "#FF9900",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Box>

          {/* =============================================
              2. QUICK LINKS
              Mobile: 50% width (Side by side with Resources)
              Desktop: 15% width (Even column)
          ============================================= */}
          <Box sx={{ 
            width: { xs: '50%', md: '15%' },
            pl: { xs: 2, md: 0 } // Slight padding on mobile for balance
          }}>
            <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 2.5, color: 'white', textTransform: 'uppercase', letterSpacing: 1 }}>
              Explore
            </Typography>
            <Stack spacing={1.2}>
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  underline="none"
                  color="grey.500"
                  sx={{
                    fontSize: '0.9rem',
                    transition: "color 0.2s",
                    "&:hover": { color: "#FF9900" },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* =============================================
              3. RESOURCES
              Mobile: 50% width (Side by side with Links)
              Desktop: 15% width (Even column)
          ============================================= */}
          <Box sx={{ 
            width: { xs: '50%', md: '15%' } 
          }}>
            <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 2.5, color: 'white', textTransform: 'uppercase', letterSpacing: 1 }}>
              Resources
            </Typography>
            <Stack spacing={1.2}>
              {resourceLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  underline="none"
                  color="grey.500"
                  sx={{
                    fontSize: '0.9rem',
                    transition: "color 0.2s",
                    "&:hover": { color: "#FF9900" },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* =============================================
              4. CONTACT (Right)
              Mobile: 100% width
              Desktop: 25% width (Balanced End)
          ============================================= */}
          <Box sx={{ 
            width: { xs: '100%', md: '25%' }, 
            textAlign: { xs: 'center', md: 'left' } 
          }}>
            <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 2.5, color: 'white', textTransform: 'uppercase', letterSpacing: 1 }}>
              Community
            </Typography>
            <Stack 
              spacing={2} 
              alignItems={{ xs: 'center', md: 'flex-start' }}
            >
              <Link 
                href="https://www.meetup.com/aws-cloud-club-at-delhi-technological-university/"
                target="_blank"
                underline="none"
                sx={{ 
                  display: "flex", 
                  gap: 1.5, 
                  alignItems: "center",
                  color: 'grey.400',
                  transition: 'all 0.2s',
                  '&:hover': { color: '#FF0061' } 
                }}
              >
                <Icon icon="logos:meetup" width={24} /> 
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Join our Meetup Group
                </Typography>
              </Link>

              <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start", textAlign: { xs: 'center', md: 'left' } }}>
                <LocationOnIcon sx={{ color: "#FF9900", fontSize: 20, mt: 0.3 }} />
                <Typography variant="body2" color="grey.500" lineHeight={1.5} fontSize="0.9rem">
                  Delhi Technological University
                  <br />
                  New Delhi, India
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>

        {/* ✅ COPYRIGHT BAR */}
        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            textAlign: "center"
          }}
        >
          <Typography variant="caption" color="grey.600">
            © 2026 AWS Cloud Club DTU. All rights reserved.
          </Typography>

          <Typography variant="caption" color="grey.600">
            Created by{" "}
            <Link
              href="https://www.linkedin.com/in/pranshu-sharma-a5b71a2a0/"
              target="_blank"
              underline="none"
              sx={{
                color: "#FF9900",
                fontWeight: "bold",
                "&:hover": { color: "white" },
              }}
            >
              Pranshu Sharma
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}