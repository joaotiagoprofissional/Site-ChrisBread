import cards from '../../components/cards/Cards'
import { CardsProducts } from '../../components/cardsProducts/CardsProducts'

import './products.css'

export function Products(){
    return(
        <div className="container-products container-section-products">
            {cards.map((card)=> (
                <CardsProducts
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    price={card.price}
                    weigth={card.weight}               
                />
                
            ))}
        </div>
    )
}