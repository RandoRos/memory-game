export interface Image {
  id: number
  image: string
}

export interface PhotoObject {
  id: number
  src: string
}

export interface Card {
  id: number
  cardId: number
  image: string
  isOpened: boolean
  isFound: boolean
}
