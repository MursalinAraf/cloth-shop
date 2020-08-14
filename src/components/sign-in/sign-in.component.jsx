import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import './sign-in.style.scss'

import {auth, SignInWithGoogle} from '../../firebase/firebase.utils'

export default class SignIn extends Component {

    constructor() {
        super()
    
        this.state = {
             email : '',
             password : ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.preventDefault();

        const {value,name} = e.target

        this.setState({
            [name] : value
        })
    }
    
    handleSubmit = async event => {
        event.preventDefault();
    
        const { email, password } = this.state;
    
        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({ email: '', password: '' });
        } catch (error) {
          console.log(error);
        }
      };

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I Already Have an account</h2>
                <span>Sign in with your Email and Password </span>
                <form onSubmit={this.handleSubmit}>
                <FormInput label="email" type="email" name="email" value={this.state.email} handleChange={this.handleChange} required />
                <FormInput label="password" type="password" name="password" value={this.state.password} required handleChange={this.handleChange} />
                
                <CustomButton type="submit">Sign In</CustomButton>
                <br />
                <br />
                <CustomButton onClick={SignInWithGoogle} IsGoogleSignIn>
                    {' '}
                    Sign In With Google {' '}</CustomButton>
                   
                </form>
            </div>
        )
    }
}
