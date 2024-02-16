import { useState } from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom';
// import './App.css'
import CartPage from './pages/cartPage';
import Home from './pages/home';
import LoginRegister from './pages/loginregister';
import PaymentsPage from './pages/paymentsPage';
import CheckoutPage from './pages/checkoutPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'  Component={<Home />}/>
          <Route path='/cart' Component={<CartPage />} />
          <Route path='/checkout' Component={<CheckoutPage />} />
          <Route path='/payment' Component={<PaymentsPage />} />
          <Route path='/auth' Component={<LoginRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
