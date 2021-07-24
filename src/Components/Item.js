import React, { Component } from 'react';

import './Styles/Item.css';

class Item extends Component {
    
    Add = () => {
        let {handleAdd, item} = this.props;
        handleAdd(item.id);
    }

    render() {
        let {item} = this.props;

        return (
            <div className='Item'>
                <div className='Item-Image'>
                    <img src={item.image} alt={item.title}></img>
                </div>    
                <div className='Item-Information'>
                    <div className='Item-Title'>
                        {item.title}
                    </div>                
                    <div className='Item-Category'>
                        Category: {item.category}
                    </div>
                    <div className='Item-Description'>
                        Description: {item.description}
                    </div>   
                    <div className='Item-Price'>
                        <i className="coin fab fa-bitcoin"></i> {item.price}
                    </div>     
                </div>
                <button onClick={this.Add}><i className="fas fa-plus"></i></button>
            </div>
        );
    }
}
 
export default Item;