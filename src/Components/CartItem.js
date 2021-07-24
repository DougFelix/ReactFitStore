import React, { Component } from 'react';

import './Styles/CartItem.css';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {item} = this.props;
        var formatter = new Intl.NumberFormat([], {
            style: 'currency',
            currency: 'BRL',
        });

        return (
            <div className='CartItem'>
                <div className='CartItem-Image'>
                    <img src={item.image} alt={item.title}></img>
                </div>    
                <div className='CartItem-Information'>
                    <div className='Item-Title'>
                        {item.title}
                    </div> 
                    <div className='CartItem-Price'>
                        {formatter.format(item.price*item.amount)}
                    </div>
                    <div className='CartItem-Buttons'>
                        <button onClick={this.handleAdd}><i className="fas fa-minus"></i></button>
                        <button onClick={this.handleAdd}><i className="fas fa-plus"></i></button>
                    </div>
                </div>
                
            </div>
        );
    }
}
 
export default CartItem;