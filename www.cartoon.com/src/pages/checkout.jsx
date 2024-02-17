import React, { useState } from "react";
import { Checkbox, FormControlLabel, Grid, Button, Typography } from "@mui/material";

export default function CheckoutPage() {
  const [cashOnDelivery, setCashOnDelivery] = useState(false);
  const [razorPay, setRazorPay] = useState(false);
  const totalPrice = 100; // Replace with the total price of all items
  const gst = totalPrice * 0.18; // Assuming GST rate is 18%
  const sgst = totalPrice * 0.09; // Assuming SGST rate is 9%
  const totalAmount = totalPrice + gst + sgst;

  const handleCashOnDeliveryChange = (event) => {
    setCashOnDelivery(event.target.checked);
  };

  const handleRazorPayChange = (event) => {
    setRazorPay(event.target.checked);
  };

  return (
<<<<<<< Updated upstream
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg">
        <Typography variant="h5" gutterBottom className="text-center">
          Checkout
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* Display items in the cart */}
            {/* Replace this with your cart items component */}
            {/* <CartItems /> */}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Summary
            </Typography>
            <div className="flex justify-between mb-2">
              <Typography variant="body1">Total Price:</Typography>
              <Typography variant="body1">${totalPrice.toFixed(2)}</Typography>
            </div>
            <div className="flex justify-between mb-2">
              <Typography variant="body1">GST (18%):</Typography>
              <Typography variant="body1">${gst.toFixed(2)}</Typography>
            </div>
            <div className="flex justify-between mb-2">
              <Typography variant="body1">SGST (9%):</Typography>
              <Typography variant="body1">${sgst.toFixed(2)}</Typography>
            </div>
            <div className="flex justify-between">
              <Typography variant="h6">Total Amount:</Typography>
              <Typography variant="h6">${totalAmount.toFixed(2)}</Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Payment Options
            </Typography>
            <FormControlLabel
              control={<Checkbox checked={cashOnDelivery} onChange={handleCashOnDeliveryChange} />}
              label="Cash on Delivery"
            />
            <FormControlLabel
              control={<Checkbox checked={razorPay} onChange={handleRazorPayChange} />}
              label="RazorPay"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              disabled={!cashOnDelivery && !razorPay}
              fullWidth
              size="large"
=======
    <Box className="px-5 lg:px-32 " sx={{ width: "100%" }}>
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
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2,backgroundColor:"black",mt:"8vh",mb:"2vh",ml:"-34px" }} >
            <Button
              color="inherit"
              disabled={step == 2}
              onClick={handleBack}
              sx={{ backgroundColor:"white",mb:3,pb:1,ml:2,}}
>>>>>>> Stashed changes
            >
              Proceed to Pay
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              disabled={!cashOnDelivery && !razorPay}
              fullWidth
              size="large"
            >
              Rent the Item
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
