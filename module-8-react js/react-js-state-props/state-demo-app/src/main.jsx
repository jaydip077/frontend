import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import NameApp from './NameApp.jsx'
// import CounterApp from './Counterapp.jsx'
import Multiple from './MultipleUpdate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <NameApp /> */}
    {/* <CounterApp /> */}
    <Multiple />
  </StrictMode>,
)
