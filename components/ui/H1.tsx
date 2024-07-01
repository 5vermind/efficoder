import { cn } from '@/lib/utils'

interface H1 {
  children: React.ReactNode
}

export function H1({ children }: Readonly<H1>) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        'text-primary'
      )}
    >
      {children}
    </h1>
  )
}
