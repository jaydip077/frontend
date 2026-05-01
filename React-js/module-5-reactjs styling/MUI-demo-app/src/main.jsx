import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 import Buttonapp from './Buttonapp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Buttonapp />
    
  </StrictMode>,
)
