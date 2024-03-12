import '../styles/Activity72.css'
import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import Form from '../components/activity-7-1/Form'

import SideDrawer from '../components/activity-7-2/SideDrawer'
import { useState } from 'react'

const Activity72 = function () {
  const [openSideDrawer, setOpenSideDrawer] = useState(false)

  function closeSidebarHandler() {
    setOpenSideDrawer(() => false)
  }

  return (
    <div>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
      <h1>Activity 7.2</h1>
      <p>Add a Side-Drawer</p>
      <div>
        <div className="drawer-app">
          <h1>Open side drawer</h1>
          <div>
            <button
              onClick={(e) => {
                setOpenSideDrawer(() => true)
              }}
            >
              To Open
            </button>
          </div>
        </div>
      </div>
      <SideDrawer
        toOpen={openSideDrawer}
        closeSidebarHandler={closeSidebarHandler}
      />
    </div>
  )
}

export default Activity72
