import {
  cartItemSchema,
  insertCartSchema,
  insertProductSchema,
} from '@/lib/validators'
import { z } from 'zod'

export type Product = z.infer<typeof insertProductSchema> & {
  id: string
  createdAt?: Date
}

export type ProductData = {
  id: string
  title: string
  variant: string
  quantity: number
  price: string
  image: string
  currency: string
  createdAt: Date
}

export type Cart = z.infer<typeof insertCartSchema>
export type CartItem = z.infer<typeof cartItemSchema>

// Data Normalisation / Flattening to ease with Prisma DB (avoiding nested objects)

export interface NestedPrice {
  currency: string
  value: number
}

export interface ProductWithNestedPrice {
  id: string
  title: string
  variant: string
  image: string
  price: NestedPrice
  quantity: number
}

export interface ProductWithFlatPrice {
  id: string
  title: string
  variant: string
  image: string
  price: number
  currency: string
  quantity: number
}

export interface CartWithNestedPrice {
  products: ProductWithNestedPrice[]
}

export interface CartWithFlatPrice {
  products: ProductWithFlatPrice[]
}
