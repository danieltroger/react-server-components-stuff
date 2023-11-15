'use client'
import {ImagePlaceholder, TextPlaceholder} from '@/lib/reactUIWrapped'
import Link from 'next/link'

export function ProductCard({display}) {
  const variant_to_show = display?.variant_displays?.[display?.variant_index]
  const url = new URL(
    'https://img.depict.ai/ResizeImage/stronger?format=webp&url=https%3A%2F%2Fstronger.centracdn.net%2Fclient%2Fdynamic%2Fimages%2F1578_658bc2355b-l-654_9106-leo-leggings_-leopard-03-original.jpg&width=1024'
  )
  url.searchParams.set('url', variant_to_show?.image_urls?.[0])

  return (
    <Link href={'/blog'}>
      <div style={{aspectRatio: 2 / 3}}>
        {variant_to_show ? (
          <img src={url.href} />
        ) : (
          <ImagePlaceholder width="100%" height="100%" />
        )}
      </div>
      <div>
        <span>
          {variant_to_show?.title || (
            <TextPlaceholder height="1em" width="10ch" />
          )}
        </span>
      </div>
    </Link>
  )
}
