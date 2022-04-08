import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai' // react-icons is a very good alternative to font-awesome and is very much optimised than that.

export default function Navbar() {
    return (
        <nav className="flex flex-col justify-center items-center md:flex-row md:justify-start py-2 w-full relative">
            <div className="mx-5 flex">
                <Image src="/logo.png" alt="CodesWear" width={49} height={35} quality={100} />
            </div>
            <ul className='flex space-x-4 font-semibold mt-2 mb-1 md:my-0'>
                <Link passHref href='/'><a>Tshirts</a></Link>
                <Link passHref href='/'><a>Hoodies</a></Link>
                <Link passHref href='/'><a>Mugs</a></Link>
                <Link passHref href='/'><a>Stickers</a></Link>
            </ul>
            <div className='mx-5 h-full absolute top-4 right-0 flex md:items-center md:top-0'>
                <AiOutlineShoppingCart className='scale-150' />
            </div>
        </nav>
    )
}
