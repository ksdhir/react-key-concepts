import { Link } from 'react-router-dom'

import { useLocation } from 'react-router-dom'
import { useState } from 'react'

import Events from '../components/activity-10-1/Events/Events'
import MainHeader from '../components/activity-10-1/MainHeader/MainHeader'

import CartItemsContext from '../store/CardItemsCtx'

const Activity101 = function () {
  const { state } = useLocation()

  const [cartItems, setCartItems] = useState([])

  function addItemHandler(item) {
    setCartItems((prevItems) => [...prevItems, item])
  }

  function removeItemHandler(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
  }

  // posting result

  const cartItemsCtxValue = {
    cartItems: cartItems,
    addToCart: addItemHandler,
    removeFromCart: removeItemHandler,
  }

  return (
    <div>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
      <h1>{state.pageName}</h1>
      <p>{state.description}</p>
      {/* container */}
      <section>
        <CartItemsContext.Provider value={cartItemsCtxValue}>
          <MainHeader />
          <main>
            <Events />
          </main>
        </CartItemsContext.Provider>
      </section>
    </div>
  )
}

export default Activity101
