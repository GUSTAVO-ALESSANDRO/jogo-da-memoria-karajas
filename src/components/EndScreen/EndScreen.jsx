// ========================================================
// COMPONENTE DA TELA DE FIM DE JOGO (EndScreen)
// ========================================================
// Este componente exibe a tela final após o jogo terminar.
// Mostra:
// - Se o jogador venceu ou perdeu
// - Quantas tentativas foram usadas (em caso de vitória)
// - Um botão para voltar à página inicial

import React from 'react'
import styles from './EndScreen.module.css'

export default function EndScreen({ data, onGoHome }) {
  // Se não houver dados de fim de jogo, não renderiza nada
  if (!data) return null

  // Desestrutura os dados: status (won/lost), tentativas usadas e tentativas restantes
  const { status, attemptsUsed, attemptsLeft } = data

  return (
    <main className="container">
      <div className={styles.box}>
        
        {/* ===== RENDERIZAÇÃO CONDICIONAL BASEADA NO STATUS ===== */}
        {status === 'won' ? (
          <>
            {/* ===== MENSAGEM DE VITÓRIA ===== */}
            <h2>Parabéns — você venceu!</h2>
            {/* Exibe as tentativas usadas e restantes quando o jogador vence */}
            <p>Você completou o jogo em {attemptsUsed} tentativas e lhe restaram {attemptsLeft} chances.</p>
          </>
        ) : (
          <>
            {/* ===== MENSAGEM DE DERROTA ===== */}
            <h2>Infelizmente você perdeu</h2>
            {/* Mensagem motivacional para tentar novamente */}
            <p>Você usou todas as 50 tentativas. Tente novamente para aprender mais sobre os Karajá.</p>
          </>
        )}
        
        {/* ===== BOTÃO DE AÇÃO ===== */}
        <div className={styles.actions}>
          {/* Botão para retornar à página inicial */}
          <button onClick={onGoHome}>Voltar à página inicial</button>
        </div>
      </div>
    </main>
  )
}
