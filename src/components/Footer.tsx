'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
} from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
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

// ✅ Navigation Links (Internal Pages)
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
        pt: 10,
        pb: 4,
        mt: "auto",
        position: "relative",
        overflow: "hidden",
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
          background:
            "radial-gradient(circle, rgba(138, 99, 210, 0.15) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(255, 153, 0, 0.1) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{ px: { xs: 2, md: 6 }, position: "relative", zIndex: 1 }}
      >
        {/* Main Grid Content */}
        <Grid container spacing={8} justifyContent="space-between">
          {/* Column 1: Logo & Socials */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <CloudIcon sx={{ color: "#FF9900", fontSize: 40, mr: 1.5 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold" lineHeight={1}>
                  AWS
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  lineHeight={1}
                  sx={{ color: "#FF9900" }}
                >
                  Cloud Club <span style={{ color: "white" }}>DTU</span>
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{ color: "grey.400", mb: 4, maxWidth: 300, lineHeight: 1.6 }}
            >
              Building cloud-native minds at DTU through hands-on learning,
              workshops, and community collaboration.
            </Typography>

            {/* Social Icons */}
            <Stack direction="row" spacing={1}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.link}
                  target="_blank" // Opens in new tab
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.05)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "#FF9900",
                      color: "black",
                      borderColor: "#FF9900",
                      boxShadow: "0 0 15px rgba(255, 153, 0, 0.5)",
                    },
                  }}
                >
                  {social.icon}
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
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  underline="none"
                  color="grey.400"
                  sx={{
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "#FF9900",
                      textShadow: "0 0 10px rgba(255, 153, 0, 0.5)",
                    },
                    display: "inline-block",
                  }}
                >
                  {item.label}
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
              {resourceLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  underline="none"
                  color="grey.400"
                  sx={{
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "#FF9900",
                      textShadow: "0 0 10px rgba(255, 153, 0, 0.5)",
                    },
                    display: "inline-block",
                  }}
                >
                  {item.label}
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
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <EmailIcon sx={{ color: "#FF9900", fontSize: 20, mt: 0.5 }} />
                <Typography
                  component="a"
                  href="mailto:aws@dtu.ac.in"
                  variant="body2"
                  color="grey.400"
                  sx={{
                    textDecoration: "none",
                    transition: "color 0.2s",
                    "&:hover": { color: "white" },
                  }}
                >
                  aws@dtu.ac.in
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <LocationOnIcon
                  sx={{ color: "#FF9900", fontSize: 20, mt: 0.5 }}
                />
                <Typography variant="body2" color="grey.400" lineHeight={1.6}>
                  Delhi Technological University
                  <br />
                  Shahbad Daulatpur, Bawana Road
                  <br />
                  New Delhi, India
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* Divider & Copyright */}
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
          }}
        >
          {/* 1. LEFT: Copyright */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography variant="body2" color="grey.600">
              © 2026 AWS Cloud Club DTU. All rights reserved.
            </Typography>
          </Box>

          {/* 2. CENTER: Created By (Interactive Link) */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Typography variant="body2" color="grey.600">
              Created By{" "}
              <Link
                href="https://www.linkedin.com/in/pranshu-sharma-a5b71a2a0/"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{
                  color: "#FF9900",
                  fontWeight: "bold",
                  display: "inline-block",
                  transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  "&:hover": {
                    color: "#FFB84D",
                    textShadow: "0 0 20px rgba(255, 153, 0, 0.8)", // Neon Glow
                    transform: "scale(1.01) ",     // Pop effect
                  },
                }}
              >
                Pranshu Sharma
              </Link>
            </Typography>
          </Box>

          {/* 3. RIGHT: Supported By */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography variant="caption" color="grey.600">
              Supported by
            </Typography>
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{ color: "#FF9900", letterSpacing: 0.5 }}
            >
              AWS
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}