// import pages react
import HomePage from '../pages/HomePage.jsx';
import AboutPage from '../pages/AboutPage.jsx';

import { createBrowserRouter } from 'react-router-dom';
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
];

const Router = createBrowserRouter(routes);

export default Router;