import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


import './footer.css'

export function Footer(){
    return(
        <>
            <section className="container-section">
                <div className="phone-address">
                    <a className="zap" href="https://wa.me/5521972149736?text=ol%C3%A1%20vim%20pelo%20projeto%20Chris%20Bread" target='_blank' rel='noopener noreferrer'>
                        <span className="icon-zap"><FaWhatsapp /></span>
                        <p>(21) 97214-9736</p>
                    </a>
                        <a className="git-hub" href="https://github.com/joaotiagoprofissional/Site-ChrisBread" target="_blank">
                            <span className="icon-git"><FaGithub /></span>
                            <p>Repositório</p>
                        </a>
                    <h4>Endereço:</h4>
                    <p className="address" >Rua da Padaria, nº X, Bairro Y - Rio de Janeiro-RJ</p>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d117611.69973244688!2d-43.353259631236355!3d-22.89988156960643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spadaria%20colombo!5e0!3m2!1spt-BR!2sbr!4v1775330261507!5m2!1spt-BR!2sbr" 
                        width="400" height="250" loading="lazy"
                    >
                    </iframe>
                </div>
            </section>
            <div className="rights-reserved">
                <p>Todos os direitos reservados © <span className="text-italic">2026 - João Tiago (Chris Bread)</span></p>
            </div>
        </>
    )
}