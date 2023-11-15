import {ProductCard} from '@/components/ProductCard'
import {SearchPage} from '@depict-ai/react-ui'

export default function SearchPagePage() {
  return (
    <div className="search-page-wrapper">
      <SearchPage productCard={ProductCard} />
    </div>
  )
}
