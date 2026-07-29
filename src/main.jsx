import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/App.jsx'
import '../styles/global.css'
import '../styles/variables.css'
import { AuthProvider } from '../contexts/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import '../styles/forms.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)