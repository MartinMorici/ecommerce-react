import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Category from './pages/Category';
import './App.css'

const SharedLayout = () => {
  return (
    <div className='App'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category/:id',
        element: <Category />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
