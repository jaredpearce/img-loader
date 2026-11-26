import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Local content
import App from './App';
import View from './View';

import './styles/index.css';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
          borderRadius: 4,
          boxShadow: 0,
        },
        components: {
          Card: {
            headerBg: 'grey',
          },
        },
      }}
      locale={enUS}
    >
      {/* <App /> */}
      <View />
    </ConfigProvider>
  </StrictMode>,
);
