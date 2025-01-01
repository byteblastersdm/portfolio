"use client";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import PortfolioHeader from '@/components/PortfolioHeader';

// Define animation variants for transitions
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <main>
     
  

    <div className='bg-sky-800 min-h-screen'>
      {/* Above Header Section */}
      <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navLinks.map((link) => (
              <Button key={link.label} color="inherit" href={link.href}>
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton color="inherit" edge="start" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton component="a" href={link.href}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <div className='m-2' style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
        <PortfolioHeader />
      </div>

      {/* Header Section */}
      <Box
        sx={{
          height: '100vh',
          backgroundImage: 'url("/backgrounds/header-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
        component={motion.div}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <Typography variant="h2" sx={{ mb: 2 }}>
          Saddam Irake
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, maxWidth: 600 }}>
          Passionate Software Engineer crafting impactful digital solutions.
        </Typography>
        <Button variant="contained" color="secondary" href="#about">
          Learn More About Me
        </Button>
      </Box>

      {/* Remaining Sections */}
      {/* About Section */}
      <Box
        id="about"
        sx={{
          py: 8,
          px: 4,
          textAlign: 'center',
          backgroundImage: 'url("/backgrounds/about-bg.jpg")',
          backgroundSize: 'cover',
          color: '#000',
        }}
        component={motion.div}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto' }}>
          I am a full-stack developer with expertise in Angular, React, and Node.js. With over 5 years of experience,
          I specialize in building scalable, user-friendly applications.
        </Typography>
      </Box>

      {/* Skills Section */}
      <Box
        sx={{
          py: 8,
          px: 4,
          textAlign: 'center',
          backgroundColor: '#f9f9f9',
        }}
        component={motion.div}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          My Skills
        </Typography>
        <Typography sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}>
          Expertise in Angular, React, Node.js, Express, MongoDB, MySQL, and AWS. I also have experience with Docker,
          CI/CD pipelines, and RESTful APIs.
        </Typography>
      </Box>

      {/* Projects Section */}
      <Box
        id="projects"
        sx={{
          py: 8,
          px: 4,
          textAlign: 'center',
          backgroundImage: 'url("/backgrounds/projects-bg.jpg")',
          backgroundSize: 'cover',
          color: '#fff',
        }}
        component={motion.div}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          My Projects
        </Typography>
        {/* Add project cards here */}
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{
          py: 8,
          px: 4,
          textAlign: 'center',
          backgroundColor: '#fff',
        }}
        component={motion.div}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Contact Me
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Email: <a href="mailto:yourname@example.com">yourname@example.com</a>
        </Typography>
        <Typography variant="body1">
          LinkedIn:{' '}
          <a href="https://linkedin.com/in/your-profile">
            linkedin.com/in/your-profile
          </a>
        </Typography>
        <Typography variant="h4" sx={{ mb: 3 }}>
          <Link href="/contact">
            <button>Contact Us</button>
          </Link>
        </Typography>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          py: 3,
          textAlign: 'center',
          backgroundColor: '#1976d2',
          color: '#fff',
        }}
      >
        <Typography variant="body2">
          © 2024 [Your Name]. All rights reserved.
        </Typography>
      </Box>
    </div>
    </main>
  );
}
