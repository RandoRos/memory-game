import React, { useState } from 'react'
import io, { type Socket } from 'socket.io-client'
import { useFetchImages, useGameLocalLogic } from '../hooks'
import { MultiplayerMenu } from './multiplayer/components'
import { StartGameClient } from './StartGameClient'

export const Multiplayer: React.FunctionComponent = () => {
  const [socket, setSocket] = useState<Socket>()

  const handleScore = (): void => {}
  const photos = useFetchImages()
  const { cards } = useGameLocalLogic({ photos, handleScore })

  const handleCreate = (playerName?: string): void => {
    const ws = io(process.env.REACT_APP_MEMORY_API ?? '')
    ws.emit('createServer', cards)
    ws.emit('newPlayer', playerName)
    setSocket(ws)
  }

  const handleJoin = (playerName?: string, serverId?: string): void => {
    const ws = io(process.env.REACT_APP_MEMORY_API ?? '')
    ws.emit('newPlayer', playerName)
    setSocket(ws)
  }

  return (
    <>
      {
        (!socket) && (<MultiplayerMenu handleCreate={handleCreate} handleJoin={handleJoin} />)
      }
      {
        (socket != null) && (
          <StartGameClient socket={socket} />
        )
      }
    </>
  )
}
