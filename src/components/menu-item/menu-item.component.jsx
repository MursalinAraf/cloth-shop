import React from 'react'
import './menu-item.style.scss'
import {withRouter} from 'react-router-dom'

function MenuItem({title, img , size, history, link, match}) {
    return (
        <div  className={`${size} menu-item`} onClick={() => {history.push(`${match.url}${link}`)}}>
          <div className="background-image" style={{backgroundImage : `url(${img})`}}  />  
        <div className="content">
            <h1 className="title">{title.toUpperCase()} </h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
    )
}

export default withRouter(MenuItem)
