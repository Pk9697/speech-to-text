import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './global-styles'
import { ModalContextProvider } from './context/modalContext'
import { TranscribeContextProvider } from './context/transcribeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <TranscribeContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </TranscribeContextProvider>
  </React.StrictMode>
)
