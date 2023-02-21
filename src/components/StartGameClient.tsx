import React, { useState, useEffect } from 'react'
import { type Socket } from 'socket.io-client'
import { useGameClientLogic } from '../hooks/useGameClientLogic'
import { type Card, type Player } from '../types'
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
    <div>
      {
        (players.length < 2) && (<div>Waiting for other player...</div>)
      }
      {
        (players.length >= 2) && (
        <>
        {
          players.map(p => (
            <div key={p.id} className='flex items-center justify-between space-x-4'>
              <div>{p.name} <span>{p.isTurn ? '⭐️' : ''}</span></div>
              <div>{p.score}</div>
            </div>
          ))
          }
          <GameBoard cards={cards} handleCardClick={handleCardClick} isTurn={turn} />
          </>
        )
      }
    </div>
  )
}
