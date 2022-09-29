import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';

import App from './App'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Outfit', sans-serif;
  }
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>

    <BrowserRouter basename="/multi-step-form-react"> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
