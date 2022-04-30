import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import State from '../context/State'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  let host = useRef("https://codeswearweb.herokuapp.com/")
  const [cart, setCart] = useState({})
  const [subtotal, setSubtotal] = useState(0)
  const sidebar = useRef();

  async function fetchApp(api, method = "GET", body = null, authtoken = localStorage.getItem('authtoken')) {
    try {
      const response = await fetch(host.current + api, { method, body, headers: { 'auth-token': authtoken, 'Content-Type': 'application/json' } })
      const json = await response.json();
      json.success ? toast.success(json.msg) : toast.error(json.error)
      return json
    } catch {
      toast.error("Server Down! Please try again later...");
      return { success: false }
    }
  }

  function calculate(cart) {
    let sum = 0;
    Object.keys(cart).forEach(id => {
      sum += cart[id].price * cart[id].quantity
    })
    if (!sum) sidebar.current?.classList.add('translate-x-full')
    return sum
  }

  useEffect(() => {
    if (location.hostname == 'localhost') host.current = "http://localhost:5000/"
    fetchApp('user/cart').then(data => {
      if (!data.success) return
      setCart(data.cart)
      const sum = calculate(data.cart)
      sum ? setSubtotal(sum) : setSubtotal(0)
    })
  }, [])

  return <State router={router} fetchApp={fetchApp} cart={cart} setCart={setCart} subtotal={subtotal} setSubtotal={setSubtotal} calculate={calculate} sidebar={sidebar}>
    {/* React-toastify is an easy to use library for showing alerts. Read docs for more info. */}
    <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} autoClose={2000} position="bottom-left" />
    {router.pathname !== "/_error" && <Navbar />}
    <Component {...pageProps} />
    {router.pathname !== "/_error" && <Footer />}
  </State>
}

export default MyApp