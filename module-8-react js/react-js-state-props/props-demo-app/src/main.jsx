import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Employee from './employeeapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <Employee id="101" name="jaydeep" address="rajkot"/>
    <Employee id="102" name="rohit" address="rjkot"/>
  </StrictMode>
)
