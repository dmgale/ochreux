import { Product } from '@/types'
import ProductCard from './product-card'

const ProductList = ({ data, title }: { data: Product[]; title?: string }) => {
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grids-cols-4 lg:grids-cols-4 gap-4">
          {data.map((product: Product) => (
            // eslint-disable-next-line react/jsx-key
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default ProductList
