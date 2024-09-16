import { Link } from '@nextui-org/link'
import { button as buttonStyles } from '@nextui-org/theme'

import MovingWord from './MovingWord'

import { siteConfig } from '@/config/site'
import { title, subtitle } from '@/components/primitives'
import { GithubIcon } from '@/components/icons'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="justify-center inline-block max-w-xl text-center">
        <h1 className={title()}>Optimize Your &nbsp;</h1>
        <br />
        <h1 className={title({ color: 'violet' })}>Code&nbsp;</h1>
        <h1 className={title()}>for</h1>
        <MovingWord />
        <h2 className={subtitle({ class: 'mt-4' })}>
          Efficode is a tool that helps you optimize your code for performance,
          readability, and maintainability.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: 'primary',
            radius: 'full',
            variant: 'shadow',
          })}
          href={siteConfig.links.start}
        >
          Start
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: 'bordered', radius: 'full' })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  )
}
