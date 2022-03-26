import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart)
    let totalPrice=0;
    let totalShipping=0;
    for(const product of cart){
        totalPrice=totalPrice+product.price;
        totalShipping=totalShipping+product.shipping;
    }
    const tax= parseFloat((totalPrice* 0.1).toFixed(2));
    const grandTotal=totalPrice+totalShipping+tax;
   

    return (
        <div className="cart">
             <h4>Order summary</h4>
              <p>Selected items:{cart.length}</p>
              <p>Total price:${totalPrice}</p>
              <p>Total shipping charge:${totalShipping}</p>
              <p>Tax:{tax}</p>
              <h4>Grand Total:${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;