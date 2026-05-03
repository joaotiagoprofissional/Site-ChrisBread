import './hero.css'

export function Hero(){

    function scrollToProducts(){
        const el = document.getElementById("products")
        if(el){
            el.scrollIntoView({ behavior: "smooth" })
        }
    }

    return(
        <div className="container-hero" id="hero">
            <div className="text">
                <h1>TRADICIONAL<br />PADARIA ARTESANAL</h1>

                <p>
                    Nossa padaria artesanal une tradição e cuidado em cada detalhe.
                    Trabalhamos com receitas clássicas, fermentação natural e ingredientes
                    selecionados, garantindo pães com sabor autêntico, casca crocante e miolo macio.
                    Aqui, cada fornada é feita com tempo, técnica e paixão para que você sinta, a
                    cada mordida, o verdadeiro gosto de padaria de verdade.
                </p>

                <button onClick={scrollToProducts}>
                    Produtos
                </button>
            </div>
        </div>
    )
}