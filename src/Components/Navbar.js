import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        var formatter = new Intl.NumberFormat([]);
        return (
            <div className='Navbar'>
                NAVBAR
                <div>
                    {formatter.format(this.props.wallet)}
                </div>
            </div>
        );
    }
}
 
export default Navbar;