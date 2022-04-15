import React, { useState } from "react";
import Context from "./Context";

const State = (props) => {
    const { cart, setCart, subtotal, calculate } = props

    function handleState(cart) {
        setCart(cart)
        calculate(cart)
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    function editCart(type, id, price, itemname, size, color, quantity = 1) {
        let newCart = cart
        if (type === 'add') {
            if (id in newCart) newCart[id].quantity += quantity
            else newCart[id] = { id, quantity, price, itemname, size, color }
        } else if (type === 'remove') {
            newCart[id].quantity -= quantity
            if (newCart[id].quantity <= 0) delete newCart[id]
        }
        handleState(newCart)
    }

    function clearCart() { handleState({}) }

    return (
        <Context.Provider value={{ cart, subtotal, editCart, clearCart }}>
            {props.children}
        </Context.Provider>
    )
}

export default State;