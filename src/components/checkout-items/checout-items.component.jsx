import React from 'react'
import { connect } from 'react-redux'
import './checkout-items.style.scss'
import {AddToCart, RemoveFromCart, DecreaseItem} from '../../redux/cart/cart.action'

const CheckOutItems = ({cartitem, RemoveFromCart, AddToCart, DecreaseItem}) => {

    const {quantity,name,price,imageUrl} = cartitem

    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt='items' />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => {DecreaseItem(cartitem)}}>&#10094;</div>
            <span className="value">{quantity}</span>
            
            <div className="arrow" onClick={() => {AddToCart(cartitem)}}>&#10095;</div>
            </span>
        <span className="price"> ${price}</span>
        <span className="remove-button" onClick={() => RemoveFromCart(cartitem)}>X</span>
    </div>
    )
}

const MapDispatchToProps = dispatch => ({
    RemoveFromCart : cartitem => dispatch(RemoveFromCart(cartitem)),
    AddToCart : cartitem => dispatch(AddToCart(cartitem)),
    DecreaseItem : cartitem => dispatch(DecreaseItem(cartitem))
})

export default connect(null,MapDispatchToProps)(CheckOutItems) 

