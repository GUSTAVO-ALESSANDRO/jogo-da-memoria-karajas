// ========================================================
// COMPONENTE DA CARTA (Card)
// ========================================================
// Este componente representa uma única carta no tabuleiro.
// Ele é responsável por:
// - Exibir o verso da carta (imagem padrão)
// - Exibir a frente da carta (título e descrição ou imagem)
// - Mostrar o efeito de rotação quando virada
// - Ficar vazio quando a carta é encontrada

import React from 'react'
import styles from './Card.module.css'
import cover from '../../assets/fundo-do-card.png'

export default function Card({ data, onClick, index }) {
  // Verifica se a carta deve estar virada para cima
  // A carta fica virada se faceUp for true E a carta NÃO foi removida
  const isFaceUp = data.faceUp && !data.removed

  // Se a carta foi removida (par encontrado), retorna um elemento vazio
  if (data.removed) {
    return <div className={styles.empty} />
  }

  return (
    <button 
      className={`${styles.cardButton} ${isFaceUp ? styles.flipped : ''}`}
      onClick={onClick}
      aria-label={`card-${index}`}
    >
      {/* Container com efeito de flip em 3D */}
      <div className={styles.cardFlipContainer}>
        <div className={styles.cardInner}>
          
          {/* ===== VERSO DA CARTA ===== */}
          <div className={styles.cardFace}>
            <img src={cover} alt="verso" className={styles.backImg} />
          </div>
          
          {/* ===== FRENTE DA CARTA ===== */}
          <div className={styles.cardFace}>
            <div className={styles.frontContent}>
              {/* Título da carta */}
              <div className={styles.cardTitle}>{data.title || data.frontText}</div>
              
              {/* Renderiza a frente da carta baseado no tipo (imagem ou texto) */}
              {data.frontType === 'image' ? (
                <>
                  {/* Se for imagem, exibe a imagem */}
                  <img src={`/${data.frontText}`} alt={data.title || ''} className={styles.frontImg} />
                </>
              ) : (
                <>
                  {/* Se for texto, exibe a descrição */}
                  <div className={styles.cardDescription}>{data.frontExtra || ''}</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}
