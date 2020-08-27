import React from 'react'

import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'

import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import {selectCartItemsCount} from '../../redux/cart/cart.selector'

import './cart-icon.style.scss'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
<span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    itemCount : selectCartItemsCount(state)
    // itemCount : state.cart.cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon) 