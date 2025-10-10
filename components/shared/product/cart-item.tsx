'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'

interface CartItemProps {
  id: string
  title: string
  variant: string
  image: string
  price: string | number
  quantity: number
  onDelete: (id: string) => void
  isDeleting?: boolean
}

export function CartItem({
  id,
  title,
  variant,
  image,
  price,
  onDelete,
  isDeleting = false,
}: CartItemProps) {
  const priceNumber = typeof price === 'string' ? parseFloat(price) : price

  return (
    <Card className="bg-[#F9F9FB] border-t border-[#D9D8DF] shadow-none w-full max-w-[702px] h-[114px] rotate-0 opacity-100 flex gap-4 rounded-2xl">
      <CardContent className="flex items-start gap-4 p-4 w-full">
        <div className="flex-shrink-0">
          <Image
            src={image}
            alt={title}
            width={80}
            height={80}
            unoptimized
            className="w-20 h-20 object-cover rounded-lg border border-[#D9D8DF]"
          />
        </div>

        <div className="flex-grow min-w-0">
          <div className="space-y-0.5">
            <h3 className="font-normal text-base leading-6 tracking-tight text-[#27252C]">
              {title}
            </h3>
            <p className="font-normal text-base leading-6 tracking-tight text-[#928EA2]">
              {variant}
            </p>
          </div>
        </div>

        {/* Right column - Trash icon and Price stacked vertically */}
        <div className="flex flex-col items-end justify-between h-full flex-shrink-0">
          {/* Remove Button - top right */}
          <button
            onClick={() => onDelete(id)}
            disabled={isDeleting}
            className="w-9 h-9 flex items-center justify-center hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
            aria-label="Remove item"
          >
            <Trash2 className="w-4 h-4 text-[#E02F2F]" />
          </button>
          {/* Price - bottom right */}
          <p className="font-medium text-base leading-6 tracking-tight text-right">
            ${priceNumber.toFixed(2)}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
