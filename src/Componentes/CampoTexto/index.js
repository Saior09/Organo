import './CampoTexto.css'
import { useState } from 'react'

const  CampoTexto = (props) => {

        const placeholderdiferente = `${props.placeholder}...`

        const aoDigitado = (evento) => {
            props.aoAlterado(evento.target.value)
        }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value = {props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder= {placeholderdiferente}/>
        </div>
    )
}

export default CampoTexto