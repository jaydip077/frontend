import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Cardapp from './Cardapp'
import Contact from './contact-us'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cardapp /> */}
    <Contact />
  </StrictMode>,
)
