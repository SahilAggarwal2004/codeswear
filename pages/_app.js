import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import State from '../context/State'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <div className='overflow-x-hidden'>
    <State>
      {router.pathname !== "/_error" && <Navbar />}
      <Component {...pageProps} />
      {router.pathname !== "/_error" && <Footer />}
    </State>
  </div>
}

export default MyApp
