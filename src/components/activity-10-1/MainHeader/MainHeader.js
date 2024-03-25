import { useContext, useState } from 'react';

import Cart from '../Cart/Cart';
import classes from './MainHeader.module.css';

import CartItemsContext from '../../../store/CardItemsCtx';

function MainHeader() {

  const usingCardContext = useContext(CartItemsContext);
  const cartItems = usingCardContext.cartItems;

  const [modalIsOpen, setModalIsOpen] = useState();

  function openCartModalHandler() {
    setModalIsOpen(true);
  }

  function closeCartModalHandler() {
    setModalIsOpen(false);
  }

  const numCartItems = cartItems.length;

  return (
    <>
      <header className={classes.header}>
        <h1>StateEvents Shop</h1>
        <button onClick={openCartModalHandler}>Cart ({numCartItems})</button>
      </header>
      {modalIsOpen && <Cart onClose={closeCartModalHandler} items={cartItems} />}
    </>
  );
}

export default MainHeader;