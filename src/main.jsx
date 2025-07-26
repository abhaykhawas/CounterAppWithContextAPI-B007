import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NameProvider from './DataProvider.jsx'


createRoot(document.getElementById('root')).render(
  <NameProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </NameProvider>
)
