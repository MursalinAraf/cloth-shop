import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './sign-in-up-style.scss'

function SignInUp() {
    return (
        <div className="sign-in-and-sign-up">
            <h1>Hello</h1>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInUp
