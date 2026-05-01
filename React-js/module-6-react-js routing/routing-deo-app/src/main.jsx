import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './index.css'
import Layout from './layout';
import PageNotFound from './pagenotfound';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <Routes>
            <Route path='/' element={<Layout />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </Router>
  </StrictMode>,
)
