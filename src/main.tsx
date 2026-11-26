import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Local content
import View from './View';

import './styles/index.css';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#005f9e',
          borderRadius: 4,
          boxShadow: 0,
          primaryShadow: 0,
        },
        components: {},
      }}
      locale={enUS}
    >
      <View />
    </ConfigProvider>
  </StrictMode>,
);
