import { useState } from 'react'
import './contact.css'

export function Contact(){
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ erros, setErros] = useState({
        name: "",
        email: "",
        message: ""

    })

    function validate(){
        const newErros = {
            name: "",
            email: "",
            message: ""
        }

        if(!name.trim()){
            newErros.name = 'Nome é obrigatório'
        }

        if(!email.trim()){
            newErros.email = "Email é o obrigatório"
        }

        if(!message.trim()){
            newErros.message = "Mensagem é obrigatória"
        }

        setErros(newErros)
        return !newErros.name && !newErros.email && !newErros.message
    }

    function sendEmail(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        if(!validate()) return
    }

    return(
        <div className='container-contacts' id='contacts'>
            <h1>Entre em Contato</h1>
            <form className='form' action="" onSubmit={sendEmail}>

                <label htmlFor="">Nome</label>

                <input
                type="text"
                name="name"
                id="name"
                placeholder='Digite seu nome'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                value={name}
                />
                {erros.name && <span className="error">{erros.name}</span>}

                <label htmlFor="">E-mail</label>

                <input
                type="email"
                name="email"
                id="email"
                placeholder='Digite seu email'
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)}
                value={email}
                />
                {erros.email && <span className="error">{erros.email}</span>}

                <label htmlFor="">Mensagem</label>

                <textarea name="message"
                id="message"
                placeholder='Digite sua mensagem'
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=> setMessage(e.target.value)}
                value={message}
                ></textarea>
                {erros.message && <span className="error">{erros.message}</span>}

                <button>Enviar</button>
            </form>
        </div>
    )
}