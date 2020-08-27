import React from 'react'
import './custom-button.style.scss'

export default function CustomButton({children,IsGoogleSignIn,inverted, ...otherProps}) {
    return (
        <button className={`${IsGoogleSignIn ? 'google-sign-in':'' } ${inverted ? 'inverted':'' } custom-button`} {...otherProps}> 
            {children}
        </button>
    )
}
