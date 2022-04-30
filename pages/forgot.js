import React, { useState, useRef, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Context from '../context/Context';

export default function Forgot() {
    const { router } = useContext(Context)
    const email = useRef();
    const otp = useRef();
    const password = useRef();
    const [stage, setStage] = useState(1)
    // const [stage, setStage] = useState(0)

    async function submit(event) {
        event.preventDefault()
        let data;
        if (!stage) {
            data = await fetchApp(`auth/otp`, 'POST', JSON.stringify({ email: email.current.value }))
            if (data.success) setStage(1)
        } else {
            data = await fetchApp(`auth/forgot`, 'PUT', JSON.stringify({ email: email.current.value, otp: otp.current.value, password: password.current.value }))
            if (data.success) router.push('/login')
        }
    }

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
                <form className="mt-8 space-y-6" onSubmit={submit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <input type="email" autoComplete="email" required className={`appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md ${stage ? 'rounded-b-none' : ''} focus:outline-none focus:ring-myorange focus:border-myorange focus:z-10 sm:text-sm`} placeholder="Email address" />
                        {stage ? <>
                            <input ref={otp} type="text" autoComplete="new-password" minLength={6} maxLength={6} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-myorange focus:border-myorange focus:z-10 sm:text-sm" placeholder="Enter OTP" />
                            <input ref={password} type="password" autoComplete="new-password" minLength={8} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-myorange focus:border-myorange focus:z-10 sm:text-sm" placeholder="Enter new password" />
                        </> : <></>}
                    </div>
                    <button type="submit" className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-myorange hover:bg-darkorange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-myorange">Send OTP</button>
                </form>
            </div>
        </div>
    )
}
