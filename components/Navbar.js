import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Context from '../context/Context'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai' // react-icons is a very good alternative to font-awesome and is very much optimised than that.
import { BsFillBagCheckFill } from 'react-icons/bs'
import { MdAccountCircle } from 'react-icons/md'

export default function Navbar() {
    const { cart, subtotal, editCart, clearCart, sidebar, categories } = useContext(Context)

    function toggleCart() { sidebar.current.classList.toggle('translate-x-full') }

    return <>
        <nav className="sticky z-10 inset-0 flex flex-col justify-center items-center md:flex-row md:justify-start py-2 w-full shadow-lg mb-4 bg-white">
            <div className="mx-5 flex h-[2.1875rem] aspect-[1.4]">
                <Link passHref href='/'><a><Image src="/logo.png" alt="CodesWear" width={67.2} height={48} priority /></a></Link>
            </div>
            <ul className='flex space-x-4 font-semibold mt-2 mb-1 md:my-0'>
                {categories.map(category => <Link key={category} passHref href={`/categories/${category}`}><a className='hover:text-myorange'>{category.charAt(0).toUpperCase() + category.slice(1)}</a></Link>)}
            </ul>
            <div className='mx-5 h-full absolute top-4 right-0 flex space-x-5 md:items-center md:top-0'>
                <Link passHref href='/login'>
                    <a><MdAccountCircle className='scale-150' /></a>
                </Link>
                <AiOutlineShoppingCart className='scale-150 cursor-pointer' onClick={toggleCart} />
            </div>
        </nav >
        <div ref={sidebar} className='z-20 fixed top-0 right-0 h-screen transition-all translate-x-full w-[17.5rem] bg-lightorange border-l border-black px-4 py-6 select-none'>
            <AiFillCloseCircle className="absolute top-3 right-3 cursor-pointer scale-150 text-myorange" onClick={toggleCart} />
            <h2 className='text-xl font-bold mb-5 text-center'>Shopping cart</h2>
            {!subtotal && <div className='text-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] font-semibold'>Cart Empty!</div>}
            <ol className='itemlist list-decimal pl-6 font-semibold max-h-[calc(100vh-11.4rem)] overflow-y-scroll relative'>
                {/* We can map an object by making an array of its keys as below */}
                {/* Also instead of using array.map(item=>{return element}), we can directly use array.map(item=>element) as below */}
                {Object.keys(cart).map(id =>
                    <li className='my-3' key={id}>
                        <div className='flex'>
                            <div className='w-2/3 font-semibold'>{cart[id]?.name} ({cart[id]?.size})</div>
                            <div className='flex items-center justify-center w-1/3 space-x-3'>
                                <AiFillMinusCircle className='cursor-pointer scale-110 text-myorange' onClick={() => { editCart('remove', id) }} />
                                <span>{cart[id]?.quantity}</span>
                                <AiFillPlusCircle className='cursor-pointer scale-110 text-myorange' onClick={() => { editCart('add', id) }} />
                            </div>
                        </div>
                    </li>
                )}
            </ol>
            <div className='absolute bottom-20 left-0 font-semibold w-full text-center'>Subtotal: ₹{subtotal}</div>
            <div className="flex space-x-3 w-3/4 absolute bottom-6 left-[50%] -translate-x-[50%]">
                <Link passHref href='/checkout'>
                    <button disabled={!subtotal} className="flex items-center mx-auto text-white bg-myorange border-0 py-2 px-3 focus:outline-none hover:bg-darkorange rounded text-sm disabled:opacity-80 disabled:bg-myorange disabled:text-white">
                        <BsFillBagCheckFill className='mr-1' />Checkout
                    </button>
                </Link>
                <button disabled={!subtotal} className="flex items-center mx-auto text-myorange bg-transparent border border-myorange py-2 px-3 focus:outline-none hover:bg-myorange hover:text-white rounded text-sm disabled:opacity-80 disabled:bg-transparent disabled:text-myorange" onClick={clearCart}>Clear Cart</button>
            </div>
        </div>
    </>
}
