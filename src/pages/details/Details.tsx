import { useParams, useNavigate} from 'react-router-dom'
import cards from '../../components/cards/Cards'
import './details.css'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'


export function Details(){
    const { id } = useParams()
    const navigate = useNavigate()
    const { addItemCart } = useContext(CartContext)

    const product = cards.find(item => item.id === Number(id))

    if(!product){
        return <h1 className='not-found'>Produto não encontrado</h1>
    }

    return(
        <section className="details-container">
            <div className="card-container">
                <img src={product.image} alt={product.title} />
                <div className="title-description-btn">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <button onClick={() => {
                        addItemCart(product)
                        navigate('/carrinho')
                    }}>
                        Add Carrinho
                    </button>
                </div>
            </div>
        </section>
    )
}