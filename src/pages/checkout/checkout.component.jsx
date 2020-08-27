import React from 'react'
import {connect} from 'react-redux'
import CheckOutItems from '../../components/checkout-items/checout-items.component'

import './checkout.style.scss'

const CheckOutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
           <span>Product</span>
            </div>
            <div className="header-block">
           <span>Description</span>
            </div>
            <div className="header-block">
           <span>Quantity</span>
            </div>
            <div className="header-block">
           <span>Price</span>
            </div>
            <div className="header-block">
           <span>Remove</span>
            </div>
        </div>

        {
            cartItems.map(cartitem => <CheckOutItems cartitem ={cartitem} />)
        }

        <div className="total">
           Total : ${total}
        </div>

    </div>
)

const mapStateToProps = state => ({
    cartItems : state.cart.cartItems,
    total :  state.cart.cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity*cartItem.price, 0)
})

export default connect(mapStateToProps)(CheckOutPage)