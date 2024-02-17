import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Topbar from "./globals/Topbar";
import Sidebar from "./globals/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import "./index.css";
import UserLoginRegister from './pages/loginregister';
import Home from './pages/home';
import ProductDetail from "./pages/productDetail";
import PaymentsPage from './pages/paymentsPage';
import HomeCarousel from './pages/crousal/HomeCarousel';
import { useLocation } from "react-router-dom";
import Cart from "./pages/Cart";
import {initializeApp} from 'firebase/app';
import firebaseConfig from './firebase';
import Checkout from "./pages/Checkout";

function App() {
  const location = useLocation();
  const app = initializeApp(firebaseConfig);
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  const visibleRoutes = ['/addProduct','/','/cart'];
  const isRouteVisible = (route) => visibleRoutes.includes(route);
  
  return (

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
                <Route path='/cart' element={<Cart />} />
                <Route path='/payment' element={<PaymentsPage />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;