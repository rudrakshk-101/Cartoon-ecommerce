import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useNavigate} from 'react-router-dom' 
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Cartoon.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function RegisterBanking() {

  const [ifscCode,setIfscCode] = React.useState('');
  const [bankName,setBankName] = React.useState('');
  const [account,setAccount] = React.useState('');
  const [holder,setHolder] = React.useState('');

  const handleIfscCode = (e) => setIfscCode(e.target.value);
  const handleBankNameChange = (e) => setBankName(e.target.value);
  const handleAccountChange = (e) => setAccount(e.target.value);
  const handleHolderChange = (e) => setHolder(e.target.value);

  let navigateTo = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleRegister = async() => {
    const response = await fetch('http://localhost:4500/api/vendor/register',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
            email: localStorage.getItem('email'),
            password: localStorage.getItem('password'),
            phone: localStorage.getItem('phone'),
            GSTNumber: localStorage.getItem('gstNumber'),
            storeName: localStorage.getItem('name'),
            address: localStorage.getItem('address'),
            bankAccountNumber: account,
            bankName: bankName,
            ifscCode: ifscCode,
            accountHolder: holder,
      })
    });
    const data = await response.json();
    console.log(data.message);
    navigateTo('/login');
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}  
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Banking Details
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="accountHolder"
                  variant='standard'
                  value={holder}
                  onChange={handleHolderChange}
                  label="Account Holder"
                  type="text"
                  id="accountHolder"
                  autoComplete="new-accountHolder"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  value={account}
                  onChange={handleAccountChange}
                  fullWidth
                  name="accountNumber"
                  variant='standard'
                  label="Account Number"
                  type="text"
                  id="accountNumber"
                  autoComplete="new-accountNumber"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  value={ifscCode}
                  onChange={handleIfscCode}
                  fullWidth
                  name="ifscCode"
                  variant='standard'
                  label="IFSC Code"
                  type="text"
                  id="ifscCode"
                  autoComplete="new-ifscCode"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={bankName}
                  onChange={handleBankNameChange}
                  name="bankName"
                  variant='standard'
                  label="Bank Name"
                  type="text"
                  id="bankName"
                  autoComplete="new-bankName"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I accept all the Terms & Conditions applicable."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleRegister}
              sx={{ mt: 3, mb: 2 }}
            >
              Next
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}