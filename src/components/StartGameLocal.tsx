import React from 'react'

import { GameBoard } from './GameBoard'
import { useFetchImages, useGameLocalLogic } from '../hooks'
import { PlayerMenu, Loading } from './game-components'
import { type Player } from '../types'
import { checkWin } from '../utils/gameLogic'

interface Props {
  players: Player[]
}

export const StartGameLocal: React.FunctionComponent<Props> = props => {
  const { players } = props
  const photos = useFetchImages()

  const handleScore = (): void => {
    players[0].score += 1
  }

  const { cards, handleCardClick } = useGameLocalLogic({ photos, handleScore })

  if (cards.length === 0) return <Loading />
  if (checkWin(cards)) return <div className="text-slate-100 font-bold">You win!</div>

  return (
    <>
      <PlayerMenu players={players} />
      <GameBoard cards={cards} handleCardClick={handleCardClick} isTurn={true} />
    </>
  )
}
