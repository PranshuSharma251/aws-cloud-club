import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { Box } from "@mui/material";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import RecentSessions from "@/components/RecentSessions";
import JoinClub from "@/components/JoinClub";

export default function Home() {
  return (
    <Box component="main">
      <Hero />
      <Features />
      <WhatYouWillLearn/>
      <RecentSessions/>
      <JoinClub/>
      {/* Add other sections here as you build them:
        <LearningPath /> (The "What You'll Learn" section)
        <RecentSessions /> (The cards with dates)
        <CTA /> (The "Ready to start building" section)
      */}
    </Box>
  );
}