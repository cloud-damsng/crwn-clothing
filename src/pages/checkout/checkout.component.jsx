import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';


import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className = 'checkout-page'>
        <div className='checkout-header'>
            <span>Product</span>
        </div>
        <div className='checkout-header'>
            <span>Description</span>
        </div> 
        <div className='checkout-header'>
            <span>Quantity</span>
        </div> 
        <div className='checkout-header'>
            <span>Price</span>
        </div> 
        <div className='checkout-header'>
            <span>Remove</span>
        </div>
        
    
        {cartItems.map(cartItem =>  (
            <CheckoutItem key ={cartItem.id} cartItem={cartItem} />
        )) }

        <div className='total'>
            <span>TOTAL: ${total} </span>
        </div>
    </div>

    );

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);

