'use client'

import { H1 } from '@/components/ui/H1'
import { cn } from '@/lib/utils'
import { ReactTyped } from 'react-typed'

export default function Landing() {
  return (
    <>
      <H1>Efficoder:</H1>
      <br />
      <H1>
        Enhance your code &nbsp;
        <ReactTyped
          strings={[
            'Performance',
            'Reliability',
            'Maintainability',
            'Efficiency',
          ]}
          typeSpeed={100}
          backSpeed={50}
          loop
          className={cn(
            'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
            'text-neon-pink'
          )}
        />
      </H1>
    </>
  )
}
