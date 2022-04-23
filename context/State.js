import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import Context from "./Context";

const State = (props) => {
    const router = useRouter();
    const { cart, setCart, subtotal, setSubtotal, calculate, sidebar } = props
    const categories = ['tshirts', 'hoodies', 'mugs', 'stickers']
    const pincodes = [110045]

    function handleCart(cart) {
        const sum = calculate(cart)
        if (!sum && sum !== 0) return
        setCart(cart)
        setSubtotal(sum)
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    function editCart(type, id, price, name, size, quantity = 1) {
        let newCart = cart
        if (size) id = id + size
        if (typeof quantity !== 'number') { quantity = 0 }
        if (type === 'add') {
            if (id in newCart) newCart[id].quantity += quantity
            else newCart[id] = { quantity, price, name, size }
            toast.success('Product added to cart!')
        } else if (type === 'remove') {
            newCart[id].quantity -= quantity
            if (newCart[id].quantity <= 0) delete newCart[id]
            toast.success('Product removed from cart!')
        }
        handleCart(newCart)
    }

    function clearCart() {
        toast.success('Successfully cleared the cart!')
        handleCart({})
    }

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
        <Context.Provider value={{ cart, subtotal, editCart, clearCart, verifyPin, sidebar, categories, buyNow, pincodes }}>
            {props.children}
        </Context.Provider>
    )
}

export default State;