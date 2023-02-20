export interface Photo {
  id: number
  photographer: string
  src: Record<string, string>
  url: string
}

export interface ImageResponse {
  photos: Photo[]
  total_results: number
}
