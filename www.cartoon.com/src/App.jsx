import { useState } from 'react'
import {BrowserRouter, Routes , Route , Link } from 'react-router-dom';
import './App.css'
import CartPage from './pages/cartPage';
import Home from './pages/home';
import LoginRegister from './pages/loginregister';
import PaymentsPage from './pages/paymentsPage';
import CheckoutPage from './pages/checkoutPage';
import Logo from './assets/pnglogo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< Updated upstream
     <div className='backgroundUltra'>
      <div className='circle1'>

      </div >
      <div className='circle2'>

      </div>
      

    </div> 
    <div className="navbar">
      navbar
    </div>
      <div className="sidebar">
        <img src={Logo} alt="" />
        <div className="sidebarList">
          {/* <Link to="/" ><h1>Home</h1></Link> */}
          <h1>cart</h1>
          <h1>logout</h1>
        </div>
      </div>
=======
    {/* <div className="navbar">
      navbar
    </div>
      <div className="sidebar">
        <img src="" alt="" />
        <ul>
          <li>Home</li>
          <li>cart</li>
          <li>logout</li>
        </ul>
      </div> */}
>>>>>>> Stashed changes
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



















