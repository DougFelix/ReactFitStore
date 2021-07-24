import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Navbar extends Component {
    
    render() { 
        const {openSnack, closeSnackbar, snackMessage} = this.props;
        var formatter = new Intl.NumberFormat([]);
        return (
            <div className='Navbar'>
                
                <div className='Navbar-Wallet'>
                    <div className='Title'>Wallet: </div>
                    <div><i className="coin fab fa-bitcoin"></i> {formatter.format(this.props.wallet)}</div>
                </div>
                {/* <img width={'100%'} src='https://play-lh.googleusercontent.com/-V5slQVxDZZUy_EN3LimtjwhF2jzgVzM3vj832NYQLNx_mF6isfZz1YkYLJ_szkFCtY' alt='logo'></img> */}
                <Snackbar
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                    open={openSnack}
                    autoHideDuration={3000}
                    message={<span id='message-id'>{snackMessage}</span>}
                    ContentProps={{
                        'aria-describedby': 'message-id'
                    }}
                    onClose={closeSnackbar}
                    action = {[
                        <IconButton 
                            onClick={closeSnackbar}
                            color='inherit'
                            key="close"
                            aria-label='close'
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </div>
        );
    }
}
 
export default Navbar;