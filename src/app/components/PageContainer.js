// components/PageContainer.js
"use client";
import React from 'react';
import { Box } from '@mui/material';
import LandingPage from './LandingPage';
import SignupForm from './SignupForm';
import { usePageNavigation } from '../context/PageContext';

const pageConfigs = {
  landing: {
    component: LandingPage,
  },
  signup: {
    component: SignupForm,
  },
  // Add more pages here as needed
};

export default function PageContainer({ isMobile }) {
  const { currentPage, currentProps, navigate, goBack } = usePageNavigation();
  
  if (!pageConfigs[currentPage]) {
    return <div>Page not found</div>;
  }

  const PageComponent = pageConfigs[currentPage].component;
  
  const handleGetStarted = () => navigate('signup');
  const handleBack = () => goBack();

  const pageProps = {
    isMobile,
    onGetStarted: handleGetStarted,
    onBack: handleBack,
    ...currentProps
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        padding: "100px",
        height: "80vh",
        borderRadius: "20px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        width: "1000px",
        maxWidth: "80%",
      }}
    >
      <PageComponent {...pageProps} />
    </Box>
  );
}