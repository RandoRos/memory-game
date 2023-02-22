import React, { useState, useEffect } from 'react'
import { type Socket } from 'socket.io-client'
import { useGameClientLogic } from '../hooks/useGameClientLogic'
import { type Card, type Player } from '../types'
import { PlayerMenu } from './game-components/PlayerMenu'
import { GameBoard } from './GameBoard'

interface Props {
  socket: Socket
  handleCardClick: (id: number) => void
}

export const StartGameClient: React.FunctionComponent<Props> = props => {
  const { socket } = props
  const [players, setPlayers] = useState<Player[]>([])
  const [cards, setCards] = useState<Card[]>([])
  const [turn, setTurn] = useState<boolean>(false)

  const { handleCardClick } = useGameClientLogic({ socket, cards })

  useEffect(() => {
    socket.on('update', (data: Player[]) => {
      setTurn(data.find(item => item.id === socket.id)?.isTurn ?? false)
      setPlayers(data)
    })
    socket.on('updateClientCards', (data: Card[]) => {
      setCards(data)
    })
  }, [])

  return (
    <div className="text-slate-100">
      {
        (players.length < 2) && (<div className="font-bold">Waiting for other player...</div>)
      }
      {
        (players.length >= 2) && (
          <>
            <PlayerMenu players={players}/>
            <GameBoard cards={cards} handleCardClick={handleCardClick} isTurn={turn} />
          </>
        )
      }
    </div>
  )
}
