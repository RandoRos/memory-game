import React from 'react'
import { type Player } from '../../types'

interface Props {
  players: Player[]
}

export const PlayerMenu: React.FunctionComponent<Props> = props => {
  const { players } = props

  if (players.length === 0) return null

  return (
    <div className='bg-slate-100 border border-black rounded-xl p-2 mb-5 shadow-xl'>
      {
        players.map(p => (
          <div key={p.id} className='flex items-center justify-between space-x-4 text-black'>
            <div>{p.name} <span>{p.isTurn ? '⭐️' : ''}</span></div>
            <div>{p.score}</div>
          </div>
        ))
      }
    </div>
  )
}
