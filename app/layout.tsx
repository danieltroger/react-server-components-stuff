import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import config from '@/lib/config'
import {ReactChildren} from '@/lib/types'
import {Metadata} from 'next'
import './globals.scss'
import {DepictProvider} from '@depict-ai/react-ui'

//process.kill(process.pid, 'SIGUSR1');
//await new Promise(r => setTimeout(r, 5000));

/**
 * Default metadata.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata
 */
export const metadata: Metadata = {
  title: config.siteName,
  description: config.siteDescription
}

/**
 * The homepage root layout.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/layout
 */
export default function RootLayout({children}: ReactChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        <DepictProvider
          merchant="stronger"
          market="se"
          search={{searchPagePath: '/search'}}
        >
          <Header />
          {children}
          <Footer />
        </DepictProvider>
      </body>
    </html>
  )
}
