import { createContext } from 'react'

const CartItemsContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
})

export default CartItemsContext
