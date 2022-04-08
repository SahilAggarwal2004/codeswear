import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>CodesWear - Wear the Code!</title>
        <meta name="description" content="CodesWear - Wear the Code!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image src="/home.png" alt="Wear the Code!" width={820} height={312} quality={100} layout='responsive' priority />
      </main>
    </div >
  )
}
