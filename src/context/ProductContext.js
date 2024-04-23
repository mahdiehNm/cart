import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

export const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]); //globalData

  useEffect(() => {
    // api.get("/products").then((res) => console.log(res));

    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

export default ProductsProvider;
export { useProducts };
