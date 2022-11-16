import React from 'react'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import "./PaymentForm.css"

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout }) => {

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if (error) {
      console.log('[error]', error);
    } else {
      const orderData = {
        line_items: checkoutToken.line_items,
        customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
        shipping: { street: shippingData.address, county_state: shippingData.state, postal_zip_code: shippingData.zip},
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      onCaptureCheckout(checkoutToken.id, orderData);
      nextStep();
    }
  };




  if(checkoutToken!={}){
    return (
      <>
        <Elements stripe={stripePromise}>
          <ElementsConsumer >{({ elements, stripe }) => (
            <form style={{borderStyle:"solid", borderRadius:"10px" ,color:"gray", padding:"50px 100px", margin:"20px 40px"}}>
              <CardElement />
              <br /> <br />
              <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <button style={{backgroundColor:"white", color:"#B48261", borderStyle:"solid", borderColor:"#B48261"}} className='payment-button' onClick={backStep}>Tillbaka</button>
                <button className='payment-button' onClick={(event) => handleSubmit(event, elements, stripe)} color="primary">
                  Betala {checkoutToken.subtotal.formatted_with_symbol}
                </button>
              </div>
            </form>
          )}
          </ElementsConsumer>
        </Elements>
      </>
    )
  }
  
}

export default PaymentForm
