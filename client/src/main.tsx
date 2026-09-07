import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './variables.css';
import AppRoutes from './router/routes.tsx';
import { BrowserRouter as MainRouter } from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainRouter>
      <AppRoutes />
    </MainRouter>
  </StrictMode>,
)
