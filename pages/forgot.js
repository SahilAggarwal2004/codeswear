import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Forgot() {
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <div className="h-12 text-center">
                        <Image src="/logo.png" alt="CodesWear" width={67.2} height={48} priority />
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Forgot Password</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        or <Link href='/login'><a className="font-medium text-darkorange hover:text-myorange">Login</a></Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-myorange focus:border-myorange focus:z-10 sm:text-sm" placeholder="Email address" />
                    </div>
                    <button type="submit" className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-myorange hover:bg-darkorange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-myorange">Send OTP</button>
                </form>
            </div>
        </div>
    )
}
