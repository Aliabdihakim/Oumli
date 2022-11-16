import React, { useState, useEffect } from 'react'
import { Stepper, Step, StepLabel, Paper, Typography,  } from '@mui/material'
import AddressForm from '../../components/Checkout/AddressForm/AddressForm'
import PaymentForm from '../../components/Checkout/PaymentForm/PaymentForm'
import { commerce } from '../../lib/commerce'
import "./CheckoutPage.css"
import Confirmation from '../../components/Checkout/Confirmation/Confirmation'

    const steps = ['Adress', 'Betalning']


    const CheckoutPage = ({cart, order, error, onCaptureCheckout}) => {
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({})

    useEffect(() => {
        if (cart.id) {
            const generateToken = async () => {
                try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                setCheckoutToken(token);
                } catch(error) {
                
                }
          }
          generateToken();
        }
    }, [cart]);

    
    const nextStep = () => {setActiveStep(prev => prev+1)}
    const backStep = () => {setActiveStep(prev => prev-1)}
      
    const next = (data) => {
        setShippingData(data)
        nextStep();
    }

    const Form = () => (
        activeStep === 0
    ? <AddressForm next={next}/>
    : <PaymentForm 
    checkoutToken={checkoutToken} 
    shippingData={shippingData}
    nextStep={nextStep} 
    backStep={backStep}
    onCaptureCheckout={onCaptureCheckout}/>
    )

    


  return (
    <div className='checkout-div'>
        <Paper className='checkout-paper'>
          <Typography variant="h4" align="center">Kassa</Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
    </div>
  )
}

export default CheckoutPage
