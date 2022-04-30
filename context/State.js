import React from "react";
import { toast } from "react-toastify";
import Context from "./Context";

const State = props => {
    const { router, cart, setCart, subtotal, setSubtotal, calculate, sidebar, fetchApp } = props
    const categories = ['tshirts', 'hoodies', 'mugs', 'stickers']
    const pincodes = [110045]

    async function handleCart(cart, msg = null) {
        const sum = calculate(cart)
        if (!sum && sum !== 0) return
        const data = await fetchApp('user/cart', 'PUT', JSON.stringify({ cart }))
        if (data.success) {
            toast.success(msg)
            setCart(cart)
            setSubtotal(sum)
        }
    }

    function editCart(type, id, price, name, size, quantity = 1) {
        let newCart = cart
        if (size) id = id + size
        if (typeof quantity !== 'number') { quantity = 0 }
        if (type == 'add') {
            if (id in newCart) newCart[id].quantity += quantity
            else newCart[id] = { quantity, price, name, size }
            handleCart(newCart, 'Product added to cart!')
            // toast.success('Product added to cart!')
        } else if (type == 'remove') {
            newCart[id].quantity -= quantity
            if (newCart[id].quantity <= 0) delete newCart[id]
            handleCart(newCart, 'Product removed from cart!')
            // toast.warn('Product removed from cart!')
        }
    }

    function clearCart() { handleCart({}, 'Successfully cleared the cart!') }

    function verifyPin(event) {
        const key = event.key
        const reg = /[0-9]/g
        if (key !== 'Backspace' && !reg.test(key)) event.preventDefault()
    }

    function buyNow(id, price, name, size, quantity = 1) {
        let newCart = {};
        if (size) id = id + size
        newCart[id] = { quantity, price, name, size }
        handleCart(newCart)
        router.push('/checkout')
    }

    return (
        <Context.Provider value={{ router, fetchApp, cart, subtotal, editCart, clearCart, verifyPin, sidebar, categories, buyNow, pincodes }}>
            {props.children}
        </Context.Provider>
    )
}

export default State;