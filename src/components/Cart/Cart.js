import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((totalPrice, price) => totalPrice + price.price, 0);
    const cost = totalPrice.toFixed(2);
    const discount = cost*0.1;
    const afterDiscount = (cost - discount).toFixed(2); 
    return (
        <div className="cart">
            <h2> Added Course </h2>
                <div className="items">
                    <h4> Course Selected: {cart.length}</h4>
                    <p>Total Price: {cost}</p>
                    <p> Discount: 10% </p>
                    <p> After discount: {afterDiscount}</p>

                </div>
        </div>
    );
};

export default Cart;