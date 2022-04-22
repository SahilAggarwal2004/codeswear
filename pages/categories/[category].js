/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

export default function Category(props) {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-10 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                    {props.products?.map(({ id, name, image, price, title }) =>
                        <Link passHref href={`/product/${id}`} key={id}>
                            <div className="lg:w-1/4 md:w-1/2 py-4 w-full cursor-pointer shadow-inner">
                                <a className="block relative rounded overflow-hidden">
                                    <img alt="ecommerce" className="h-48 m-auto block" src={image} />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{title}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
                                    <p className="mt-1">₹{price}</p>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}

export async function getServerSideProps(context) {
    const { category } = context.query
    if (category !== 'tshirts' && category !== 'hoodies' && category !== 'mugs' && category !== 'stickers') return { notFound: true }; // server will return a 404 error and nextjs will show the defualt page for 404 error

    //     url = "https://m.media-amazon.com/images/I/51lSbxUm5YL._UL1500_.jpg"
    //     url = "https://m.media-amazon.com/images/I/51ZIqCyzpbL._UL1000_.jpg"
    //     url = "https://m.media-amazon.com/images/I/51KVTTZm6tL._SL1000_.jpg"
    //     url = "https://m.media-amazon.com/images/I/71AtCTSVtbS._SL1500_.jpg"

    const response = await fetch(`${process.env.API}products/get?category=${category}`)
    const products = await response.json()

    return { props: { products } };
}