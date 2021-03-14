import React from 'react';

export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">

      <div className={props.step1 ? 'active' : ''}>I Shipping</div>
      <div className={props.step2 ? 'active' : ''}>II Payment</div>
      <div className={props.step3 ? 'active' : ''}>III Place Order</div>
    </div>
  );
}