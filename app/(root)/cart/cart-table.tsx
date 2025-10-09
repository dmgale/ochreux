'use client'

import {
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Table } from 'lucide-react'

const CartTable = () => {
  return (
    <>
      <h1 className="py-4 h2 bold">Shopping Cart</h1>

      <div className="grid md:grid-cols-4 md:gap5">
        <div className="overflow-x-aitp md:col-span3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>

                <TableHead className="text-center">Quanitity</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <p>Items</p>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default CartTable
