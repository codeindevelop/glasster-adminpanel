import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes/Router';
import { I18nProvider } from './@core/i18n/I18nProvider';
import { MaterialThemeProvider } from './@core/layout/MaterialThemeProvider';
import { FallbackView } from 'partials/fallback-view/FallbackView';
import ScrollToTop from 'partials/scroll-to-top/ScrollToTop';

export default function App() {
  return (
    <>
      {/* Suspence page for load component */}
      <Suspense fallback={<FallbackView />}>
        {/* I18n Provider for translate Language */}
        <I18nProvider>
          <BrowserRouter>
            {/* Material Theme Provider */}
            <MaterialThemeProvider>
              {/* Main Route File  */}
              <ScrollToTop>
                <Routes />
              </ScrollToTop>
            </MaterialThemeProvider>
          </BrowserRouter>
        </I18nProvider>
      </Suspense>
    </>
  );
}
