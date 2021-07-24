import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {

    render() {
        let {itemList, handleAdd} = this.props;
        let list = '';
        if(Array.isArray(itemList) && itemList.length !== 0) {
            list = itemList.map(item =>
                <Item key={item.id} item={item} handleAdd={handleAdd}/>
            )
        }

        return (
            <div className='ItemList'>
                <div className='Title'>PRODUCTS</div>
                {list}
            </div>
        );
    }
}
 
export default ItemList;