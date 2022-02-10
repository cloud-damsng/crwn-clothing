import React from "react";
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import {withRouter} from 'react-dom';

import CustomButton from "../custom-button/custom-button.compenent";
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.compenent';
import {selectCartItems} from '../../redux/cart/cart.selectors';


const CartDropdown = ({cartItems, history}) => (
    <div className="cart-dropdown">
        <div className=" cart-items">
        {cartItems.length ?(

            cartItems.map(cartItem => (
                <cartItem key ={cartItem.id} item ={CartItem}/>
            ))
        ):(
            <span className = 'empty-message'>Your cart is empty</span>

        )}
        <CustomButton onClick = {() => history.push('/checkout')}>
             GO TO CHECKOUT
        </CustomButton>

        </div>

    </div>

    );

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));