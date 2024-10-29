

import React from "react";
import { ProductStore } from "./store/product";
import CartStore from "./store/cart";
import ProductPage from "./components/ProductsComponents";
import Navbar from "./components/Navbar";
interface Data {
  id: number;
  title: string;
  price: number;
  Detail: string;
  Description: string;
  image?: string; 
}

function App() {
  const cartstore = CartStore();
  console.log(cartstore);

  const { product } = ProductStore();  
  console.log(product);

  return (
    <>
    <Navbar />
      <ProductPage />
    </>
  );
}

export default App;
