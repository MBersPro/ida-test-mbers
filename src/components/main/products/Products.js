import React from 'react'
import Product from './product/Product';
import {ulProducts, liProducts} from "./products.module.css";
const Products = ({ products, deleteProduct }) => {

    return (
      <ul className={ulProducts}>
        {products.map((product) => (
          <li key={product.id} className={liProducts}>
            <Product product={product} deleteProduct={deleteProduct} />
          </li>
        ))}
      </ul>
    );
}

export default Products;