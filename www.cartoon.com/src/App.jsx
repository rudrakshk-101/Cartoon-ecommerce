import { useState } from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import './App.css'
import CartPage from './pages/cartPage';
import Home from './pages/home';
import LoginRegister from './pages/loginregister';
import PaymentsPage from './pages/paymentsPage';
import CheckoutPage from './pages/checkoutPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="navbar">
      navbar
    </div>
      <div className="sidebar">
        <img src="" alt="" />
        <ul>
          <li>Home</li>
          <li>cart</li>
          <li>logout</li>
        </ul>
      </div>
      <div className="renderArea">
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Home />}/>
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/payment' element={<PaymentsPage />} />
          <Route path='/auth' element={<LoginRegister />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
