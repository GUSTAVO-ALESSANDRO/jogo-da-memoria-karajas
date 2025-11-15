import React from 'react';
import styles from './FoundCardsSidebar.module.css';
import images from '../../data/images'; // Importar o mapa de imagens

// Helper para lidar com o erro de imagem (mesma lógica do Card.jsx)
const ImageWithFallback = ({ card }) => {
  let imageSrc = images[card.frontText] || null;
  let publicUrl = `/${card.frontText}`;

  return (
    <img
      src={imageSrc || publicUrl}
      alt={card.title || ''}
      className={styles.cardImage}
      onError={(e) => {
        if (publicUrl && e.target.src !== publicUrl) e.target.src = publicUrl;
      }}
    />
  );
};

export default function FoundCardsSidebar({ cards, onCardClick }) {
  // Se não houver cards encontrados, não renderiza nada
  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>Itens Descobertos</h3>
      <div className={styles.cardList}>
        {cards.map((card) => (
          <button
            // Usamos o pairId ou uid como chave. Se uid for único por card, 
            // usamos o id do primeiro card do par.
            key={card.pairId || card.uid} 
            className={styles.cardButton}
            onClick={() => onCardClick(card)}
            title={`Clique para ver mais sobre "${card.title || card.frontText}"`}
          >
            {/* Renderiza imagem ou texto baseado no tipo */}
            {card.frontType === 'image' ? (
              <>
                <ImageWithFallback card={card} />
                <span className={styles.cardTitle}>{card.title || card.frontText}</span>
              </>
            ) : (
              <span className={styles.cardTitle}>{card.title || card.frontText}</span>
            )}
          </button>
        ))}
      </div>
    </aside>
  );
}