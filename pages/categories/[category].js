import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Category({ products, category }) {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-10 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                    {!products.length && <div className='m-auto'>Sorry! All the {category} are currently out of stock. Stay tuned, new stock coming soon!</div>}
                    {products?.map(({ id, name, image, price, title }) =>
                        <Link passHref href={`/product/${id}`} key={id}>
                            <div className="lg:w-1/4 md:w-1/2 py-4 w-full cursor-pointer shadow-inner">
                                <a className="block relative rounded overflow-hidden h-48">
                                    <Image alt={title} src={image} layout='fill' objectFit='contain' />
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
    const categories = ['tshirts', 'hoodies', 'mugs', 'stickers']
    const { category } = context.query
    if (!categories.includes(category)) return { notFound: true }; // server will return a 404 error and nextjs will show the defualt page for 404 error

    const response = await fetch(`${process.env.API}products/get?category=${category}`)
    const products = await response.json()

    return { props: { products, category } };
}