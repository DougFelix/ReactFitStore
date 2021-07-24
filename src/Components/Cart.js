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
            </div>
        );
    }
}
 
export default Cart;