//const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)) // Test Loader: Set below to async, await delay(2000)
import CartTable from './cart-table'
export const metadata = {
  title: 'Shopping Cart',
}

const CartPage = () => {
  return <CartTable />
}

// <ProductList data={cartData.products} title="Product options" />
export default CartPage
