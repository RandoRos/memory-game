import React from 'react'

interface Props {
  value: string
  styles?: string
  text: string
  disabled?: boolean
  onClick: (mode: string) => void
}

export const MenuButton: React.FunctionComponent<Props> = props => {
  const { text, disabled, value, onClick } = props
  return (
    <button
      value={value}
      className='w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-5 rounded'
      disabled={disabled}
      onClick={() => onClick(value) }
    >
      {text}
    </button>
  )
}
