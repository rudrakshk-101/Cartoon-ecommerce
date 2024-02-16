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
import { useState } from "react";
import Topbar from "./globals/Topbar";
import Sidebar from "./globals/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const visibleRoutes = ['/addProduct','/myProducts']
  const isRouteVisible = (route) => visibleRoutes.includes(route);
  return (
    <BrowserRouter>
     <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}> 
        <CssBaseline />
        <div className="app">
        {isRouteVisible(window.location.pathname) && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
          {isRouteVisible(window.location.pathname) && <Topbar setIsSidebar={setIsSidebar} />}
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
      </main>
      </div>
      </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  )
}

export default App
