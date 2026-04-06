import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cardapp from './Cardapp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cardapp />
  </StrictMode>,
)
