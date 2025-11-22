import React from 'react';
import styles from './InfoModal.module.css';
import images from '../../data/images'; // Importar o mapa de imagens

// Helper para lidar com o erro de imagem
const ImageWithFallback = ({ card }) => {
  if (card.frontType !== 'image') return null;

  let imageSrc = images[card.frontText] || null;
  let publicUrl = `/${card.frontText}`;

  return (
    <img
      src={imageSrc || publicUrl}
      alt={card.title || ''}
      className={styles.modalImage}
      onError={(e) => {
        if (publicUrl && e.target.src !== publicUrl) e.target.src = publicUrl;
      }}
    />
  );
};

export default function InfoModal({ card, onClose }) {
  // Se nenhum card estiver selecionado, não renderiza nada
  if (!card) {
    return null;
  }

  return (
    // Backdrop (fundo) do modal
    <div className={styles.backdrop} onClick={onClose}>
      {/* Conteúdo do modal (impede o fechamento ao clicar dentro) */}
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        
        {/* Botão de fechar */}
        <button className={styles.closeButton} onClick={onClose} title="Fechar">
          
        </button>
        
        {/* Título */}
        <h2 className={styles.modalTitle}>{card.title || card.frontText}</h2>
        
        {/* Imagem (se for um card de imagem) */}
        <ImageWithFallback card={card} />
        
        {/* Descrição (frontExtra) - é aqui que ela aparece agora! */}
        <p className={styles.modalDescription}>
          {/* {card.frontExtra || 'Não há descrição adicional para este item.'} */}
          {card.frontExtra}
        </p>

      </div>
    </div>
  );
}