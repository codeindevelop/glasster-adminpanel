import React from 'react';
import { Routes } from './routes/Router';
import { MaterialThemeProvider } from './@core/layout/MaterialThemeProvider';

export default function App() {
  return (
    <>
      {/* Material Theme Provider */}
      <MaterialThemeProvider>
        {/* Main Route File  */}
        <Routes />
      </MaterialThemeProvider>
    </>
  );
}
