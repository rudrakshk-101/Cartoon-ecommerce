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
// import Checkout from "./pages/checkoutPage";
import CartPage from './pages/cartPage';
import PaymentsPage from './pages/paymentsPage';
import HomeCarousel from './pages/crousal/HomeCarousel';



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  const visibleRoutes = ['/addProduct','/'];
  const isRouteVisible = (route) => visibleRoutes.includes(route);
  
  return (
    <BrowserRouter>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CssBaseline />
        <div className="app">
          <main className="content">
          <div className="topbarContainer">{isRouteVisible(location.pathname) && <Topbar />}</div>
            <Routes>
                <Route index element={<Home/>} />
                <Route path='/auth' element={<UserLoginRegister/>} />
                <Route path='/product/:productId' element={<ProductDetail />} />
                <Route path='/swiper' element={<HomeCarousel/>} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/payment' element={<PaymentsPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;