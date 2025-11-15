// ========================================================
// COMPONENTE DA TELA INICIAL (Home)
// ========================================================
// Este componente exibe a página inicial do jogo com:
// - Uma imagem de capa sobre a cultura Karajá
// - Informações sobre o povo Karajá
// - Instruções do jogo
// - Um botão para iniciar o jogo

import React from 'react'
import styles from './Home.module.css'
import cover from '../../assets/placeholder-cover.png'

export default function Home({ onStart }) {
  return (
    <main className={`container ${styles.home}`}>
      <div className={styles.card}>
        
        {/* ===== SEÇÃO ESQUERDA COM IMAGEM DE CAPA ===== */}
        <div className={styles.left}>
          <img src={cover} alt="Cultura Karajá" className={styles.cover} />
        </div>
        
        {/* ===== SEÇÃO DIREITA COM INFORMAÇÕES E BOTÃO ===== */}
        <div className={styles.right}>
          {/* Título do jogo */}
          <h2>Memória dos Karajá</h2>
          
          {/* Descrição principal sobre os Karajá e o jogo */}
          <p>
            Os Karajá (Iny) habitam o vale do rio Araguaia. Mantêm tradições como o Hetohoky (Casa Grande),
            as bonecas de cerâmica e pinturas faciais com dois círculos. Este jogo apresenta perguntas e imagens
            inspiradas na cultura Karajá para você aprender enquanto brinca.
          </p>
          
          {/* Informações adicionais sobre as regras */}
          <p className={styles.note}>
            Ao iniciar o jogo serão sorteados 12 pares que aparecerão em um tabuleiro 4x6. Você tem 50 chances, as chances diminuem apenas quando formar um par errado.
          </p>
          
          {/* ===== SEÇÃO DE AÇÕES (BOTÃO INICIAR) ===== */}
          <div className={styles.actions}>
            {/* Botão para iniciar o jogo */}
            <button onClick={onStart}>Jogar</button>
          </div>
        </div>
      </div>
    </main>
  )
}
