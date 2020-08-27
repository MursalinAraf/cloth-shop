import React from 'react'
import './collection-item.style.scss'
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import {AddToCart} from '../../redux/cart/cart.action'

function CollectionItem({item, AddToCart}) {
    return (
        <div className="collection-item">
            <div
             className="image"
             style={{backgroundImage: `url(${item.imageUrl})`}} />
                <div className="collection-footer">
                    <span className="name">{item.name}</span>
                    <span className="price">${item.price}</span>
                    
                </div>
                <CustomButton inverted onClick={() => AddToCart(item)}>Add To Cart</CustomButton>
        </div>
    )
}

const MapDispatchToProps = dispatch => ({
    AddToCart : item => dispatch(AddToCart(item))
})

export default connect(null,MapDispatchToProps)(CollectionItem) 
