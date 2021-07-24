import React, { Component } from 'react';

import Navbar from './Navbar';
import Cart from './Cart';
import ItemList from './ItemList';

import axios from 'axios';

import './Styles/Store.css';

class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: '',
            cartList: '',
            cartSet: new Set(),
            totalCart: 0
        }
        this.handleAdd = this.handleAdd.bind(this);
    }

    async componentDidMount(){
        try {
            let list = await axios.get('https://fakestoreapi.com/products');
            this.setState({itemList: list.data});
        } catch (e) {
            console.log(e);
        }
        
    }

    handleAdd(id) {
        let item = this.state.itemList.filter(item => item.id === id);
        if(this.state.cartSet.has(id)){
            let updated = this.state.cartList.map(function(item) {
                if (item.id === id) {
                    item.amount+=1;
                }
                return item;
            })
            this.setState({cartList: updated});

        } else {
            item[0]["amount"] = 1;
            this.setState(st => ({
                cartList: [...st.cartList, ...item],
                cartSet: new Set(st.cartSet).add(id)
            }))
        }
    }

    render() { 
        let {itemList, cartList} = this.state;

        return (
            <div className='Store'>
                <Navbar />
                <ItemList itemList={itemList} handleAdd={this.handleAdd}/>
                <Cart cartList={cartList}/>
            </div>
        );
    }
}
 
export default Store;