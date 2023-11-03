import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './global-styles'
import { ModalContextProvider } from './context/modalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </React.StrictMode>
)
