import React from "react";
import {divProduct, pProduct1, pProduct2, pProduct3, imgProduct, divProductP} from "./product.module.css";
const Product = ({ product }) => {
  return (
    <div className={divProduct}>
      <img src={product.link} alt={product.name} className={imgProduct} />
        <div className={divProductP}>
          <p className={pProduct1}>{product.name}</p>
          <p className={pProduct2}>{product.description}</p>
          <p className={pProduct3}><span>{product.price}</span> <span>руб.</span></p>
        </div>
    </div>
  );
};

export default Product;