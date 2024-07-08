'use client'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import DeliveryAddressForm from '../components/Checkout/DeliveryAddressForm';
import OrderSummary from '../components/Checkout/OrderSummary';
import { useState } from 'react';

const steps = ['Login', 'Add Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);

  let step = 0;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className='px-10 lg:px-20 mt-8 '>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={step}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};


            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>

          </>
        ) : (
          <>


            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Button
                color="inherit"
                disabled={activeStep === steps.length}
                onClick={handleNext}
                sx={{ mr: 1 }}
              >
                Next
              </Button>
            </Box>

            <div className='mt-10'>
              {activeStep === 2 ? <DeliveryAddressForm /> : <OrderSummary />}
            </div>
          </>
        )}
      </Box>
    </div>

  );
}