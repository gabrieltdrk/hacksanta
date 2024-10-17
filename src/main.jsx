import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.jsx'

import { Routes } from './routes';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes>
      <App />
    </Routes>
  </StrictMode>,
)
