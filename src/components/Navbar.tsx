"use client";

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  Typography,
} from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";

export default function Navbar() {
  const navLinks = ["Home", "Team", "Sessions", "Resources"];

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        py: 1,
        position: "relative",
        bgcolor: "#0f0518",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 } }}>
        <Toolbar disableGutters>
          {/* ================= LOGO AREA ================= */}
          <Box
            component="a"
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              textDecoration: "none",
            }}
          >
            <CloudIcon sx={{ color: "#FF9900", fontSize: 40, mr: 1.5 }} />
            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                lineHeight={1}
                sx={{ color: "white", letterSpacing: "0.5px" }}
              >
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

          {/* ================= NAVIGATION LINKS ================= */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 5,
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => {
              // ✅ DYNAMIC LINK LOGIC
              let hrefPath = "#";
              if (link === "Home") hrefPath = "/";
              if (link === "Team") hrefPath = "/team"; // Links to the new Team page
              if (link === "Sessions") hrefPath = "/sessions";
              if (link === "Resources") hrefPath = "/resources";

              return (
                <Box
                  key={link}
                  component="a"
                  href={hrefPath}
                  sx={{
                    position: "relative",
                    color: "grey.300",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "1rem",
                    transition: "color 0.3s ease",
                    "&:hover": { color: "#FF9900" },

                    // "TIMED" UNDERLINE ANIMATION
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0%",
                      height: "2px",
                      bottom: "-4px",
                      left: "0",
                      backgroundColor: "#FF9900",
                      transition: "width 0.3s ease-in-out",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {link}
                </Box>
              );
            })}

            {/* JOIN BUTTON */}
            <Button
              href="/join"
              variant="contained"
              sx={{
                bgcolor: "#FF9900",
                color: "#000",
                fontWeight: "bold",
                borderRadius: 2,
                px: 3,
                transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                "&:hover": {
                  bgcolor: "#FFB84D",
                  transform: "scale(1.05)",
                  boxShadow: "0 0 20px rgba(255, 153, 0, 0.5)",
                },
              }}
            >
              Join the Club
            </Button>
          </Box>
        </Toolbar>
      </Container>

      {/* CREATIVE BOTTOM LINE */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(138, 99, 210, 0.8) 50%, transparent 100%)",
          boxShadow: "0 0 10px rgba(138, 99, 210, 0.5)",
        }}
      />
    </AppBar>
  );
}
