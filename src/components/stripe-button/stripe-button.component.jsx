import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HNMyTBgdnb0QzcapNeLpV9so546YImXViuYwN9I5LgL8tLoX1WcalWmPfcfkL09PIf25tVfTj8p6ZcNg6Q4H1eX008OplaTHH'

    const onToken = token => {
        alert('Payment Successful')
    }

    return(
        <StripeCheckout 
        label='PAY NOW'
        name = 'Cloth Strore Ltd'
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/CUz.svg'
        description = {`Your Total Is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'PAY NOW'
        token = {onToken}
        stripeKey = {publishableKey}

        />
    )
}

export default StripeCheckoutButton