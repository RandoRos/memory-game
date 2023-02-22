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

  return (
    <div className='grid grid-cols-4 md:auto-cols-auto md:grid-cols-5 gap-2 md:gap-3'>
      {
        cards?.map(card => (
          <GameCard card={card} key={card.id} onClick={handleCardClick} isTurn={isTurn} />
        ))
      }
    </div>
  )
}
