import { useState } from "react"
import { FaInfoCircle } from "react-icons/fa"

import './cardsProducts.css'


type Props = {
    image: string
    title: string
    price: string
    weigth: string
}

export function CardsProducts({ image, title, price, weigth }: Props){
    const [ amount, setAmount ] = useState(1)

    function add(){
        setAmount ((prev)=> prev +1)
    }

    function remove(){
        setAmount((prev)=> (prev > 1 ? prev -1 : 1))
    }

    return(
        <section>
            <div>
                <div className="container-card-products">
                    <img src={image} alt={title} />
                    <span className="icon">
                        <FaInfoCircle />
                    </span>
                    <div className="value-weight">
                        <p>{price}</p>
                        <p>{weigth}</p>
                    </div>
                    <div className="title-btn">
                        <h4 style={{ whiteSpace: "pre-line" }}>{title}</h4>
                        <div className="btn-amount">
                            <button onClick={remove}>-</button>
                            <p>{amount}</p>
                            <button onClick={add}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

