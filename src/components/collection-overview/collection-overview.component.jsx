import React from 'react'
import { connect } from 'react-redux'
import PreviewComponent from '../preview-item/preview-component'

const CollectionsOverview = ({shop}) => {

    console.log(shop)
        return (
            <div className="collections-overview">
                {shop.Shop_data.map(item => <PreviewComponent key= {item.id} title = {item.title} items = {item.items} />)}
                              
            </div>
        )
    
}

const mapStateToProps = state => ({
    shop : state.shop
})

export default connect(mapStateToProps)( CollectionsOverview)
