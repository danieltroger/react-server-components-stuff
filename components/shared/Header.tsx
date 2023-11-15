'use client'
import config from '@/lib/config'
import Link from 'next/link'
import HeaderDescription from './HeaderDescription'
import {useSearchModal} from '@depict-ai/react-ui'

/**
 * The shared header component.
 */
export default function Header() {
  const {open} = useSearchModal({
    location: 'centered'
  })

  return (
    <header className="text-center sm:text-left">
      <button onClick={open}>Open search</button>
      <h1>
        <Link href="/">{config.siteName}</Link>
      </h1>

      <nav className="flex flex-row gap-4">
        {config.nav.map((item, index) => (
          <Link
            className="text-base underline hover:no-underline"
            key={index}
            href={{pathname: item.path}}
            prefetch={false}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <HeaderDescription />
    </header>
  )
}
