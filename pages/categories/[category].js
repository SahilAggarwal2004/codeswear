/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

export default function category(props) {
    const { url, title, price } = props
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                    <Link passHref href='/product/something'>
                        <div className="lg:w-1/4 md:w-1/2 py-4 w-full cursor-pointer shadow-inner">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="h-48 m-auto block" src={url} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{title}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                <p className="mt-1">{price}</p>
                            </div>
                        </div>
                    </Link>
                    <Link passHref href='/product/something'>
                        <div className="lg:w-1/4 md:w-1/2 py-4 w-full cursor-pointer shadow-inner">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="h-48 m-auto block" src={url} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{title}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                <p className="mt-1">{price}</p>
                            </div>
                        </div>
                    </Link>
                    <Link passHref href='/product/something'>
                        <div className="lg:w-1/4 md:w-1/2 py-4 w-full cursor-pointer shadow-inner">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="h-48 m-auto block" src={url} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{title}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                <p className="mt-1">{price}</p>
                            </div>
                        </div>
                    </Link>
                    <Link passHref href='/product/something'>
                        <div className="lg:w-1/4 md:w-1/2 py-4 w-full cursor-pointer shadow-inner">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="h-48 m-auto block" src={url} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{title}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                <p className="mt-1">{price}</p>
                            </div>
                        </div>
                    </Link>
                    <Link passHref href='/product/something'>
                        <div className="lg:w-1/4 md:w-1/2 py-4 w-full cursor-pointer shadow-inner">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="h-48 m-auto block" src={url} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{title}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                <p className="mt-1">{price}</p>
                            </div>
                        </div>
                    </Link>
                    <Link passHref href='/product/something'>
                        <div className="lg:w-1/4 md:w-1/2 py-4 w-full cursor-pointer shadow-inner">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="h-48 m-auto block" src={url} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{title}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                <p className="mt-1">{price}</p>
                            </div>
                        </div>
                    </Link>
                    <Link passHref href='/product/something'>
                        <div className="lg:w-1/4 md:w-1/2 py-4 w-full cursor-pointer shadow-inner">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="h-48 m-auto block" src={url} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{title}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                <p className="mt-1">{price}</p>
                            </div>
                        </div>
                    </Link>
                    <Link passHref href='/product/something'>
                        <div className="lg:w-1/4 md:w-1/2 py-4 w-full cursor-pointer shadow-inner">
                            <a className="block relative rounded overflow-hidden">
                                <img alt="ecommerce" className="h-48 m-auto block" src={url} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{title}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                <p className="mt-1">{price}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export async function getServerSideProps(context) {
    const { category } = context.query
    let url, title, price;
    if (category === 'tshirts') {
        url = "https://m.media-amazon.com/images/I/51lSbxUm5YL._UL1500_.jpg"
        title = 'T-Shirts'
        price = 499
    } else if (category === 'hoodies') {
        url = "https://m.media-amazon.com/images/I/51ZIqCyzpbL._UL1000_.jpg"
        title = 'Hoodies'
        price = 999
    } else if (category === 'mugs') {
        url = "https://m.media-amazon.com/images/I/51KVTTZm6tL._SL1000_.jpg"
        title = 'Mugs'
        price = 199
    } else if (category === 'stickers') {
        url = "https://m.media-amazon.com/images/I/71AtCTSVtbS._SL1500_.jpg"
        title = 'Stickers'
        price = 99
    } else return { notFound: true, }; // server will return a 404 error and nextjs will show the defualt page for 404 error

    return { props: { url, title, price: '₹' + price } };
}