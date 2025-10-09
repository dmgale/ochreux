import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Product } from '@/types'
import Image from 'next/image'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-centre">
        <Image
          src={product.image}
          alt={product.title}
          height={300}
          width={300}
          priority={true}
        />
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.title}</div>
        <div className="flex-between gap-4">
          <h2 className="text-sm font-medium">{product.variant}</h2>
          {product.quantity > 0 ? (
            <p className="font-bold">${product.price.value}</p>
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
