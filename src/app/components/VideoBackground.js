// components/VideoBackground.js
"use client";

import React from 'react';
import { Box, styled } from '@mui/material';

// Styled components
const VideoContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
}));

const Video = styled('video')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  minWidth: '100%',
  minHeight: '100%',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  width: '100%',
  height: '100%',
}));

const VideoBackground = ({ 
  src, 
  fallbackImage = '/api/placeholder/1920/1080',
  overlay = true,
  sx = {},
  children,
  ...props 
}) => {
  return (
    <VideoContainer sx={sx}>
      <Video
        autoPlay
        muted
        loop
        playsInline
        poster={fallbackImage}
        {...props}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      
      {overlay && <Overlay />}
      
      <ContentContainer>
        {children}
      </ContentContainer>
    </VideoContainer>
  );
};

export default VideoBackground;