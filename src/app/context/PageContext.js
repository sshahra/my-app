// context/PageContext.js
"use client";
import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export function PageProvider({ children, initialPage = 'landing' }) {
  const [pageHistory, setPageHistory] = useState([
    { id: initialPage, props: {} }
  ]);

  const navigate = (pageId, props = {}) => {
    setPageHistory(prev => [...prev, { id: pageId, props }]);
  };

  const goBack = () => {
    setPageHistory(prev => prev.length > 1 ? prev.slice(0, -1) : prev);
  };

  const getCurrentPage = () => {
    return pageHistory[pageHistory.length - 1];
  };

  return (
    <PageContext.Provider 
      value={{
        currentPage: getCurrentPage().id,
        currentProps: getCurrentPage().props,
        navigate,
        goBack
      }}
    >
      {children}
    </PageContext.Provider>
  );
}

export const usePageNavigation = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePageNavigation must be used within a PageProvider');
  }
  return context;
};