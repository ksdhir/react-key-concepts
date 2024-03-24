// import pages react
import HomePage from '../pages/HomePage.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import Activity41 from '../pages/Activity41.jsx'
import Activity42 from '../pages/Activity42.jsx'
import Activity51 from '../pages/Activity51.jsx'
import Activity52 from '../pages/Activity52.jsx'
import Activity71 from '../pages/Activity71.jsx'
import Activity72 from '../pages/Activity72.jsx'
import Chapter8 from '../pages/Chapter8.jsx'
import Activity81 from '../pages/Activity81.jsx'
import Chapter9 from '../pages/Chapter9.jsx'
import Activity91 from "../pages/Activity91.jsx"
import Activity101 from '../pages/Activity101.jsx'

import { createBrowserRouter } from 'react-router-dom'
// configs
const routes = [
  {
    path: '/',
    element: <HomePage />,
    exact: true,
  },
  {
    path: '/about',
    element: <AboutPage />,
    exact: true,
  },
  {
    path: '/activity-4-1',
    element: <Activity41 />,
    exact: true,
  },
  {
    path: '/activity-4-2',
    element: <Activity42 />,
    exact: true,
  },
  {
    path: '/activity-5-1',
    element: <Activity51 />,
    exact: true,
  },
  {
    path: '/activity-5-2',
    element: <Activity52 />,
    exact: true,
  },
  {
    path: '/activity-7-1',
    element: <Activity71 />,
    exact: true,
  },
  {
    path: '/activity-7-2',
    element: <Activity72 />,
    exact: true,
  },
  {
    path: '/chapter-8',
    element: <Chapter8 />,
    exact: true,
  },
  {
    path: '/activity-8-1',
    element: <Activity81 />,
    exact: true,
  },
  {
    path: '/chapter-9',
    element: <Chapter9 />,
    exact: true,
  },
  {
    path: '/activity-9-1',
    element: <Activity91 />,
  },
  {
    path: '/activity-10-1',
    element: <Activity101 />,
  }
]

const Router = createBrowserRouter(routes)

export default Router
