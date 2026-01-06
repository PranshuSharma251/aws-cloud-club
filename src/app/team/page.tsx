"use client";

import { Box, Container, Typography, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import Image from "next/image";

// ================= DATA =================
const founders = [
  {
    name: "Shivam Gautam",
    role: "Founder",
    customTag: "2x AWS Certified | Former Captain",
    image: "/images/shivam.jpeg",
    linkedin: "https://www.linkedin.com/in/sh1vam6/",
    bio: "Visionary leader passionate about democratizing cloud education and building the next generation of AWS experts.",
  },
  {
    name: "Suhansh Varshney",
    role: "Founder",
    customTag: "Current Captain",
    image: "/images/sboy.jpg",
    linkedin: "https://www.linkedin.com/in/suhanshvarshney/",
    bio: "Community builder focused on creating hands-on learning experiences for students.",
  },
  {
    name: "Utkarsh Singh",
    role: "Founder",
    customTag: "Captain",
    image: "/images/utkr.jpeg",
    linkedin: "",
    bio: "Visionary founder driving cloud innovation at DTU. Architecting the future of tech communities through strategic leadership and excellence.",
  },
];

const faculty = [
  {
    name: "Dr. Dhirendra Kumar",
    role: "Faculty Advisor",
    image: "/images/dr.jpg",
    researchgate: "https://www.researchgate.net/profile/Dhirendra-Kumar-12",
    bio: "Dr. Dhirendra Kumar is an Assistant Professor in Applied Mathematics at DTU, specializing in Medical Image Segmentation, Signal Processing, and Image Classification.",
  },
];

const vicePresidents = [
  {
    name: "Hemant Dadhich",
    role: "Vice President",
    customTag: "\u00A0",
    image: "/images/hemant.png",
    linkedin: "https://www.linkedin.com/in/hemantdadhich/",
    bio: "Orchestrating club operations and ensuring smooth execution of all technical events and workshops.",
  },
  {
    name: "Rohan Gupta",
    role: "Vice President",
    customTag: "SDE Intern @ Amazon",
    image: "/images/rohan.jpg",
    linkedin: "https://www.linkedin.com/in/rohan-tomar17/",
    bio: "Leading strategic initiatives and fostering industry partnerships to bring opportunities to students.",
  },
];

// DATA: SENIOR COUNCIL
const seniorCouncil = [
  // --- MANAGEMENT (Orange) ---
  { name: "Ishant Singh", role: "General Secretary", category: "management" },
  { name: "Swayam Gupta", role: "General Secretary", category: "management" },
  { name: "Ankit Yadav", role: "Management Head", category: "management" },
  { name: "Abhijyorth Saxena", role: "PR Head", category: "management" },
  { name: "Yash Pandey", role: "Management Co-ord", category: "management" },
  { name: "Aditi", role: "Management Co-ord", category: "management" },

  // --- TECH (Cyan) ---
  { name: "Manya Valecha", role: "Technical Head", category: "tech" },
  { name: "Satvik Mishra", role: "Technical Co-ordinator", category: "tech" },
  { name: "Anubhav Singh", role: "Technical Co-ordinator", category: "tech" },

  // --- CREATIVE (Pink) ---
  { name: "Manika", role: "Creative Head", category: "creative" },
  { name: "Rudra Bahl", role: "Creative Co-ord", category: "creative" },
  { name: "Ribhav Saini", role: "Creative Co-ord", category: "creative" },
];

// ✅ DATA: JUNIOR COUNCIL
const juniorCouncil = [
  // --- TECH ---
  { name: "Pranshu Sharma", role: "Technical Co-Head", category: "tech" },
  { name: "Utkarsh Goyal", role: "Technical Co-Head", category: "tech" },
  // --- CREATIVE ---
  { name: "Sanskriti Tripathi", role: "Creative Co-Head", category: "creative" },
  { name: "Karan Bahuguna", role: "Creative Co-Head", category: "creative" },
   { name: "Jatin", role: "Creative Co-Head", category: "creative" },
    { name: "Aastha", role: "Creative Co-Head", category: "creative" },

  // --- MANAGEMENT ---
  { name: "Vishu Goyal", role: "Management Co-Head", category: "management" },
  { name: "Suyash", role: "Management Co-Head", category: "management" },
];

const getRoleStyle = (category: string) => {
  switch (category) {
    case "tech":
      return { color: "#00E5FF", icon: "ph:code-bold" };
    case "creative":
      return { color: "#E91E63", icon: "ph:paint-brush-broad-bold" };
    case "management":
      return { color: "#FF9900", icon: "ph:chart-bar-bold" };
    default:
      return { color: "#8A63D2", icon: "ph:user-bold" };
  }
};

// 1. LEADERSHIP CARD COMPONENT
const LeadershipCard = ({
  member,
  color = "#8A63D2",
}: {
  member: any;
  color?: string;
}) => (
  <Box
    sx={{
      position: "relative",
      borderRadius: 4,
      overflow: "hidden",
      bgcolor: "#13091B",
      border: "1px solid rgba(255,255,255,0.08)",
      transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      "&:hover": {
        transform: "translateY(-10px)",
        boxShadow: `0 0 30px ${color}40`,
        borderColor: color,
        "& .social-overlay": { opacity: 1, transform: "translateY(0)" },
        "& .theme-tint": { opacity: 0 },
        "& .profile-image": { filter: "grayscale(0%)" },
      },
    }}
  >
    <Box
      sx={{
        position: "relative",
        height: 340,
        width: "100%",
        bgcolor: "#0a0510",
      }}
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="profile-image"
        style={{
          objectFit: "cover",
          objectPosition: "top center",
          transition: "filter 0.3s ease",
        }}
      />

      {/* Theme Tint Overlay */}
      <Box
        className="theme-tint"
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(19, 9, 27, 0.4)",
          mixBlendMode: "hard-light",
          transition: "opacity 0.3s ease",
          zIndex: 1,
        }}
      />

      {/* Gradient Shade */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: "linear-gradient(to top, #13091B 0%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* Social Reveal */}
      <Box
        className="social-overlay"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          display: "flex",
          justifyContent: "center",
          zIndex: 2,
          opacity: 0,
          transform: "translateY(20px)",
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
      >
        {member.linkedin ? (
          <IconButton
            component="a"
            href={member.linkedin}
            target="_blank"
            size="small"
            sx={{
              bgcolor: "white",
              boxShadow: "0 0 15px rgba(0,0,0,0.5)",
              "&:hover": { bgcolor: color, transform: "scale(1.1)" },
            }}
          >
            <Icon icon="ph:linkedin-logo-bold" color="black" width={24} />
          </IconButton>
        ) : member.researchgate ? (
          <IconButton
            component="a"
            href={member.researchgate}
            target="_blank"
            size="small"
            sx={{
              bgcolor: "white",
              boxShadow: "0 0 15px rgba(0,0,0,0.5)",
              "&:hover": { bgcolor: "#00ccbb", transform: "scale(1.1)" },
            }}
          >
            <Icon icon="simple-icons:researchgate" color="black" width={24} />
          </IconButton>
        ) : null}
      </Box>
    </Box>

    {/* Text Area */}
    <Box
      sx={{
        p: 3,
        textAlign: "center",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ color: "white", mb: 0.5 }}
      >
        {member.name}
      </Typography>

      {/* Role Title */}
      <Typography
        variant="subtitle2"
        fontWeight="bold"
        sx={{
          color: color,
          textTransform: "uppercase",
          letterSpacing: 1,
          mb: 0.5,
        }}
      >
        {member.role}
      </Typography>

      {member.customTag && (
        <Typography
          variant="caption"
          sx={{
            color: "grey.300",
            fontStyle: "italic",
            mb: 2,
            display: "block",
            fontWeight: 600,
            fontSize: "0.85rem",
          }}
        >
          {member.customTag}
        </Typography>
      )}

      <Typography
        variant="body2"
        sx={{ color: "grey.400", lineHeight: 1.6, fontSize: "0.95rem" }}
      >
        {member.bio}
      </Typography>
    </Box>
  </Box>
);

// 2. COUNCIL CARD COMPONENT
const CouncilCard = ({ member }: { member: any }) => {
  const style = getRoleStyle(member.category);
  return (
    <Box
      sx={{
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        borderRadius: 2,
        p: 2.5,
        display: "flex",
        alignItems: "center",
        gap: 2,
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
        borderLeft: `4px solid ${style.color}`,
        "&:hover": {
          bgcolor: "rgba(255, 255, 255, 0.05)",
          transform: "translateX(5px)",
          boxShadow: `0 5px 15px -5px ${style.color}40`,
        },
      }}
    >
      <Box
        sx={{
          minWidth: 40,
          height: 40,
          borderRadius: "50%",
          bgcolor: `${style.color}20`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: style.color,
        }}
      >
        <Icon icon={style.icon} width={20} />
      </Box>
      <Box>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ color: "white", fontSize: "1rem", lineHeight: 1.2 }}
        >
          {member.name}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "grey.500",
            textTransform: "uppercase",
            letterSpacing: 0.5,
            fontSize: "0.75rem",
          }}
        >
          {member.role}
        </Typography>
      </Box>
      <Icon
        icon="ph:hash-bold"
        style={{
          position: "absolute",
          right: -10,
          bottom: -10,
          fontSize: "60px",
          color: "rgba(255,255,255,0.02)",
          transform: "rotate(-15deg)",
        }}
      />
    </Box>
  );
};

export default function TeamPage() {
  return (
    <Box
      sx={{
        bgcolor: "#0f0518",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        pb: 20,
      }}
    >
      {/* Background Blobs */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "20%",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(138, 99, 210, 0.1) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(255, 153, 0, 0.08) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="xl"
        sx={{ position: "relative", zIndex: 1, px: { xs: 2, md: 6 }, pt: 10 }}
      >
        {/* HEADER */}
        <Box sx={{ textAlign: "center", mb: 12 }}>
          <Typography
            variant="h1"
            fontWeight={800}
            sx={{
              fontSize: { xs: "3rem", md: "5rem" },
              background: "linear-gradient(90deg, #fff 0%, #8A63D2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            The Team
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "grey.400", maxWidth: 700, mx: "auto" }}
          >
            Meet the pioneers building the cloud community at DTU.
          </Typography>
        </Box>

        {/* ================= 1. FOUNDERS ================= */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: "white",
              mb: 5,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Icon icon="ph:crown-fill" color="#FF9900" /> Founders
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 4,
            }}
          >
            {founders.map((member, index) => (
              <Box key={index} sx={{ flex: "1 1 350px", maxWidth: "400px" }}>
                <LeadershipCard member={member} color="#FF9900" />
              </Box>
            ))}
          </Box>
        </Box>

        {/* ================= 2. FACULTY ADVISOR ================= */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: "white",
              mb: 5,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Icon icon="ph:chalkboard-teacher-fill" color="#FFF" /> Faculty
            Advisor
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ flex: "1 1 350px", maxWidth: "400px" }}>
              {faculty.map((member, index) => (
                <LeadershipCard key={index} member={member} color="#FFF" />
              ))}
            </Box>
          </Box>
        </Box>

        {/* ================= 3. VICE PRESIDENTS ================= */}
        <Box sx={{ mb: 16 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: "white",
              mb: 5,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Icon icon="ph:star-fill" color="#8A63D2" /> Vice Presidents
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 4,
            }}
          >
            {vicePresidents.map((member, index) => (
              <Box key={index} sx={{ flex: "1 1 350px", maxWidth: "400px" }}>
                <LeadershipCard member={member} color="#8A63D2" />
              </Box>
            ))}
          </Box>
        </Box>

        {/* ================= 4. SENIOR COUNCIL ================= */}
        <Box>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ color: "white", mb: 1 }}
            >
              Senior Council
            </Typography>
            <Typography variant="body1" sx={{ color: "grey.500" }}>
              The backbone of our operations, tech, and creativity.
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 4,
                bgcolor: "#FF9900",
                mx: "auto",
                borderRadius: 2,
                mt: 2,
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 3,
            }}
          >
            {seniorCouncil.map((member, index) => (
              <Box key={index} sx={{ flex: "1 1 280px", maxWidth: "350px" }}>
                <CouncilCard member={member} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* ================= 5. JUNIOR COUNCIL (NEW) ================= */}
        <Box>
          <Box sx={{ textAlign: "center", mb: 8, mt: 10 }}>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ color: "white", mb: 1 }}
            >
              Junior Council
            </Typography>
            <Typography variant="body1" sx={{ color: "grey.500" }}>
              The rising stars driving the future of the club.
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 4,
                bgcolor: "#FF9900",
                mx: "auto",
                borderRadius: 2,
                mt: 2,
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 3,
            }}
          >
            {/* ✅ Mapping Junior Council Data here */}
            {juniorCouncil.map((member, index) => (
              <Box key={index} sx={{ flex: "1 1 280px", maxWidth: "350px" }}>
                <CouncilCard member={member} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}