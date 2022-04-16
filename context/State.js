import React from "react";
import Context from "./Context";

const State = (props) => {
    const { cart, setCart, subtotal, setSubtotal, calculate, sidebar } = props

    function handleState(cart) {
        const sum = calculate(cart)
        if (!sum && sum !== 0) return
        setCart(cart)
        setSubtotal(sum)
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    function editCart(type, id, price, itemname, size, quantity = 1) {
        let newCart = cart
        if (typeof quantity !== 'number') { quantity = 0 }
        if (type === 'add') {
            if (id in newCart) newCart[id].quantity += quantity
            else newCart[id] = { id, quantity, price, itemname, size }
        } else if (type === 'remove') {
            newCart[id].quantity -= quantity
            if (newCart[id].quantity <= 0) delete newCart[id]
        }
        handleState(newCart)
    }

    function clearCart() { handleState({}) }

    function verifyPin(event) {
        const key = event.key
        const reg = /[0-9]/g
        if (key !== 'Backspace' && !reg.test(key)) event.preventDefault()
    }

    return (
        <Context.Provider value={{ cart, subtotal, editCart, clearCart, verifyPin, sidebar }}>
            {props.children}
        </Context.Provider>
    )
}

export default State;