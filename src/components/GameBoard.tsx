import React, { useEffect, useState } from 'react'
import { GameCard } from './GameCard'

import { type Card } from '../types'

interface Props {
  photos: string[]
}

export const GameBoard: React.FunctionComponent<Props> = props => {
  const [opened, setOpened] = useState<number[]>([])
  const [cards, setCards] = useState<Card[]>([])
  const { photos } = props

  useEffect(() => {
    const cards: Card[] = photos.map((img, idx) => ({
      id: idx,
      image: img,
      isOpened: false
    }))

    setCards(cards)
  }, [photos])

  useEffect(() => {
    if (opened.length > 1) {
      setTimeout(() => {
        setCards(cards.map(item => ({ ...item, isOpened: false })))
        setOpened([])
      }, 1000)
    }
  }, [opened])

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

  return (
    <div className='grid grid-cols-4 gap-3 place-items-center'>
      {
        cards.map(card => (
          <GameCard card={card} key={card.id} onClick={handleCardClick} />
        ))
      }
    </div>
  )
}
