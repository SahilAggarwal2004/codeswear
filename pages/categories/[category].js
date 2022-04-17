/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
import Product from '../../models/Product'

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

    // Using direct logic at server instead of fetching for faster response. Now, there is no vulnerability since we are using the logic at server side.
    if (!mongoose.connections[0].readyState) mongoose.connect(process.env.URI, { useUnifiedTopology: true, useNewUrlParser: true });
    const products = await Product.find({ category }).select("id name image price title -_id").lean(); // mongoose by default hydrate the results of the query but lean() tells mongoose not to hydrate the results as keep them as plain js objects. And thus after using lean(), the result would not accept any mongoose function.

    return { props: { products: products } };
}