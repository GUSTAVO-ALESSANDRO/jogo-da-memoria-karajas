// ========================================================
// COMPONENTE PRINCIPAL (App)
// ========================================================
// Este é o componente raiz da aplicação. Gerencia a navegação entre as telas principais:
// - Tela de início (Home)
// - Tela do jogo (GameBoard)
// - Tela de fim de jogo (EndScreen)
// Utiliza um sistema de estados para controlar qual tela é exibida em cada momento.

import React, { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import GameBoard from './components/GameBoard/GameBoard'
import EndScreen from './components/EndScreen/EndScreen'

export default function App() {
  // Estado que controla qual tela deve ser exibida: 'home', 'game' ou 'end'
  const [screen, setScreen] = useState('home')
  
  // Estado que armazena os dados do resultado do jogo (vitória/derrota e tentativas)
  const [endData, setEndData] = useState(null)

  // Função para iniciar o jogo - muda a tela para 'game'
  const startGame = () => setScreen('game')

  // Função para finalizar o jogo - armazena o resultado e muda para tela de fim
  const finishGame = (result) => {
    setEndData(result)
    setScreen('end')
  }

  // Função para voltar à tela inicial - reseta os dados e volta para 'home'
  const goHome = () => {
    setEndData(null)
    setScreen('home')
  }

  // Renderiza a estrutura principal com cabeçalho fixo e tela dinâmica
  return (
    <div>
      {/* Cabeçalho que aparece em todas as telas, com botão de voltar condicional */}
      <Header onGoHome={goHome} showBackButton={screen !== 'home'} />
      
      {/* Renderiza a tela de início */}
      {screen === 'home' && <Home onStart={startGame} />}
      
      {/* Renderiza o tabuleiro do jogo */}
      {screen === 'game' && <GameBoard onEnd={finishGame} />}
      
      {/* Renderiza a tela de fim de jogo */}
      {screen === 'end' && <EndScreen data={endData} onGoHome={goHome} />}
    </div>
  )
}
