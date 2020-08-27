import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart)
    // const total = cart.reduce(( total,crs ) => total + crs.price , 0);
    // console.log(total)
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        const price = parseInt(course.price)
        total = total + price
    }
    return (
        <div className='cartContent'>
            <h2>Your Purchase Here</h2>
            <h3>Total added : {cart.length} item</h3>
            <h4>Total Price : {total}$</h4>
            <hr/>
        </div>
    );
};

export default Cart;