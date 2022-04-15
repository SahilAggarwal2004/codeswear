import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import State from '../context/State'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [cart, setCart] = useState({})
  const [subtotal, setSubtotal] = useState(0)

  function calculate(cart) {
    let sum = 0;
    Object.keys(cart).forEach(id => {
      sum += cart[id].price * cart[id].quantity
    })
    setSubtotal(sum)
  }

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart')) || {}
    setCart(localCart)
    calculate(localCart)
  }, [])

  return <div className='overflow-x-hidden'>
    <State cart={cart} setCart={setCart} subtotal={subtotal} calculate={calculate}>
      {router.pathname !== "/_error" && <Navbar />}
      <Component {...pageProps} />
      {router.pathname !== "/_error" && <Footer />}
    </State>
  </div>
}

export default MyApp
