import React from "react";
import {connect} from 'react-redux';

import CustomButton from "../custom-button/custom-button.compenent";
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.compenent';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className=" cart-items">
        {
            cartItems.map(cartItem => (
                <cartItem key ={cartItem.id} item ={CartItem}/>
            ))
        }
        <CustomButton> GO TO CHECKOUT</CustomButton>

        </div>

    </div>

    );

const mapsStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});


export default connect(mapStateToProps)(CartDropdown);