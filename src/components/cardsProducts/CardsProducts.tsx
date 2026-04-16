import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { FaInfoCircle } from "react-icons/fa"
import cards, { type Card } from "../cards/Cards"


import './cardsProducts.css'





export function CardsProducts(){

    const { addItemCart } = useContext(CartContext)

    function handleAddCart(item: Card){
        addItemCart(item)
    }

    return(
        <section>
            <div className="container-products">
                {cards.map((item)=> (
                    <div className="container-card-products" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                        <span className="icon">
                            <FaInfoCircle />
                        </span>
                        <div className="value-weight">
                            <p>{item.price}</p>
                            <p>{item.weight}</p>
                        </div>
                        <button onClick={() => handleAddCart(item)} >Add Carrinho</button>
                    </div>
                ))}
                
            </div>
        </section>
    )
}

