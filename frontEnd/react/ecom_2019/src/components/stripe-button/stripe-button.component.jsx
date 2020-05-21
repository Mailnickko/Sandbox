import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //stripe wants price in cents
  const publishableKey = "pk_test_hUtcrzRVPewyxbzzKCa8sivD";

  const onToken = (token) => {
    console.log("token", token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Ecom 2019"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
