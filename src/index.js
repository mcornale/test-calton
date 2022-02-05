import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ShowingModesContextProvider from './context/ShowingModeContext';

ReactDOM.render(
  <React.StrictMode>
    <ShowingModesContextProvider>
      <App />
    </ShowingModesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
