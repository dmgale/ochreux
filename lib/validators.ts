import { z } from 'zod'
import { formatNumberWithDecimal } from './utils'

// Accounds for number with decimal
const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    'Price must have exactly two decimal places'
  )

// Schema for inserting products
export const insertProductSchema = z.object({
  title: z.string().min(3, 'Name must be at least 3 characters'),
  variant: z.string().min(3, 'Brand must be at least 3 characters'),
  quantity: z.coerce.number(), //same as stock
  image: z
    .array(z.string())
    .min(1, 'Product must have at least one image')
    .optional()
    .or(z.literal('')),
  price: currency,
  currency: z.string().min(2, 'Name must be at least 2 characters'),
})

// Cart Schemas
export const cartItemSchema = z.object({
  id: z.string().min(1, 'Product is required'),
  title: z.string().min(1, 'Name is required'),
  variant: z.string().min(1, 'Slug is required'),
  quantity: z.number().int().nonnegative('Quantity must be a positive number'),
  image: z.string(),
  price: currency,
})

export const insertCartSchema = z.object({
  items: z.array(cartItemSchema),
  itemsPrice: currency,
  totalPrice: currency,
})
