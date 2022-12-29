import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Category from './pages/Category';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import './firebase/config';
import { setProds } from './redux/features/prodSlice';

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
  const dispatch = useDispatch()
  const getProds = async () => {
    const prodsArray = [];
    const querydb = getFirestore();
    const queryDoc = await getDocs(collection(querydb, 'products'));
    queryDoc.forEach((doc) => {
      const prod = {
        id: doc.id,
        ...doc.data(),
      };
      prodsArray.push(prod);
    });
    dispatch(setProds(prodsArray))
  };
  
  useEffect( () => {
    getProds();
  }, []);

  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
