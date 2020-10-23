import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HfUMYJJ1bA9IYq4QhceIwBWOKlflSNjmelUWW1wS4S98iIDNOk0u7f4DHK8i1Deq50laKAZbx4ohNy7GYdWRvBF00kfq9uEbf';
  const onToken = token => {
    console.log(token);
    alert('Your payment was successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Royal Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
