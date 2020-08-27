import React,{Component} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route, Redirect} from 'react-router-dom'
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import CheckOutPage from './pages/checkout/checkout.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import {auth, CreateUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'

 class App extends Component {



  unSubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await CreateUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header/>
      <Route exact path="/" component = {HomePage} />
      <Route exact path="/shop" component = {ShopPage} />
      <Route exact path="/checkout" component = {CheckOutPage} />
      <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInUp />} />
      </div>
    )
  }
}

const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
})

const mapDispathToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispathToProps)(App) 