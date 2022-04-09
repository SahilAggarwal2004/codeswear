import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <>
    {router.pathname !== "/_error" && <Navbar />}
    <Component {...pageProps} />
    {router.pathname !== "/_error" && <Footer />}
  </>
}

export default MyApp
