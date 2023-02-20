import React from 'react'

import { type Card } from '../types'

interface Props {
  card: Card
  onClick: (e: any) => void
}

export const GameCard: React.FunctionComponent<Props> = props => {
  const { card, onClick } = props

  return (
    <div
      className={'rounded-lg bg-gradient-to-r from-cyan-500 to-green-600 shadow-xl md:w-40 md:h-40 w-16 h-16 relative opacity-90'}
      onClick={() => { onClick(card.id) }}
    >
      {
        (card.isOpened || card.isFound) && <img className="object-contain w-full h-full rounded-lg" src={card.image} />
      }
    </div>
  )
}
