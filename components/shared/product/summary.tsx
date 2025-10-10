'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface CartSummaryProps {
  totalItems: number
  subtotal: number
}

export function CartSummary({ subtotal }: CartSummaryProps) {
  return (
    <Card className="w-full lg:w-[400px] lg:max-w-[400px] rounded-2xl border border-[#D9D8DF] bg-white">
      <CardContent className="p-4 flex flex-col gap-4">
        <div
          className="text-[#27252C] font-medium text-base leading-6 tracking-tight"
          style={{ fontFamily: 'Inter' }}
        >
          Order Summary
        </div>

        <div className="flex justify-between gap-4">
          <span
            className="text-[#27252C] font-normal text-base leading-6 tracking-tight"
            style={{ fontFamily: 'Inter' }}
          >
            Total
          </span>
          <span
            className="text-[#27252C] font-normal text-base leading-6 tracking-tight"
            style={{ fontFamily: 'Inter' }}
          >
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <Button
          className="w-full h-10 px-6 bg-[#B9B6C3] hover:bg-[#928EA2] text-white rounded-lg font-normal text-base leading-6 tracking-tight"
          style={{ fontFamily: 'Inter' }}
        >
          Proceed to Checkout
        </Button>
      </CardContent>
    </Card>
  )
}
