import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assests/crown.svg'
import './header.style.scss'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'

function Header({currentUser}) {
    return (
      <div className="header">
          <Link className="logo-container" to="/">
          <Logo className="logo" />
          </Link>
          <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>

          {currentUser ?
           <div className='option' onClick={() => auth.signOut()} style={{cursor:'pointer'}}>SIGN OUT</div> : 
           <Link className='option' to='/signin'>SIGN IN</Link>} 
            
          </div>
       </div>  
    )
}

const mapStateToProps = (state) => ({
    currentUser : state.user.currentUser
})


export default connect(mapStateToProps)(Header)