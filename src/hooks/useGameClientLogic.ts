import { useState, useEffect } from 'react'
import { type Socket } from 'socket.io-client'
import { type Card } from '../types'
import { checkMatch } from '../utils/gameLogic'

interface Props {
  socket: Socket
  cards: Card[]
}

export const useGameClientLogic = (props: Props): any => {
  const { socket, cards } = props
  const [opened, setOpened] = useState<number[]>([])

  const handleCardClick = (id: number): void => {
    if (opened.length < 2) {
      setOpened([...opened, id])
      socket.emit('updateServerCards', cards.map(item => {
        if (item.id === id) {
          return { ...item, isOpened: true }
        }

        return item
      }))
    }
  }

  useEffect(() => {
    if (opened.length > 1) {
      const isMatch = checkMatch(cards, opened)
      if (isMatch) {
        socket.emit('updateServerCards', cards.map(item => {
          if (item.id === opened[0] || item.id === opened[1]) {
            return { ...item, isFound: true }
          }

          return item
        }))
        setOpened([])
        socket.emit('updateScore')
      } else {
        setTimeout(() => {
          socket.emit('updateServerCards', cards.map(item => ({ ...item, isOpened: false })))
          socket.emit('changeTurn')
          setOpened([])
        }, 1000)
      }
    }
  }, [opened])

  return { handleCardClick }
}
