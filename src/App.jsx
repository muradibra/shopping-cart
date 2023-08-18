import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './components/Product'
import Header from './components/Header'
import { AppContext } from './context/AppContext'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'

function App() {
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)

  const addToCart = (product) => {

    const existProduct = cart.find(item => item.id === product.id)

    setCount(prevState => prevState + 1)

    if (!existProduct) {
      setCart(prevState => [
        ...prevState,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          old_price: product.old_price,
          img_url: product.img_url,
          count: 1
        }
      ])
      return
    }
    existProduct.count += 1
    
    // console.log("cart", cart);
  }

  return (
    <AppContext.Provider value={{
      cart,
      addToCart,
      count,
      setCount
    }}>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App