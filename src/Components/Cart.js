import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {

        let {cartList} = this.props;
        let list = '';
        if(Array.isArray(cartList) && cartList.length !== 0) {
            list = cartList.map(item =>
                <CartItem key={item.id} item={item}/>
            )
        }

        return (
            <div className='Cart'>
                {list}
                <div className='Cart-Total'>
                    <hr></hr>
                    TOTAL:
                </div>
                <button className='Cart-Checkout'>Checkout</button>
            </div>
        );
    }
}
 
export default Cart;