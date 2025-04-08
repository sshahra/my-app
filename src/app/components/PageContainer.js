// components/PageContainer.js
"use client";
import React from 'react';
import { Box } from '@mui/material';
import LandingPage from './LandingPage';
import SignupForm from './SignupForm';
import StockSelection from './StockSelection';
import StockDetailsSelection from './StockDetailsSelection';
import { usePageNavigation } from '../context/PageContext';

const pageConfigs = {
  landing: {
    component: LandingPage,
  },
  signup: {
    component: SignupForm,
  },
  stockSelection: {
    component: StockSelection,
  },
  stockDetails: {
    component: StockDetailsSelection,
  }
};

export default function PageContainer({ isMobile }) {
  const { 
    currentPage, 
    currentProps, 
    navigate, 
    goBack, 
    updateCurrentProps 
  } = usePageNavigation();
  
  if (!pageConfigs[currentPage]) {
    return <div>Page not found</div>;
  }

  const PageComponent = pageConfigs[currentPage].component;
  
  // Navigation handlers
  const handleGetStarted = () => navigate('signup');
  
  const handleSignupSubmit = (formData) => {
    // Store user signup data and move to stock selection
    navigate('stockSelection', { userData: formData });
  };

  const handleStockSelectionSubmit = (selectedStocks) => {
    // Store selected stocks and move to stock details selection
    navigate('stockDetails', { 
      selectedStocks,
      userData: currentProps.userData 
    });
  };

  const handleStockDetailsSubmit = (selectedDetails) => {
    // Here you would typically send data to backend or next step
    console.log('Final submission:', {
      userData: currentProps.userData,
      selectedStocks: currentProps.selectedStocks,
      selectedDetails
    });
    // You can add further logic like API call or navigation
  };

  const handleBack = () => goBack();

  // Prepare page props
  const pageProps = {
    isMobile,
    onGetStarted: handleGetStarted,
    onBack: handleBack,
    onSubmit: 
      currentPage === 'signup' ? handleSignupSubmit :
      currentPage === 'stockSelection' ? handleStockSelectionSubmit :
      currentPage === 'stockDetails' ? handleStockDetailsSubmit :
      () => {},
    ...currentProps
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: "50px",
        height: "90vh",
        borderRadius: "20px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        width: "1080px",
        maxWidth: "100%",
      }}
    >
      <PageComponent {...pageProps} />
    </Box>
  );
}