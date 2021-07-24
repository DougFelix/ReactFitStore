import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends Component {

    
    render() {

        let {cartList, total, handleAdd, handleDelete, handleCheckout} = this.props;
        var formatter = new Intl.NumberFormat([]);

        let list = '';
        if(Array.isArray(cartList) && cartList.length !== 0) {
            list = cartList.map(item =>
                <CartItem key={item.id} item={item} handleAdd={handleAdd} handleDelete={handleDelete}/>
            );
        }

        return (
            <div className='Cart'>
                <div className='Title'>Cart</div>
                {list.length === 0
                ? 'EMPTY'  
                : list
                }
                <hr></hr>
                <div className='Cart-Total'>
                    TOTAL: <i className="coin fab fa-bitcoin"></i> {formatter.format(total)}
                </div>
                <button className='Cart-Checkout' onClick={() => handleCheckout(total)} >Checkout</button>

                
            </div>
        );
    }
}
 
export default Cart;