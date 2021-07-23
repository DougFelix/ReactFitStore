import React, { Component } from 'react';
import Item from './Item';
import axios from 'axios';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className='ItemList'>
                <Item />
            </div>
        );
    }
}
 
export default ItemList;