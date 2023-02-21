import React from 'react'
import { GameCard } from './GameCard'

import { type Card } from '../types'

interface Props {
  cards: Card[]
  handleCardClick: (id: number) => void
  isTurn: boolean
}

export const GameBoard: React.FunctionComponent<Props> = props => {
  const { cards, handleCardClick, isTurn } = props

  const handleClick = (id: number): void => {
    if (isTurn) {
      handleCardClick(id)
    }
  }

  return (
    <div className='grid grid-cols-4 md:auto-cols-auto gap-2 md:gap-3'>
      {
        cards?.map(card => (
          <GameCard card={card} key={card.id} onClick={handleClick} />
        ))
      }
    </div>
  )
}
