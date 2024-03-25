import { Link } from 'react-router-dom'

import { useLocation } from 'react-router-dom'
import { useState } from 'react';

import Events from '../components/activity-10-1/Events/Events';
import MainHeader from '../components/activity-10-1/MainHeader/MainHeader';

const Activity101 = function () {

  const { state } = useLocation()

  const [cartItems, setCartItems] = useState([]);

  function addItemHandler(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function removeItemHandler(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  // posting result

  return (
    <div>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
      <h1>{state.pageName}</h1>
      <p>{state.description}</p>
      {/* container */}
      <section>
      <>
      <MainHeader cartItems={cartItems} />
      <main>
        <Events
          onAddItemToCart={addItemHandler}
          onRemoveItemFromCart={removeItemHandler}
          cartItems={cartItems}
        />
      </main>
    </>
      </section>
    </div>
  )
}

export default Activity101
