'use server'

import { CartItem } from '@/types'
import { Prisma, PrismaClient } from '@prisma/client'
import { convertToPlainObject, round2 } from '../utils'
import { cartItemSchema, insertCartSchema } from '../validators'

const prisma = new PrismaClient()

// Calculate cart prices
const calcPrice = (items: CartItem[]) => {
  const itemsPrice = round2(
      items.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0)
    ),
    totalPrice = round2(itemsPrice)

  return {
    itemsPrice: itemsPrice.toFixed(2),
    totalPrice: totalPrice.toFixed(2),
  }
}

export async function addItemToCart(data: CartItem) {
  try {
    // Get cart
    const cart = await getMyCart()
    console.log('addItemToCart', data)

    // Parse and validate item
    const item = cartItemSchema.parse(data)

    // Find product in database
    const product = await prisma.product.findFirst({
      where: { id: item.id },
    })
    if (!product) throw new Error('Product not found')

    if (!cart) {
      // Create new cart object
      const newCart = insertCartSchema.parse({
        items: [item],

        ...calcPrice([item]),
      })

      // Add to database
      await prisma.cart.create({
        data: newCart,
      })

      return {
        success: true,
        message: `${product.title} added to cart`,
      }
    } else {
      // Check if item is already in cart
      const existItem = (cart.items as CartItem[]).find((x) => x.id === item.id)

      if (existItem) {
        //Check stock
        if (existItem.quantity + 1) {
          throw new Error('Not enough stock')
        }

        // Increase the quantity
        ;(cart.items as CartItem[]).find((x) => x.id === item.id)!.quantity =
          existItem.quantity + 1
      } else {
        // If item does not exist in cart
        // Check stock
        // if (product.quantity < 1) throw new Error('Not enough stock')

        // Add item to the cart.items
        cart.items.push(item)
      }

      // Save to database
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: cart.items as Prisma.CartUpdateitemsInput[],
          ...calcPrice(cart.items as CartItem[]),
        },
      })

      return {
        success: true,
        message: `${product.title} ${
          existItem ? 'updated in' : 'added to'
        } cart`,
      }
    }
  } catch (error) {
    return {
      success: false,
      message: console.log('not added', error),
    }
  }
}

export async function getMyCart() {
  // Get the FIRST cart from database (you'll need user sessions later)
  const cart = await prisma.cart.findFirst()
  console.log('geMyCart', cart)
  if (!cart) return null

  // Convert decimals and return
  return convertToPlainObject({
    ...cart,
    items: cart.items as CartItem[],
    itemsPrice: cart.itemsPrice?.toString() ?? '0',
    totalPrice: cart.totalPrice?.toString() ?? '0',
  })
}

export async function removeItemFromCart(productId: string) {
  try {
    // Get Product
    const product = await prisma.product.findFirst({
      where: { id: productId },
    })
    if (!product) throw new Error('Product not found')

    // Get user cart
    const cart = await getMyCart()
    if (!cart) throw new Error('Cart not found')

    // Check for item
    const exist = (cart.items as CartItem[]).find((x) => x.id === productId)
    if (!exist) throw new Error('Item not found')

    // Check if only one in qty
    if (exist.quantity === 1) {
      // Remove from cart
      cart.items = (cart.items as CartItem[]).filter((x) => x.id !== exist.id)
    } else {
      // Decrease qty
      ;(cart.items as CartItem[]).find((x) => x.id === productId)!.quantity =
        exist.quantity - 1
    }

    // Update cart in database
    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: cart.items as Prisma.CartUpdateitemsInput[],
        ...calcPrice(cart.items as CartItem[]),
      },
    })

    return {
      success: true,
      message: `${product.title} was removed from cart`,
    }
  } catch (error) {
    return { success: false, message: console.log(error) }
  }
}
