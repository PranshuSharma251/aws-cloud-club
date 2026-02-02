'use client';

import { useState, useMemo } from 'react';
import { Box, Container, Typography, IconButton, InputBase, Chip, Button } from '@mui/material';
import { Icon } from '@iconify/react';

// ================= DATA =================
const resourcesData = [
  {
    id: 1,
    title: "Satvik Mishra - Secure VPN Deployment (strongSwan)",
    category: "Documents",
    type: "PDF",
    size: "0.2 MB",
    date: "Jan 02, 2026",
    desc: "A project report demonstrating the setup of a VPN using strongSwan with AES-128 encryption and Diffie-Hellman Group 2 key exchange.",
    link: "/downloads/vpn-deployment.pdf" // ⚠️ Make sure to add this file to public/files/
  },
  {
    id: 2,
    title: "Satvik Mishra - AWS Automation using VS Code",
    category: "Documents",
    type: "PDF",
    size: "0.5 MB",
    date: "Dec 15, 2025",
    desc: "Guide on streamlining DevOps workflows by integrating VS Code with AWS services like EC2, S3, and CloudWatch for monitoring.",
    link: "/downloads/aws-automation.pdf" // ⚠️ Make sure to add this file to public/files/
  },
  {
    id: 3,
    title: "Satvik Mishra - Cloud Architecture Patterns",
    category: "Documents",
    type: "PDF",
    size: "2.9 MB",
    date: "Nov 20, 2025",
    desc: "Standard architectural patterns for building scalable and resilient cloud applications.",
    link: "/downloads/architecture.pdf" // ⚠️ Placeholder for your 3rd upload
  },
  {
    id: 4,
    title: "Intellipaat AWS Cheat Sheet",
    category: "Cheatsheets",
    type: "Link",
    size: "Web",
    date: "Updated 2025",
    desc: "A comprehensive quick-reference guide for AWS services, commands, and terminology.",
    link: "https://intellipaat.com/blog/tutorial/amazon-web-services-aws-tutorial/aws-cheat-sheet/"
  },
  {
    id: 5,
    title: "Amazon EC2 User Guide",
    category: "E-Book",
    type: "Link", // External PDF links work best as "Link" types so they open in browser
    size: "Web",
    date: "Live Doc",
    desc: "The official technical documentation for Amazon EC2 instances, covering launch, security, and networking.",
    link: "https://docs.aws.amazon.com/pdfs/AWSEC2/latest/UserGuide/ec2-ug.pdf"
  },
    {
    id: 6,
    title: "Shivam Gautam - AWS + Terraform",
    category: "Roadmaps", // or "Documents" depending on your pref
    type: "Link",
    size: "Web",
    date: "Blog Series",
    desc: "Master Infrastructure as Code (IaC) with this deep-dive blog series on AWS and Terraform by our club founder.",
    link: "https://shivamgautam.hashnode.dev/"
  },
    {
    id: 7,
    title: "AI and Infrastructure",
    category: "Documents",
    type: "PPTX",
    size: "1.1 MB",
    date: "Feb 1, 2026",
    desc: "Standard AI in infrastructure patterns for building resilient cloud applications.",
    link: "/downloads/DTU.pptx" // ⚠️ Placeholder for your 3rd upload
  }
];

// Updated Categories based on your data
const categories = ["All", "Documents", "Cheatsheets", "E-Book", "Code", "Roadmaps"];

export default function ResourcesPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter Logic
  const filteredResources = useMemo(() => {
    return resourcesData.filter(res => {
      const matchesSearch = res.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || res.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <Box sx={{ bgcolor: '#0f0518', minHeight: '100vh', position: 'relative', overflow: 'hidden', pb: 20 }}>
      
      {/* Background Blobs */}
      <Box sx={{ position: 'absolute', top: '-10%', left: '30%', width: '1000px', height: '1000px', background: 'radial-gradient(circle, rgba(138, 99, 210, 0.08) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(100px)', zIndex: 0 }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, md: 6 }, pt: 10 }}>
        
        {/* HEADER */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h1" fontWeight={800} sx={{ 
            fontSize: { xs: '3rem', md: '5rem' }, 
            background: 'linear-gradient(90deg, #fff 0%, #FF9900 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2
          }}>
            Resource Hub
          </Typography>
          <Typography variant="h5" sx={{ color: 'grey.400', maxWidth: 700, mx: 'auto' }}>
            Curated study materials, project reports, and roadmaps for your cloud journey.
          </Typography>
        </Box>

        {/* ================= CONTROLS SECTION ================= */}
        <Box sx={{ maxWidth: '900px', mx: 'auto', mb: 8 }}>
          
          {/* Search Bar */}
          <Box sx={{ 
            bgcolor: 'rgba(255, 255, 255, 0.03)', 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 3,
            p: '8px 20px',
            display: 'flex', alignItems: 'center', gap: 2,
            mb: 4,
            transition: 'all 0.3s ease',
            '&:focus-within': { borderColor: '#FF9900', boxShadow: '0 0 20px rgba(255, 153, 0, 0.1)' }
          }}>
            <Icon icon="ph:magnifying-glass-bold" color="#666" width={24} />
            <InputBase 
              placeholder="Search for resources..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ flex: 1, color: 'white', fontSize: '1.1rem' }} 
            />
          </Box>

          {/* Category Tabs */}
          <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <Chip 
                key={cat} 
                label={cat} 
                onClick={() => setActiveCategory(cat)}
                sx={{
                  bgcolor: activeCategory === cat ? '#FF9900' : 'rgba(255,255,255,0.05)',
                  color: activeCategory === cat ? 'black' : 'grey.400',
                  fontWeight: 'bold',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  border: activeCategory === cat ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.2s ease',
                  '&:hover': { bgcolor: activeCategory === cat ? '#FFB84D' : 'rgba(255,255,255,0.1)', color: 'white' }
                }}
              />
            ))}
          </Box>
        </Box>

        {/* ================= RESOURCES GRID ================= */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <Box key={resource.id} sx={{ flex: '1 1 350px', maxWidth: '400px' }}>
                <ResourceCard resource={resource} />
              </Box>
            ))
          ) : (
            <Box sx={{ textAlign: 'center', mt: 8, color: 'grey.600', width: '100%' }}>
               <Icon icon="ph:folder-open-duotone" width={60} style={{ opacity: 0.5, marginBottom: 16 }} />
               <Typography variant="h6">No resources found.</Typography>
            </Box>
          )}
        </Box>

      </Container>
    </Box>
  );
}

// ==========================================
// SMART CARD COMPONENT
// ==========================================
const ResourceCard = ({ resource }: { resource: any }) => {
  
  // ✅ LOGIC: Files (PDF/ZIP) get "Download", Links get "Open Link"
  const isDownloadable = resource.type === 'PDF' || resource.type === 'ZIP' ||resource.type === 'PPTX' ;
  
  const getIcon = (type: string) => {
    switch (type) {
        case 'PPTX': return "bi:filetype-pptx";
        case 'ZIP': return "ph:file-zip-bold";
        case 'PDF': return "ph:file-pdf-bold";
        case 'Link': return "ph:link-bold";
        default: return "ph:file-text-bold";
    }
  };

  return (
    <Box sx={{
      bgcolor: '#13091B',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 4,
      p: 3,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
      '&:hover': {
        transform: 'translateY(-5px)',
        borderColor: resource.type === 'ZIP' ? '#00E5FF' : '#FF9900',
        boxShadow: resource.type === 'ZIP' ? '0 0 30px rgba(0, 229, 255, 0.1)' : '0 0 30px rgba(255, 153, 0, 0.1)',
        '& .icon-box': { transform: 'scale(1.1)' } 
      }
    }}>
      
      {/* Top Row: Icon & Type Badge */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
         <Box className="icon-box" sx={{ 
           width: 56, height: 56, borderRadius: 2, 
           bgcolor: resource.type === 'ZIP' ? 'rgba(0, 229, 255, 0.1)' : 
                    resource.type === 'Link' ? 'rgba(138, 99, 210, 0.1)' : 'rgba(255, 153, 0, 0.1)', 
           display: 'flex', alignItems: 'center', justifyContent: 'center',
           color: resource.type === 'ZIP' ? '#00E5FF' : 
                  resource.type === 'Link' ? '#8A63D2' : '#FF9900',
           transition: 'transform 0.3s ease'
         }}>
            <Icon icon={getIcon(resource.type)} width={32} />
         </Box>

         <Chip label={resource.category} size="small" variant="outlined" sx={{ borderColor: 'rgba(255,255,255,0.2)', color: 'grey.500', fontWeight: 'bold' }} />
      </Box>

      {/* Content */}
      <Typography variant="h6" fontWeight="bold" color="white" sx={{ mb: 1, lineHeight: 1.3 }}>
        {resource.title}
      </Typography>
      <Typography variant="body2" color="grey.400" sx={{ mb: 3, flexGrow: 1, lineHeight: 1.6 }}>
        {resource.desc}
      </Typography>

      {/* Metadata & Action */}
      <Box sx={{ pt: 3, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* File Info */}
        <Box>
          <Typography variant="caption" display="block" color="grey.500" fontWeight="bold">SIZE</Typography>
          <Typography variant="body2" color="white">{resource.size}</Typography>
        </Box>

        {/* ✅ SMART BUTTON */}
        <Button 
          href={resource.link}
          download={isDownloadable} 
          target="_blank" 
          variant="contained" 
          endIcon={<Icon icon={isDownloadable ? "ph:download-simple-bold" : "ph:arrow-square-out-bold"} />}
          sx={{ 
            bgcolor: 'white', color: 'black', fontWeight: 'bold', textTransform: 'none',
            '&:hover': { bgcolor: resource.type === 'ZIP' ? '#00E5FF' : '#FF9900' }
          }}
        >
          {isDownloadable ? "Download" : "Open Link"}
        </Button>

      </Box>
    </Box>
  );
}