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
      className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-slate-100 w-80 font-bold py-2 px-4 mb-5 rounded shadow-md'
      disabled={disabled}
      onClick={() => onClick(value) }
    >
      {text}
    </button>
  )
}
