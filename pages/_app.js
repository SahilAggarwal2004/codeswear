import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <div className='overflow-x-hidden'>
    {router.pathname !== "/_error" && <Navbar />}
    <Component {...pageProps} />
    {router.pathname !== "/_error" && <Footer />}
  </div>
}

export default MyApp
