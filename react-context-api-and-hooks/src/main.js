import React from 'react';
import ReactDOM from 'react-dom';

import App from '/react-context-api-and-hooks/src/App.js'
import { CounterContextProvider } from '/react-context-api-and-hooks/src/contexts/CounterContext/CounterContextProvider.js'

ReactDOM.render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>,
  document.getElementById('react-app')
);
