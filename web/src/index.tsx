import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import ruRU from 'antd/lib/locale/ru_RU';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ruRU}>
      <Router>
        <App />
      </Router>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
