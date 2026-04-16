import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { type Card } from "../components/cards/Cards"

type CartContextData = {
    cart: CartProps[]
    cartAmount: number
    addItemCart: (newItem: Card) => void
    removeItemCart: (product: CartProps) => void
    total: string
}

type CartProps = {
    id: number
    image: string
    price: number
    weight: string
    title: string
    amount: number
    total: number
}

type CartProviderProps = {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({children}: CartProviderProps){
    const [ cart, setCart ] = useState<CartProps[]>([])
    const [ total, setTotal ] = useState('')

    function addItemCart(newItem: Card){
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if(indexItem != -1){
            let cartList = cart

            cartList[indexItem].amount = cartList[indexItem].amount +1
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price

            setCart(cartList)
            totalResultCart(cartList)
            return
        }
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data])
        totalResultCart([...cart, data])
    }

    function removeItemCart(product: CartProps){
        const indexItem = cart.findIndex(item => item.id === product.id)

        if(cart[indexItem]?.amount > 1){
            let cartList = cart

            cartList[indexItem].amount = cartList[indexItem].amount -1
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price

            setCart(cartList)
            totalResultCart(cartList)
            return
        }

        const removeItem = cart.filter(item => item.id !== product.id)
        setCart(removeItem)
        totalResultCart(removeItem)
    }

    function totalResultCart(itens: CartProps){
        let myCart = itens
        let result = myCart.reduce((acc, obj) => {return acc + obj.total}, 0)
        const resulFormated = result.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        setTotal(resulFormated)
    }



    return(
        <CartContext.Provider
            value={{
                cart,
                cartAmount: cart.length,
                addItemCart,
                removeItemCart,
                total
            }}>
            {children}
        </CartContext.Provider>
    )
}

