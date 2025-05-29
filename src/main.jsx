import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import AuthProvaider from './Context/AuthProvaider.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { HelmetProvider } from 'react-helmet-async'

 AOS.init({ duration: 1000, once: true })




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvaider>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </AuthProvaider>
  </StrictMode>,
)
