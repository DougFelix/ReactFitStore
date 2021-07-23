import React, { Component } from 'react';

import Navbar from './Navbar';
import Cart from './Cart';
import ItemList from './ItemList';

class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className='Store'>
                <Navbar />
                <ItemList />
                <Cart />
            </div>
        );
    }
}
 
export default Store;