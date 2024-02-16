import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Topbar from "./globals/Topbar";
import Sidebar from "./globals/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import "./index.css";
// import AddProduct from "./pages/AddProduct";
import UserLoginRegister from './pages/loginregister';
// import Example from './components/customer/example';
import Home from './pages/home';
import ProductDetail from "./pages/productDetail";
import Checkout from "./pages/checkoutPage";
import CartPage from './pages/cartPage';


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  const visibleRoutes = ['/addProduct','/','/cart'];
  const isRouteVisible = (route) => visibleRoutes.includes(route);

  return (
<<<<<<< Updated upstream
    <BrowserRouter>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <div className="sidebarContainer">
          {isRouteVisible(window.location.pathname) && <Sidebar c isSidebar={isSidebar} />}
          </div>
          <main className="content">
          {isRouteVisible(window.location.pathname) &&<Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
                <Route index element={<Home/>} />
                <Route path='/auth' element={<UserLoginRegister/>} />
                <Route path='/productDetails' element={<ProductDetail />} />
                <Route path='/checkout' element={<Checkout/>} />
                <Route path='/cart' element={<CartPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </BrowserRouter>
  );
=======
    <>
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
>>>>>>> Stashed changes
}

export default App;