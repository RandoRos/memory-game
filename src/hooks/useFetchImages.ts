import React, { useEffect } from 'react'
import { type ImageResponse, type Photo, type PhotoObject } from '../types'

const BASE_URL = 'https://api.pexels.com/v1/search'

export const useFetchImages = (): PhotoObject[] => {
  const [images, setImages] = React.useState<PhotoObject[]>([])

  const buildUrl = (): URL => {
    const url = new URL(BASE_URL)
    url.searchParams.append('query', 'nature')
    url.searchParams.append('orientation', 'square')
    url.searchParams.append('size', 'small')
    url.searchParams.append('per_page', '16')
    return url
  }

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(buildUrl(), {
          headers: {
            Authorization: process.env.REACT_APP_PEXELS_API_KEY ?? ''
          }
        })
        const json: ImageResponse = await response.json()
        setImages(json.photos.map((photo: Photo) => ({ id: photo.id, src: photo.src.small })))
      } catch (error) {
        console.error(error)
      }
    }
    fetchData().catch(console.error)
  }, [])

  return images
}
