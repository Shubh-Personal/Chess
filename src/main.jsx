import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ChessContextProvider from './context/ChessContextProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChessContextProvider>
        <App />
      </ChessContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
