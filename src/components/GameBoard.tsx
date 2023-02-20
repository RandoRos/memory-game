import React from 'react'
import { GameCard } from './GameCard'

import { useGameSetup } from '../hooks/useGameSetup'

import { type PhotoObject } from '../types'

interface Props {
  photos: PhotoObject[]
  handleScore: () => void
}

export const GameBoard: React.FunctionComponent<Props> = props => {
  const { photos, handleScore } = props
  const { cards, handleCardClick } = useGameSetup({ photos, handleScore })

  return (
    <div className='grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-3'>
      {
        cards.map(card => (
          <GameCard card={card} key={card.id} onClick={handleCardClick} />
        ))
      }
    </div>
  )
}
