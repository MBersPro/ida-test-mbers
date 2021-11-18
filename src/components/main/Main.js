import React, { useState, useEffect } from "react";
import Form from "./form/Form";
import Products from "./products/Products";
import { main } from "./Main.module.css";
import { v4 as uuidv4 } from "uuid";

const defaultChooser = () => {
  return (
    JSON.parse(localStorage.getItem("products")) || [
      {
        id: "id-1",
        name: "Наименование товара",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
        link: "https://news.fidller.com/wp-content/uploads/2021/05/Polaroid-Go_0.jpeg",
        price: "100500",
      },
      {
        id: "id-2",
        name: "Ещё одно наименование",
        description:
          "Ещё одно описание товара. Больше. Нужно больше. Еще большееееееееееееееееееееееееееееееееееееееееееееееееее!!!!!!!!!!!!",
        link: "https://news.fidller.com/wp-content/uploads/2021/05/Polaroid-Go_0.jpeg",
        price: "9482304823",
      },
    ]
  );
};

const Main = () => {
  const [products, setProducts] = useState(defaultChooser());

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    const id = uuidv4();
    setProducts((prev) => [...prev, { ...product, id }]);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => [...prev.filter((product) => product.id !== id)]);
  };

  return (
    <main className={main}>
      <Form addProduct={addProduct} />
      <Products products={products} deleteProduct={deleteProduct} />
    </main>
  );
};

export default Main;
