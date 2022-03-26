import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import "./Product.css"
const Product = (props) => {
     //console.log(props.product)
    const {img,name,price,seller,ratings}=props.product;
    return (
           <div className="product">
           <img src={img} alt="" />
            <div className="product-info">
            <h3 className="product-name">{name}</h3>
            <h4>Price:${price}</h4>
            <p><small>Manufacturer: {seller}</small></p>
            <p><small> Rating:{ratings} star</small></p>
            </div>
            <button  onClick={()=>props.handleAddToCart(props.product)} className="btn-cart">
               <p className="btn-text"> Add to cart</p>
               <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
                </button>
           </div>
           
    );
};

export default Product;