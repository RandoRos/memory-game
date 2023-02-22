import { type Player, type Card, type PhotoObject } from '../types'

const createDeck = (shuffled: PhotoObject[]): Card[] => {
  return shuffled.map((img, idx) => ({
    id: idx,
    cardId: img.id,
    image: img.src,
    isOpened: false,
    isFound: false
  }))
}

export const createCardDeck = (photos: PhotoObject[]): Card[] => {
  const duplicated = [...photos, ...photos]
  const shuffledCards = duplicated.sort(() => Math.random() - 0.5)
  const deck = createDeck(shuffledCards)
  return deck
}

export const checkMatch = (cards: Card[], opened: number[]): boolean => {
  const [first, second] = opened
  const firstCard = cards.find(item => item.id === first)
  const secondCard = cards.find(item => item.id === second)

  if ((firstCard != null) && (secondCard != null)) {
    return firstCard.cardId === secondCard.cardId
  }

  return false
}

export const checkWin = (cards: Card[]): boolean => {
  console.log('isWin?', cards.every(item => item.isFound))
  return cards.every(item => item.isFound)
}

export const getWinner = (players: Player[]): Player => {
  const winner = players.reduce((prev, current) => (prev.score > current.score) ? prev : current)
  return winner
}
