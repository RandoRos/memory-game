import React, { createRef } from 'react'

interface Props {
  handleJoin: (playerName?: string, serverId?: string) => void
  handleCreate: (playerName?: string) => void
}

export const MultiplayerMenu: React.FunctionComponent<Props> = props => {
  const { handleJoin, handleCreate } = props
  const serverId = createRef<HTMLInputElement>()
  const playerName = createRef<HTMLInputElement>()

  return (
    <div className="w-80">
      <h1 className='text-4xl mb-10 text-center text-slate-100 font-bold'>Multiplayer</h1>
      <input
        className="bg-cyan-600 text-slate-100 placeholder-slate-100 p-2 rounded-lg w-full"
        placeholder="Enter your name"
        ref={playerName}
      />
      <div className='flex flex-col'>
        <div>
          <input
            className='bg-cyan-600 text-slate-100 placeholder-slate-100 p-2 rounded-lg w-full mt-5'
            placeholder='Enter server id'
            ref={serverId}
          />
        </div>
        <div className="flex flex-row mt-10 justify-between">
          <button
            className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 text-slate-100 rounded-lg w-32'
            onClick={() => handleJoin(playerName.current?.value, serverId.current?.value)}
          >
            Join
          </button>
          <button
            className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 text-slate-100 rounded-lg w-36'
            onClick={() => handleCreate(playerName.current?.value)}
          >
            Create Server
          </button>
        </div>
      </div>
    </div>
  )
}
