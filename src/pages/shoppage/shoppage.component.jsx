import React from 'react'
import CollectionsOverview from '../../components/collection-overview/collection-overview.component'
import {Route} from 'react-router-dom'
import collectionPage from '../collection/collection.component'

const ShopPage = ({match}) => {
console.log(match)
        return (
            <div>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={collectionPage} />
            </div>
        )
}


export default ShopPage
