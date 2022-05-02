import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import State from '../context/State'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return <State router={router}>
    {/* React-toastify is an easy to use library for showing alerts. Read docs for more info. */}
    <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} autoClose={2000} position="bottom-left" />
    {router.pathname !== "/_error" && <Navbar />}
    <Component {...pageProps} />
    {router.pathname !== "/_error" && <Footer />}
  </State>
}

export default MyApp