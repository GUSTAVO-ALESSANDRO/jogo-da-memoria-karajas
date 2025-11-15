// ========================================================
// COMPONENTE DO TABULEIRO DO JOGO (GameBoard)
// ========================================================
// Este componente é responsável por exibir:
// - A barra superior com pontuação e botão de reiniciar
// - O tabuleiro com as cartas embaralhadas
// - As instruções do jogo
// Utiliza o hook useMemoryGame para gerenciar toda a lógica do jogo.

import React, { useMemo, useState } from 'react' // Importa useState e useMemo
import styles from './GameBoard.module.css'
import useMemoryGame from '../../hooks/useMemoryGame'
import Card from '../Card/Card'
// Importa os novos componentes
import FoundCardsSidebar from '../FoundCardsSidebar/FoundCardsSidebar'
import InfoModal from '../InfoModal/InfoModal'

export default function GameBoard({ onEnd }) {
  // Obtém do hook toda a lógica do jogo: tabuleiro, função para virar cartas, tentativas, pares encontrados
  const { board, flipCard, attemptsLeft, matchesFound, restart } = useMemoryGame({
    pairsCount: 12,      // Quantidade de pares de cartas (12 pares = 24 cartas)
    maxAttempts: 50,     // Quantidade máxima de tentativas (erro em pares)
    onEnd                // Callback para quando o jogo termina
  })

  // Estado para controlar qual card está selecionado para o modal
  const [selectedCard, setSelectedCard] = useState(null)

  // Calcula a lista de pares únicos encontrados
  const matchedCards = useMemo(() => {
    const found = board.filter(card => card.removed);
    const uniqueMatches = new Map();
    
    found.forEach(card => {
      // Usa o título ou frontText como chave única do PAR
      const key = card.title || card.frontText; 
      if (!uniqueMatches.has(key)) {
        uniqueMatches.set(key, card); // Armazena o objeto do card
      }
    });
    
    return Array.from(uniqueMatches.values());
  }, [board]); // Recalcula sempre que o 'board' mudar

  // Cria uma referência otimizada do tabuleiro usando useMemo para evitar re-renderizações desnecessárias
  const grid = useMemo(() => {
    return board
  }, [board])

  // Calcula o número total de pares (metade da quantidade de cartas)
  const totalPairs = Math.max(0, Math.floor(board.length / 2))

  // Usa um Fragment (<>) para agrupar o <main> e os novos componentes (sidebar e modal)
  return (
    <>
      <main className="container">
        {/* ===== BARRA SUPERIOR DO JOGO ===== */}
        <div className={styles.topBar}>
          {/* Exibe a pontuação: pares encontrados / total de pares */}
          <div className={styles.score}>Pontos: {matchesFound} / {totalPairs}</div>
          
          {/* Exibe tentativas restantes e botão para reiniciar o jogo */}
          <div className={styles.info}>
            <div>Tentativas restantes: {attemptsLeft}</div>
            <button onClick={restart}>Reiniciar</button>
          </div>
        </div>

        {/* ===== TABULEIRO COM AS CARTAS ===== */}
        <div className={styles.board}>
          {/* Itera sobre cada carta do tabuleiro e renderiza um componente Card para cada uma */}
          {grid.map((c, idx) => (
            <Card
              key={c.uid}              // Identificador único da carta para React
              index={idx}              // Índice da carta no tabuleiro
              data={c}                 // Dados da carta (conteúdo, se está virada, etc)
              onClick={() => flipCard(idx)}  // Callback para quando a carta é clicada
            />
          ))}
        </div>
        
        {/* ===== INSTRUÇÕES DO JOGO ===== */}
        <p className={styles.hint}>
          Clique nas cartas para virar. Pares errados permanecem virados até você clicar em outra carta.
        </p>
      </main>

      {/* ===== NOVOS COMPONENTES RENDERIZADOS FORA DO <main> ===== */}
      
      {/* Sidebar para exibir os cards encontrados */}
      <FoundCardsSidebar 
        cards={matchedCards} 
        onCardClick={setSelectedCard} 
      />
      
      {/* Modal para exibir detalhes do card selecionado */}
      <InfoModal 
        card={selectedCard} 
        onClose={() => setSelectedCard(null)} 
      />
    </>
  )
}