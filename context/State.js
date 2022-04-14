import React, { useState } from "react";
import Context from "./Context";

const State = (props) => {
    const [cart, setCart] = useState({})
    const [subtotal, setSubtotal] = useState(0)

    function saveCart(cart) { localStorage.setItem('cart', JSON.stringify(cart)) }

    function calculate(cart) {
        let sum = 0;
        Object.keys(cart).forEach(id => {
            sum += cart[id].price * cart[id].quantity
        })
        setSubtotal(sum)
    }

    function handleState(cart) {
        setCart(cart)
        saveCart(cart)
        calculate(cart)
    }

    return (
        <Context.Provider value={{ cart, setCart, subtotal, calculate, handleState }}>
            {props.children}
        </Context.Provider>
    )
}

export default State;