import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Category from './pages/Category';
import './App.css'
import { AppProvider } from './context/Context';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProds } from './redux/features/prodSlice';


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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProds());
  }, [])

  

  return (
    <div className='App'>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </div>
  );
}

export default App;
