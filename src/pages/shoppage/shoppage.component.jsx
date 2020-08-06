import React, { Component } from 'react'
import PreviewComponent from '../../components/preview-item/preview-component'
import SHOP_DATA from '../../data/shop-data'

export default class ShopPage extends Component {

    constructor() {
        super()
    
        this.state = {
             collection : SHOP_DATA
        }
    }
    
    render() {
        console.log(this.state.collection)
        return (
            <div>
                {this.state.collection.map(item => <PreviewComponent key= {item.id} title = {item.title} items = {item.items} />)}
                              
            </div>
        )
    }
}
