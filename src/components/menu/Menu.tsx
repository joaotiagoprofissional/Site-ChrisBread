import logo from '../../assets/images/logo_white.png'
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"

import './menu.css'
import { useState } from 'react';


export function Menu(){
    const [ isOpen, setIsOpen ] = useState(false)

    function toggleMenu(){
        setIsOpen(!isOpen)
    }

    return(
        <nav className='container-menu'>
            <a href="/"><img src={logo} alt="Logo Empresa" /></a>

            <button className='menu-btn' onClick={toggleMenu} >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <ul className={isOpen ? "nav active" : "nav"} >
                <li><a href="#">Sobre Nós</a></li>
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Localização</a></li>
                <li><a href="#">Contatos</a></li>
            </ul>
            <div className="icons">
                    <a href="https://github.com/joaotiagoprofissional/Site-ChrisBread" target='_blank' rel='noopener noreferrer'><FaGithub /></a>
                    <a href="https://wa.me/5521972149736?text=ol%C3%A1%20vim%20pelo%20projeto%20Chris%20Bread" target='_blank' rel='noopener noreferrer'><FaWhatsapp/></a>
            </div>
        </nav>
    )
}