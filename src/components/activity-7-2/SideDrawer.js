import classes from './SideDrawer.module.css'

import { createPortal } from 'react-dom'

function SideDrawer({ toOpen, closeSidebarHandler }) {
  
  
  function closeHandler(e) {
    closeSidebarHandler()
  }


  if (!toOpen) {
    return <></>
  }



  return createPortal(
    <>
      <div onClick={closeHandler} className={classes.backdrop} />
      <aside className={classes.drawer}>
        <nav>
          <ul>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/products">All Products</a>
            </li>
            <li>
              <a href="/profile">Your Profile</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>,
    document.getElementById('dialogs')
  )
}

export default SideDrawer
