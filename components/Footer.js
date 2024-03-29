import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Context from '../context/Context'

export default function Footer() {
    const { categories } = useContext(Context)
    const accountList = ['account', 'orders'];
    const appList = ['contact', 'about'];
    return (
        <footer className="text-gray-600 body-font">
            <div className="w-full px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <div className='flex items-center justify-center md:justify-start'>
                        <div className='h-[1.5625rem] aspect-[1.4]'>
                            <Image src="/logo.png" alt="CodesWear" width={67.2} height={48} priority />
                        </div>
                        <span className="ml-3 text-xl text-myorange">CodesWear</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                        <p>Wear the &lt;code /&gt;</p>
                        <p>Premium tshirts, hoodies and apparals</p>
                    </div>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="md:w-1/3 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SHOP</h2>
                        <nav className="list-none mb-10">
                            {categories.map(category => <Link key={category} passHref href={`/categories/${category}`}><a className="text-gray-600 block hover:text-gray-800">{category.charAt(0).toUpperCase() + category.slice(1)}</a></Link>)}
                        </nav>
                    </div>
                    <div className="md:w-1/3 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ACCOUNT</h2>
                        <nav className="list-none mb-10">
                            {accountList.map(item => <Link key={item} passHref href={`/${item}`}><a className="text-gray-600 block hover:text-gray-800">{item.charAt(0).toUpperCase() + item.slice(1)}</a></Link>)}
                        </nav>
                    </div>
                    <div className="md:w-1/3 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ABOUT</h2>
                        <nav className="list-none mb-10">
                            {appList.map(item => <Link key={item} passHref href={`/${item}`}><a className="text-gray-600 block hover:text-gray-800">{item.charAt(0).toUpperCase() + item.slice(1)}</a></Link>)}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-100 mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between items-center text-sm text-gray-500 text-center">
                <span>© 2022 CodesWear - All Rights Reserved</span>
                <a href="https://www.linkedin.com/in/sahilaggarwal2004/" target="_blank" className="flex items-center space-x-2 mt-1 sm:mt-0" rel="noreferrer">
                    <span>Follow on Linkedin!</span>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                </a>
            </div>
        </footer>
    )
}
