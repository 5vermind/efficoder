'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Landing from './landing'

export default function Home() {
  const router = useRouter()

  return (
    <main>
      <div className="flex flex-col items-center justify-start ">
        <Landing />
      </div>
      <Button
        onClick={() => {
          router.push('/efficoder')
        }}
      >
        hi
      </Button>
    </main>
  )
}
