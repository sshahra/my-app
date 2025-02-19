// components/LandingPage.js
"use client";
import React from 'react';
import { Grid, Typography, Button, Icon, Avatar, Stack } from "@mui/material";

const features = [
  {
    text: "Get customized investment reports based on your selected stocks and preferences.",
    icon: "/bar-chart.png"
  },
  {
    text: "Choose to receive updates daily or weekly via email for hassle-free tracking.",
    icon: "/email.png"
  },
  {
    text: "Gain valuable analytics and insights to make smarter investment decisions.",
    icon: "/data-analytics.png"
  },
];

const FeatureCard = ({ feature, isMobile }) => {
  return (
    <Stack 
      direction="row" 
      spacing={4} 
      justifyContent="flex-start"
      alignItems="center"
      sx={{ 
        alignItems: 'center',
        width: '100%'
      }}
    >
      <Avatar 
        variant="square"
        sx={{ 
          bgcolor: 'transparent',
          width: 40,
          height: 40,
          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }
        }}
      >
        <img src={feature.icon} alt={`Feature icon`} />
      </Avatar>
      <Typography 
        sx={{ 
          color: 'white',
          flex: 3,
          fontSize: isMobile ? "10px" : "15px",
        }}
      >
        {feature.text}
      </Typography>
    </Stack>
  );
};

const FeaturesSection = ({ isMobile }) => {
  return (
    <Grid 
      item 
      xs={12} 
      md={6}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: isMobile ? 3 : 10,
      }}
    >
      {features.map((feature, index) => (
        <FeatureCard 
          key={index} 
          feature={feature} 
          isMobile={isMobile} 
        />
      ))}
    </Grid>
  );
};

const HeroSection = ({ isMobile, borderRight, onGetStarted }) => {
  return (
    <Grid 
      item 
      xs={12} 
      md={6}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        borderRight: borderRight,
        borderColor: 'rgba(255, 255, 255, 0.3)',
      }}
    >

      <Icon
        sx={{
          fontSize: isMobile ?"100px": "200px",
          color: "white",
          marginBottom: "20px",
        }}
      >
        <img src="/logo.png" alt="Logo" style={{ width: "100%" }} />
      </Icon>

      <Typography
        variant="h4"
        component="h3"
        sx={{
            fontSize: isMobile ? "20px" : "40px",
          color: "white",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Invest-In-Box 
      </Typography>
      <Button
        variant="outlined"
        onClick={onGetStarted}
        sx={{        
          color: "white",
          fontWeight: "bold",
          borderRadius: "10px",
          padding: "10px 20px",
          backdropFilter: "blur(5px)",
          "&:hover": {
            backgroundColor: "rgba(82, 82, 82, 0.5)",
          },
        }}
      >
        Get Started
      </Button>
    </Grid>
  );
};

export default function LandingPage({ isMobile, onGetStarted }) {
  const borderRight = isMobile ? "none" : "3px solid rgba(255, 255, 255, 0.3)";

  return (
    <Grid
      container
      spacing={6}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <HeroSection 
        isMobile={isMobile}
        borderRight={borderRight}
        onGetStarted={onGetStarted}
      />
      <FeaturesSection 
        isMobile={isMobile}
      />
    </Grid>
  );
}