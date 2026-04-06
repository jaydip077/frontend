import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Props from './props'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <h1>Props</h1>
      <Props name="John" age={30} city="New York" />
    
  
  </StrictMode>
)
