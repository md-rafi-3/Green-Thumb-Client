import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import AuthProvaider from './Context/AuthProvaider.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvaider>
     <RouterProvider router={router}></RouterProvider>
  </AuthProvaider>
  </StrictMode>,
)
