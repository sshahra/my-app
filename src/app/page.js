// app/page.js
"use client";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import VideoBackground from "./components/VideoBackground";
import PageContainer from "./components/PageContainer";
import { PageProvider } from "./context/PageContext";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <PageProvider initialPage="landing">
      <Box sx={{ height: "100vh" }}>
        <VideoBackground
          src={`/back0.mp4`}
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
            <PageContainer isMobile={isMobile} />
          </Box>
        </VideoBackground>
      </Box>
    </PageProvider>
  );
}