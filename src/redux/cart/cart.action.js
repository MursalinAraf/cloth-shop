import CartActionTypes from './cart.type'

export const toggleCartHidden = () => ({  
      type : CartActionTypes.TOGGLE_CART_HIDDEN
})

export const AddToCart = (item) => ({
      type : CartActionTypes.ADD_ITEM,
      payload : item
})

export const RemoveFromCart = (item) => ({
      type : CartActionTypes.REMOVE_ITEM,
      payload : item
})

export const DecreaseItem = (item) => ({
      type : CartActionTypes.DECREASE_ITEM,
      payload: item
})