import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { FaInfoCircle } from "react-icons/fa"
import cards, { type Card } from "../cards/Cards"
import { Link } from "react-router-dom"


import './cardsProducts.css'
import toast from "react-hot-toast"

export function CardsProducts(){
    const { addItemCart } = useContext(CartContext)

    function handleAddCart(item: Card){
        toast.success('Item adicionado ao carrinho')
        addItemCart(item)
    }

    return(
        <section id="products">
            <div className="container-products" >
                {cards.map((item)=> (
                    <div className="container-card-products" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                        <span className="icon">
                           <Link to={`/detalhes/${item.id}`}><FaInfoCircle/></Link>
                        </span>
                        <div className="value-weight">
                            <p>{item.price.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}</p>
                            <p>{item.weight}</p>
                        </div>
                        <button onClick={() => handleAddCart(item)}>Add Carrinho</button>
                    </div>
                ))}
                
            </div>
        </section>
    )
}

