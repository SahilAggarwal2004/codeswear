import React, { useRef, useContext } from 'react'
import Context from '../../context/Context';
import Image from 'next/image'
import { toast } from 'react-toastify';

export default function Id({ product: { id, name, description, image, price, sizes, reviews } }) {
    const pincode = useRef();
    const size = useRef();
    const { editCart, verifyPin, buyNow, pincodes } = useContext(Context);
    let ratings = 0;

    if (reviews.length) {
        let sum = 0;
        reviews.forEach(review => sum += review.review);
        ratings = Math.ceil(sum / reviews.length);
    }

    async function checkAvailability() {
        if (!pincode.current?.value) return toast.warning('Please enter a pincode first!')
        // adding a '+' in front of string converts it to a number if string is a number. It is known as unary plus and is different from concatenation. Number() could also be used here
        pincodes.includes(+pincode.current.value) ? toast.success('Yay! This pincode is serviceable!') : toast.warning('Sorry! We do not deliver to this pincode yet!')
    }

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-16 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-center">
                    <div className='relative w-1/2 sm:w-1/3 xl:w-1/4 aspect-[0.6] rounded object-cover object-top'>
                        <Image alt={name} src={image} layout='fill' objectFit='contain' />
                    </div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">CODESWEAR</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                {[...Array(ratings)].map((rating, index) => <svg key={index} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-myorange" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>)}
                                {[...Array(5 - ratings)].map((rating, index) => <svg key={index} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-myorange" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>)}
                                <span className="text-gray-600 ml-3 text-center">{reviews.length === 1 ? '1 Review' : `${reviews.length || 'No'} Reviews`}</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <p className="leading-relaxed">{description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <span className="mr-3">Size</span>
                            <div className="relative">
                                <select ref={size} className="rounded border appearance-none py-2 focus:outline-none focus:border-myorange text-base pl-3 pr-10">
                                    {sizes.map(element => <option key={element._id}>{element.size.toUpperCase()}</option>)}
                                </select>
                                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col xs:flex-row items-start xs:items-center">
                            <span className="title-font font-medium text-2xl text-gray-900">₹{price}</span>
                            <div className='xs:ml-auto space-x-4 flex items-center mt-2 xs:mt-0'>
                                <button className="text-white bg-myorange border-0 py-2 px-4 focus:outline-none hover:bg-darkorange rounded" onClick={() => { buyNow(id, price, name, size.current.value) }}>Buy Now</button>
                                <button className="text-white bg-myorange border-0 py-2 px-4 focus:outline-none hover:bg-darkorange rounded" onClick={() => { editCart('add', id, price, name, size.current.value) }}>Add to cart</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='mt-6 max-w-full flex space-x-2 text-sm'>
                            <input ref={pincode} type='tel' minLength={6} maxLength={6} className='px-2 border-2 rounded max-w-[50%]' placeholder='Enter pincode' onKeyDown={verifyPin} />
                            <button className='text-white max-w-[50%] bg-myorange border-0 py-2 px-4 focus:outline-none hover:bg-darkorange rounded' onClick={checkAvailability}>Check Availability</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export async function getServerSideProps({ query: { id } }) {
    const response = await fetch(`${process.env.API}products/get?id=${id}`)
    const product = await response.json()
    if (!product.length) return { notFound: true };
    return { props: { product: product[0] } };
}