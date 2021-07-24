import React, { Component } from 'react';

import './Styles/Item.css';

class Item extends Component {
    
    handleAdd = () => {
        let {handleAdd, item} = this.props;
        handleAdd(item.id);
    }

    render() {
        let {item} = this.props;
        var formatter = new Intl.NumberFormat([], {
            style: 'currency',
            currency: 'BRL',
        });

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
                        {item.description}
                    </div>   
                    <div className='Item-Price'>
                        {formatter.format(item.price)}
                    </div>     
                </div>
                <button onClick={this.handleAdd}><i className="fas fa-plus"></i></button>
            </div>
        );
    }
}
 
export default Item;