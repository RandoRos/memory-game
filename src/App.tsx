import React from 'react'

import { MainMenu } from './components/MainMenu'
import { StartGameLocal } from './components/StartGameLocal'
import { Multiplayer } from './components/Multiplayer'

import './App.css'

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
            <StartGameLocal players={[{ id: '123', score: 0, name: 'Anon', isTurn: true }]} />
          )
        }
        {
          (mode === 'multiplayer') && (
            <Multiplayer />
          )
        }
      </div>
    </div>
  )
}

export default App
