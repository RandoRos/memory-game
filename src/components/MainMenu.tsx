import React from 'react'

import { MenuButton } from './menu/MenuButton'

interface Props {
  handleModeChange: (mode: string) => void
}

export const MainMenu: React.FunctionComponent<Props> = props => {
  const { handleModeChange } = props
  const handleClick = (mode: string): void => {
    handleModeChange(mode)
  }

  return (
    <>
      <h1 className='text-4xl text-center mb-10 text-slate-100 font-bold'>Memory Game</h1>
      <div className='flex flex-col w-1/2 justify-center'>
        <MenuButton text='Singleplayer Mode' value="single" onClick={handleClick}/>
        <MenuButton text='Multiplayer Mode' value="multiplayer" onClick={handleClick}/>
        <MenuButton text='Leaderboard' value="leaderboard" onClick={handleClick}/>
      </div>
    </>
  )
}
