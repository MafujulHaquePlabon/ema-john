import React from 'react';
import "./Product.css"
const Product = (props) => {
     console.log(props.product)
    const {img,name,price,seller,ratings}=props.product;
    return (
           <div className="product">
           <img src={img} alt="" />
            <h1 className="product-name">{name}</h1>
            <h4>Price:${price}</h4>
            <p><small>Manufacturer: {seller}</small></p>
            <p><small> Rating:{ratings} star</small></p>
           </div>
    );
};

export default Product;