import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_CSiDgpifcTfIGZEViM9ZxAG400vpwSQE56';

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="Crwn Clothing Corp."
			billingAddress
			shippingAddress
			image="https://sendeyo.com/up/d/f3eb2117da"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay now"
			token={onToken}
			stripeKey={publishableKey}
		></StripeCheckout>
	);
};

export default StripeButton;
