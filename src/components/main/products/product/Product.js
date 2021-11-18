import React from "react";
import {
  divProduct,
  name,
  description,
  link,
  imgProduct,
  divProductP,
  deliteBtn,
} from "./product.module.css";

const Product = ({ product, deleteProduct }) => {

  const onDelete = (id) => {
    deleteProduct(id)
  }

  return (
    <div className={divProduct}>
      <img src={product.link} alt={product.name} className={imgProduct} />
      <div className={divProductP}>
        <p className={name}>{product.name}</p>
        <p className={description}>{product.description}</p>
        <p className={link}>
          <span>{product.price}</span> <span>руб.</span>
        </p>
      </div>
      <button
        className={deliteBtn}
        type="button"
        id={product.id}
        onClick={() => onDelete(product.id)}
      >
        X
      </button>
    </div>
  );
};

export default Product;
