import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className='Cart'>
                <CartItem />
            </div>
        );
    }
}
 
export default Cart;