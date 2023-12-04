import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ResetStyle } from './styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResetStyle />
    <App />
  </React.StrictMode>,
)
