// ========================================================
// COMPONENTE DO CABEÇALHO (Header)
// ========================================================
// Este componente é responsável por exibir:
// - O título principal do jogo
// - O subtítulo com informações sobre o tema
// - Um botão de voltar (quando não está na página inicial)
// Aparece em todas as páginas da aplicação

import React from 'react'
import styles from './Header.module.css'

export default function Header({ onGoHome, showBackButton }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          {/* ===== SEÇÃO COM TÍTULO E SUBTÍTULO ===== */}
          <div className={styles.titleSection}>
            {/* Título principal do jogo */}
            <h1 className={styles.title}>Jogo da Memória - Karajá</h1>
            
            {/* Subtítulo com descrição do jogo */}
            <p className={styles.subtitle}>Conheça pontos da cultura Karajá enquanto joga.</p>
          </div>
          
          {/* ===== BOTÃO DE VOLTAR (CONDICIONAL) ===== */}
          {/* Só exibe o botão de voltar quando não está na página inicial */}
          {showBackButton && (
            <button className={styles.backButton} onClick={onGoHome}>
              ← Voltar
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
