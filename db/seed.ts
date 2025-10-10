// db/seed.ts
import { PrismaClient } from '@prisma/client'
import cartData from './cart-data'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.product.deleteMany()

  console.log('🗑️  Cleared existing data')

  // Seed products from cartData
  for (const product of cartData) {
    await prisma.product.create({
      data: {
        id: product.id,
        title: product.title,
        variant: product.variant,
        image: product.image,
        quantity: product.quantity,
        price: product.price,
        createdAt: new Date(),
      },
    })
  }
  console.log(`Seeded ${cartData.length} products successfully`)
}
main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
