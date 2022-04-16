/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Order() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">CODESWEAR</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #89777</h1>
            <p className="leading-relaxed mb-4">Your order has been successfully placed!</p>
            <div className="grid gap-x-2 grid-cols-4 sm:grid-cols-6 border-t border-gray-200 py-2">
              <span className="text-gray-900 col-span-2 sm:col-span-3 font-semibold">Item Description</span>
              <span className="text-gray-900 col-span-1 font-semibold text-right">Quantity</span>
              <span className="text-gray-900 col-span-1 sm:col-span-2 font-semibold text-right">Item Total</span>
            </div>
            <div className="grid gap-x-2 grid-cols-4 sm:grid-cols-6 border-t border-gray-200 py-2">
              <span className="text-gray-900 col-span-2 sm:col-span-3">T-Shirt (M, Orange)</span>
              <span className="text-gray-900 col-span-1 text-right">1</span>
              <span className="text-gray-900 col-span-1 sm:col-span-2 text-right">₹499</span>
            </div>
            <div className="grid gap-x-2 grid-cols-4 sm:grid-cols-6 border-t border-gray-200 py-2">
              <span className="text-gray-900 col-span-2 sm:col-span-3">T-Shirt (M, Orange)</span>
              <span className="text-gray-900 col-span-1 text-right">1</span>
              <span className="text-gray-900 col-span-1 sm:col-span-2 text-right">₹499</span>
            </div>
            <div className="grid gap-x-2 grid-cols-4 sm:grid-cols-6 border-t border-gray-200 py-2">
              <span className="text-gray-900 col-span-2 sm:col-span-3">T-Shirt (M, Orange)</span>
              <span className="text-gray-900 col-span-1 text-right">1</span>
              <span className="text-gray-900 col-span-1 sm:col-span-2 text-right">₹499</span>
            </div>
            <div className="flex items-center mt-6">
              <button className="flex text-white bg-myorange border-0 py-2 px-4 focus:outline-none hover:bg-darkorange rounded text-sm">Track Order</button>
              <span className="title-font ml-auto font-medium text-xl text-gray-900">Order Total: ₹1497</span>
            </div>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
        </div>
      </div>
    </section>
  )
}
