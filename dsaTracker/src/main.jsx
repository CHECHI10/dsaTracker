import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppContextProvider from './Context/AppContextProvider.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
      <App /> {/* testing github branch feature --> TEST BRANCH */}
    </AppContextProvider>
  </StrictMode>,
)
