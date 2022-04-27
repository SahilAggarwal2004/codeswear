import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import State from '../context/State'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [cart, setCart] = useState({})
  const [subtotal, setSubtotal] = useState(0)
  const sidebar = useRef();

  function calculate(cart) {
    let sum = 0;
    Object.keys(cart).forEach(id => {
      sum += cart[id].price * cart[id].quantity
    })
    if (sum === 0) sidebar.current?.classList.add('translate-x-full')
    return sum
  }

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart')) || {}
    setCart(localCart)
    const sum = calculate(localCart)
    sum ? setSubtotal(sum) : setSubtotal(0)
  }, [])

  return <State router={router} cart={cart} setCart={setCart} subtotal={subtotal} setSubtotal={setSubtotal} calculate={calculate} sidebar={sidebar}>
    {/* React-toastify is an easy to use library for showing alerts. Read docs for more info. */}
    <ToastContainer pauseOnHover={false} autoClose={2000} position="bottom-left" />
    {router.pathname !== "/_error" && <Navbar />}
    <Component {...pageProps} />
    {router.pathname !== "/_error" && <Footer />}
  </State>
}

export default MyApp