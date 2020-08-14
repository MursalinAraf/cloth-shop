import React from 'react'
import './custom-button.style.scss'

export default function CustomButton({children,IsGoogleSignIn, ...otherProps}) {
    return (
        <button className={`${IsGoogleSignIn ? 'google-sign-in':'' } custom-button`} {...otherProps}> 
            {children}
        </button>
    )
}
