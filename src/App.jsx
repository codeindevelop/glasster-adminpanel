import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes/Router';
import { MaterialThemeProvider } from './@core/layout/MaterialThemeProvider';
import { FallbackView } from './@core/partials/fallback-view/FallbackView';

export default function App() {
  return (
    <>
      {/* Suspence page for load component */}
      <Suspense fallback={<FallbackView />}>
        <BrowserRouter>
          {/* Material Theme Provider */}
          <MaterialThemeProvider>
            {/* Main Route File  */}
            <Routes />
          </MaterialThemeProvider>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
