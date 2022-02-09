import React from "react";
import {connect} from 'react-redux';

import CustomButton from "../custom-button/custom-button.compenent";
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.compenent';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from "reselect";

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

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


export default connect(mapStateToProps)(CartDropdown);