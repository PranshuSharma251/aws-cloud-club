"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { keyframes } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Image from "next/image";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";

// Define animation here
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export default function Hero() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden", py: 5 }}>
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(255, 153, 0, 0.15) 0%, rgba(26, 11, 46, 0) 70%)",
          filter: "blur(80px)",
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(100, 50, 255, 0.1) 0%, rgba(26, 11, 46, 0) 70%)",
          filter: "blur(80px)",
          zIndex: -1,
        }}
      />

      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 10, lg: 14 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 8,
          }}
        >
          <Box sx={{ flex: 1, width: "100%", zIndex: 1 }}>
            <Box
              sx={{
                mb: 3,
                display: "inline-block",
                px: 2,
                py: 0.8,
                borderRadius: 10,
                bgcolor: "rgba(255, 153, 0, 0.1)",
                color: "#FF9900",
                fontWeight: "bold",
                fontSize: "0.875rem",
                border: "1px solid rgba(255, 153, 0, 0.2)",
              }}
            >
              Student-Driven Community
            </Box>

            <Typography
              variant="h1"
              sx={{
                mb: 3,
                lineHeight: 1.1,
                fontWeight: 800,
                fontSize: { xs: "2.5rem", md: "4rem", lg: "4.5rem" },
              }}
            >
              Building Cloud-Native{" "}
              <span style={{ color: "#FF9900" }}>Minds at DTU</span>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 5,
                fontSize: "1.125rem",
                color: "text.secondary",
                maxWidth: "600px",
                lineHeight: 1.6,
              }}
            >
              A student-driven community empowering you to master cloud
              computing, DevOps, and AWS technologies through hands-on
              workshops, industry speakers, and real-world projects.
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mb: 6 }}>
              <Button
                href="/resources"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: "1rem",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 0 30px rgba(255, 153, 0, 0.6)",
                  },
                }}
              >
                Explore Resources
              </Button>

              <Button
                href="/sessions"
                variant="outlined"
                size="large"
                startIcon={<CalendarMonthIcon />}
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: "1rem",
                  color: "white",
                  borderColor: "rgba(255,255,255,0.2)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    borderColor: "#FF9900",
                    bgcolor: "rgba(255,153,0,0.05)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                View Sessions
              </Button>
            </Stack>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "grey.500",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <span style={{ color: "#FF9900", fontSize: "1.2rem" }}>✔</span>{" "}
                Backed by Amazon Web Services
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              width: "100%",
              position: "relative",
              mt: { xs: 4, md: -11 },
              pl: { md: 1 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.02)" },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "120%",
                  height: "120%",
                  background:
                    "radial-gradient(circle, rgba(50, 20, 100, 0.4) 0%, rgba(0,0,0,0) 70%)",
                  zIndex: -1,
                  filter: "blur(40px)",
                },
              }}
            >
              <Image
                src="/images/land.webp"
                alt="AWS Cloud Club Dashboard"
                width={600}
                height={400}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
                }}
                priority
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: -30,
                  left: -20,
                  bgcolor: "rgba(30, 30, 30, 0.85)",
                  backdropFilter: "blur(12px)",
                  p: 2,
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                  gap: 2,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  zIndex: 2,
                  minWidth: 180,
                }}
              >
                <Box
                  sx={{
                    bgcolor: "primary.main",
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    lineHeight={1}
                    sx={{ color: "white" }}
                  >
                    120+
                  </Typography>
                  <Typography variant="caption" sx={{ color: "grey.400" }}>
                    Active Members
                  </Typography>
                </Box>
              </Box>

              {/* <Box
                sx={{
                  position: "absolute",
                  top: -20,
                  right: -50,
                  bgcolor: "rgba(30, 30, 30, 0.85)",
                  backdropFilter: "blur(12px)",
                  p: 2,
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                  gap: 2,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    bgcolor: "rgba(100, 50, 255, 0.2)",
                    color: "#a384ff",
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LaptopMacIcon />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    lineHeight={1}
                    sx={{ color: "white" }}
                  >
                    20+
                  </Typography>
                  <Typography variant="caption" sx={{ color: "grey.400" }}>
                    Workshops
                  </Typography>
                </Box>
              </Box> */}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
