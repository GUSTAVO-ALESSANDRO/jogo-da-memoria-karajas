
// Hook personalizado para o jogo da memória
import { useState, useEffect, useCallback } from 'react'
import CARDS from '../data/cards'

// Função para embaralhar um array
function embaralharArray(a) {
  const arr = a.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export default function useMemoryGame({ pairsCount = 18, maxAttempts = 50, onEnd } = {}) {
  // Tabuleiro do jogo
  const [board, setBoard] = useState([])
  // Tentativas restantes
  const [attemptsLeft, setAttemptsLeft] = useState(maxAttempts)
  // Índices das cartas selecionadas
  const [selected, setSelected] = useState([])
  // Índices do último par errado
  const [pendingWrong, setPendingWrong] = useState(null)
  // Bloqueia interação durante animação
  const [locked, setLocked] = useState(false)

  // Inicializa o jogo
  const init = useCallback(() => {
    const embaralhadas = embaralharArray(CARDS)
    const escolhidas = embaralhadas.slice(0, pairsCount)
    const pares = []
    let uid = 1
    for (const c of escolhidas) {
      const frontType = c.type === 'image' ? 'image' : 'text'
      const frontText = frontType === 'image' ? c.image : c.title
      const frontExtra = frontType === 'text' ? (c.description || '') : ''
      const cardA = {
        uid: uid++,
        baseId: c.id,
        frontType,
        frontText,
        frontExtra,
        title: c.title,
        removed: false,
        faceUp: false
      }
      const cardB = {
        uid: uid++,
        baseId: c.id,
        frontType,
        frontText,
        frontExtra,
        title: c.title,
        removed: false,
        faceUp: false
      }
      pares.push(cardA, cardB)
    }
    const final = embaralharArray(pares)
    setBoard(final)
    setAttemptsLeft(maxAttempts)
    setSelected([])
    setPendingWrong(null)
  }, [pairsCount, maxAttempts])

  useEffect(() => {
    init()
  }, [init])

  // Pares encontrados
  const matchesFound = Math.floor(board.filter(c => c.removed).length / 2)

  // Verifica vitória
  useEffect(() => {
    if (matchesFound === pairsCount && board.length > 0) {
      onEnd && onEnd({ status: 'won', attemptsUsed: maxAttempts - attemptsLeft, attemptsLeft })
    }
  }, [matchesFound, board.length, onEnd, attemptsLeft, maxAttempts, pairsCount])

  // Verifica derrota
  useEffect(() => {
    if (attemptsLeft <= 0 && board.length > 0 && matchesFound < (board.length / 2)) {
      onEnd && onEnd({ status: 'lost', attemptsUsed: maxAttempts, attemptsLeft: 0 })
    }
  }, [attemptsLeft, board.length, matchesFound, onEnd, maxAttempts])

  // Função para virar carta
  const flipCard = (index) => {
    if (locked) return
    if (!board[index] || board[index].removed) return

    // Se há par errado pendente, vira de volta
    if (pendingWrong) {
      const novoTabuleiro = board.slice()
      pendingWrong.forEach(i => {
        if (novoTabuleiro[i]) novoTabuleiro[i].faceUp = false
      })
      setBoard(novoTabuleiro)
      setPendingWrong(null)
    }

    if (board[index].faceUp) return

    const novoTabuleiro = board.slice()
    novoTabuleiro[index] = { ...novoTabuleiro[index], faceUp: true }
    setBoard(novoTabuleiro)

    const next = [...selected, index]
    if (next.length === 2) {
      const [i1, i2] = next
      const c1 = novoTabuleiro[i1]
      const c2 = novoTabuleiro[i2]
      if (c1.baseId === c2.baseId) {
        // Par correto
        setLocked(true)
        setTimeout(() => {
          setBoard(b => {
            const atualizado = b.slice()
            if (atualizado[i1]) atualizado[i1] = { ...atualizado[i1], removed: true, faceUp: false }
            if (atualizado[i2]) atualizado[i2] = { ...atualizado[i2], removed: true, faceUp: false }
            return atualizado
          })
          setLocked(false)
        }, 1000)
      } else {
        // Par errado
        setAttemptsLeft(a => Math.max(0, a - 1))
        setPendingWrong([i1, i2])
      }
    }
    setSelected(next.length >= 2 ? [] : next)
  }

  // Reinicia o jogo
  const restart = () => init()

  return {
    board,
    flipCard,
    attemptsLeft,
    matchesFound,
    restart
  }
}
