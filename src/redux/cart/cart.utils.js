

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if(existingCartItem) {
        return cartItems.map(cartItem => 
          cartItem.id === cartItemToAdd.id ? {...cartItem, quantity : cartItem.quantity + 1}  
          : cartItem  )
    }

    return [...cartItems, {...cartItemToAdd, quantity : 1}]
}

export const DecreaseItemFromCart = (cartItems, CartItemToDecrease) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === CartItemToDecrease.id)

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartitem => cartitem.id !== CartItemToDecrease.id)

    }
    return cartItems.map(cartItem => 
        cartItem.id === CartItemToDecrease.id ? {...cartItem, quantity : cartItem.quantity - 1}  
        : cartItem  )

}