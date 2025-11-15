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
import images from '../../data/images'

export default function Card({ data, onClick, index }) {
  // Verifica se a carta deve estar virada para cima
  // A carta fica virada se faceUp for true E a carta NÃO foi removida
  const isFaceUp = data.faceUp && !data.removed

  // Se a carta foi removida (par encontrado), retorna um elemento vazio
  if (data.removed) {
    return <div className={styles.empty} />
  }

  // Resolve a URL da imagem usando o mapa `src/data/images.js`.
  // Esse mapa garante que o bundler (Vite) inclua as imagens no build e gere URLs corretas.
  let imageSrc = null
  let publicUrl = null
  if (data.frontType === 'image' && data.frontText) {
    imageSrc = images[data.frontText] || null
    // Fallback para public/ (se o arquivo estiver em public/ em vez de src/data)
    publicUrl = `/${data.frontText}`
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
                // Se for imagem, tenta `src/data/...` (imageSrc). Se der erro, troca para `/nome` (publicUrl).
                <img
                  src={imageSrc || publicUrl}
                  alt={data.title || ''}
                  className={styles.frontImg}
                  onError={(e) => {
                    if (publicUrl && e.target.src !== publicUrl) e.target.src = publicUrl
                  }}
                />
              ) : (
                // Se for texto, exibe a descrição longa
                <div className={styles.cardDescription}>{data.frontExtra || ''}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}
