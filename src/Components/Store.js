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
            wallet: 10000.00,
            itemList: '',
            cartList: '',
            cartSet: new Set(),
            totalCart: 0,
            openSnack: false,
            snackMessage: 'Congratulations on your purchase!'
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCheckout = this.handleCheckout.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    async componentDidMount(){
        try {
            let list = await axios.get('https://fakestoreapi.com/products');
            this.setState({itemList: list.data});
        } catch (e) {
            console.log(e);
        }
        
    }

    closeSnackbar(){
        this.setState({openSnack: false});
    }

    handleDelete(id) {
        let updated = this.state.cartList.map(function(item) {
            if (item.id === id) {
                item.amount-=1;
            }
            return item;
        })
        let item = updated.filter(item => item.id === id);
        if (item[0].amount <= 0) {
            let updated2 = updated.filter(item => item.amount > 0);
            let set = [...this.state.cartSet]
            let setDeleted = set.filter(n => n !== id);
            this.setState({
                cartList: updated2,
                cartSet: new Set(setDeleted)
            })
        } else {
            this.setState({cartList: updated});
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

    handleCheckout(total) {
        if(this.state.cartList.length === 0) {
            this.setState(st => ({
                openSnack: true,
                snackMessage: 'Your cart is EMPTY!'
            }))
        } else if(this.state.wallet > total){
            this.setState(st => ({
                wallet: st.wallet-total,
                cartList: '',
                cartSet: new Set(),
                totalCart: 0,
                openSnack: true,
                snackMessage: 'Congratulations on your purchase!'
            }))
        } else {
            this.setState(st => ({
                openSnack: true,
                snackMessage: 'Insufficient coins!'
            }))
        }
    }

    render() { 
        let {itemList, cartList, wallet, openSnack, snackMessage} = this.state;
        let total = Object.values(cartList).map(item => item.amount*item.price).reduce((a, b) => a + b, 0)
        
        return (
            <div className='Store'>
                <Navbar wallet={wallet} closeSnackbar={this.closeSnackbar} openSnack={openSnack} snackMessage={snackMessage} />
                <ItemList itemList={itemList} handleAdd={this.handleAdd}/>
                <Cart cartList={cartList} total={total} handleAdd={this.handleAdd} handleDelete={this.handleDelete} handleCheckout={this.handleCheckout} />
            </div>
        );
    }
}
 
export default Store;