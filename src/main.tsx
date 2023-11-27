import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle, ResetStyle } from './utils/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResetStyle />
    <App />
  </React.StrictMode>,
)
