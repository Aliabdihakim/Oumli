import React, { createContext, useEffect, useState } from 'react'
import Header from './components/Header/Header'
import "./App.css"
import Home from './pages/Home/Home'
import DetailProduct from './components/DetailProduct/DetailProduct'
import { Routes, Route } from 'react-router-dom'
import {commerce} from './lib/commerce'
import Cart from './pages/Cart/Cart'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'




function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data)
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart)
  }

  const addToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }

  const updateCart = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, {quantity})
    setCart(item.cart)
  }

  const removeItem = async(productId) => {
    const item = await commerce.cart.remove(productId)
    console.log(item);
    setCart(item)
  }

  console.log(cart);

  useEffect(()=>{
    fetchProducts();
    fetchCart();
  },[])




  if (cart){
    return (
      <div>
          <Header totalItems={cart.total_items}/>
          <Routes>
              <Route path="/" element={<Home products={products}/>}/>
              <Route path="/varukorg" element={
                <Cart 
                cartData={cart} 
                addToCart={addToCart} 
                updateCart={updateCart} 
                removeItem={removeItem}/>
                }
              />
              <Route path="matlador/:productId" element={<DetailProduct products={products} addToCart={addToCart}/>}/>
              <Route path='/kassa' element={<CheckoutPage cart={cart}/>}/>
          </Routes>
      </div>
    )
  } else {
    console.log("loading");
  }
}

export default App
