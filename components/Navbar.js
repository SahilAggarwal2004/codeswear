import React, { useRef, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Context from '../context/Context'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai' // react-icons is a very good alternative to font-awesome and is very much optimised than that.
import { BsFillBagCheckFill } from 'react-icons/bs'

export default function Navbar() {
    const sidebar = useRef();
    const { cart, setCart, subtotal, handleState, calculate } = useContext(Context)

    const interval = setInterval(() => {
        try {
            setCart(JSON.parse(localStorage.getItem('cart')) || {})
            calculate(cart)
            clearInterval(interval)
        } catch { }
    }, 0);

    function add(id) {
        let newCart = cart
        newCart[id].quantity += 1
        handleState(newCart)
    }

    function remove(id) {
        let newCart = cart
        newCart[id].quantity -= 1
        if (newCart[id].quantity <= 0) delete newCart[id]
        handleState(newCart)
    }

    function clear() { handleState({}) }

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

            <div ref={sidebar} className='absolute top-0 right-0 z-10 transition-transform translate-x-full w-72 h-screen bg-lightorange border-l border-black p-8 select-none'>
                <AiFillCloseCircle className="absolute top-3 right-3 cursor-pointer scale-150 text-myorange" onClick={toggleCart} />
                <h2 className='text-xl font-bold mb-5 text-center'>Shopping cart</h2>
                <ol className='itemlist list-decimal font-semibold h-3/4 overflow-y-scroll relative'>
                    {/* We can map an object by making an array of its keys as below */}
                    {/* Also instead of using array.map(item=>{return element}), we can directly use array.map(item=>element) as below */}
                    {!Object.keys(cart).length && <div className='text-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>Cart Empty!</div>}
                    {Object.keys(cart).map(id =>
                        <li className='my-3' key={id}>
                            <div className='flex'>
                                <div className='w-2/3 font-semibold'>{cart[id]?.itemname} ({cart[id]?.size}, {cart[id]?.color})</div>
                                <div className='flex items-center justify-center w-1/3 space-x-3'>
                                    <AiFillMinusCircle className='cursor-pointer scale-110 text-myorange' onClick={() => { remove(id) }} />
                                    <span>{cart[id]?.quantity}</span>
                                    <AiFillPlusCircle className='cursor-pointer scale-110 text-myorange' onClick={() => { add(id) }} />
                                </div>
                            </div>
                        </li>
                    )}
                </ol>
                <div>{subtotal}</div>
                <div className="flex mt-10 space-x-3">
                    <button disabled={!Object.keys(cart).length} className="flex items-center mx-auto text-white bg-myorange border-0 py-2 px-4 focus:outline-none hover:bg-darkorange rounded text-sm">
                        <BsFillBagCheckFill className='mr-1' />Checkout
                    </button>
                    <button disabled={!Object.keys(cart).length} className="flex items-center mx-auto text-myorange bg-transparent border border-myorange py-2 px-4 focus:outline-none hover:bg-myorange hover:text-white rounded text-sm" onClick={clear}>Clear Cart</button>
                </div>
            </div>
        </nav>
    )
}
