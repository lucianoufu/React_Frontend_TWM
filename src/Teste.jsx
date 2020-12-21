import React from 'react'

export default props => {
    return(
        <div>
            <p>Classe:</p>
            <input id = "passoInput" typeof = "text" value = {props.classe} onChange={e => props.setClasse(e.target.value)} />
            <p>A classe é {props.classe}</p>
        </div>
    )
}