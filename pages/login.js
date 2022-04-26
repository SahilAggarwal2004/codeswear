import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
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
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-myorange focus:border-myorange focus:z-10 sm:text-sm" placeholder="Email address" />
            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-myorange focus:border-myorange focus:z-10 sm:text-sm" placeholder="Password" />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
            <Link href='/forgot'><a className="font-medium text-sm text-right text-darkorange hover:text-myorange">Forgot your password?</a></Link>
          </div>

          <button type="submit" className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-myorange hover:bg-darkorange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-myorange">Log in</button>
        </form>
      </div>
    </div>
  )
}
