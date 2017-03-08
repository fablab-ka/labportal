import React from 'react';
import ReactDOM from 'react-dom';
import 'webrtc-adapter/src/js/adapter_core';

import App from './App';
import './index.css';

ReactDOM.render(
  <App isSender={true} />,
  document.getElementById('root')
);
