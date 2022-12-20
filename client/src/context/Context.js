import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const resp = await axios.get(
        process.env.REACT_APP_API_URL + '/products?populate=*',
        {
          headers: {
            Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN,
          },
        }
      );
      const data = await resp.data;
      const featured = data.data
        .filter((product) => product.attributes.newArrival === true)
        .slice(0, 3);
      setProducts(data.data);
      console.log(data.data);
      setFeatured(featured);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <AppContext.Provider value={{products,featured,isLoading}}>{children}</AppContext.Provider>;
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext };
