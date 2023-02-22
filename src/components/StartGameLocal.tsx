import React from 'react'

import { GameBoard } from './GameBoard'
import { useFetchImages, useGameSetup } from '../hooks'
import { PlayerMenu, Loading } from './game-components'
import { type Player } from '../types'

interface Props {
  players: Player[]
}

export const StartGameLocal: React.FunctionComponent<Props> = props => {
  const { players } = props
  const photos = useFetchImages()

  const handleScore = (): void => {
    players[0].score += 1
  }

  const { cards, handleCardClick } = useGameSetup({ photos, handleScore })

  if (cards.length === 0) return <Loading />

  return (
    <>
      <PlayerMenu players={players} />
      <GameBoard cards={cards} handleCardClick={handleCardClick} isTurn={true} />
    </>
  )
}
