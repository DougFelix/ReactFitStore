import React, { Component } from 'react';

import './Styles/CartItem.css';

class CartItem extends Component {

    render() { 
        let {item, handleDelete, handleAdd} = this.props;
        var formatter = new Intl.NumberFormat([]);

        return (
            <div className='CartItem'>
                <div className='CartItem-Amount'>
                    {item.amount}
                </div>
                <div className='CartItem-Image'>
                    <img src={item.image} alt={item.title}></img>
                </div>    
                <div className='CartItem-Information'>
                    <div className='CartItem-Title'>
                        {item.title}
                    </div> 
                    <div className='CartItem-Buttons'>
                        <button onClick={() => handleDelete(item.id)}><i className="fas fa-minus"></i></button>
                            <div className='CartItem-Price'><i className="coin fab fa-bitcoin"></i> {formatter.format(item.price*item.amount)}</div>
                        <button onClick={() => handleAdd(item.id)}><i className="fas fa-plus"></i></button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CartItem;