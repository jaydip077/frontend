import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Inline from './inline'
// import Internal from './internal'
import External from './external'
import './style.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Inline />
    <Internal /> */}
    <External />
  </StrictMode>,
)
