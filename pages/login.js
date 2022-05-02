import React, { useRef, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Context from '../context/Context';

export default function Login() {
  const { router, fetchApp, setLogged } = useContext(Context)
  const email = useRef();
  const password = useRef();

  async function submit(event) {
    event.preventDefault()
    const data = await fetchApp(`auth/login`, 'POST', JSON.stringify({ email: email.current.value, password: password.current.value }))
    if (!data.success) return
    localStorage.setItem('authtoken', data.authtoken)
    setLogged(true)
    router.push('/')
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="h-12 text-center">
            <Image src="/logo.png" alt="CodesWear" width={67.2} height={48} priority />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Log in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            or <Link href='/signup'><a className="font-medium text-darkorange hover:text-myorange">Sign Up</a></Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={submit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <input ref={email} type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-myorange focus:border-myorange focus:z-10 sm:text-sm" placeholder="Email address" />
            <input ref={password} type="password" autoComplete="current-password" required minLength={8} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-myorange focus:border-myorange focus:z-10 sm:text-sm" placeholder="Password" />
          </div>

          <Link passHref href='/forgot'><div className="cursor-pointer font-medium text-sm text-darkorange hover:text-myorange">Forgot your password?</div></Link>

          <button type="submit" className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-myorange hover:bg-darkorange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-myorange">Log in</button>
        </form>
      </div>
    </div>
  )
}
