import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import State from '../context/State'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const hideNavFoot = ['/_error', '/confirm/[token]']
  const loggedOutRedirects = ['/account', '/order', '/orders', '/checkout']
  const loggedInRedirects = ['/signup', '/login', '/forgot']

  useEffect(() => {
    if (!localStorage.getItem('authtoken') && loggedOutRedirects.includes(router.pathname)) router.push('/')
    else if (localStorage.getItem('authtoken') && loggedInRedirects.includes(router.pathname)) router.push('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname])

  return <State router={router}>
    {/* React-toastify is an easy to use library for showing alerts. Read docs for more info. */}
    <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} autoClose={2000} position="bottom-left" />
    {!hideNavFoot.includes(router.pathname) && <Navbar />}
    <Component {...pageProps} />
    {!hideNavFoot.includes(router.pathname) && <Footer />}
  </State>
}

export default MyApp