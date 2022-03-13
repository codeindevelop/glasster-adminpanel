import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Styles
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
// import 'react-perfect-scrollbar/dist/css/styles.css'; // Perfect Scroll Bar Style
import './@core/assets/scss/style.scss'; // import Core Style
import './@core/assets/scss/_persian-fonts.scss'; // import persian fonts
import './@core/assets/scss/_english-fonts.scss'; // import english fonts

// Redux Config Files
import store from './redux/store';

// Custom Provider for get Language data from localstorage or context
import { SiteLangProvider } from './@core/i18n/SiteLangProvider';
import { I18nProvider } from './@core/i18n/I18nProvider';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Language Provider */}
      <SiteLangProvider>
        {/* I18n Provider for translate Language */}
        <I18nProvider>
          <App />
        </I18nProvider>
      </SiteLangProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
