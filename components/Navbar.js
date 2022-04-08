import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="flex flex-col justify-center items-center md:flex-row md:justify-start p-2">
            <Image src="/logo.png" alt="CodesWear" width={49} height={35} quality={100} layout='fixed' />
            <ul className='flex space-x-4'>
                <Link passHref href='/'><a>Tshirts</a></Link>
                <Link passHref href='/'><a>Hoodies</a></Link>
                <Link passHref href='/'><a>Mugs</a></Link>
                <Link passHref href='/'><a>Stickers</a></Link>
            </ul>
            <div>
                <button>Cart</button>
            </div>
        </nav>
    )
}
