'use client'
import {ImagePlaceholder, TextPlaceholder} from '@/lib/reactUIWrapped'
import Link from 'next/link'

export function ProductCard({display}: {display: NewStrongerDisplay | null}) {
  const variant_to_show = display?.variant_displays?.[display?.variant_index]
  const url = new URL(
    'https://img.depict.ai/ResizeImage/stronger?format=webp&url=https%3A%2F%2Fstronger.centracdn.net%2Fclient%2Fdynamic%2Fimages%2F1578_658bc2355b-l-654_9106-leo-leggings_-leopard-03-original.jpg&width=1024'
  )
  url.searchParams.set('url', variant_to_show?.image_urls?.[0])

  return (
    <Link
      href={'/blog'}
      style={{display: 'flex', gap: '5px', flexDirection: 'column'}}
    >
      <div style={{aspectRatio: 2 / 3}}>
        {variant_to_show ? (
          <img src={url.href} />
        ) : (
          <ImagePlaceholder width="100%" height="100%" />
        )}
      </div>
      <div>
        <span>
          {variant_to_show?.title || ( // most product cards have two rows of text so this needs to be two rows high for scroll restoration to work
            <>
              <TextPlaceholder height="1em" width="10ch" />
              <TextPlaceholder height="1em" width="10ch" />
            </>
          )}
        </span>
      </div>
    </Link>
  )
}

export interface NewStrongerDisplay
  extends SearchResult,
    ProductListingResult,
    Recommendation {
  variant_index: number
  variant_displays: NewStrongerVariantDisplay[]
  variant_skus: string[]
  variant_product_ids: string[]
  search_result_id: string
}

export interface NewStrongerVariantDisplay {
  badge?: Badge
  title: string
  product_type: string
  in_stock: boolean
  original_price: number
  sale_price: number
  currency: Currency
  product_id: string
  hover_image_url: string
  image_urls: string[]
  item_group_id: string
  handle: string
  size: Size
  transaction_product_id: string
  sku: string
}

type Badge = 'NYHET' | 'TRENDAR' | 'RECYCLED'

type Currency = 'SEK'

type Size = 'Onesize' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXS'

interface SearchResult {
  search_result_id: string
}

interface ProductListingResult {
  product_listing_result_id: string
}

interface Recommendation {
  recommendation_id: string
}
