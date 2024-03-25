import { useContext } from 'react'
import dummyEvents from '../../../assets/data/dummy-events'
import EventItem from './EventItem.js'
import classes from './Events.module.css'
import CartItemsContext from '../../../store/CardItemsCtx.js'

function Events() {
  const usingCartContext = useContext(CartItemsContext)
  const cartItems = usingCartContext.cartItems
  const onAddItemToCart = usingCartContext.addToCart
  const onRemoveItemFromCart = usingCartContext.removeFromCart

  return (
    <ul className={classes.events}>
      {dummyEvents.map((event) => (
        <EventItem
          key={event.id}
          event={event}
          isInCart={cartItems.some((item) => item.id === event.id)}
          onAddToCart={() => onAddItemToCart(event)}
          onRemoveFromCart={() => onRemoveItemFromCart(event.id)}
        />
      ))}
    </ul>
  )
}

export default Events
