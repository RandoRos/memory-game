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
      className={'w-40 h-40 bg-gray-500 text-white'}
      onClick={() => { onClick(card.id) }}
    >
      {
        (card.isOpened) && <img src={card.image} />
      }
    </div>
  )
}
