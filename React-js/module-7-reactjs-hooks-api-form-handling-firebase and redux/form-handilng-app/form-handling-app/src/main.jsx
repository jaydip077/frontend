import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Employeedata from './Employee-data'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Employeedata />
  </StrictMode>,
)
