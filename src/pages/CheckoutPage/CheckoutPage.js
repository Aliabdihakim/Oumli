import React, { useState, useEffect } from 'react'
import { Stepper, Step, StepLabel, Paper, Typography,  } from '@mui/material'
import AddressForm from '../../components/Checkout/AddressForm/AddressForm'
import PaymentForm from '../../components/Checkout/PaymentForm/PaymentForm'
import { commerce } from '../../lib/commerce'

    const steps = ['Shipping adsress', 'Payment details']
    const CheckoutPage = ({cart}) => {
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({})

    useEffect(() => {
        if (cart.id) {
            const generateToken = async () => {
                try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                console.log(token);
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

    console.log(shippingData);



    const Form = () => (
        activeStep === 0
    ? <AddressForm next={next}/>
    : <PaymentForm shippingData={shippingData}/>
    )

    const Confirmation = () => {
        return(
            <div>
                confirmation
            </div>
        )
    }


  return (
    <div>
        <Paper>
          <Typography variant="h4" align="center">Checkout</Typography>
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
