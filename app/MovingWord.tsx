'use client'

import React, { useState } from 'react'

import { title } from '@/components/primitives'

const titles = [
  'Performance',
  'Maintainability',
  'Security',
  'Readability',
  'Performance',
]

const MovingWord = () => {
  const [currentTitle, setCurrentTitle] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTitle((prev) => (prev + 1) % titles.length)
  //   }, 3000) // 3초마다 변경

  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div className="overflow-hidden flex flex-col h-[44px]">
      {titles.map((t, index) => (
        <h1 key={index} className={title({ animate: true, color: 'yellow' })}>
          {t}
        </h1>
      ))}
    </div>
  )
}

export default MovingWord
