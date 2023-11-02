import React from 'react'
import './App.css';
import Navbars from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter,Route,Routes,Switch } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
// import Checkout from './components/Checkout';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
  return (
    <>
      {/* <Cart/> */}
      <BrowserRouter>
      <Navbars />
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/products' element={<Products/>}></Route>
          <Route exact path='/products/:id' element={<Product/>}></Route>
          <Route exact path='/cart' element={<Cart/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/register' element={<Register/>}></Route>
        </Routes>
        </BrowserRouter>
      
      {/* <Home/> */}
    </>
  )
}
