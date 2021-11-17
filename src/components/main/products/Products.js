import React from 'react'
import Product from './product/Product';
import {ulProducts, liProducts} from "./products.module.css";
const Products = ({products}) => {
    return (
        <ul className={ulProducts}>
            {products.map((product) => (
                <li className={liProducts}>
                    <Product product={product}/>
                </li>
            ))}
        </ul>  
    );
}

export default Products;