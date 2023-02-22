import React, { useEffect, useState } from 'react'

interface TopPlayer {
  name: string
  score: number
  date: Date
}

export const HallOfFame: React.FunctionComponent = () => {
  const [players, setPlayers] = useState<TopPlayer[]>([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_MEMORY_API ?? ''}/api/topPlayers`)
      .then(async response => await response.json())
      .then((data: TopPlayer[]) => setPlayers(data.map(item => ({ ...item, date: new Date(item.date) }))))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="text-center text-slate-100">
      <div className="text-4xl font-bold">Hall of Fame</div>
      <p>Best top 10 players</p>
      <div className="relative overflow-x-auto shadow-md rounded-lg mt-8">
        <table className="w-full text-sm text-center text-slate-100">
          <thead className="text-xs uppercase bg-gradient-to-r from-pink-500 to-blue-500">
            <tr>
              <th scope="col" className="px-6 py-2">Player name</th>
              <th scope="col" className="px-6 py-2">Score</th>
              <th scope="col" className="px-6 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {
              players.map((player, index) => (
                <tr key={index} className={`${index !== players.length - 1 ? 'border-b' : ''} bg-gradient-to-r from-pink-400 to-blue-400 border-blue-100`}>
                  <th scope="row" className="px-6 py-3 font-medium whitespace-nowrap">
                      { player.name }
                  </th>
                  <td className="px-6 py-3">
                      { player.score }
                  </td>
                  <td className="px-6 py-3 min-w-10">
                      {`${player.date.getFullYear()}-${player.date.getMonth() + 1}-${player.date.getDate()}`}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
