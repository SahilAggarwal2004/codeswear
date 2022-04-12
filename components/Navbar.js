import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai' // react-icons is a very good alternative to font-awesome and is very much optimised than that.
import { BsFillBagCheckFill } from 'react-icons/bs'

export default function Navbar() {
    const sidebar = useRef();

    function toggleCart() { sidebar.current.classList.toggle('translate-x-full') }

    return (
        <nav className="flex flex-col justify-center items-center md:flex-row md:justify-start py-2 w-full relative shadow-lg mb-4">
            <div className="mx-5 flex">
                <Link passHref href='/'><a><Image src="/logo.png" alt="CodesWear" width={49} height={35} quality={100} /></a></Link>
            </div>
            <ul className='flex space-x-4 font-semibold mt-2 mb-1 md:my-0'>
                <Link passHref href='/categories/tshirts'><a>Tshirts</a></Link>
                <Link passHref href='/categories/hoodies'><a>Hoodies</a></Link>
                <Link passHref href='/categories/mugs'><a>Mugs</a></Link>
                <Link passHref href='/categories/stickers'><a>Stickers</a></Link>
            </ul>
            <div className='mx-5 h-full absolute top-4 right-0 flex md:items-center md:top-0'>
                <AiOutlineShoppingCart className='scale-150 cursor-pointer' onClick={toggleCart} />
            </div>

            <div ref={sidebar} className='absolute top-0 right-0 z-10 transition-transform translate-x-full w-72 h-screen bg-lightorange border-l border-black p-8'>
                <AiFillCloseCircle className="absolute top-3 right-3 cursor-pointer scale-150 text-myorange" onClick={toggleCart} />
                <h2 className='text-xl font-bold mb-5 text-center'>Shopping cart</h2>
                <ol className='itemlist list-decimal font-semibold h-3/4 overflow-y-scroll'>
                    <li className='my-3'>
                        <div className='flex'>
                            <div className='w-2/3 font-semibold'>Item1</div>
                            <div className='flex items-center justify-center w-1/3 space-x-3'>
                                <AiFillMinusCircle className='cursor-pointer scale-110 text-myorange' />
                                <span>1</span>
                                <AiFillPlusCircle className='cursor-pointer scale-110 text-myorange' />
                            </div>
                        </div>
                    </li>
                    <li className='my-3'>
                        <div className='flex'>
                            <div className='w-2/3 font-semibold'>Item1</div>
                            <div className='flex items-center justify-center w-1/3 space-x-3'>
                                <AiFillMinusCircle className='cursor-pointer scale-110 text-myorange' />
                                <span>1</span>
                                <AiFillPlusCircle className='cursor-pointer scale-110 text-myorange' />
                            </div>
                        </div>
                    </li>
                    <li className='my-3'>
                        <div className='flex'>
                            <div className='w-2/3 font-semibold'>Item1</div>
                            <div className='flex items-center justify-center w-1/3 space-x-3'>
                                <AiFillMinusCircle className='cursor-pointer scale-110 text-myorange' />
                                <span>1</span>
                                <AiFillPlusCircle className='cursor-pointer scale-110 text-myorange' />
                            </div>
                        </div>
                    </li>
                    <li className='my-3'>
                        <div className='flex'>
                            <div className='w-2/3 font-semibold'>Item1</div>
                            <div className='flex items-center justify-center w-1/3 space-x-3'>
                                <AiFillMinusCircle className='cursor-pointer scale-110 text-myorange' />
                                <span>1</span>
                                <AiFillPlusCircle className='cursor-pointer scale-110 text-myorange' />
                            </div>
                        </div>
                    </li>
                    <li className='my-3'>
                        <div className='flex'>
                            <div className='w-2/3 font-semibold'>Item1</div>
                            <div className='flex items-center justify-center w-1/3 space-x-3'>
                                <AiFillMinusCircle className='cursor-pointer scale-110 text-myorange' />
                                <span>1</span>
                                <AiFillPlusCircle className='cursor-pointer scale-110 text-myorange' />
                            </div>
                        </div>
                    </li>
                </ol>
                <div className="flex mt-10 space-x-3">
                    <button className="flex items-center mx-auto text-white bg-myorange border-0 py-2 px-4 focus:outline-none hover:bg-darkorange rounded text-sm">
                        <BsFillBagCheckFill className='mr-1' />Checkout
                    </button>
                    <button className="flex items-center mx-auto text-myorange bg-transparent border border-myorange py-2 px-4 focus:outline-none hover:bg-myorange hover:text-white rounded text-sm">Clear Cart</button>
                </div>
            </div>
        </nav>
    )
}
