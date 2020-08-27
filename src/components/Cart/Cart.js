import React from 'react';
import './Cart.css';
import Card from 'react-bootstrap/Card'; 

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((totalPrice, price) => totalPrice + price.price, 0);
    const cost = totalPrice.toFixed(2);
    const discount = cost*0.1;
    const afterDiscount = (cost - discount).toFixed(2); 
    return (
        <div className="cart">
            <Card className="items">
                <Card.ImgOverlay>
                    <Card.Title> <h2>Enrolled Courses</h2> </Card.Title>
                         <Card.Text>
                            <h4> Course Selected: {cart.length}</h4> <br/>
                            <span id="cart-item">Total Price: ${cost} </span> <br/>
                            <small><span id="discount-span">Discount: 10%</span></small> <br/>
                            <span id="cart-item">After Discount: ${afterDiscount}</span> 
                        </Card.Text>
                 </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Cart;