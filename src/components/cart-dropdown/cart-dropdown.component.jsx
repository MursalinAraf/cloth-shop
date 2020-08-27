import React from 'react'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import {withRouter} from 'react-router-dom'
import './cart-dropdown.style.scss'
import {toggleCartHidden} from '../../redux/cart/cart.action'

import CustomButton from '../custom-button/custom-button.component'

const CartDropDown = ({CartItems, history, dispatch}) => {
return(
        <div className='cart-dropdown'>
        <div className='cart-items' >
        {
        CartItems.length === 0 ? <span className="empty-message"> No Item In The Cart </span> :    
        CartItems.map(cartItem => <CartItem key={cartItem.id} item = {cartItem} />)}
        </div>
        <CustomButton onClick={() => {history.push('./checkout'); dispatch(toggleCartHidden())}}>Checkout</CustomButton>
    </div>
)}

const mapStateToProps = (state) => ({
    CartItems : state.cart.cartItems
})

export default  withRouter(connect(mapStateToProps)(CartDropDown)) 