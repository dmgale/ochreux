'use client'

import { Button } from '@/components/ui/button'
import { addItemToCart } from '@/lib/actions/cart.actions'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

interface AddToCartProps {
  item: {
    id: string
    title: string
    price: number | string
    quantity: number
    variant: string
    image: string
  }
  isInCart?: boolean
}

export default function AddToCart({ item, isInCart }: AddToCartProps) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleAddToCart = () => {
    startTransition(async () => {
      const result = await addItemToCart(item)

      if (result.success) {
        router.refresh()
      } else {
        console.error(result.message)
      }
    })
  }

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isInCart || isPending}
      className="w-full"
      variant={isInCart ? 'secondary' : 'default'}
    >
      {isPending ? 'Adding...' : isInCart ? 'Already in Cart' : 'Add to Cart'}
    </Button>
  )
}
