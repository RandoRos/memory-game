import React from 'react'

import { GameBoard } from './components/GameBoard'
import { useFetchImages } from './hooks/useFetchImages'

import './App.css'

function App (): React.FunctionComponentElement<unknown> {
  const photos = useFetchImages()

  return (
    <GameBoard photos={photos}/>
  )
}

export default App
