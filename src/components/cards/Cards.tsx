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
    description: string
}

const cards: Card[] = [
    {
        id: 1,
        image: pao1,
        price: 8,
        weight: "120g",
        title: "Pão \n Multigrão",
        description: "O pão multigrãos é feito com uma base de farinha de trigo (branca ou integral), água, fermento biológico e sal, combinada com outros grãos e sementes como Aveia, Linhaça, Chia e Gergelim; também pode levar um pouco de açúcar ou mel e óleo ou azeite para melhorar o sabor e a textura, resultando em um pão mais nutritivo e rico em fibras.",
    },
    {
        id: 2,
        image: pao2,
        price: 5,
        weight: "180g",
        title: "Pão Espelta \n Integral",
        description: "O pão de Espelta integral é feito basicamente com farinha integral de espelta, água, fermento biológico e sal; opcionalmente pode levar mel ou açúcar para ajudar na fermentação, um pouco de azeite ou óleo para dar maciez e sementes como Linhaça ou Chia para enriquecer o valor nutricional.",
    },
    {
        id: 3,
        image: pao3,
        price: 15,
        weight: "80g",
        title: "Pão de \n Queijo",
        description: "O pão de queijo é feito basicamente com polvilho (doce ou azedo), queijo (geralmente meia cura ou parmesão), ovos, leite, óleo ou manteiga e sal; às vezes leva pequenas variações na proporção dos ingredientes para ajustar a textura, deixando mais macio por dentro e levemente crocante por fora.",
    },
    {
        id: 4,
        image: pao4,
        price: 6.5,
        weight: "90g",
        title: "Pão Doce de \n Canela",
        description: "O pão doce de canela é feito com farinha de trigo, leite, ovos, açúcar, manteiga ou óleo, fermento biológico e sal, tendo como destaque a Canela, que pode ir tanto na massa quanto em um recheio com açúcar e manteiga, às vezes finalizado com uma cobertura doce para realçar ainda mais o sabor.",
    },
    {
        id: 5,
        image: pao5,
        price: 7,
        weight: "320g",
        title: "Sonho \n Recheio Diversos",
        description: "O sonho de padaria é feito com farinha de trigo, leite, ovos, açúcar, manteiga ou óleo, fermento biológico e sal, sendo depois frito e recheado geralmente com creme confeiteiro ou doce de leite, e finalizado com açúcar por fora para dar o toque clássico.",
    },
    {
        id: 6,
        image: pao6,
        price: 12,
        weight: "380g",
        title: "Croassaint \n Recheado",
        description: "O croissant é feito com farinha de trigo, água ou leite, fermento biológico, açúcar, sal e bastante manteiga, que é incorporada em camadas durante o preparo para criar a textura folhada e leve característica desse pão de origem francesa.",
    },
    {
        id: 7,
        image: pao7,
        price: 18,
        weight: "130g",
        title: "Focaccia \n Sabores",
        description: "A focaccia é feita com farinha de trigo, água, fermento biológico, sal e bastante azeite de oliva, resultando em uma massa macia por dentro e levemente crocante por fora, geralmente finalizada com Alecrim, sal grosso e às vezes Azeitona ou tomate para dar mais sabor.",
    },
    {
        id: 8,
        image: pao8,
        price: 3,
        weight: "12g",
        title: "Pão \n Francês",
        description: "O pão francês é feito basicamente com farinha de trigo, água, fermento biológico e sal, podendo levar um pequeno ajuste com açúcar ou melhoradores de farinha para ajudar na fermentação e garantir a casca crocante e o miolo macio característicos.",
    },
]

export default cards
    