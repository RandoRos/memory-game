import { useEffect, useState } from 'react'

import { type PhotoObject, type Card } from '../types'

interface Props {
  photos: PhotoObject[]
  handleScore: () => void
}

interface HookReturn {
  cards: Card[]
  handleCardClick: (id: number) => void
}

export const useGameSetup = (props: Props): HookReturn => {
  const { photos, handleScore } = props
  const [cards, setCards] = useState<Card[]>([])
  const [opened, setOpened] = useState<number[]>([])

  const createDeck = (shuffled: PhotoObject[]): Card[] => {
    return shuffled.map((img, idx) => ({
      id: idx,
      cardId: img.id,
      image: img.src,
      isOpened: false,
      isFound: false
    }))
  }

  const setup = (): void => {
    const duplicated = [...photos, ...photos]
    const shuffledCards = duplicated.sort(() => Math.random() - 0.5)
    const deck = createDeck(shuffledCards)
    setCards(deck)
  }

  const handleCardClick = (id: number): void => {
    if (opened.length < 2) {
      setOpened([...opened, id])
      setCards(prevState => prevState.map(item => {
        if (item.id === id) {
          return { ...item, isOpened: true }
        }

        return item
      }))
    }
  }

  const checkMatch = (): boolean => {
    const [first, second] = opened
    const firstCard = cards.find(item => item.id === first)
    const secondCard = cards.find(item => item.id === second)

    if ((firstCard != null) && (secondCard != null)) {
      return firstCard.cardId === secondCard.cardId
    }

    return false
  }

  useEffect(() => {
    if (photos.length > 0) {
      setup()
    }
  }, [photos])

  useEffect(() => {
    if (opened.length > 1) {
      const isMatch = checkMatch()
      if (isMatch) {
        setCards(prevState => prevState.map(item => {
          if (item.id === opened[0] || item.id === opened[1]) {
            return { ...item, isFound: true }
          }

          return item
        }))
        setOpened([])
        handleScore()
      } else {
        setTimeout(() => {
          setCards(cards.map(item => ({ ...item, isOpened: false })))
          setOpened([])
        }, 1000)
      }
    }
  }, [opened])

  return { cards, handleCardClick }
}
