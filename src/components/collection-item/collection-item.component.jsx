import React from 'react'
import './collection-item.style.scss'

function CollectionItem({id, name, price , image}) {
    return (
        <div className="collection-item">
            <div
             className="image"
             style={{backgroundImage: `url(${image})`}} />
                <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">${price}</span>
                </div>
            
        </div>
    )
}

export default CollectionItem
