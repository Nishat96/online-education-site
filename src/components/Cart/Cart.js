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
            {/* <h2> Enrolled Courses </h2>
                <div className="items">
                    <h4> Course Selected: {cart.length}</h4>
                    <p>Total Price: ${cost}</p>
                    <p> <small>Discount: 10% </small> </p>
                    <p> After discount: ${afterDiscount}</p>

                </div> */}
                <Card className="bg-dark text-white items">
                <Card.ImgOverlay>
                    <Card.Title> <h2>Enrolled Courses</h2> </Card.Title>
                    <Card.Text>
                    <h4> Course Selected: {cart.length}</h4> <br/>
                    Total Price: ${cost} <br/>
                    <small>Discount: 10% </small> <br/>
                    After discount: ${afterDiscount}
                    </Card.Text>
                 </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Cart;