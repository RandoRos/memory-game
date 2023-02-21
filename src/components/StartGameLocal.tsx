import React, { useState } from 'react'

import { GameBoard } from './GameBoard'
import { useFetchImages, useGameSetup } from '../hooks'
import { type Player } from '../types'

interface Props {
  players: Player[]
}

export const StartGameLocal: React.FunctionComponent<Props> = props => {
  const { players } = props
  const photos = useFetchImages()
  const [score, setScore] = useState(0)

  const handleScore = (): void => {
    setScore(score + 1)
  }

  const { cards, handleCardClick } = useGameSetup({ photos, handleScore })

  return (
    <>
        {
          players.map(p => (
            <div key={p.id} className='flex items-center justify-between space-x-4'>
              <span>Player Name: {'Rando'}</span>
              <span>Score: {p.score}</span>
            </div>
          ))
        }
      <GameBoard cards={cards} handleCardClick={handleCardClick} isTurn={true} />
    </>
  )
}
