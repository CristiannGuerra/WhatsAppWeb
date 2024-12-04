import React from 'react'
import App from './App.jsx'
import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ContactsProvider } from './Context/ContactsContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContactsProvider>
      <App />
    </ContactsProvider>
  </BrowserRouter>
)
