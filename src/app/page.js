"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import VideoBackground from "@/app/components/VideoBackground";

export default function Home() {
  return (
    <Box sx={{ height: "100vh" }}>
      <VideoBackground
        src="back.mp4"
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
          {/* Larger Box for Additional Components */}
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)", // Translucent background
              backdropFilter: "blur(10px)", // Glassmorphism effect
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              width: "50%", // Increased width
              maxWidth: "600px", // Set a max width for responsiveness
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: "white",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Welcome to My Site
            </Typography>

            {/* Additional Components Like Buttons */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                color: "white",
                fontWeight: "bold",
                borderRadius: "10px",
                padding: "10px 20px",
                backdropFilter: "blur(5px)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </VideoBackground>
    </Box>
  );
}
