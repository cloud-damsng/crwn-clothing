import React from "react";
import {connect} from 'react-redux';

import CustomButton from "../custom-button/custom-button.compenent";
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.compenent';
import {selectoCartItems} from '../../redux/cart/cart.selectors';

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

const mapsStateToProps = state => ({
    cartitems: selectCartItems(state)
});


export default connect(mapStateToProps)(CartDropdown);