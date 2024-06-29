import { ModeToggle } from '@/components/ui/mode-toggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex container h-14 max-w-screen-2xl items-center">
        <ModeToggle />
      </div>
    </header>
  )
}
