import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/menu/Menu";
import { Hero } from "./components/hero/Hero";
import { Footer } from "./components/footer/Footer";
import { Cart } from "./pages/cart/Cart";
import { CardsProducts } from "./components/cardsProducts/CardsProducts";
import { Contact } from "./pages/contatos/Contact";
import { Details } from "./pages/details/Details";


export function RoutesApp(){
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={ 
                    <>
                        <Hero />
                        <CardsProducts />
                        <Contact />
                    </>
                } />
                <Route path="/carrinho" element={ <Cart /> } />
                <Route path="/produtos" element={ <CardsProducts /> } />
                <Route path="/detalhes/:id" element={ <Details /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}