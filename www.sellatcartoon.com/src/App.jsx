import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterDetails from './pages/RegisterDetails';
import RegisterBanking from './pages/RegisterBanking';
import MyProducts from './pages/MyProducts';
import EditProduct from './pages/EditProduct';
import Calendar from './pages/Calendar';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/addProduct' element={<AddProduct />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/register/details' element={<RegisterDetails />}/>
        <Route path='/register/banking' element={<RegisterBanking />}/>
        <Route path='/myProducts' element={<MyProducts />}/>
        <Route path='/editProduct/:productId' element={<EditProduct />}/>
        <Route path='/calendar' element={<Calendar />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
