import React, { useState } from 'react'

import { type Card } from '../types'

interface Props {
  card: Card
  isTurn: boolean
  onClick: (id: number) => void
}

export const GameCard: React.FunctionComponent<Props> = props => {
  const { card, isTurn, onClick } = props
  const [playAnimation, setPlayAnimation] = useState<boolean>(false)

  const handleClick = (): void => {
    if (isTurn && !playAnimation && !card.isOpened && !card.isFound) {
      setPlayAnimation(true)
      if (card.isFound) {
        return
      }
      onClick(card.id)
    }
  }

  return (
    <div
      className={
        `${playAnimation ? 'animate-flip' : ''} rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl md:w-40 md:h-40 w-16 h-16 opacity-90 cursor-pointer`
      }
      onClick={handleClick}
      onAnimationEnd={() => setPlayAnimation(false)}
    >
      {
        (!playAnimation && (card.isOpened || card.isFound)) && <img className="object-contain w-full h-full rounded-lg shadow-xl shadow-black/40" src={card.image} />
      }
    </div>
  )
}
