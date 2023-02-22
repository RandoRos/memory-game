import React from 'react'

import { MainMenu } from './components/MainMenu'
import { StartGameLocal } from './components/StartGameLocal'
import { Multiplayer } from './components/Multiplayer'

import './App.css'
import { HallOfFame } from './components/HallOfFame'

function App (): React.FunctionComponentElement<unknown> {
  const [mode, setMode] = React.useState<string | null>(null)

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="m-auto">
        {
          (!mode) && (
            <MainMenu handleModeChange={setMode} />
          )
        }
        {
          (mode === 'single') && (
            <StartGameLocal players={[{ id: '123', score: 0, name: 'Player', isTurn: true }]} />
          )
        }
        {
          (mode === 'multiplayer') && (
            <Multiplayer />
          )
        }
        {
          (mode === 'hall') && (
            <HallOfFame />
          )
        }
      </div>
    </div>
  )
}

export default App
