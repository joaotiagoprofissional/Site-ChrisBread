import './cart.css'
import { TbMoneybagHeart } from "react-icons/tb";
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom'


export function Cart(){

    const { cart, total, addItemCart, removeItemCart } = useContext(CartContext)


    return(
        <>
            {cart.length === 0 && (
                <div className='link'>
                    <p>Carrinho esta Vazio</p>
                    <Link to='/'>
                        Acessar Produtos
                    </Link>
                </div>
            )}

            
            <div className='container-cart'>
                {cart.map((item) => (
                    <section className="item-cart" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <strong>Preço: {item.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}</strong>
                        <div className='btn'>
                            <button onClick={() => removeItemCart(item)}>-</button>
                            <strong>{item.amount}</strong>
                            <button onClick={() => addItemCart(item)}>+</button>
                        </div>
                        <strong>SubTotal: {item.total.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}</strong>
                    </section>
                ))}
                <div className="total">
                    <TbMoneybagHeart className='money' />
                    {cart.length !==0 && <p>Total: {total}</p>} 
                </div>
            </div>
        </>
    )
}