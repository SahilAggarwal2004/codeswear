import React, { useContext, useEffect } from 'react'
import Context from '../context/Context'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

export default function Checkout() {
  const { cart, subtotal, editCart, verifyPin, sidebar } = useContext(Context)

  useEffect(() => {
    sidebar.current?.classList.add('translate-x-full')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className='container m-auto px-5'>
      <h1 className='font-bold text-2xl my-8 text-center'>Checkout</h1>
      <h2 className='font-semibold mb-4'>1. Delivery Details:</h2>
      <div className="mx-auto flex">
        <div className="mb-4 px-2 w-1/2">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 text-gray-700 py-0.5 px-3 leading-7" />
        </div>
        <div className="mb-4 px-2 w-1/2">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 text-gray-700 py-0.5 px-3 leading-7" />
        </div>
      </div>
      <div className="mb-4 px-2 w-full">
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
        <textarea id="address" name="address" className="w-full bg-white rounded border border-gray-300 text-gray-700 py-0.5 px-3 leading-7" />
      </div>
      <div className="mx-auto flex">
        <div className="mb-4 px-2 w-1/2">
          <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
          <input type="tel" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 text-gray-700 py-0.5 px-3 leading-7" minLength={10} maxLength={10} />
        </div>
        <div className="mb-4 px-2 w-1/2">
          <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
          <input type="tel" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 text-gray-700 py-0.5 px-3 leading-7" onKeyDown={verifyPin} />
        </div>
      </div>
      <div className="mx-auto flex">
        <div className="mb-4 px-2 w-1/2">
          <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
          <input disabled type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 text-gray-700 py-0.5 px-3 leading-7" />
        </div>
        <div className="mb-4 px-2 w-1/2">
          <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
          <input disabled type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 text-gray-700 py-0.5 px-3 leading-7" />
        </div>
      </div>
      <h2 className='font-semibold mt-6 mb-4'>2. Review Cart Items & Pay:</h2>
      <div className='md:w-1/2 m-auto p-2 pb-5 bg-lightorange rounded'>
        {!subtotal && <div className='text-center mt-3 font-semibold'>Cart Empty!</div>}
        <ol className='itemlist list-decimal pl-6 font-semibold h-3/4 overflow-y-scroll relative text-sm'>
          {Object.keys(cart).map(id =>
            <li className='my-3' key={id}>
              <div className='flex'>
                <div className='w-2/3 font-semibold'>{cart[id]?.itemname} ({cart[id]?.size})</div>
                <div className='flex items-center justify-center w-1/3 space-x-3'>
                  <AiFillMinusCircle className='cursor-pointer scale-110 text-myorange' onClick={() => { editCart('remove', id) }} />
                  <span>{cart[id]?.quantity}</span>
                  <AiFillPlusCircle className='cursor-pointer scale-110 text-myorange' onClick={() => { editCart('add', id) }} />
                </div>
              </div>
            </li>
          )}
        </ol>
        <div className='font-semibold w-full ml-3 mt-6 text-sm'>Subtotal: ₹{subtotal}</div>
        <div className='font-semibold w-full ml-3 mt-1 text-sm text-green-500'>Yay, Free Delivery!</div>
      </div>
      <div className='w-full text-center mt-8'>
        <button disabled={!subtotal} className="text-white font-semibold bg-myorange border-0 py-2 px-4 focus:outline-none hover:bg-darkorange rounded">Proceed to pay ₹{subtotal}</button>
      </div>
    </div>
  )
}
