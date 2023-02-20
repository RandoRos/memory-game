import React, { useState } from 'react'

import { GameBoard } from './GameBoard'
import { useFetchImages } from '../hooks/useFetchImages'

export const StartGame: React.FunctionComponent = () => {
  const photos = useFetchImages()
  const [score, setScore] = useState(0)

  const handleScore = (): void => {
    setScore(score + 1)
  }

  return (
    <>
      <div>
        <div className='flex items-center justify-between space-x-4'>
          <span>Player Name: {'Rando'}</span>
          <span>Score: {score}</span>
        </div>
      </div>
      <GameBoard photos={photos} handleScore={handleScore} />
    </>
  )
}
