import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Local content
import App from './App';

import './styles/index.css';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#005f9e',
        },
      }}
      locale={enUS}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
