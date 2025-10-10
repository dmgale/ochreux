'use client'

import { removeItemFromCart } from '@/lib/actions/cart.actions'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { CartItem } from './cart-item'

interface CartItemData {
  id: string
  title: string
  variant: string
  image: string
  price: string | number
  quantity: number
}

interface CartItemsProps {
  items: CartItemData[]
}

export default function CartList({ items }: CartItemsProps) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleDelete = async (itemId: string) => {
    startTransition(async () => {
      const result = await removeItemFromCart(itemId)

      if (result.success) {
        router.refresh()
      } else {
        console.error(result.message)
      }
    })
  }

  if (!items || items.length === 0) {
    return (
      <div className="text-center py-8 text-[#928EA2]">Your cart is empty</div>
    )
  }

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          variant={item.variant}
          image={item.image}
          price={item.price}
          quantity={item.quantity}
          onDelete={handleDelete}
          isDeleting={isPending}
        />
      ))}
    </div>
  )
}
