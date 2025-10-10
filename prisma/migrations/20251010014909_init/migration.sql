/*
  Warnings:

  - You are about to drop the `Price` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Price" DROP CONSTRAINT "Price_productId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "price" DECIMAL(12,2) NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "public"."Price";
