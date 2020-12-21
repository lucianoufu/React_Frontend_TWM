import React from 'react'

export default props => {
    return(
        <div>
            <label htmlFor="NomeInput">{props.texto}: </label>
                <input typeof="number" onChange = {props.set_valor} value = {props.inputText}/>
                <br/>
        </div>
    )
}