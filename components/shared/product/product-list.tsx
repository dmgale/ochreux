import { Product } from '@/types'
import ProductCard from './product-card'

const ProductList = ({
  data,
  title,
  cartItemIds,
}: {
  data: Product[]
  title?: string
  cartItemIds: string[]
}) => {
  return (
    <div className="my-10">
      {title && <h2 className="h2-bold mb-4">{title}</h2>}

      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {data.map((product: Product) => {
            const isInCart = cartItemIds.includes(product.id)

            return (
              <ProductCard
                key={product.id}
                product={product}
                itemExists={isInCart}
              />
            )
          })}
        </div>
      ) : (
        <p className="text-muted-foreground">No products found.</p> // <-- Better fallback
      )}
    </div>
  )
}

export default ProductList
