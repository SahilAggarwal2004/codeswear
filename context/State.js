import { toast } from "react-toastify";
import Context from "./Context";
import React, { useState, useEffect, useRef } from 'react'

const State = props => {
    const { router } = props;
    const sidebar = useRef();
    let host = useRef("https://codeswearweb.herokuapp.com/")
    const [cart, setCart] = useState({})
    const [subtotal, setSubtotal] = useState(0)
    const [logged, setLogged] = useState(false)
    const [progress, setProgress] = useState(0)
    const [dropdown, setDropdown] = useState(false)
    const categories = ['tshirts', 'hoodies', 'mugs', 'stickers']
    const pincodes = [110045]

    function logout() {
        localStorage.removeItem('authtoken')
        setLogged(false)
        router.push('/login')
    }

    async function fetchApp(api, method = "GET", body = null, authtoken = localStorage.getItem('authtoken')) {
        try {
            body = body && JSON.stringify(body)
            setProgress(100 / 3)
            const response = await fetch(host.current + api, { method, body, headers: { 'auth-token': authtoken, 'Content-Type': 'application/json' } })
            const json = await response.json();
            setProgress(100)
            if (!json.success) {
                if (json.error.includes('authenticate')) logout()
                toast.error(json.error)
            } else toast.success(json.msg)
            return json
        } catch {
            setProgress(100)
            toast.error("Server Down! Please try again later...");
            return { success: false }
        }
    }

    function calculate(cart) {
        let sum = 0;
        Object.keys(cart).forEach(id => sum += cart[id].price * cart[id].quantity)
        if (!sum) sidebar.current?.classList.add('translate-x-full')
        return sum
    }

    async function handleCart(cart, msg = null) {
        const data = await fetchApp('user/cart', 'PUT', { cart })
        if (!data.success) return
        const sum = calculate(data.cart)
        if (!sum && sum !== 0) return
        toast.success(msg)
        setCart(data.cart)
        setSubtotal(sum)
    }

    function editCart(type, id, name, size, quantity = 1) {
        let newCart = JSON.parse(JSON.stringify(cart))
        if (size) id = id + size
        if (typeof quantity !== 'number') { quantity = 0 }
        if (type == 'add') {
            if (id in newCart) newCart[id].quantity += quantity
            else newCart[id] = { quantity, name, size }
            handleCart(newCart, 'Product added to cart!')
        } else if (type == 'remove') {
            newCart[id].quantity -= quantity
            if (newCart[id].quantity <= 0) delete newCart[id]
            handleCart(newCart, 'Product removed from cart!')
        }
    }

    function clearCart() { handleCart({}, 'Successfully cleared the cart!') }

    function verifyPin(event) {
        const key = event.key
        const reg = /[0-9]/g
        if (key !== 'Backspace' && !reg.test(key)) event.preventDefault()
    }

    function buyNow(id, name, size, quantity = 1) {
        let newCart = {};
        if (size) id = id + size
        newCart[id] = { quantity, name, size }
        handleCart(newCart)
        router.push('/checkout')
    }

    useEffect(() => {
        // next/router provides us events to do changes according to different states of router. We are using this in useEffect as router is not defined for server
        router.events.on('routeChangeStart', () => setProgress(100 / 3))
        router.events.on('routeChangeComplete', () => setProgress(100))

        setLogged(Boolean(localStorage.getItem('authtoken')))
        if (location.hostname == 'localhost') host.current = "http://localhost:5000/"
        localStorage.getItem('authtoken') && fetchApp('user/cart').then(data => {
            if (!data.success) return
            setCart(data.cart)
            const sum = calculate(data.cart)
            sum ? setSubtotal(sum) : setSubtotal(0)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => { setDropdown(false) }, [router.pathname])

    return (
        <Context.Provider value={{ router, fetchApp, cart, subtotal, editCart, clearCart, verifyPin, sidebar, categories, buyNow, pincodes, logged, setLogged, progress, setProgress, dropdown, setDropdown, logout }}>
            {props.children}
        </Context.Provider>
    )
}

export default State;