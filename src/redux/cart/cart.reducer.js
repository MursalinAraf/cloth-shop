import CartActionTypes from './cart.type'
import {addItemToCart, DecreaseItemFromCart} from './cart.utils'

const INITIAL_STATE = {
    isHidden : true,
    cartItems : []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN : 
        return {
            ...state,
            isHidden : !state.isHidden
        }
        case CartActionTypes.ADD_ITEM : 
        return {
            ...state,
            cartItems : addItemToCart(state.cartItems, action.payload)
        }
        case CartActionTypes.REMOVE_ITEM : 
        return {
            ...state,
            cartItems : state.cartItems.filter(cartitem => cartitem.id !== action.payload.id)
        }

        case CartActionTypes.DECREASE_ITEM : 
        return {
            ...state,
            cartItems : DecreaseItemFromCart(state.cartItems, action.payload)
        }

        default : return state;
    }
}

export default cartReducer