import {
  CartWithFlatPrice,
  CartWithNestedPrice,
  ProductWithFlatPrice,
  ProductWithNestedPrice,
} from '@/types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//Format number with decimal
export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split('.')
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`
}

//Convert Prisma {} to Regular {}
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value))
}

export function flattenCartProducts(
  products: ProductWithNestedPrice[]
): ProductWithFlatPrice[] {
  return products.map((product) => ({
    id: product.id,
    title: product.title,
    variant: product.variant,
    image: product.image,
    price: product.price.value,
    currency: product.price.currency,
    quantity: product.quantity,
  }))
}

export function flattenCart(cart: CartWithNestedPrice): CartWithFlatPrice {
  return {
    products: flattenCartProducts(cart.products),
  }
}

// Round number to 2 decimal places
export function round2(value: number | string) {
  if (typeof value === 'number') {
    return Math.round((value + Number.EPSILON) * 100) / 100
  } else if (typeof value === 'string') {
    return Math.round((Number(value) + Number.EPSILON) * 100) / 100
  } else {
    throw new Error('Value is not a number or string')
  }
}

const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  style: 'currency',
  minimumFractionDigits: 2,
})

// Format currency using the formatter above
export function formatCurrency(amount: number | string | null) {
  if (typeof amount === 'number') {
    return CURRENCY_FORMATTER.format(amount)
  } else if (typeof amount === 'string') {
    return CURRENCY_FORMATTER.format(Number(amount))
  } else {
    return 'NaN'
  }
}
