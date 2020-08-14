import React,{Component} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom'
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import {auth, CreateUserProfileDocument} from './firebase/firebase.utils'

export default class App extends Component {

  constructor() {
    super();
    this.state ={
      currentUser : null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await CreateUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state)
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header currentUser ={this.state.currentUser} />
      <Route exact path="/" component = {HomePage} />
      <Route exact path="/shop" component = {ShopPage} />
      <Route exact path="/signin" component = {SignInUp} />
      </div>
    )
  }
}

