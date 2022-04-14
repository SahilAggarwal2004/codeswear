import React, { useState } from "react";
import Context from "./Context";

const State = (props) => {
    const [cart, setCart] = useState({})
    const [subtotal, setSubtotal] = useState(0)

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart))
        let sum = 0;
        Object.keys(cart).forEach(id => {
            sum += cart[id].price * cart[id].quantity
        })
        setSubtotal(sum)
    }

    return (
        <Context.Provider value={{ cart, setCart, subtotal, setSubtotal, saveCart }}>
            {props.children}
        </Context.Provider>
    )
}

export default State;