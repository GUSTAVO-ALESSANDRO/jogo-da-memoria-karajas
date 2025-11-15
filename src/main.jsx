// ========================================================
// PONTO DE ENTRADA DA APLICAÇÃO (main.jsx)
// ========================================================
// Este arquivo é responsável por:
// 1. Importar a biblioteca React
// 2. Importar o ReactDOM para renderizar a aplicação
// 3. Importar o componente principal (App)
// 4. Importar os estilos globais
// 5. Renderizar a aplicação React no elemento HTML com id='root'

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/globals.css'

// Encontra o elemento HTML com id 'root' e renderiza a aplicação nele
createRoot(document.getElementById('root')).render(
  // StrictMode ativa verificações adicionais de desenvolvimento (avisos sobre código inseguro)
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
