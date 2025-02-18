"use client";
import React from "react";
import { Box, Typography, Button, Icon, Grid, Avatar, Stack } from "@mui/material";
import VideoBackground from "@/app/components/VideoBackground";

export default function Home() {
  const features = [
    {
      text: "Get customized investment reports based on your selected stocks and preferences.",
      icon: "/bar-chart.png"  // First icon
    },
    {
      text: "Choose to receive updates daily or weekly via email for hassle-free tracking.",
      icon: "/email.png"  // Second icon
    },
    {
      text: "Gain valuable analytics and insights to make smarter investment decisions.",
      icon: "/data-analytics.png"  // Third icon
    },
  ];

  const isMobile = window.innerWidth <= 768;
  const borderRight = isMobile ? "none" : "3px solid rgba(255, 255, 255, 0.3)";
  
  const count = Math.floor(Math.random() * 100); // Random number for demo purposes
  const videoSrc = count % 2 === 0 ? "back2.mp4" : "back.mp4";

  return (
    <Box sx={{ height: "100vh" }}>
      <VideoBackground
        src={videoSrc}

        sx={{
          "& video": { filter: "brightness(0.8)" },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              padding: "100px",
              borderRadius: "20px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              width: "1000px",
              maxWidth: "80%",
            }}
          >
            <Grid
              container
              spacing={6}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid 
                item 
                xs={12} 
                md={6}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  '--Grid-borderWidth': '3px',
                  borderRight: borderRight,
                  
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                }}
              >
                <Icon
                  sx={{
                    fontSize: "200px",
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
                    color: "white",
                    fontWeight: "bold",
                    marginBottom: "20px",
                  }}
                >
                  Invest-In-Box
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                   // backgroundColor: "rgba(255, 255, 255, 0.3)",
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
                  <Stack 
                    key={index}
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
                      variant="square"  // Makes the Avatar square instead of round
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
                      <img src={feature.icon} alt={`Feature ${index + 1}`} />
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
                ))}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </VideoBackground>
    </Box>
  );
}