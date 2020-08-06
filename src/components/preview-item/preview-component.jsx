import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './preview-style.scss'

function PreviewComponent({title, items}) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
            {items.filter((item,idx) => idx <4).map(item => <CollectionItem  key={item.id} price={item.price}  name={item.name} image={item.imageUrl}/> )}
            </div>

        </div>
    )
}

export default PreviewComponent

