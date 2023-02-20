import React from 'react'

import { MainMenu } from './components/MainMenu'
import { StartGame } from './components/StartGame'
import { Multiplayer } from './components/Multiplayer'

import './App.css'

function App (): React.FunctionComponentElement<unknown> {
  const [mode, setMode] = React.useState<string | null>(null)

  return (
    <div className='md:mx-44 md:my-12 mx-10 my-6'>
      {
        (!mode) && (
          <>
            <h1 className='text-4xl text-center mb-10'>Memory Game</h1>
            <MainMenu handleModeChange={setMode} />
          </>
        )
      }
      {
        (mode === 'single') && (
          <StartGame />
        )
      }
      {
        (mode === 'multiplayer') && (
          <Multiplayer />
        )
      }
    </div>
  )
}

export default App
