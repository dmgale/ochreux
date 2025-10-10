'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Product } from '@/types'
import Image from 'next/image'
import AddToCart from './add-to-cart'

const ProductCard = ({
  product,
  itemExists,
}: {
  product: Product
  itemExists: boolean
}) => {
  return (
    <Card className="w-full max-w-sm border-0 shadow-none flex flex-col h-full">
      <CardHeader className="p-0 flex items-center justify-center">
        <Image
          src={product.image as string}
          alt={product.title}
          height={200}
          width={200}
          priority={true}
          unoptimized
        />
      </CardHeader>
      <CardContent className="p-4 grid gap-4 flex-grow">
        <div className="text-xs">{product.title}</div>
        <div className="flex-between gap-4">
          <h2 className="text-sm font-medium">{product.variant}</h2>
          {product.quantity > 0 ? (
            <p className="font-bold">${product.price}</p>
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
      <div className="flex-center p-4 pt-0">
        <AddToCart
          item={{
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity,
            variant: product.variant,
            image: product.image as string,
          }}
          isInCart={itemExists}
        />
      </div>
    </Card>
  )
}

export default ProductCard
