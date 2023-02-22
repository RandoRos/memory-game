import { useEffect, useState } from 'react'

import { createCardDeck, checkMatch } from '../utils/gameLogic'
import { type PhotoObject, type Card } from '../types'

interface Props {
  photos: PhotoObject[]
  handleScore: () => void
}

interface HookReturn {
  cards: Card[]
  handleCardClick: (id: number) => void
}

export const useGameLocalLogic = (props: Props): HookReturn => {
  const { photos, handleScore } = props
  const [cards, setCards] = useState<Card[]>([])
  const [opened, setOpened] = useState<number[]>([])

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

  useEffect(() => {
    if (photos.length > 0) {
      const deck = createCardDeck(photos)
      setCards(deck)
    }
  }, [photos])

  useEffect(() => {
    if (opened.length > 1) {
      const isMatch = checkMatch(cards, opened)
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
