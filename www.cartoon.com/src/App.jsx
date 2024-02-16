import { useState } from 'react'
import {BrowserRouter, Router , Route} from 'react-router-dom';
import './App.css'
import CartPage from './pages/cartPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Route>
          <Route index  Component={<Home />}/>
        </Route>
      </BrowserRouter>
    </>
  )
}

export default App
