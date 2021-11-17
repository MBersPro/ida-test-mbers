import React, { useState } from "react";
import Form from "./form/Form";
import Products from "./products/Products";
import { main } from "./Main.module.css";

const Main = () => {
  const [products, setProduct] = useState([]);

  const addProduct = (product) => {
    setProduct((prev) => [...prev, product]);
  };
  return (
    <main className={main}>
      <Form addProduct={addProduct} />
      <Products products={products} />
    </main>
  );
};

export default Main;
