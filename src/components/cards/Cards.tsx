import pao1 from '../../assets/images/pao_1.png'
import pao2 from '../../assets/images/pao_2.png'
import pao3 from '../../assets/images/pao_3.png'
import pao4 from '../../assets/images/pao_4.png'
import pao5 from '../../assets/images/pao_5.png'
import pao6 from '../../assets/images/pao_6.png'
import pao7 from '../../assets/images/pao_7.png'
import pao8 from '../../assets/images/pao_8.png'


export type Card = {
    id: number
    image: string
    price: number
    weight: string
    title: string
}

const cards: Card[] = [
    {
        id: 1,
        image: pao1,
        price: 5,
        weight: "420g",
        title: "Pão \n Multigrão",
    },
    {
        id: 2,
        image: pao2,
        price: 5,
        weight: "420g",
        title: "Pão Espelta \n Integral",
    },{
        id: 3,
        image: pao3,
        price: 5,
        weight: "420g",
        title: "Pão de \n Queijo",
    },
    {
        id: 4,
        image: pao4,
        price: 5,
        weight: "420g",
        title: "Pão Doce de \n Canela",
    },
    {
        id: 5,
        image: pao5,
        price: 5,
        weight: "420g",
        title: "Sonho \n Recheio Diversos",
    },
    {
        id: 6,
        image: pao6,
        price: 5,
        weight: "420g",
        title: "Croassaint \n Recheado",
    },
    {
        id: 7,
        image: pao7,
        price: 5,
        weight: "420g",
        title: "Focaccia \n Sabores",
    },
    {
        id: 8,
        image: pao8,
        price: 5,
        weight: "420g",
        title: "Pão \n Francês",
    },
]

export default cards
    